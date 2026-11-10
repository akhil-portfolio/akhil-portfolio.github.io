'use strict';

const projectMediaState={group:'all',limit:8,index:0,sequence:[],zoom:false};
function resetProjectMedia(){Object.assign(projectMediaState,{group:'all',limit:8,index:0,sequence:[],zoom:false});}
function projectMediaItems(project){
  const overview=(project.images||[]).map(([image,caption])=>({image,caption,group:project.category==='ui'?'Screens':'Overview',kind:project.imageSource||'Portfolio selection',...(project.mediaPreviews?.[image]||{})}));
  return overview.concat(project.detailImages||[]);
}
function mediaGridCard(item,index){return `<button class="media-tile" type="button" data-media-open="${index}" aria-label="Enlarge ${esc(item.caption)}"><span class="media-tile-image"><img src="${imagePath(item.thumb||item.image)}" alt="" width="480" height="480" loading="lazy" decoding="async"><span aria-hidden="true">↗</span></span><span class="media-kind">${esc(item.kind)}</span><strong>${esc(item.caption)}</strong></button>`;}
function renderProjectMedia(project){
  const items=projectMediaItems(project);if(!items.length)return '';
  const groups=[...new Set(items.map(i=>i.group))],first=items[0];
  return `<section class="project-media-gallery" aria-label="Explore ${esc(project.title)} images"><div class="media-section-heading"><p class="eyebrow">Look closer / the work in detail</p><h3>${project.detailImages?.length?'From the overview to the details.':'Explore the screens.'}</h3><p>Open an image to view it larger. Use the arrows to browse, or zoom in for the details.</p></div><button type="button" class="media-feature" data-media-open="0" aria-label="Enlarge ${esc(first.caption)}"><img src="${imagePath(first.image)}" alt="${esc(first.caption)}" ${first.width?`width="${first.width}" height="${first.height}"`:''} loading="lazy" decoding="async"><span><strong>${esc(first.caption)}</strong><span>Open image <span aria-hidden="true">↗</span></span></span></button><div class="media-filters" role="group" aria-label="Filter images in this project"><button type="button" data-media-filter="all" aria-pressed="true">All images <small>${items.length}</small></button>${groups.map(group=>`<button type="button" data-media-filter="${esc(group)}" aria-pressed="false">${esc(group)} <small>${items.filter(i=>i.group===group).length}</small></button>`).join('')}</div><p class="media-grid-status" role="status" aria-live="polite">Showing ${Math.min(8,items.length)} of ${items.length} images</p><div class="media-grid">${items.slice(0,8).map(mediaGridCard).join('')}</div><button type="button" class="media-more" data-media-more ${items.length<=8?'hidden':''}>Show more images <span aria-hidden="true">＋</span></button></section>`;
}
function paintProjectMedia(){
  const items=projectMediaItems(projects[state.project]);
  const filtered=items.map((item,index)=>({item,index})).filter(({item})=>projectMediaState.group==='all'||item.group===projectMediaState.group);
  const root=document.querySelector('.project-media-gallery');if(!root)return;
  root.querySelector('.media-grid').innerHTML=filtered.slice(0,projectMediaState.limit).map(({item,index})=>mediaGridCard(item,index)).join('');
  root.querySelectorAll('[data-media-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mediaFilter===projectMediaState.group)));
  root.querySelector('.media-grid-status').textContent=`Showing ${Math.min(projectMediaState.limit,filtered.length)} of ${filtered.length} images${projectMediaState.group==='all'?'':` · ${projectMediaState.group}`}`;
  root.querySelector('[data-media-more]').hidden=filtered.length<=projectMediaState.limit;
}
function openProjectMedia(index){
  const items=projectMediaItems(projects[state.project]);if(!items[index])return;
  projectMediaState.index=index;projectMediaState.zoom=false;
  const filtered=items.map((item,i)=>({item,i})).filter(({item})=>projectMediaState.group==='all'||item.group===projectMediaState.group).map(({i})=>i);
  projectMediaState.sequence=filtered.includes(index)?filtered:items.map((_,i)=>i);
  renderMediaDialog();const dialog=document.getElementById('media-dialog');if(!dialog.open)dialog.showModal();document.body.classList.add('locked');dialog.querySelector('.close-button').focus({preventScroll:true});
}
function mediaImageReady(image){
  const frame=image.closest('.media-canvas'),status=frame.querySelector('.media-loading');
  const ready=()=>{status.hidden=true;image.classList.add('image-ready');};
  if(image.complete&&image.naturalWidth)ready();else image.addEventListener('load',ready,{once:true});
  image.addEventListener('error',()=>{status.textContent='This image could not load. Use “Open full image” to try it directly.';},{once:true});
}
function renderMediaDialog(){
  const project=projects[state.project],items=projectMediaItems(project),item=items[projectMediaState.index],sequence=projectMediaState.sequence;
  const position=sequence.indexOf(projectMediaState.index),dialog=document.getElementById('media-dialog');
  dialog.innerHTML=`<div class="dialog-top"><span>${esc(project.title)} / image viewer</span><button type="button" class="close-button" data-close="media-dialog" aria-label="Close image viewer">×</button></div><div class="media-viewer-layout"><div class="media-canvas"><p class="media-loading" role="status">Loading full image…</p><img src="${imagePath(item.image)}" alt="${esc(item.caption)}" ${item.width?`width="${item.width}" height="${item.height}"`:''} decoding="async"></div><aside class="media-viewer-info"><p class="eyebrow">${esc(item.kind)}</p><h2 id="media-title">${esc(item.caption)}</h2><p class="media-counter" role="status" aria-live="polite">Image ${position+1} of ${sequence.length}</p><div class="media-viewer-controls"><button type="button" class="icon-button" data-media-step="-1" aria-label="Previous image">←</button><button type="button" class="media-zoom" data-media-zoom aria-pressed="false">Zoom in <span aria-hidden="true">＋</span></button><button type="button" class="icon-button" data-media-step="1" aria-label="Next image">→</button></div><a class="full-artwork-link" href="${imagePath(item.image)}" target="_blank" rel="noopener noreferrer">Open full image <span aria-hidden="true">↗</span></a><p class="media-viewer-note">Original proportions preserved.<br>← → to browse · Escape to return to the project.</p><div class="media-viewer-thumbs" role="group" aria-label="Images in this collection">${sequence.map(index=>`<button type="button" data-viewer-image="${index}" aria-label="View ${esc(items[index].caption)}" aria-pressed="${index===projectMediaState.index}"><img src="${imagePath(items[index].thumb||items[index].image)}" alt="" width="80" height="80" loading="lazy" decoding="async"></button>`).join('')}</div></aside></div>`;
  mediaImageReady(dialog.querySelector('.media-canvas img'));
}
function stepProjectMedia(direction){
  const sequence=projectMediaState.sequence;if(!sequence.length)return;
  const index=sequence.indexOf(projectMediaState.index);projectMediaState.index=sequence[(index+direction+sequence.length)%sequence.length];projectMediaState.zoom=false;renderMediaDialog();
  document.querySelector(`#media-dialog [data-media-step="${direction}"]`).focus({preventScroll:true});
}
document.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.hasAttribute('data-media-open')){openProjectMedia(Number(button.dataset.mediaOpen));return;}
  if(button.hasAttribute('data-media-filter')){projectMediaState.group=button.dataset.mediaFilter;projectMediaState.limit=8;paintProjectMedia();return;}
  if(button.hasAttribute('data-media-more')){projectMediaState.limit+=8;paintProjectMedia();return;}
  if(button.hasAttribute('data-media-step')){stepProjectMedia(Number(button.dataset.mediaStep));return;}
  if(button.hasAttribute('data-viewer-image')){projectMediaState.index=Number(button.dataset.viewerImage);projectMediaState.zoom=false;renderMediaDialog();document.querySelector(`#media-dialog [data-viewer-image="${projectMediaState.index}"]`).focus({preventScroll:true});return;}
  if(button.hasAttribute('data-media-zoom')){
    projectMediaState.zoom=!projectMediaState.zoom;
    const canvas=document.querySelector('#media-dialog .media-canvas'),image=canvas.querySelector('img');
    canvas.classList.toggle('is-zoomed',projectMediaState.zoom);canvas.style.setProperty('--zoom-width',`${Math.max(canvas.clientWidth*1.6,Math.min(image.naturalWidth||1800,3000))}px`);
    button.setAttribute('aria-pressed',String(projectMediaState.zoom));button.innerHTML=projectMediaState.zoom?'Fit image <span aria-hidden="true">−</span>':'Zoom in <span aria-hidden="true">＋</span>';
  }
});
