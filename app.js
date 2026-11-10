'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const imagePath = name => `assets/${name}${/\.(?:avif|webp|png|jpe?g|svg)$/i.test(name)?'':'.webp'}`;
const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
const star = '<svg class="hero-star" viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M43 0h14v32l23-23 11 11-23 23h32v14H68l23 23-11 11-23-23v32H43V68L20 91 9 80l23-23H0V43h32L9 20 20 9l23 23Z"/></svg>';
const projects = [
  {
    "id": "talent-pool",
    "title": "Talent Pool",
    "category": "ui",
    "type": "UI & UX design",
    "client": "Recruitment platform",
    "className": "talent",
    "image": "talentpool",
    "alt": "Talent Pool employer recruitment interface with mint and teal visual system",
    "role": "UI design for candidate & employer interfaces",
    "summary": "A recruitment interface that brings job discovery and hiring into focus.",
    "description": "I designed interface screens for Talent Pool, a recruitment platform connecting candidates and employers. The work covers job discovery, account access, applications, and hiring management, with clear layouts that help each audience find the information and actions they need.",
    "images": [
      [
        "talentpool",
        "Employer entry point"
      ],
      [
        "talentpool-login",
        "Account access"
      ],
      [
        "talentpool-home",
        "Employer discovery"
      ],
      [
        "talentpool-dashboard",
        "Hiring overview"
      ]
    ],
    "pending": "Project year, process documentation, and final case study are pending. Screens are taken from the existing portfolio.",
    "detailImages": [],
    "mediaPreviews": {
      "talentpool": {
        "thumb": "project-details/talent-pool-overview-1-thumb.webp",
        "width": 1016,
        "height": 627
      },
      "talentpool-login": {
        "thumb": "project-details/talent-pool-overview-2-thumb.webp",
        "width": 974,
        "height": 546
      },
      "talentpool-home": {
        "thumb": "project-details/talent-pool-overview-3-thumb.webp",
        "width": 1027,
        "height": 910
      },
      "talentpool-dashboard": {
        "thumb": "project-details/talent-pool-overview-4-thumb.webp",
        "width": 1020,
        "height": 1311
      }
    }
  },
  {
    "id": "arabian-skylark",
    "title": "Arabian Skylark",
    "category": "ui",
    "type": "UI/UX & website development",
    "client": "Industrial electronics · UAE",
    "className": "web skylark",
    "image": "arabian-skylark-home.jpg",
    "alt": "Arabian Skylark website homepage shown in an earlier October 2026 design",
    "role": "Complete UI/UX design & development using AI tools",
    "summary": "A redesigned industrial-electronics website connecting technical services, parts discovery and streamlined enquiries.",
    "description": "I led the UI/UX design and AI-assisted development of Arabian Skylark’s website, refining the experience around industrial electronics repair, multi-brand parts sourcing, automation services, catalogue browsing and quotation enquiries. The live website reflects the latest redesign. The screenshots below document an earlier iteration and will be replaced with updated captures.",
    "images": [
      [
        "arabian-skylark-home.jpg",
        "Homepage and part-number search"
      ],
      [
        "arabian-skylark-catalogue.jpg",
        "Product catalogue and inventory filters"
      ],
      [
        "arabian-skylark-quote.jpg",
        "Multi-item request-for-quotation form"
      ]
    ],
    "website": "https://www.arabianskylark.com/",
    "sourceLabel": "Website redesign · live version",
    "imageSource": "Earlier website capture · 27 October 2026",
    "featuredWide": true,
    "pending": "The gallery currently contains October 2026 screenshots. Updated captures of the redesigned live homepage, services and product catalogue are pending.",
    "detailImages": [],
    "mediaPreviews": {
      "arabian-skylark-home.jpg": {
        "thumb": "project-details/arabian-skylark-overview-1-thumb.webp",
        "width": 1357,
        "height": 932
      },
      "arabian-skylark-catalogue.jpg": {
        "thumb": "project-details/arabian-skylark-overview-2-thumb.webp",
        "width": 1357,
        "height": 932
      },
      "arabian-skylark-quote.jpg": {
        "thumb": "project-details/arabian-skylark-overview-3-thumb.webp",
        "width": 1357,
        "height": 932
      }
    }
  },
  {
    "id": "social-communication",
    "title": "Social communication",
    "category": "campaign",
    "type": "Social media & advertising",
    "client": "Day To Day & selected brands",
    "className": "social",
    "image": "social-communication/social-media-creatives.webp",
    "thumb": "social-communication/social-media-creatives-thumb.webp",
    "alt": "A complete collage of seasonal social media creatives and illustrated advertisements designed by Akhil",
    "role": "Theme development, concept creation & visual design",
    "summary": "Creative themes and visual concepts carried through social posts and advertisements.",
    "description": "I developed the overall themes and creative concepts, then designed the social media posts and advertisements in these collections. From seasonal illustrations to Day To Day product promotions, I used imagery, typography, and colour to give each message a distinct voice across fashion, toys, and household products.",
    "images": [
      [
        "social-communication/social-media-creatives.webp",
        "Social media creatives — themes, concepts & visual design"
      ],
      [
        "social-communication/product-promotion-ads.webp",
        "Day To Day product-promotion ads — themes, concepts & visual design"
      ],
      [
        "social",
        "Earlier social artwork from the portfolio"
      ]
    ],
    "imageSource": "Supplied artwork",
    "sourceLabel": "Social media & campaign design",
    "fullImageLinks": true,
    "mediaDimensions": {
      "social-communication/social-media-creatives.webp": [
        1536,
        1024
      ],
      "social-communication/product-promotion-ads.webp": [
        1254,
        1254
      ]
    },
    "pending": "Project years and individual campaign notes are pending.",
    "detailImages": [
      {
        "image": "project-details/social-communication-52.webp",
        "thumb": "project-details/social-communication-52-thumb.webp",
        "caption": "Little looks. Big personality. — kidswear",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2250,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-53.webp",
        "thumb": "project-details/social-communication-53-thumb.webp",
        "caption": "Style that moves with you — womenswear",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-54.webp",
        "thumb": "project-details/social-communication-54-thumb.webp",
        "caption": "Effortless style. Every day. — menswear",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-55.webp",
        "thumb": "project-details/social-communication-55-thumb.webp",
        "caption": "Step into everyday comfort — socks",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2814
      },
      {
        "image": "project-details/social-communication-56.webp",
        "thumb": "project-details/social-communication-56-thumb.webp",
        "caption": "Classic colors. Endless possibilities. — socks",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-57.webp",
        "thumb": "project-details/social-communication-57-thumb.webp",
        "caption": "Carry your style — bags",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2814
      },
      {
        "image": "project-details/social-communication-58.webp",
        "thumb": "project-details/social-communication-58-thumb.webp",
        "caption": "Step in. Stand out. — footwear",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2814
      },
      {
        "image": "project-details/social-communication-59.webp",
        "thumb": "project-details/social-communication-59-thumb.webp",
        "caption": "Modern kitchen — toy promotion",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2814
      },
      {
        "image": "project-details/social-communication-60.webp",
        "thumb": "project-details/social-communication-60-thumb.webp",
        "caption": "Steam train — toy promotion",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-61.webp",
        "thumb": "project-details/social-communication-61-thumb.webp",
        "caption": "Smart organization — storage rack",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-62.webp",
        "thumb": "project-details/social-communication-62-thumb.webp",
        "caption": "Clean storage — shoe and hat rack",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2814
      },
      {
        "image": "project-details/social-communication-63.webp",
        "thumb": "project-details/social-communication-63-thumb.webp",
        "caption": "More clothes. Less space. — clothes rack",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2814
      },
      {
        "image": "project-details/social-communication-64.webp",
        "thumb": "project-details/social-communication-64-thumb.webp",
        "caption": "Made to fry — cookware",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2814
      },
      {
        "image": "project-details/social-communication-65.webp",
        "thumb": "project-details/social-communication-65-thumb.webp",
        "caption": "Build to play — stunt cars",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2250,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-66.webp",
        "thumb": "project-details/social-communication-66-thumb.webp",
        "caption": "Little doctor — toy promotion",
        "group": "Product promotions",
        "kind": "Individual advertisement",
        "width": 2251,
        "height": 2813
      },
      {
        "image": "project-details/social-communication-68.webp",
        "thumb": "project-details/social-communication-68-thumb.webp",
        "caption": "Onam Little Stars — kids fashion competition",
        "group": "Social posts",
        "kind": "Individual social creative",
        "width": 2400,
        "height": 3000
      },
      {
        "image": "project-details/social-communication-69.webp",
        "thumb": "project-details/social-communication-69-thumb.webp",
        "caption": "Happy Vishu — Genius Early Learning",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1080,
        "height": 1240
      },
      {
        "image": "project-details/social-communication-70.webp",
        "thumb": "project-details/social-communication-70-thumb.webp",
        "caption": "Happy Vishu — Azura illustrated creative",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1079,
        "height": 1033
      },
      {
        "image": "project-details/social-communication-71.webp",
        "thumb": "project-details/social-communication-71-thumb.webp",
        "caption": "Seafood diet — Adupp illustrated creative",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1080,
        "height": 1232
      },
      {
        "image": "project-details/social-communication-72.webp",
        "thumb": "project-details/social-communication-72-thumb.webp",
        "caption": "Happy Easter — Adupp illustrated creative",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1080,
        "height": 1238
      },
      {
        "image": "project-details/social-communication-73.webp",
        "thumb": "project-details/social-communication-73-thumb.webp",
        "caption": "Eating contest — Adupp event creative",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1080,
        "height": 1476
      },
      {
        "image": "project-details/social-communication-74.webp",
        "thumb": "project-details/social-communication-74-thumb.webp",
        "caption": "There is no we in food — Adupp illustrated creative",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1080,
        "height": 1224
      },
      {
        "image": "project-details/social-communication-75.webp",
        "thumb": "project-details/social-communication-75-thumb.webp",
        "caption": "Happy Easter — Azura illustrated creative",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1080,
        "height": 1252
      },
      {
        "image": "project-details/social-communication-76.webp",
        "thumb": "project-details/social-communication-76-thumb.webp",
        "caption": "Food and politics — Adupp illustrated creative",
        "group": "Social posts",
        "kind": "Supplied post capture",
        "width": 1079,
        "height": 1228
      },
      {
        "image": "project-details/social-communication-06.webp",
        "thumb": "project-details/social-communication-06-thumb.webp",
        "caption": "Display advertising — layout 1",
        "group": "Display ads",
        "kind": "Display-ad artwork",
        "width": 2021,
        "height": 188
      },
      {
        "image": "project-details/social-communication-07.webp",
        "thumb": "project-details/social-communication-07-thumb.webp",
        "caption": "Display advertising — layout 2",
        "group": "Display ads",
        "kind": "Display-ad artwork",
        "width": 2021,
        "height": 188
      },
      {
        "image": "project-details/social-communication-08.webp",
        "thumb": "project-details/social-communication-08-thumb.webp",
        "caption": "Display advertising — layout 3",
        "group": "Display ads",
        "kind": "Display-ad artwork",
        "width": 2021,
        "height": 188
      }
    ],
    "mediaPreviews": {
      "social-communication/social-media-creatives.webp": {
        "thumb": "project-details/social-communication-overview-1-thumb.webp",
        "width": 1536,
        "height": 1024
      },
      "social-communication/product-promotion-ads.webp": {
        "thumb": "project-details/social-communication-overview-2-thumb.webp",
        "width": 1254,
        "height": 1254
      },
      "social": {
        "thumb": "project-details/social-communication-overview-3-thumb.webp",
        "width": 1800,
        "height": 1350
      }
    }
  },
  {
    "id": "print-advertising",
    "title": "Print advertising",
    "category": "print",
    "type": "Newspaper & print design",
    "client": "Day To Day & selected brands",
    "className": "print",
    "image": "print-advertising/newspaper-overview.webp",
    "thumb": "print-advertising/newspaper-overview-thumb.webp",
    "alt": "A complete presentation of Day To Day newspaper advertisements, including promotional campaigns, Onam and store-opening layouts",
    "role": "Concept pitching, creative development & print design",
    "summary": "Pitched ideas turned into visual concepts and full-page newspaper advertisements.",
    "description": "I pitched the ideas, developed the concepts, and visualised them on the print canvas for Day To Day. The work spans store openings, seasonal celebrations, and promotional campaigns. I brought together headlines, imagery, offers, and supporting details to give each advertisement a clear focal point and visual story. This collection includes individual artwork, photographed newspaper pages, and a selected Baravia salon advertisement.",
    "images": [
      [
        "print-advertising/newspaper-overview.webp",
        "Campaign ideas and full-page newspaper layouts"
      ],
      [
        "print-advertising/newspaper-full-pages.webp",
        "Selected newspaper advertising designs"
      ]
    ],
    "imageSource": "Supplied presentation mockup",
    "sourceLabel": "Day To Day print advertising",
    "fullImageLinks": true,
    "mediaDimensions": {
      "print-advertising/newspaper-overview.webp": [
        1448,
        1086
      ],
      "print-advertising/newspaper-full-pages.webp": [
        1983,
        793
      ]
    },
    "pending": "Project years and individual campaign notes are pending.",
    "detailImages": [
      {
        "image": "project-details/print-advertising-20.webp",
        "thumb": "project-details/print-advertising-20-thumb.webp",
        "caption": "Muwaileh store opening — full-page artwork",
        "group": "Print artwork",
        "kind": "Advertisement artwork",
        "width": 2032,
        "height": 3000
      },
      {
        "image": "project-details/print-advertising-21.webp",
        "thumb": "project-details/print-advertising-21-thumb.webp",
        "caption": "Onam celebration — full-page artwork",
        "group": "Print artwork",
        "kind": "Advertisement artwork",
        "width": 848,
        "height": 1264
      },
      {
        "image": "project-details/print-advertising-22.webp",
        "thumb": "project-details/print-advertising-22-thumb.webp",
        "caption": "Win a Jetour T2 — campaign artwork",
        "group": "Print artwork",
        "kind": "Advertisement artwork",
        "width": 1000,
        "height": 1600
      },
      {
        "image": "project-details/print-advertising-23.webp",
        "thumb": "project-details/print-advertising-23-thumb.webp",
        "caption": "Shop small. Win big. — campaign artwork",
        "group": "Print artwork",
        "kind": "Advertisement artwork",
        "width": 1000,
        "height": 1600
      },
      {
        "image": "project-details/print-advertising-24.webp",
        "thumb": "project-details/print-advertising-24-thumb.webp",
        "caption": "Baravia salon — newspaper advertisement",
        "group": "Print artwork",
        "kind": "Advertisement artwork",
        "width": 1600,
        "height": 1127
      },
      {
        "image": "project-details/print-advertising-25.webp",
        "thumb": "project-details/print-advertising-25-thumb.webp",
        "caption": "Muwaileh opening — photographed newspaper page",
        "group": "Newspaper photos",
        "kind": "Photographed print",
        "width": 832,
        "height": 1248
      },
      {
        "image": "project-details/print-advertising-26.webp",
        "thumb": "project-details/print-advertising-26-thumb.webp",
        "caption": "Match day — photographed newspaper page",
        "group": "Newspaper photos",
        "kind": "Photographed print",
        "width": 923,
        "height": 1471
      },
      {
        "image": "project-details/print-advertising-27.webp",
        "thumb": "project-details/print-advertising-27-thumb.webp",
        "caption": "A bag of happiness — photographed newspaper page",
        "group": "Newspaper photos",
        "kind": "Photographed print",
        "width": 800,
        "height": 1345
      },
      {
        "image": "project-details/print-advertising-28.webp",
        "thumb": "project-details/print-advertising-28-thumb.webp",
        "caption": "Everyday essentials — photographed newspaper page",
        "group": "Newspaper photos",
        "kind": "Photographed print",
        "width": 1200,
        "height": 1600
      }
    ],
    "mediaPreviews": {
      "print-advertising/newspaper-overview.webp": {
        "thumb": "project-details/print-advertising-overview-1-thumb.webp",
        "width": 1448,
        "height": 1086
      },
      "print-advertising/newspaper-full-pages.webp": {
        "thumb": "project-details/print-advertising-overview-2-thumb.webp",
        "width": 1983,
        "height": 793
      }
    }
  },
  {
    "id": "daytoday-packaging",
    "title": "Day To Day packaging",
    "category": "packaging",
    "type": "Packaging & label design",
    "client": "Day To Day / CDO",
    "className": "packaging",
    "image": "product-packaging/tissue-boxes.webp",
    "thumb": "product-packaging/tissue-boxes-thumb.webp",
    "alt": "CDO tissue-box packaging in multiple colour variants, shown in a supplied product mockup",
    "role": "Packaging concepts & label design",
    "summary": "A family of packaging designs for tissue boxes, maxi rolls, and fitted-sheet covers.",
    "description": "I created packaging concepts and label designs for Day To Day and CDO products, from tissue boxes and maxi-roll packs to fitted-sheet covers. The work explores colour variants, patterns, and product-information layouts across different pack sizes and formats, giving each product its own character within the wider range.",
    "images": [
      [
        "product-packaging/tissue-boxes.webp",
        "Tissue-box packaging — coordinated colour variants"
      ],
      [
        "product-packaging/maxi-roll-labels.webp",
        "Maxi-roll labels — single, twin and three-roll packs"
      ],
      [
        "product-packaging/bedsheet-labels.webp",
        "Bedsheet cover labels — fitted-sheet packaging"
      ]
    ],
    "imageSource": "Supplied product mockup",
    "sourceLabel": "Day To Day product packaging",
    "fullImageLinks": true,
    "mediaDimensions": {
      "product-packaging/tissue-boxes.webp": [
        1448,
        1086
      ],
      "product-packaging/maxi-roll-labels.webp": [
        1331,
        1182
      ],
      "product-packaging/bedsheet-labels.webp": [
        1448,
        1086
      ]
    },
    "pending": "Project years and production details are pending.",
    "detailImages": [
      {
        "image": "project-details/daytoday-packaging-02.webp",
        "thumb": "project-details/daytoday-packaging-02-thumb.webp",
        "caption": "Fitted-sheet cover — botanical label",
        "group": "Bedsheet labels",
        "kind": "Flat label artwork",
        "width": 3000,
        "height": 600
      },
      {
        "image": "project-details/daytoday-packaging-03.webp",
        "thumb": "project-details/daytoday-packaging-03-thumb.webp",
        "caption": "Fitted-sheet cover — floral label",
        "group": "Bedsheet labels",
        "kind": "Flat label artwork",
        "width": 3000,
        "height": 600
      },
      {
        "image": "project-details/daytoday-packaging-04.webp",
        "thumb": "project-details/daytoday-packaging-04-thumb.webp",
        "caption": "Fitted-sheet cover — geometric label",
        "group": "Bedsheet labels",
        "kind": "Flat label artwork",
        "width": 3000,
        "height": 600
      },
      {
        "image": "project-details/daytoday-packaging-15.webp",
        "thumb": "project-details/daytoday-packaging-15-thumb.webp",
        "caption": "Three-roll maxi pack — green label",
        "group": "Maxi-roll labels",
        "kind": "Flat label artwork",
        "width": 3000,
        "height": 1334
      },
      {
        "image": "project-details/daytoday-packaging-16.webp",
        "thumb": "project-details/daytoday-packaging-16-thumb.webp",
        "caption": "Twin-pack maxi roll — botanical label",
        "group": "Maxi-roll labels",
        "kind": "Flat label artwork",
        "width": 3000,
        "height": 2122
      },
      {
        "image": "project-details/daytoday-packaging-17.webp",
        "thumb": "project-details/daytoday-packaging-17-thumb.webp",
        "caption": "Single maxi roll — lavender label",
        "group": "Maxi-roll labels",
        "kind": "Flat label artwork",
        "width": 2599,
        "height": 1890
      },
      {
        "image": "project-details/daytoday-packaging-18.webp",
        "thumb": "project-details/daytoday-packaging-18-thumb.webp",
        "caption": "Maxi-roll range — original product mockup",
        "group": "Maxi-roll labels",
        "kind": "Product mockup",
        "width": 1327,
        "height": 1179
      },
      {
        "image": "project-details/daytoday-packaging-78.webp",
        "thumb": "project-details/daytoday-packaging-78-thumb.webp",
        "caption": "Tissue boxes — colour-range mockup",
        "group": "Tissue boxes",
        "kind": "Product mockup",
        "width": 2121,
        "height": 3000
      },
      {
        "image": "project-details/daytoday-packaging-79.webp",
        "thumb": "project-details/daytoday-packaging-79-thumb.webp",
        "caption": "Tissue box — blue colourway",
        "group": "Tissue boxes",
        "kind": "Individual product mockup",
        "width": 3000,
        "height": 2571
      },
      {
        "image": "project-details/daytoday-packaging-80.webp",
        "thumb": "project-details/daytoday-packaging-80-thumb.webp",
        "caption": "Tissue box — green colourway",
        "group": "Tissue boxes",
        "kind": "Individual product mockup",
        "width": 3000,
        "height": 2571
      },
      {
        "image": "project-details/daytoday-packaging-81.webp",
        "thumb": "project-details/daytoday-packaging-81-thumb.webp",
        "caption": "Tissue box — blue-violet colourway",
        "group": "Tissue boxes",
        "kind": "Individual product mockup",
        "width": 3000,
        "height": 2571
      },
      {
        "image": "project-details/daytoday-packaging-82.webp",
        "thumb": "project-details/daytoday-packaging-82-thumb.webp",
        "caption": "Tissue box — orange colourway",
        "group": "Tissue boxes",
        "kind": "Individual product mockup",
        "width": 3000,
        "height": 2571
      },
      {
        "image": "project-details/daytoday-packaging-83.webp",
        "thumb": "project-details/daytoday-packaging-83-thumb.webp",
        "caption": "Tissue box — lime colourway",
        "group": "Tissue boxes",
        "kind": "Individual product mockup",
        "width": 3000,
        "height": 2571
      },
      {
        "image": "project-details/daytoday-packaging-84.webp",
        "thumb": "project-details/daytoday-packaging-84-thumb.webp",
        "caption": "Tissue box — purple colourway",
        "group": "Tissue boxes",
        "kind": "Individual product mockup",
        "width": 3000,
        "height": 2571
      },
      {
        "image": "project-details/daytoday-packaging-85.webp",
        "thumb": "project-details/daytoday-packaging-85-thumb.webp",
        "caption": "Tissue box — pink colourway",
        "group": "Tissue boxes",
        "kind": "Individual product mockup",
        "width": 3000,
        "height": 2571
      },
      {
        "image": "project-details/daytoday-packaging-30.webp",
        "thumb": "project-details/daytoday-packaging-30-thumb.webp",
        "caption": "Three-roll label — light-blue exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 1334
      },
      {
        "image": "project-details/daytoday-packaging-31.webp",
        "thumb": "project-details/daytoday-packaging-31-thumb.webp",
        "caption": "Three-roll label — orange exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 1334
      },
      {
        "image": "project-details/daytoday-packaging-33.webp",
        "thumb": "project-details/daytoday-packaging-33-thumb.webp",
        "caption": "Three-roll label — lavender exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 1334
      },
      {
        "image": "project-details/daytoday-packaging-34.webp",
        "thumb": "project-details/daytoday-packaging-34-thumb.webp",
        "caption": "Three-roll label — navy exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 1333
      },
      {
        "image": "project-details/daytoday-packaging-35.webp",
        "thumb": "project-details/daytoday-packaging-35-thumb.webp",
        "caption": "Fitted-sheet label — mint exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 600
      },
      {
        "image": "project-details/daytoday-packaging-36.webp",
        "thumb": "project-details/daytoday-packaging-36-thumb.webp",
        "caption": "Twin-pack label — blue pattern exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 2121
      },
      {
        "image": "project-details/daytoday-packaging-40.webp",
        "thumb": "project-details/daytoday-packaging-40-thumb.webp",
        "caption": "Twin-pack label — lavender exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 2122
      },
      {
        "image": "project-details/daytoday-packaging-41.webp",
        "thumb": "project-details/daytoday-packaging-41-thumb.webp",
        "caption": "Twin-pack label — floral exploration",
        "group": "Design explorations",
        "kind": "Flat label exploration",
        "width": 3000,
        "height": 2121
      },
      {
        "image": "project-details/daytoday-packaging-42.webp",
        "thumb": "project-details/daytoday-packaging-42-thumb.webp",
        "caption": "Tissue box — zigzag exploration",
        "group": "Design explorations",
        "kind": "Design exploration / mockup",
        "width": 1000,
        "height": 857
      },
      {
        "image": "project-details/daytoday-packaging-44.webp",
        "thumb": "project-details/daytoday-packaging-44-thumb.webp",
        "caption": "Tissue box — blue linework exploration",
        "group": "Design explorations",
        "kind": "Design exploration / mockup",
        "width": 1000,
        "height": 857
      },
      {
        "image": "project-details/daytoday-packaging-45.webp",
        "thumb": "project-details/daytoday-packaging-45-thumb.webp",
        "caption": "Tissue box — lavender exploration",
        "group": "Design explorations",
        "kind": "Design exploration / mockup",
        "width": 1000,
        "height": 857
      },
      {
        "image": "project-details/daytoday-packaging-46.webp",
        "thumb": "project-details/daytoday-packaging-46-thumb.webp",
        "caption": "Tissue box — botanical exploration",
        "group": "Design explorations",
        "kind": "Design exploration / mockup",
        "width": 1000,
        "height": 857
      },
      {
        "image": "project-details/daytoday-packaging-47.webp",
        "thumb": "project-details/daytoday-packaging-47-thumb.webp",
        "caption": "Tissue box — gradient exploration",
        "group": "Design explorations",
        "kind": "Design exploration / mockup",
        "width": 1000,
        "height": 857
      }
    ],
    "mediaPreviews": {
      "product-packaging/tissue-boxes.webp": {
        "thumb": "project-details/daytoday-packaging-overview-1-thumb.webp",
        "width": 1448,
        "height": 1086
      },
      "product-packaging/maxi-roll-labels.webp": {
        "thumb": "project-details/daytoday-packaging-overview-2-thumb.webp",
        "width": 1331,
        "height": 1182
      },
      "product-packaging/bedsheet-labels.webp": {
        "thumb": "project-details/daytoday-packaging-overview-3-thumb.webp",
        "width": 1448,
        "height": 1086
      }
    }
  },
  {
    "id": "logo-presentations",
    "title": "Logo concepts & presentations",
    "category": "branding",
    "type": "Logo design & brand presentation",
    "client": "Baravia Beauty Salon / Arabian Skylark Travel",
    "className": "branding",
    "image": "logo-presentations/baravia-cover.webp",
    "alt": "Baravia Beauty Salon butterfly and letter B identity from Akhil’s logo presentation",
    "role": "Logo concepts, visual direction & client presentation",
    "summary": "From the first idea to a clear presentation for client review and logo approval.",
    "description": "These two samples show how I present logo-design work for client review and approval. I build a visual narrative around the idea, explain the thinking behind the mark, and show how colour and real-world applications support the direction. Baravia Beauty Salon and the Arabian Skylark travel concept demonstrate the presentation format I use to help clients understand, compare, and confirm a logo.",
    "sourceLabel": "Two logo-design presentation samples",
    "presentations": [
      {
        "id": "baravia",
        "title": "Baravia Beauty Salon",
        "subtitle": "Beauty & personal care",
        "description": "A salon identity presented through the butterfly, feminine profile, and initial B within the mark. The presentation explains the visual idea, then explores colour, typography, stationery, and signage application concepts.",
        "cover": "logo-presentations/baravia-cover.webp",
        "complete": "logo-presentations/baravia-complete.webp",
        "sections": [
          {
            "image": "logo-presentations/baravia-01.webp",
            "label": "Cover & concept",
            "width": 1120,
            "height": 1085
          },
          {
            "image": "logo-presentations/baravia-02.webp",
            "label": "Visual direction & primary identity",
            "width": 1120,
            "height": 1339
          },
          {
            "image": "logo-presentations/baravia-03.webp",
            "label": "The thinking behind the mark",
            "width": 1120,
            "height": 577
          },
          {
            "image": "logo-presentations/baravia-04.webp",
            "label": "Palette & logo colour applications",
            "width": 1120,
            "height": 1208
          },
          {
            "image": "logo-presentations/baravia-05.webp",
            "label": "Typography & stationery concept",
            "width": 1120,
            "height": 1120
          },
          {
            "image": "logo-presentations/baravia-06.webp",
            "label": "Salon signage & closing",
            "width": 1120,
            "height": 954
          }
        ]
      },
      {
        "id": "skylark",
        "title": "Arabian Skylark · Travel",
        "subtitle": "Tourism & corporate travel",
        "description": "A travel-brand concept presented through moodboarding, vector exploration, the brandmark, tagline, and colour options. Stationery and signage mockups help communicate the direction before a logo is confirmed.",
        "cover": "logo-presentations/skylark-cover.webp",
        "complete": "logo-presentations/skylark-complete.webp",
        "sections": [
          {
            "image": "logo-presentations/skylark-01.webp",
            "label": "Brand introduction & brief",
            "width": 1120,
            "height": 1033
          },
          {
            "image": "logo-presentations/skylark-02.webp",
            "label": "Moodboard & vector exploration",
            "width": 1120,
            "height": 1055
          },
          {
            "image": "logo-presentations/skylark-03.webp",
            "label": "Brandmark & core idea",
            "width": 1120,
            "height": 1454
          },
          {
            "image": "logo-presentations/skylark-04.webp",
            "label": "Tagline & colour directions",
            "width": 1120,
            "height": 764
          },
          {
            "image": "logo-presentations/skylark-05.webp",
            "label": "Stationery & reception concepts",
            "width": 1120,
            "height": 1339
          },
          {
            "image": "logo-presentations/skylark-06.webp",
            "label": "Mark details & exterior signage",
            "width": 1120,
            "height": 1296
          },
          {
            "image": "logo-presentations/skylark-07.webp",
            "label": "Alternative logo directions",
            "width": 1120,
            "height": 793
          }
        ]
      }
    ],
    "images": [],
    "pending": "These are presentation samples. Application mockups illustrate proposed uses; final approval and rollout details have not been supplied.",
    "detailImages": [
      {
        "image": "project-details/logo-presentations-10.webp",
        "thumb": "project-details/logo-presentations-10-thumb.webp",
        "caption": "Baravia — original logo artwork",
        "group": "Logo artwork",
        "kind": "Logo artwork",
        "width": 3000,
        "height": 2121
      }
    ],
    "mediaPreviews": {}
  },
  {
    "id": "digital-presence",
    "title": "Digital presence",
    "category": "ui",
    "type": "Web design",
    "client": "Corporate & recruitment",
    "className": "web",
    "image": "websites",
    "alt": "Angled collection of corporate and recruitment website screens on a black background",
    "role": "Website design & development",
    "summary": "Website design and development for corporate, industrial, and recruitment businesses.",
    "description": "My website work brings together interface design and development across SERVTECH, General Tech, MBE, Koragon, and Talent Pool. These selected screens show how I adapt visual direction and page layouts to different businesses, using platforms including Wix to bring the designs to life.",
    "images": [
      [
        "websites",
        "Website collection from the existing portfolio"
      ]
    ],
    "pending": "Individual project dates, role breakdowns, and current live website links are pending.",
    "detailImages": [],
    "mediaPreviews": {
      "websites": {
        "thumb": "project-details/digital-presence-overview-1-thumb.webp",
        "width": 1800,
        "height": 1532
      }
    }
  },
  {
    "id": "painting-room",
    "title": "The painting room",
    "category": "painting",
    "type": "Personal practice",
    "client": "Painting & visual storytelling",
    "className": "painting",
    "image": "painting-01",
    "alt": "Two paintings from Akhil’s personal portfolio",
    "summary": "Personal paintings exploring character, colour, and stories beyond a commercial brief.",
    "detailImages": [],
    "mediaPreviews": {}
  }
];

const paintings = [
  {image:'painting-01',label:'Painting 01',alt:'A painted side profile in cool blue against a vivid pink background'},
  {image:'painting-02',label:'Painting 02',alt:'A fantasy centaur figure standing in a sunlit field'},
  {image:'painting-03',label:'Painting 03',alt:'An expressive floating figure, blue flowers, and butterflies against a dark background'}
];
const categories = [{id:'all',label:'All work'},{id:'ui',label:'UI & web'},{id:'campaign',label:'Campaigns'},{id:'branding',label:'Logo & identity'},{id:'print',label:'Print'},{id:'packaging',label:'Packaging'},{id:'painting',label:'Painting'}];
const matchesCategory=(project,id)=>id==='all'||project.category===id;
const state = {page:'home',filter:'all',query:'',project:0,art:0,presentation:0,section:0};
let toastTimer;
let revealObserver;
let stickerController = null;
let lanyardController = null;
let contactInterest = '';

function card(project, index) {
  let media = project.placeholder
    ? '<div class="placeholder-art"><span class="placeholder-mark" aria-hidden="true">+</span><div><strong>Artwork<br>coming soon.</strong><p>Project assets pending</p></div></div>'
    : project.category === 'painting'
      ? `<img class="painting-thumb" src="${imagePath('painting-01')}" alt="" loading="lazy" decoding="async" width="439" height="566"><img class="painting-thumb" src="${imagePath('painting-02')}" alt="" loading="lazy" decoding="async" width="448" height="578">`
      : `<img src="${imagePath(project.thumb||project.image)}" alt="${esc(project.alt)}" loading="lazy" decoding="async" width="1200" height="900">`;
  return `<button class="project-card ${project.className}" data-project="${project.id}" aria-label="${project.category === 'painting' ? 'Explore' : 'View'} ${project.title}${project.placeholder ? ' — placeholder' : ''}">
    <div class="project-media">${media}<span class="project-tag ${project.placeholder ? 'placeholder-tag' : ''}">${project.placeholder ? 'OVERVIEW · CASE STUDY PENDING' : project.type}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
    <div class="project-meta"><div><h3>${project.title}</h3><p>${project.client}</p></div><span class="project-index">${String(index+1).padStart(2,'0')}</span></div>
  </button>`;
}
function contactStrip() {return `<div class="contact-strip"><h2>Have a good feeling?<br>Let’s make it something.</h2><a class="circle-link" href="#/contact" aria-label="Discuss your project">↗</a></div>`;}
function artFeature() {return `<section class="art-feature" aria-labelledby="art-feature-title"><div><div class="eyebrow">Outside the brief / personal practice</div><h2 id="art-feature-title">A different<br>kind of canvas.</h2><p>My personal painting practice explores character, colour, and the stories an image can hold.</p><a href="#/paintings" class="button light">Enter the painting room ${arrow}</a></div><div class="art-feature-images"><img src="${imagePath('painting-02')}" alt="Akhil’s centaur painting" loading="lazy" decoding="async" width="448" height="578"><img src="${imagePath('painting-01')}" alt="Akhil’s blue portrait painting" loading="lazy" decoding="async" width="439" height="566"></div></section>`;}

function home() {return `<div class="wrap">
  <section class="hero" aria-labelledby="home-title"><div class="hero-topline"><p class="eyebrow"><span class="dot"></span>Akhil Subhash · Creative & UI/UX designer</p><span class="location">Based in the UAE</span></div>
    <div class="hero-grid"><div><h1 id="home-title">YOUR VISION<br>DESERVES<br><span class="last-line">MORE.${star}</span></h1><p class="hero-copy">Brand identities, digital experiences, and print — shaped around a clear idea.</p><a class="button" href="#/contact">LET’S DISCUSS IT. ${arrow}</a></div>
    ${stickerPlayground()}</div>
    <div class="hero-footer"><div class="disciplines"><span class="discipline">Brand communication</span><span class="discipline">Digital experiences</span><span class="discipline">Visual storytelling</span></div><a href="#/work">Explore the work <span aria-hidden="true">↓</span></a></div>
  </section>
  <div class="creative-strip"><div aria-hidden="true">MAKE IT CLEAR. ✳ MAKE IT CURIOUS. ✳ MAKE IT MATTER. ✳ MAKE IT CLEAR. ✳ MAKE IT CURIOUS. ✳ MAKE IT MATTER. ✳</div><button type="button" class="strip-motion" data-toggle-marquee aria-label="Pause scrolling text" aria-pressed="false" title="Pause scrolling text">Ⅱ</button></div>
  <section class="section selected-section" aria-labelledby="selected-title"><div class="section-heading"><div><p class="eyebrow">01 / A few selected things</p><h2 id="selected-title">Curiosity, in practice.</h2></div><a class="text-link" href="#/work">All work <span aria-hidden="true">↗</span></a></div><div class="project-grid">${['talent-pool','social-communication','arabian-skylark'].map(id=>projects.find(p=>p.id===id)).map((p,i)=>showcaseCard(p,i)).join('')}</div></section>
  <section class="section approach profile-intro" aria-labelledby="approach-title"><div>${showcaseCard(null,0)}</div><div class="approach-copy"><p class="eyebrow">02 / The person behind the pixels</p><h2 id="approach-title">A curious mind.<br>A considered<br>approach.</h2><p>I’m Akhil, a UAE-based Creative and UI/UX Designer. I work where clear communication meets a strong visual idea.</p><p class="muted">From logo presentations to websites, packaging, and campaigns, I connect the small details to the bigger picture.</p><div class="approach-details"><span class="pill">Brand & campaign</span><span class="pill">UI & web</span><span class="pill">Print & editorial</span></div><a class="text-link" href="#/about">A little more about me <span aria-hidden="true">↗</span></a></div></section>
  ${artFeature()}${contactStrip()}
</div>`;}



function work() {return `<div class="wrap"><section class="page-intro"><p class="eyebrow"><span class="dot"></span>The work / selected portfolio</p><div class="intro-row"><h1>Some things<br>I’ve made.</h1><p>Different briefs. Different formats.<br>One thoughtful approach to visual communication.</p></div></section><section class="work-content" aria-label="Browse portfolio projects"><div class="work-controls"><div class="filters" role="group" aria-label="Filter work by discipline">${categories.map(c=>`<button class="filter" data-filter="${c.id}" aria-pressed="${state.filter===c.id}">${c.label}<small>${projects.filter(p=>matchesCategory(p,c.id)).length}</small></button>`).join('')}</div><label class="search"><span aria-hidden="true">⌕</span><input type="search" id="project-search" aria-label="Search projects" placeholder="Find something…" value="${esc(state.query)}" maxlength="100"></label></div><p class="results-bar" id="results" role="status" aria-live="polite"></p><div class="project-grid" id="work-grid"></div><p class="availability-note">Selected work across screen, identity, campaigns, print, packaging, and painting. Dates, process notes, and final assets are marked where they are still to be added.</p>${contactStrip()}</section></div>`;}

function paintWork() {
  const result = projects.filter(p => matchesCategory(p,state.filter) && `${p.title} ${p.type} ${p.client} ${p.summary}`.toLowerCase().includes(state.query.toLowerCase().trim()));
  $('#work-grid').innerHTML = result.length ? result.map(p=>card(p,projects.indexOf(p))).join('') : '<div class="empty-state"><h3>No projects here yet.</h3><p class="muted">Try another word or explore all the work.</p><button class="button outline" data-reset>Reset exploration <span aria-hidden="true">↗</span></button></div>';
  $('#results').textContent = `${String(result.length).padStart(2,'0')} ${result.length===1?'project':'projects'} ${state.filter==='all'?'across all disciplines':`in ${categories.find(c=>c.id===state.filter).label.toLowerCase()}`}${state.query.trim() ? ` · Search: “${state.query.trim()}”` : ''}`;
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===state.filter)));
}

function about() {
  const jobs = resumeJobs;
  return `<div class="wrap"><section class="about-hero"><div><p class="eyebrow"><span class="dot"></span>About / Akhil Subhash</p><h1>A designer.<br>An observer.<br>Always curious.</h1><p class="lead">I’m a Creative and UI/UX Designer working across visual identities, campaigns, packaging, and digital experiences.</p></div>${lanyardPortrait()}</section>
  <section class="about-detail about-story"><div class="about-story-copy"><p class="eyebrow">Print. Screen. Everything between.</p><h2>Different mediums.<br>The same care.</h2><p>My experience spans corporate websites, recruitment platforms, social content, and printed communication. I’m based in the UAE, with roots in Kerala, India.</p><p>Painting is an ongoing part of my creative practice — a space to explore character, mood, and storytelling beyond a commercial brief.</p><a class="text-link" href="#/paintings" style="margin-top:25px">See the personal side <span aria-hidden="true">↗</span></a></div>${resumeFolder()}</section>
  <section class="experience"><div><p class="eyebrow" style="margin-bottom:20px">The journey so far</p><h2>Places I’ve<br>made things.</h2></div><div>${jobs.map(j=>`<div class="timeline-row"><time>${j[0]}</time><div><h3>${j[1]}</h3><p>${j[2]}</p></div></div>`).join('')}</div></section>
  <section class="tool-section"><h2>Tools of the trade.</h2><div><div class="tool-list">${['Illustrator','Photoshop','Figma','Adobe XD','After Effects','Premiere Pro','Wix','Spline'].map(t=>`<span class="pill">${t}</span>`).join('')}</div><p class="education">BA Animation and Graphic Design<br>St. Joseph College of Communication · 2017–2020</p><a href="assets/Akhil-Subhash-Portfolio.pdf" class="text-link" download style="margin-top:22px">Download portfolio PDF <span aria-hidden="true">↓</span></a></div></section>${contactStrip()}</div>`;
}

function contact() {return `<div class="wrap contact-page"><div class="contact-layout"><section><p class="eyebrow"><span class="dot"></span>Contact / A conversation starts here</p><h1>LET’S MAKE<br>SOMETHING<br><em>MATTER.</em></h1><p class="contact-copy">Have a brief, a question, or the beginning of an idea? Let’s talk about it.</p><div class="contact-options"><div class="email-row"><a href="mailto:akhilts525@gmail.com">akhilts525@gmail.com</a><button class="copy-button" data-copy aria-label="Copy email address" title="Copy email address">⧉</button></div><a class="text-link" href="tel:+971507057831">+971 50 705 7831 <span aria-hidden="true">↗</span></a><a class="text-link" href="https://www.linkedin.com/in/akhilts-design" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div></section>
  <form class="contact-form" id="contact-form"><h2>What are you thinking?</h2><p>A few details to get the conversation going.</p><div class="form-row"><label class="field"><span>Your name *</span><input name="name" autocomplete="name" placeholder="Your name" required maxlength="100"></label><label class="field"><span>Email address *</span><input name="email" type="email" autocomplete="email" placeholder="you@company.com" required maxlength="150"></label></div><label class="field"><span>I’m interested in</span><select name="interest"><option>Let’s explore an idea</option><option>Brand & campaign design</option><option>UI & web design</option><option>Print & editorial</option><option>Painting & illustration</option></select></label><label class="field"><span>A little about your project *</span><textarea name="message" placeholder="The idea, the challenge, the possibilities…" required minlength="10" maxlength="5000">${esc(contactInterest)}</textarea></label><button type="submit" class="button">Open email draft ${arrow}</button><p class="form-note">Opens your email app with these details. You review and send the message there.</p><p class="form-status" id="form-status" role="status" aria-live="polite"></p></form></div><div class="contact-sidenote"><span>Based in the UAE · From Kerala, India</span><span>Creative design / Brand communication / UI design</span></div></div>`;}

function gallery() {return `<div class="wrap"><section class="gallery-intro"><p class="eyebrow"><span class="dot"></span>Personal practice / @Mr_moonstruck_</p><h1>The painting<br><span>room.</span></h1><p>My personal painting practice explores character, colour, and mood. These selected works are a space to tell stories, experiment with imagery, and follow an idea beyond a commercial brief.</p></section><div class="gallery-toolbar"><span>03 paintings · Selected from the existing portfolio</span><span>Open an artwork to look closer ↗</span></div><section class="gallery-grid" aria-label="Painting collection">${paintings.map((p,i)=>`<button class="art-card" data-art="${i}" aria-label="Enlarge ${p.label}"><div class="art-image"><img src="${imagePath(p.image)}" alt="${p.alt}" loading="lazy" decoding="async" width="440" height="568"><span class="expand" aria-hidden="true">⤢</span></div><h2>${p.label}</h2><p>Title & year pending · Portfolio crop</p></button>`).join('')}</section><div class="gallery-pending"><div><h3>More to hang here.</h3><p>Placeholder for additional paintings. Original high-resolution files, artwork titles, dates, and medium details are pending. The images above are crops from my existing portfolio.</p></div><span class="plus" aria-hidden="true">+</span></div>${contactStrip()}</div>`;}

function closeMenu(returnFocus=false) {
  const button=$('.menu-toggle');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');$('#mobile-nav').hidden=true;if(returnFocus)button.focus();
}
function route(initial=false) {
  if(location.hash==='#main') {$('#main').focus();return;}
  const raw=location.hash.replace(/^#\/?/,'').split('?');
  const page=['home','work','about','contact','paintings'].includes(raw[0])?raw[0]:'home';
  state.page=page;
  if(page==='work') {const params=new URLSearchParams(raw[1]||'');state.filter=categories.some(c=>c.id===params.get('filter'))?params.get('filter'):'all';state.query=(params.get('q')||'').slice(0,100);}
  closeMenu();
  stickerController?.destroy();
  lanyardController?.destroy();
  lanyardController = null;
  stickerController = null;
  document.querySelectorAll('dialog[open]').forEach(d=>d.close());
  const main=$('#main');main.innerHTML=({home,work,about,contact,paintings:gallery})[page]();
  main.classList.remove('page-enter');void main.offsetWidth;main.classList.add('page-enter');
  document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===(page==='paintings'?'work':page))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  document.title=`${page==='home'?'Design, with curiosity.':({work:'Selected work',about:'About Akhil',contact:'Let’s discuss it',paintings:'The painting room'})[page]} — Akhil Subhash`;
  if(page==='work'){paintWork();$('#project-search').addEventListener('input',e=>{state.query=e.target.value;paintWork();updateWorkURL();});}
  if(page==='contact')$('#contact-form').addEventListener('submit',prepareEmail);
  if(!initial){window.scrollTo({top:0,behavior:'instant'});main.focus({preventScroll:true});}
  if(page==='home')stickerController=createStickerLab(document.querySelector('.sticker-lab'));
  if(page==='about')lanyardController=createLanyardPass(document.querySelector('[data-lanyard]'));
  observeReveals();
}

function updateWorkURL() {const params=new URLSearchParams();if(state.filter!=='all')params.set('filter',state.filter);if(state.query)params.set('q',state.query);history.replaceState(null,'',`#/work${params.size?'?'+params:''}`);}
function observeReveals() {
  revealObserver?.disconnect();
  if(matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window))return;
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');revealObserver.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.section-heading,.approach,.art-feature,.contact-strip,.about-detail,.experience,.tool-section').forEach(el=>revealObserver.observe(el));
}

function openProject(id) {
  const project=projects.find(p=>p.id===id);if(!project)return;
  if(project.category==='painting'){location.hash='/paintings';return;}
  state.project=projects.indexOf(project);state.presentation=0;state.section=0;resetProjectMedia();renderProject();
  const dialog=$('#project-dialog');if(!dialog.open)dialog.showModal();document.body.classList.add('locked');dialog.scrollTop=0;
}
function projectFigure(project,name,caption) {
  const size=project.mediaDimensions?.[name];
  return `<figure class="detail-image ${name.includes('dashboard')?'portrait':''}"><img src="${imagePath(name)}" alt="${esc(caption)} — ${esc(project.title)}" ${size?`width="${size[0]}" height="${size[1]}"`:''} loading="lazy" decoding="async"><figcaption><span>${esc(caption)} · ${esc(project.imageSource||'Existing portfolio image')}</span>${project.fullImageLinks?`<a class="full-artwork-link" href="${imagePath(name)}" target="_blank" rel="noopener noreferrer">Open full image <span aria-hidden="true">↗</span></a>`:''}</figcaption></figure>`;
}
function presentationFrame(sample) {
  const section=sample.sections[state.section];
  return `<figure class="presentation-artwork"><img src="${imagePath(section.image)}" alt="${esc(sample.title)} — ${esc(section.label)}" width="${section.width}" height="${section.height}" decoding="async"><figcaption><span>${esc(section.label)}</span><a href="${imagePath(section.image)}" target="_blank" rel="noopener noreferrer">Open section at full size ↗</a></figcaption></figure>`;
}
function presentationBody(sample) {
  return `<div class="presentation-intro"><p class="eyebrow">${esc(sample.subtitle)} / presentation sample</p><h3>${esc(sample.title)}</h3><p>${esc(sample.description)}</p></div><div class="presentation-controls"><label for="presentation-section">Explore the presentation<select id="presentation-section">${sample.sections.map((section,i)=>`<option value="${i}">${String(i+1).padStart(2,'0')} / ${esc(section.label)}</option>`).join('')}</select></label><div class="presentation-steps"><button class="icon-button" data-section-step="-1" aria-label="Previous presentation section" disabled>←</button><button class="icon-button" data-section-step="1" aria-label="Next presentation section">→</button></div></div><p class="presentation-status" role="status" aria-live="polite" aria-atomic="true">Section 1 of ${sample.sections.length} · ${esc(sample.sections[0].label)}</p><div class="presentation-frame">${presentationFrame(sample)}</div><a class="presentation-complete" href="${imagePath(sample.complete)}" target="_blank" rel="noopener noreferrer">Open complete presentation <span aria-hidden="true">↗</span></a><p class="presentation-note">Previewed in sections from the supplied presentation. Application mockups show proposed uses.</p>`;
}
function renderPresentationViewer(project) {
  return `<section class="presentation-viewer" aria-label="Logo presentation samples"><p class="eyebrow">Two presentations / choose a sample</p><div class="presentation-picker" role="group" aria-label="Choose a logo presentation">${project.presentations.map((sample,i)=>`<button type="button" data-presentation="${i}" aria-pressed="${i===state.presentation}"><img src="${imagePath(sample.cover)}" alt="" width="700" height="500" loading="lazy" decoding="async"><span><strong>${esc(sample.title)}</strong><small>${sample.sections.length} sections · ${esc(sample.subtitle)}</small></span><span class="presentation-check" aria-hidden="true">↗</span></button>`).join('')}</div><div class="presentation-body">${presentationBody(project.presentations[state.presentation])}</div></section>`;
}
function selectPresentation(index) {
  const project=projects[state.project];if(!project.presentations?.[index])return;
  state.presentation=index;state.section=0;
  const viewer=$('.presentation-viewer');
  viewer.querySelectorAll('[data-presentation]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.presentation)===index)));
  $('.presentation-body',viewer).innerHTML=presentationBody(project.presentations[index]);
}
function showPresentationSection(index) {
  const sample=projects[state.project].presentations?.[state.presentation];if(!sample)return;
  state.section=Math.max(0,Math.min(index,sample.sections.length-1));
  const viewer=$('.presentation-viewer');
  $('#presentation-section',viewer).value=String(state.section);
  $('[data-section-step="-1"]',viewer).disabled=state.section===0;
  $('[data-section-step="1"]',viewer).disabled=state.section===sample.sections.length-1;
  $('.presentation-frame',viewer).innerHTML=presentationFrame(sample);
  $('.presentation-status',viewer).textContent=`Section ${state.section+1} of ${sample.sections.length} · ${sample.sections[state.section].label}`;
}
function stepPresentationSection(direction){showPresentationSection(state.section+direction);}
document.addEventListener('change',event=>{if(event.target.id==='presentation-section')showPresentationSection(Number(event.target.value));});
function renderProject() {
  const p=projects[state.project];
  $('#project-dialog').innerHTML=`<div class="dialog-top"><span>Selected work / ${p.type}</span><button class="close-button" data-close="project-dialog" aria-label="Close project" autofocus>×</button></div><article class="dialog-body"><p class="eyebrow">${String(state.project+1).padStart(2,'0')} / ${p.placeholder?'Overview — case study pending':p.sourceLabel||'From the existing portfolio'}</p><h2 id="dialog-title">${p.title}</h2><p class="dialog-lead">${p.summary}</p>${p.website?`<a class="project-live-link" href="${esc(p.website)}" target="_blank" rel="noopener noreferrer">Visit live website <span aria-hidden="true">↗</span></a>`:''}<dl class="project-facts"><div><dt>Discipline</dt><dd>${p.type}</dd></div><div><dt>Contribution</dt><dd>${p.role}</dd></div><div><dt>Project year</dt><dd>${p.year||'To be confirmed'}</dd></div></dl><p class="project-description">${p.description}</p>${p.presentations?renderPresentationViewer(p):''}${renderProjectMedia(p)}${p.pending?`<div class="dialog-note"><strong>${p.placeholder?'Overview pending':'Case study details pending'}</strong>${p.pending}</div>`:''}<div class="dialog-bottom"><button class="button" data-discuss="${p.title}">Discuss a similar brief ${arrow}</button><div class="dialog-next"><button class="icon-button" data-project-step="-1" aria-label="Previous project">←</button><button class="icon-button" data-project-step="1" aria-label="Next project">→</button></div></div></article>`;
}
function stepProject(direction){const browse=projects.filter(p=>p.category!=='painting');const index=browse.indexOf(projects[state.project]);openProject(browse[(index+direction+browse.length)%browse.length].id);$('#project-dialog .close-button').focus({preventScroll:true});}
function openArt(index) {
  state.art=(index+paintings.length)%paintings.length;const p=paintings[state.art];const dialog=$('#art-dialog');
  dialog.innerHTML=`<div class="dialog-top"><span>The painting room</span><button class="close-button" data-close="art-dialog" aria-label="Close artwork" autofocus>×</button></div><div class="art-viewer"><img src="${imagePath(p.image)}" alt="${p.alt}"><div class="art-info"><div class="art-counter" aria-live="polite">${String(state.art+1).padStart(2,'0')} / 03</div><h2 id="art-title">${p.label}</h2><p>Artwork title, year, and medium pending.<br><br>Image cropped from the existing portfolio. Original high-resolution file pending.</p><div class="dialog-next"><button class="icon-button" data-art-step="-1" aria-label="Previous painting">←</button><button class="icon-button" data-art-step="1" aria-label="Next painting">→</button></div></div></div>`;
  if(!dialog.open)dialog.showModal();document.body.classList.add('locked');dialog.scrollTop=0;
}
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3000);}
async function copyEmail(){try{await navigator.clipboard.writeText('akhilts525@gmail.com');toast('Email address copied');}catch{toast('Email: akhilts525@gmail.com');}}
function emailDraft(data){return 'mailto:akhilts525@gmail.com?'+new URLSearchParams({subject:`Portfolio enquiry — ${data.get('interest')}`,body:`Hi Akhil,\n\n${data.get('message').trim()}\n\nName: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}`}).toString().replace(/\+/g,'%20');}
function prepareEmail(event){event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);location.href=emailDraft(data);$('#form-status').textContent='Your email app will open a draft. Review it and send it there. If it doesn’t open, email me directly using the address on this page.';}

document.addEventListener('click',event=>{
  const target=event.target.closest('button,a');if(!target)return;
  if(target.hasAttribute('data-toggle-marquee')){const paused=target.getAttribute('aria-pressed')!=='true';target.setAttribute('aria-pressed',String(paused));target.setAttribute('aria-label',paused?'Play scrolling text':'Pause scrolling text');target.title=paused?'Play scrolling text':'Pause scrolling text';target.textContent=paused?'▶':'Ⅱ';target.closest('.creative-strip').classList.toggle('is-paused',paused);return;}
  if(target.matches('.menu-toggle')){const open=target.getAttribute('aria-expanded')==='true';target.setAttribute('aria-expanded',String(!open));target.setAttribute('aria-label',open?'Open navigation':'Close navigation');$('#mobile-nav').hidden=open;return;}
  if(target.hasAttribute('data-presentation')){selectPresentation(Number(target.dataset.presentation));return;}
  if(target.hasAttribute('data-section-step')){stepPresentationSection(Number(target.dataset.sectionStep));return;}
  if(target.dataset.project){openProject(target.dataset.project);return;}
  if(target.hasAttribute('data-art')){openArt(Number(target.dataset.art));return;}
  if(target.dataset.close){document.getElementById(target.dataset.close).close();return;}
  if(target.hasAttribute('data-project-step')){stepProject(Number(target.dataset.projectStep));return;}
  if(target.hasAttribute('data-art-step')){openArt(state.art+Number(target.dataset.artStep));return;}
  if(target.hasAttribute('data-filter')){state.filter=target.dataset.filter;paintWork();updateWorkURL();return;}
  if(target.hasAttribute('data-reset')){state.query='';state.filter='all';$('#project-search').value='';paintWork();updateWorkURL();$('#project-search').focus();return;}
  if(target.hasAttribute('data-copy')){copyEmail();return;}
  if(target.hasAttribute('data-discuss')){contactInterest=`I’d like to discuss a project similar to ${target.dataset.discuss}. `;$('#project-dialog').close();location.hash='/contact';return;}
  if(target.closest('.mobile-nav'))closeMenu();
  if(target.getAttribute('href')===location.hash&&target.getAttribute('href').startsWith('#/')){event.preventDefault();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&$('.menu-toggle').getAttribute('aria-expanded')==='true')closeMenu(true);
  const direction=event.key==='ArrowRight'?1:event.key==='ArrowLeft'?-1:0;
  if(!direction||event.target.matches('input,select,textarea'))return;
  if($('#media-dialog').open){event.preventDefault();stepProjectMedia(direction);return;}
  if(event.target.closest('.presentation-viewer')){event.preventDefault();stepPresentationSection(direction);return;}
  if($('#art-dialog').open){event.preventDefault();openArt(state.art+direction);}else if($('#project-dialog').open){event.preventDefault();stepProject(direction);}
});
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('locked');});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
});
matchMedia('(min-width:701px)').addEventListener('change',()=>closeMenu());
window.addEventListener('hashchange',()=>route());
route(true);
