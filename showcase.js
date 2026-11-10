'use strict';

// Separate supplied images for Home's profile card and About's lanyard pass.
const portraitMedia={
  home:{src:'assets/akhil-home-workspace.webp',srcset:'assets/akhil-home-workspace-480.webp 480w, assets/akhil-home-workspace-800.webp 800w, assets/akhil-home-workspace.webp 1024w',alt:'Akhil Subhash at his creative workspace, surrounded by design tools and artwork.',width:1024,height:1536},
  about:{src:'assets/akhil-about-monochrome.webp',srcset:'assets/akhil-about-monochrome-480.webp 480w, assets/akhil-about-monochrome-800.webp 800w, assets/akhil-about-monochrome.webp 1086w',alt:'Black-and-white portrait of Akhil Subhash in a striped T-shirt, presented in a film frame.',width:1086,height:1448}
};

function showcaseCard(project,index) {
  const profile=!project;
  const id=profile?'profile':project.id;
  const title=profile?'Akhil Subhash':project.title;
  const type=profile?'Creative & UI/UX designer':project.type;
  const src=profile?portraitMedia.home.src:imagePath(project.thumb||project.image);
  const alt=profile?portraitMedia.home.alt:project.alt;
  const summary=profile?'I’m a UAE-based Creative and UI/UX Designer working across brand communication, digital interfaces, and print. Painting is an ongoing part of my practice.':project.summary;
  const facts=profile?['Based in the UAE','From Kerala','Print + screen']: [project.type,project.client,'Year pending'];
  const imageClass=profile?'profile-cover':project.className;
  return `<article class="showcase-card ${profile?'profile-showcase':project.featuredWide?'showcase-wide':''}" data-showcase>
    <button class="showcase-cover ${imageClass}" type="button" data-showcase-toggle aria-expanded="false" aria-controls="showcase-${id}" aria-label="Expand ${title}${profile?' profile':''}">
      <img src="${src}" ${profile?`srcset="${portraitMedia.home.srcset}" sizes="(max-width: 700px) calc(100vw - 64px), 44vw"`:''} alt="${alt}" width="${profile?portraitMedia.home.width:800}" height="${profile?portraitMedia.home.height:1000}" loading="lazy" decoding="async" draggable="false">
      ${profile?'<span class="showcase-number">THE PERSON BEHIND THE PIXELS</span>':`<span class="showcase-number">${String(index+1).padStart(2,'0')} / SELECTED WORK</span>`}
      <span class="showcase-overlay"><span><strong>${title}</strong><span>${type}</span></span><span class="showcase-plus" aria-hidden="true">+</span></span>
    </button>
    <div class="showcase-drawer" id="showcase-${id}" aria-hidden="true" inert><div><div class="showcase-details"><h3>${profile?'The person behind the pixels.':'A closer look.'}</h3><div class="showcase-facts">${facts.map(f=>`<span>${f}</span>`).join('')}</div><p>${summary}</p>${profile?'<a class="showcase-action" href="#/about">Meet Akhil <span aria-hidden="true">↗</span></a>':`<button class="showcase-action" type="button" data-project="${id}">View project <span aria-hidden="true">↗</span></button>`}</div></div></div>
    <button class="showcase-bottom" type="button" data-showcase-toggle aria-expanded="false" aria-controls="showcase-${id}"><span>${profile?'A little more about me':'Explore project'}</span><span aria-hidden="true">⌄</span></button>
  </article>`;
}

function setShowcase(card,open,returnFocus=false) {
  card.classList.toggle('showcase-open',open);
  card.querySelectorAll('[data-showcase-toggle]').forEach(b=>b.setAttribute('aria-expanded',String(open)));
  const drawer=card.querySelector('.showcase-drawer');drawer.inert=!open;drawer.setAttribute('aria-hidden',String(!open));
  const bottom=card.querySelector('.showcase-bottom');bottom.firstElementChild.textContent=open?'Close details':card.classList.contains('profile-showcase')?'A little more about me':'Explore project';
  const cover=card.querySelector('.showcase-cover');cover.setAttribute('aria-label',`${open?'Collapse':'Expand'} ${card.querySelector('.showcase-overlay strong').textContent}${card.classList.contains('profile-showcase')?' profile':''}`);
  if(returnFocus)cover.focus({preventScroll:true});
}
document.addEventListener('click',event=>{const button=event.target.closest('[data-showcase-toggle]');if(button){const card=button.closest('[data-showcase]');setShowcase(card,!card.classList.contains('showcase-open'));}});
document.addEventListener('keydown',event=>{const card=event.target.closest('[data-showcase]');if(event.key==='Escape'&&card?.classList.contains('showcase-open')){event.preventDefault();setShowcase(card,false,true);}});
