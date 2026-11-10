'use strict';

const resumeJobs = [
  ['2025 – present','Day To Day International Trading','Graphic Designer · UAE'],
  ['2022 – 2024','SERVTECH Technical Services','Creative Designer & Advertising · Dubai'],
  ['2021 – 2022','UNIROUTES','Digital Marketing Designer · Kerala'],
  ['2021','GLISTEN IT Services','UI/UX Designer · Cochin'],
  ['2019','Azura Creative Studio','Graphic Designer Intern · Cochin']
];

function resumeFolder() {
  return `<section class="resume-scene" aria-label="Interactive résumé folder">
    <div class="file-scene-top"><span>THE PERSONAL FILE / 01</span><span class="file-scene-icon" aria-hidden="true">↗</span></div>
    <span class="file-handnote" aria-hidden="true">a little about me ↘</span>
    <button class="resume-folder-toggle" type="button" aria-expanded="false" aria-controls="resume-actions" aria-label="Open résumé folder">
      <span class="folder-object" aria-hidden="true">
        <span class="folder-back"><span class="folder-tab">PROFILE / CV</span></span>
        <span class="folder-paper"><span class="paper-eyebrow">CREATIVE & UI/UX DESIGNER</span><span class="paper-name">Akhil<br>Subhash.</span><span class="paper-rule"></span><span class="paper-section">A little perspective.</span><span class="paper-copy">Design across print & screen.<br>Based in the UAE. From Kerala.</span><span class="paper-section">Experience</span><span class="paper-job">Day To Day <i>2025 – present</i></span><span class="paper-job">SERVTECH <i>2022 – 2024</i></span><span class="paper-signature">Akhil.</span><span class="paper-page">01 / RÉSUMÉ PREVIEW</span></span>
        <span class="folder-front"><span class="folder-front-top"><span>AKHIL’S<br>PERSONAL FILE</span><span class="folder-asterisk">✳</span></span><span class="folder-title">Good design.<br>Curious mind.</span><span class="folder-front-bottom"><span>PRINT / SCREEN / PAINT</span><span>OPEN ME ↗</span></span></span>
        <span class="folder-clip"></span>
      </span>
    </button>
    <div class="resume-scene-bottom"><p class="folder-instruction" aria-live="polite">A few things worth taking out of the folder.</p><div id="resume-actions" class="resume-actions" hidden><button type="button" class="button" data-read-resume>Read résumé <span aria-hidden="true">↗</span></button><button type="button" class="folder-close" data-fold-resume>Put it back <span aria-hidden="true">↙</span></button></div><span class="folder-tap-hint">CLICK TO OPEN · A LITTLE PAPERWORK, A LITTLE PLAY</span></div>
  </section>`;
}

function setResumeFolder(open) {
  const scene=document.querySelector('.resume-scene');if(!scene)return;
  scene.classList.toggle('file-open',open);
  const toggle=scene.querySelector('.resume-folder-toggle');
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close résumé folder':'Open résumé folder');
  scene.querySelector('#resume-actions').hidden=!open;
  scene.querySelector('.folder-instruction').textContent=open?'The short version of my creative journey.':'A few things worth taking out of the folder.';
  scene.querySelector('.folder-tap-hint').hidden=open;
}

function openResume() {
  const dialog=document.querySelector('#resume-dialog');
  dialog.innerHTML=`<div class="dialog-top"><span>The personal file / Résumé preview</span><button type="button" class="close-button" data-close="resume-dialog" aria-label="Close résumé" autofocus>×</button></div>
    <article class="resume-document"><header class="resume-doc-header"><div><p class="eyebrow">Creative & UI/UX designer</p><h2 id="resume-title">Akhil Subhash<span>.</span></h2><p class="resume-doc-tagline">Brand communication. Digital interfaces. Visual storytelling.</p></div><span class="resume-doc-star" aria-hidden="true">✳</span></header>
    <div class="resume-contact-line"><span>Based in the UAE</span><a href="mailto:akhilts525@gmail.com">akhilts525@gmail.com</a><a href="tel:+971507057831">+971 50 705 7831</a></div>
    <div class="resume-columns"><div><section class="resume-section"><h3>Profile</h3><p>Creative and UI/UX Designer working across brand communication, retail campaigns, and digital interfaces. Experience spans corporate websites, recruitment platforms, social content, and printed communication.</p></section><section class="resume-section"><h3>Tools</h3><p>Illustrator · Photoshop · Figma · Adobe XD · After Effects · Premiere Pro · Wix · Spline</p></section><section class="resume-section"><h3>Education</h3><p><strong>BA Animation and Graphic Design</strong><br>St. Joseph College of Communication<br>2017–2020</p></section><section class="resume-section"><h3>Beyond the brief</h3><p>Painting and visual storytelling.<br><a href="#/paintings" class="resume-inline-link">Explore the painting room ↗</a></p></section></div><section class="resume-section resume-experience"><h3>Experience</h3>${resumeJobs.map(j=>`<div class="resume-job"><p class="resume-job-date">${j[0]}</p><h4>${j[1]}</h4><p>${j[2]}</p></div>`).join('')}</section></div>
    <div class="resume-preview-note"><span>PREVIEW</span><p>Assembled from the existing portfolio. Final résumé PDF and detailed role descriptions are pending.</p></div>
    <div class="resume-doc-actions"><a href="assets/Akhil-Subhash-Portfolio.pdf" class="button" download>Download portfolio PDF <span aria-hidden="true">↓</span></a><a class="text-link" href="#/contact">Let’s discuss it <span aria-hidden="true">↗</span></a></div></article>`;
  dialog.showModal();document.body.classList.add('locked');
}

document.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if(button?.matches('.resume-folder-toggle'))setResumeFolder(button.getAttribute('aria-expanded')!=='true');
  if(button?.matches('[data-fold-resume]')){setResumeFolder(false);document.querySelector('.resume-folder-toggle').focus({preventScroll:true});}
  if(button?.matches('[data-read-resume]'))openResume();
});
