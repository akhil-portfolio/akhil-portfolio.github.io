'use strict';

// A shared highlight connects the active navigation item as visitors move pages.
const islandHeader=document.querySelector('.header'),islandNav=document.querySelector('.nav');
const islandHighlight=document.createElement('span');islandHighlight.className='island-highlight';islandHighlight.setAttribute('aria-hidden','true');islandNav.prepend(islandHighlight);
function syncIsland(){
  const current=islandNav.querySelector('[aria-current="page"]');if(!current)return;
  islandNav.style.setProperty('--island-x',`${current.offsetLeft}px`);islandNav.style.setProperty('--island-w',`${current.offsetWidth}px`);islandNav.classList.add('island-ready');
  const label=document.querySelector('.island-current-page');if(label)label.textContent=current.textContent;
  islandHeader.classList.toggle('island-menu-open',document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='true');
}
const islandObserver=new MutationObserver(()=>requestAnimationFrame(syncIsland));islandObserver.observe(islandHeader,{subtree:true,attributes:true,attributeFilter:['aria-current','aria-expanded']});
new ResizeObserver(syncIsland).observe(islandNav);document.fonts.ready.then(syncIsland);window.addEventListener('hashchange',()=>requestAnimationFrame(syncIsland));
