'use strict';

function stickerPlayground() {
  return `<section class="sticker-lab" aria-labelledby="sticker-lab-title">
    <div class="lab-top"><h2 id="sticker-lab-title">A LITTLE CREATIVE CHAOS</h2><span class="lab-dot" aria-hidden="true"></span></div>
    <div class="gravity-world" role="group" aria-label="Interactive sticker playground" aria-describedby="sticker-help">
      <div class="lab-watermark" aria-hidden="true">GOOD<br>IDEAS<br>PLAY.</div>
      <button type="button" class="sticker sticker-name" aria-label="Move Akhil name sticker"><span>HELLO, MY NAME IS</span><strong>akhil.</strong><small>A CURIOUS CREATIVE</small></button>
      <button type="button" class="sticker sticker-ux" aria-label="Move UI and UX sticker"><span aria-hidden="true">↗</span><strong>UI / UX</strong></button>
      <button type="button" class="sticker sticker-smile" aria-label="Move smile sticker"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="44" fill="#f4f5ef" stroke="#11140d" stroke-width="3"/><path d="M29 53c3 27 39 29 44 0M34 29v12M65 29v12" fill="none" stroke="#11140d" stroke-width="5" stroke-linecap="round"/></svg></button>
      <button type="button" class="sticker sticker-spark" aria-label="Move creative spark sticker"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="m50 4 9 26 24-13-13 24 26 9-26 9 13 24-24-13-9 26-9-26-24 13 13-24L4 50l26-9-13-24 24 13Z" fill="#c4ff45" stroke="#f4f5ef" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="50" r="7" fill="#11140d"/></svg></button>
      <button type="button" class="sticker sticker-art" aria-label="Move painting sticker"><img src="assets/painting-01.webp" alt="" draggable="false"><span>OFF THE BRIEF</span></button>
      <button type="button" class="sticker sticker-vector" aria-label="Move vector curve sticker"><svg viewBox="0 0 140 70" aria-hidden="true"><path d="M13 54C40-7 98 83 126 17" fill="none" stroke="#11140d" stroke-width="5"/><path d="m13 54 20-41M126 17l-19 42" fill="none" stroke="#11140d" stroke-width="1.5"/><rect x="7" y="48" width="12" height="12" fill="#11140d"/><rect x="120" y="11" width="12" height="12" fill="#11140d"/><circle cx="33" cy="13" r="4" fill="#11140d"/><circle cx="107" cy="59" r="4" fill="#11140d"/></svg><span>GOOD CURVES ONLY</span></button>
      <button type="button" class="sticker sticker-moon" aria-label="Move Mr Moonstruck sticker"><span aria-hidden="true">☾</span><strong>mr.moonstruck</strong></button>
      <button type="button" class="sticker sticker-matter" aria-label="Move Make it matter sticker"><span>MAKE IT</span><strong>MATTER.</strong><small>DESIGN WITH INTENT ↗</small></button>
    </div>
    <div class="lab-controls"><p id="sticker-help">Grab. Throw. Repeat.<span>Keys: arrows to move · Space to toss</span></p><div><button type="button" class="gravity-toggle" aria-pressed="false">Gravity off <span aria-hidden="true">↓</span></button><button type="button" class="gravity-reset" aria-label="Reset stickers" title="Reset stickers">↻</button></div></div>
    <p class="lab-status" role="status" aria-live="polite"></p>
  </section>`;
}

function createStickerLab(root) {
  if(!root)return null;
  const world=root.querySelector('.gravity-world');
  const toggle=root.querySelector('.gravity-toggle');
  const reset=root.querySelector('.gravity-reset');
  const status=root.querySelector('.lab-status');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const abort=new AbortController();
  const opts={signal:abort.signal};
  const sizes=[[172,105],[145,65],[105,105],[111,111],[100,137],[145,95],[175,57],[145,105]];
  const places=[[.24,.2,-10],[.73,.18,12],[.19,.61,-12],[.79,.65,14],[.5,.69,8],[.55,.42,-8],[.58,.91,-5],[.23,.89,8]];
  const bodies=Array.from(world.querySelectorAll('.sticker')).map((el,i)=>({el,i,x:0,y:0,w:0,h:0,vx:0,vy:0,angle:0,av:0,held:false}));
  let width=0,height=0,gravity=false,frame=0,lastTime=0,steps=0,quiet=0,visible=true,disposed=false,drag=null;
  function bounds(b){const r=b.angle*Math.PI/180,c=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r));const x=c*b.w/2+s*b.h/2+5,y=s*b.w/2+c*b.h/2+5;return{left:x,right:width-x,top:y,bottom:height-y};}
  function confine(b) {const r=bounds(b);b.x=Math.max(r.left,Math.min(r.right,b.x));b.y=Math.max(r.top,Math.min(r.bottom,b.y));}
  function paint(b) {b.el.style.transform=`translate3d(${b.x-b.w/2}px,${b.y-b.h/2}px,0) rotate(${b.angle}deg)`;}
  function updateToggle(){toggle.setAttribute('aria-pressed',String(gravity));toggle.innerHTML=`Gravity ${gravity?'on':'off'} <span aria-hidden="true">${gravity?'↓':'↗'}</span>`;root.classList.toggle('gravity-active',gravity);}
  function stop(){cancelAnimationFrame(frame);frame=0;lastTime=0;}
  function arrange(){stop();gravity=false;drag=null;updateToggle();const scale=Math.min(1,(width-10)/500);bodies.forEach((b,i)=>{b.w=Math.max(52,sizes[i][0]*scale);b.h=Math.max(47,sizes[i][1]*scale);b.el.style.width=b.w+'px';b.el.style.height=b.h+'px';b.el.style.setProperty('--sticker-scale',scale);b.x=places[i][0]*width;b.y=places[i][1]*height;b.angle=places[i][2];b.vx=0;b.vy=0;b.av=0;b.held=false;confine(b);paint(b);});}
  function measure(){const w=world.clientWidth,h=world.clientHeight;if(w===width&&h===height)return;width=w;height=h;arrange();}
  function wake(){if(disposed||!visible||document.hidden||frame||reduce.matches)return;steps=0;quiet=0;frame=requestAnimationFrame(tick);}
  function collisions(){for(let pass=0;pass<3;pass++)for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){
    const a=bodies[i],b=bodies[j];const dx=b.x-a.x,dy=b.y-a.y;const ox=(a.w+b.w)/2-Math.abs(dx),oy=(a.h+b.h)/2-Math.abs(dy);
    if(ox<=0||oy<=0)continue;const ma=a.held?0:1,mb=b.held?0:1,total=ma+mb;if(!total)continue;
    const nx=ox<oy?(dx<0?-1:1):0,ny=ox<oy?0:(dy<0?-1:1),depth=Math.min(ox,oy)+.2;
    a.x-=nx*depth*ma/total;a.y-=ny*depth*ma/total;b.x+=nx*depth*mb/total;b.y+=ny*depth*mb/total;
    const speed=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;if(speed<0){const impulse=-speed*1.25/total;a.vx-=impulse*nx*ma;a.vy-=impulse*ny*ma;b.vx+=impulse*nx*mb;b.vy+=impulse*ny*mb;}
  }}
  function tick(time){frame=0;if(disposed||!visible||document.hidden||reduce.matches)return;const dt=Math.min(.025,lastTime?(time-lastTime)/1000:1/60);lastTime=time;steps++;
    bodies.forEach(b=>{if(b.held)return;b.vy+=gravity?1050*dt:0;b.vx*=Math.exp(-1.8*dt);if(!gravity)b.vy*=Math.exp(-1.8*dt);b.x+=b.vx*dt;b.y+=b.vy*dt;b.angle=Math.max(-24,Math.min(24,b.angle+b.av*dt));b.av*=Math.exp(-3*dt);});
    collisions();
    let energy=0;bodies.forEach(b=>{if(!b.held){const {left,right,top,bottom}=bounds(b);if(b.x<left||b.x>right){b.x=Math.max(left,Math.min(right,b.x));b.vx*=-.45;b.av+=b.vx*.02;}if(b.y<top){b.y=top;b.vy=Math.abs(b.vy)*.4;}if(b.y>bottom){b.y=bottom;b.vy=Math.abs(b.vy)<45?0:-b.vy*.23;b.vx*=.8;}energy+=Math.abs(b.vx)+Math.abs(b.vy);}paint(b);});
    quiet=energy<18?quiet+1:0;
    if((quiet<40&&steps<700)||bodies.some(b=>b.held))frame=requestAnimationFrame(tick);else lastTime=0;
  }
  function placeWithoutMotion(){bodies.forEach((b,i)=>{b.vx=0;b.vy=0;b.x=(i%3+.5)*width/3;b.y=height-b.h/2-8-Math.floor(i/3)*(height*.21);confine(b);paint(b);});}
  function point(e){const rect=world.getBoundingClientRect();return{x:e.clientX-rect.left,y:e.clientY-rect.top};}
  bodies.forEach(b=>{
    b.el.addEventListener('pointerdown',e=>{if(e.button!==0||drag)return;e.preventDefault();const p=point(e);drag={b,id:e.pointerId,dx:p.x-b.x,dy:p.y-b.y,lastX:p.x,lastY:p.y,time:performance.now()};b.held=true;b.vx=0;b.vy=0;b.el.style.zIndex='10';b.el.classList.add('is-held');b.el.setPointerCapture(e.pointerId);b.el.focus({preventScroll:true});wake();},opts);
    b.el.addEventListener('pointermove',e=>{if(!drag||drag.b!==b||drag.id!==e.pointerId)return;const p=point(e),t=performance.now(),dt=Math.max(.008,(t-drag.time)/1000);b.vx=Math.max(-1100,Math.min(1100,(p.x-drag.lastX)/dt));b.vy=Math.max(-1100,Math.min(1100,(p.y-drag.lastY)/dt));b.x=p.x-drag.dx;b.y=p.y-drag.dy;confine(b);paint(b);drag.lastX=p.x;drag.lastY=p.y;drag.time=t;},opts);
    const release=e=>{if(!drag||drag.b!==b||drag.id!==e.pointerId)return;const stale=performance.now()-drag.time>90;b.held=false;b.el.style.zIndex='';b.el.classList.remove('is-held');if(e.type==='pointercancel'||stale||reduce.matches){b.vx=0;b.vy=0;}b.av=Math.max(-45,Math.min(45,b.vx*.1));drag=null;wake();};
    b.el.addEventListener('pointerup',release,opts);b.el.addEventListener('pointercancel',release,opts);b.el.addEventListener('lostpointercapture',release,opts);
    b.el.addEventListener('keydown',e=>{const moves={ArrowLeft:[-16,0],ArrowRight:[16,0],ArrowUp:[0,-16],ArrowDown:[0,16]};if(moves[e.key]){e.preventDefault();stop();b.vx=0;b.vy=0;b.x+=moves[e.key][0];b.y+=moves[e.key][1];confine(b);paint(b);}else if(e.code==='Space'||e.key==='Enter'){e.preventDefault();if(reduce.matches){b.x=width-b.x;b.y=Math.max(b.h/2+5,b.y-30);confine(b);paint(b);}else{b.vx=(b.i%2?1:-1)*220;b.vy=-380;b.av=25;wake();}}},opts);
  });
  toggle.addEventListener('click',()=>{gravity=!gravity;updateToggle();status.textContent=gravity?'Gravity on. Drag and release a sticker to throw it.':'Gravity off. Stickers stay where you leave them.';if(gravity){if(reduce.matches)placeWithoutMotion();else{bodies.forEach(b=>{b.vx+=(Math.random()-.5)*65;b.av=(Math.random()-.5)*25;});wake();}}else{stop();bodies.forEach(b=>{b.vx=0;b.vy=0;b.av=0;});}},opts);
  reset.addEventListener('click',()=>{arrange();status.textContent='Stickers reset. Your canvas, your rules.';},opts);
  const resize=new ResizeObserver(measure);resize.observe(world);measure();
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible)stop();else if(gravity)wake();});observer.observe(root);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else if(gravity)wake();},opts);
  reduce.addEventListener('change',()=>{stop();bodies.forEach(b=>{b.vx=0;b.vy=0;});if(!reduce.matches&&gravity)wake();},opts);
  return {destroy(){disposed=true;stop();abort.abort();resize.disconnect();observer.disconnect();}};
}
