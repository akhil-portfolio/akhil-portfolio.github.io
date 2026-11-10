'use strict';

function lanyardPortrait() {
  return `<figure class="lanyard-scene" data-lanyard data-pass-side="front" data-pass-state="resting" aria-label="Interactive personal lanyard pass">
    <div class="lanyard-topline"><span>THE PERSON / THE PASS</span><span class="lanyard-indicator"><i></i> A LITTLE PLAY</span></div>
    <div class="lanyard-stage">
      <div class="lanyard-halo" aria-hidden="true"></div>
      <svg class="lanyard-cord" aria-hidden="true" width="100%" height="100%">
        <defs><linearGradient id="strap-colour" x1="0" x2="1"><stop stop-color="#749d28"/><stop offset=".3" stop-color="#d9ff87"/><stop offset=".58" stop-color="#c4ff45"/><stop offset="1" stop-color="#85b52a"/></linearGradient></defs>
        <path class="cord-shadow" data-cord="shadow"/><path class="cord-band" data-cord="band"/><path class="cord-stitch" data-cord="stitch"/>
      </svg>
      <span class="lanyard-anchor" aria-hidden="true"></span>
      <div class="lanyard-carrier">
        <span class="lanyard-clip" aria-hidden="true"><i></i></span>
        <button class="creative-pass" type="button" aria-label="Flip Akhil’s creative pass" aria-pressed="false" aria-describedby="lanyard-help" aria-roledescription="draggable pass">
          <span class="pass-turn">
            <span class="pass-face pass-front" aria-hidden="false">
              <span class="pass-heading"><span class="pass-wordmark">akhil<span>.</span></span><span>CREATIVE PASS<br><b>01 / PERSONAL</b></span></span>
              <span class="pass-portrait"><img src="${portraitMedia.about.src}" srcset="${portraitMedia.about.srcset}" sizes="(max-width: 700px) 200px, 260px" alt="${portraitMedia.about.alt}" width="${portraitMedia.about.width}" height="${portraitMedia.about.height}" draggable="false" decoding="async" fetchpriority="high"></span>
              <span class="pass-name">Akhil Subhash<span>CREATIVE & UI/UX DESIGNER</span></span>
              <span class="pass-foot"><span class="pass-bars" aria-hidden="true"></span><span>UAE ↔ KERALA</span></span>
            </span>
            <span class="pass-face pass-back" aria-hidden="true">
              <span class="pass-back-top"><span>THE OTHER SIDE</span><span class="pass-spark" aria-hidden="true">✳</span></span>
              <span class="pass-back-title">A curious<br>mind.<br>A considered<br>approach.</span>
              <span class="pass-back-copy">Brand communication.<br>Digital experiences.<br>Visual storytelling.</span>
              <span class="pass-back-bottom"><span>DESIGNER / PAINTER</span><strong>mr.moonstruck</strong><span>BASED IN THE UAE. FROM KERALA.</span></span>
            </span>
          </span>
        </button>
      </div>
      <span class="lanyard-ground" aria-hidden="true"></span>
    </div>
    <figcaption class="lanyard-caption"><p id="lanyard-help">Grab, drag & let go.<span>Tap to flip · ← → to swing · Enter to flip</span></p><div class="lanyard-controls"><button type="button" data-pass-flip>Flip pass <span aria-hidden="true">↻</span></button><button type="button" data-pass-reset aria-label="Reset lanyard pass" title="Reset pass">↺</button><button type="button" data-pass-motion aria-label="Pause lanyard motion" aria-pressed="false" title="Pause motion">Ⅱ</button></div></figcaption>
    <p class="lanyard-status" role="status" aria-live="polite"></p>
  </figure>`;
}

// A damped pendulum and spring give the strap weight without a WebGL dependency.
function stepLanyardMotion(s,dt) {
  s.angularVelocity+=(-1100/Math.max(55,s.length)*Math.sin(s.angle))*dt;
  s.angularVelocity*=Math.exp(-1.5*dt);
  s.angle+=s.angularVelocity*dt;
  if(Math.abs(s.angle)>s.limit){s.angle=Math.sign(s.angle)*s.limit;s.angularVelocity*=-.35;}
  s.lengthVelocity+=((s.restLength-s.length)*45-s.lengthVelocity*12)*dt;
  s.length+=s.lengthVelocity*dt;
  s.twistVelocity+=(-s.twist*44-s.twistVelocity*9)*dt;
  s.twist+=s.twistVelocity*dt;
}

function createLanyardPass(root) {
  if(!root)return null;
  const stage=root.querySelector('.lanyard-stage'),carrier=root.querySelector('.lanyard-carrier'),pass=root.querySelector('.creative-pass');
  const front=root.querySelector('.pass-front'),back=root.querySelector('.pass-back'),status=root.querySelector('.lanyard-status');
  const motionButton=root.querySelector('[data-pass-motion]'),flipButton=root.querySelector('[data-pass-flip]'),ground=root.querySelector('.lanyard-ground');
  const paths=[...root.querySelectorAll('[data-cord]')];
  const abort=new AbortController(),opts={signal:abort.signal},reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  const s={angle:0,angularVelocity:0,length:120,lengthVelocity:0,restLength:120,limit:.6,twist:0,twistVelocity:0};
  let width=0,height=0,cardWidth=0,anchorX=0,anchorY=15,minLength=55,maxLength=150;
  let frame=0,lastTime=0,disposed=false,visible=false,flipped=false,paused=reduce.matches,drag=null,suppressClick=false;

  function stop(){cancelAnimationFrame(frame);frame=0;lastTime=0;}
  function draw(){
    const x=anchorX+Math.sin(s.angle)*s.length,y=anchorY+Math.cos(s.angle)*s.length;
    carrier.style.transform=`translate3d(${x-cardWidth/2}px,${y+18}px,0) rotateZ(${-s.angle*180/Math.PI*.7}deg) rotateY(${s.twist}deg)`;
    const bend=clamp(s.angularVelocity*9,-22,22),middleY=anchorY+(y-anchorY)*.5;
    const d=`M ${anchorX-15} -12 C ${anchorX-18+bend} ${middleY},${x-14-bend} ${y-37},${x-4} ${y} M ${anchorX+15} -12 C ${anchorX+18+bend} ${middleY},${x+14-bend} ${y-37},${x+4} ${y}`;
    paths.forEach(path=>path.setAttribute('d',d));
    ground.style.transform=`translateX(${(x-anchorX)*.4}px) scaleX(${1-Math.abs(s.angle)*.4})`;
    ground.style.opacity=String(.35-Math.abs(s.angle)*.18);
  }
  function setState(value){root.dataset.passState=value;}
  function tick(time){
    if(disposed||paused||!visible||drag){stop();return;}
    const dt=Math.min(1/30,lastTime?(time-lastTime)/1000:1/60);lastTime=time;
    stepLanyardMotion(s,dt/2);stepLanyardMotion(s,dt/2);draw();
    if(Math.abs(s.angle)<.0008&&Math.abs(s.angularVelocity)<.003&&Math.abs(s.length-s.restLength)<.08&&Math.abs(s.lengthVelocity)<.1&&Math.abs(s.twist)<.04&&Math.abs(s.twistVelocity)<.1){
      s.angle=s.angularVelocity=s.lengthVelocity=s.twist=s.twistVelocity=0;s.length=s.restLength;draw();setState('resting');stop();return;
    }
    setState('swinging');frame=requestAnimationFrame(tick);
  }
  function wake(){if(!frame&&!paused&&visible&&!drag&&!disposed){lastTime=0;frame=requestAnimationFrame(tick);}}
  function rest(){stop();s.angle=s.angularVelocity=s.lengthVelocity=s.twist=s.twistVelocity=0;s.length=s.restLength;draw();setState(paused?'paused':'resting');}
  function syncMotion(){motionButton.setAttribute('aria-pressed',String(paused));motionButton.setAttribute('aria-label',paused?'Resume lanyard motion':'Pause lanyard motion');motionButton.title=paused?'Resume motion':'Pause motion';motionButton.textContent=paused?'▷':'Ⅱ';root.classList.toggle('lanyard-paused',paused);}
  function resize(){
    const rect=stage.getBoundingClientRect();if(!rect.width||!rect.height)return;
    if(Math.abs(rect.width-width)<.5&&Math.abs(rect.height-height)<.5)return;
    width=rect.width;height=rect.height;cardWidth=clamp(width*.51,158,246);anchorX=width/2;
    carrier.style.width=`${cardWidth}px`;carrier.style.setProperty('--pass-width',`${cardWidth}px`);
    maxLength=Math.max(68,height-cardWidth*1.66-62-anchorY);minLength=Math.min(60,maxLength*.7);
    s.restLength=maxLength*.91;s.length=s.restLength;
    // Include the rotated card's full height when bounding a swing in open space.
    let low=0,high=.76;
    for(let i=0;i<18;i++){
      const angle=(low+high)/2,rotation=angle*.7;
      const edge=Math.sin(angle)*maxLength+cardWidth*.5*Math.cos(rotation)+(cardWidth*1.66+36)*Math.sin(rotation);
      if(edge<width*.5-8)low=angle;else high=angle;
    }
    s.limit=Math.max(.04,low);rest();
  }
  function flip(){flipped=!flipped;root.dataset.passSide=flipped?'back':'front';pass.setAttribute('aria-pressed',String(flipped));front.setAttribute('aria-hidden',String(flipped));back.setAttribute('aria-hidden',String(!flipped));flipButton.innerHTML=`${flipped?'Front':'Flip pass'} <span aria-hidden="true">↻</span>`;status.textContent=flipped?'Back of pass. Designer and painter, based in the UAE, from Kerala.':'Front of pass. Akhil Subhash, Creative and UI/UX Designer.';if(!paused){s.twistVelocity+=flipped?28:-28;wake();}}
  function release(cancelled=false){
    if(!drag)return;const old=drag;drag=null;pass.classList.remove('is-grabbing');
    try{pass.releasePointerCapture(old.id);}catch{}
    suppressClick=old.moved;
    if(paused||cancelled){rest();return;}
    const stale=performance.now()-old.time>100;s.angularVelocity=stale?0:clamp(old.velocity,-4,4);s.lengthVelocity=stale?0:clamp(old.lengthVelocity,-220,220);s.twistVelocity=clamp(s.angularVelocity*16,-75,75);wake();
  }
  pass.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;resize();const rect=stage.getBoundingClientRect();
    const px=anchorX+Math.sin(s.angle)*s.length,py=anchorY+Math.cos(s.angle)*s.length;
    stop();suppressClick=false;drag={id:event.pointerId,startX:event.clientX,startY:event.clientY,offsetX:event.clientX-rect.left-px,offsetY:event.clientY-rect.top-py,time:performance.now(),angle:s.angle,length:s.length,velocity:0,lengthVelocity:0,moved:false};
    pass.setPointerCapture(event.pointerId);pass.classList.add('is-grabbing');setState('dragging');
  },opts);
  pass.addEventListener('pointermove',event=>{
    if(!drag||event.pointerId!==drag.id)return;const rect=stage.getBoundingClientRect(),now=performance.now(),dt=Math.max(.008,(now-drag.time)/1000);
    const dx=event.clientX-rect.left-drag.offsetX-anchorX,dy=Math.max(25,event.clientY-rect.top-drag.offsetY-anchorY);
    s.angle=clamp(Math.atan2(dx,dy),-s.limit,s.limit);s.length=clamp(Math.hypot(dx,dy),minLength,maxLength);
    const velocity=(s.angle-drag.angle)/dt;drag.velocity=drag.velocity*.3+velocity*.7;drag.lengthVelocity=(s.length-drag.length)/dt;
    drag.angle=s.angle;drag.length=s.length;drag.time=now;drag.moved=drag.moved||Math.hypot(event.clientX-drag.startX,event.clientY-drag.startY)>6;s.twist=clamp(velocity*5,-14,14);draw();
  },opts);
  pass.addEventListener('pointerup',()=>release(),opts);
  pass.addEventListener('pointercancel',()=>release(true),opts);
  pass.addEventListener('lostpointercapture',()=>{if(drag)release(true);},opts);
  pass.addEventListener('click',event=>{if(suppressClick&&event.detail!==0){event.preventDefault();suppressClick=false;return;}suppressClick=false;flip();},opts);
  pass.addEventListener('keydown',event=>{
    resize();
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();s.angle=clamp(s.angle+(event.key==='ArrowLeft'?-.12:.12),-s.limit,s.limit);s.angularVelocity=event.key==='ArrowLeft'?-1.2:1.2;draw();wake();}
    if(event.key==='Escape'){event.preventDefault();rest();status.textContent='Pass reset.';}
  },opts);
  flipButton.addEventListener('click',flip,opts);
  root.querySelector('[data-pass-reset]').addEventListener('click',()=>{if(drag)release(true);rest();status.textContent='Pass reset.';},opts);
  motionButton.addEventListener('click',()=>{paused=!paused;syncMotion();if(paused)rest();else{s.angle=-.18;wake();}status.textContent=paused?'Lanyard motion paused.':'Lanyard motion resumed.';},opts);
  reduce.addEventListener('change',event=>{paused=event.matches;syncMotion();if(paused)rest();else wake();},opts);
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
  window.addEventListener('resize',resize,opts);
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)wake();else stop();},{threshold:.1});observer.observe(root);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else wake();},opts);
  resize();syncMotion();if(!paused){s.angle=-.2;s.angularVelocity=.2;draw();wake();}
  return{destroy(){disposed=true;stop();if(drag)release(true);abort.abort();resizeObserver.disconnect();observer.disconnect();}};
}
