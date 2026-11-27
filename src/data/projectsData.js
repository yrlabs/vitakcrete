// Automatically loads every image/video inside src/assets/images/
const assetModules = import.meta.glob(
  "../assets/images/*.{webp,png,jpg,jpeg,gif,mp4}",
  { eager: true, import: "default" }
);

const getAsset = (filename) => {
  const path = `../assets/images/${filename}`;
  return assetModules[path] || "";
};

const projectsData = [
  {
    id: "01",
    slug: "gtavi",
    hoverTitle: "GTA VI",
    fullTitle: "Grand Theft Auto VI: The Festival",
    year: "2026",
    category: "Live Visuals / Media System",
    cover: getAsset("01-gta-cardib.jpg"),
    description: [
      "Celebrating the lauch of the long-awaited GTA VI, over 5000 fans gathered at Mana Wynwood to enjoy a festival packed full of immserive live visuals, lighting and effects, with artists such as Cardi B, Travis Scott and Tainy bringing the sounds of Vice City to life. ",
    ],
    // Add extra subpage-only filenames (e.g. "01-detail.jpg", "01-video.mp4") or Vimeo/YouTube embed URLs below:
    media: [],
  },
  {
    id: "02",
    slug: "strangerthings",
    hoverTitle: "STRANGER THINGS",
    fullTitle: "Stranger Things: One Last Adventure Fan Activation",
    year: "2025",
    category: "Immersive Experience / Brand Activation",
    cover: getAsset("02-strangerthings-onelastadventure.jpg"),
    description: [
      "Trinity Buoy Wharf transformed into an immersive Stranger Things theme park, hosting 2500 superfans who celebrated the final chapter of the iconic Netflix show. Holographic projections and physical sets brought scenes and characters to life.",
    ],
    media: [],
  },
  /* --- READY SLOT FOR PROJECT 03 (Uncomment when image is uploaded) ---
  {
    id: "03",
    slug: "project-03",
    hoverTitle: "Project 03 Title",
    fullTitle: "Project 03 Elaborated Title",
    year: "2025",
    category: "Category",
    cover: getAsset("03-filename.jpg"),
    description: ["Project description coming soon."],
    media: [],
  },
  --------------------------------------------------------------------- */
  {
    id: "04",
    slug: "hyperdrive",
    hoverTitle: "SEOUL LIGHT FESTIVAL",
    fullTitle: "2024 Seoul Light Festival: Hyperdrive",
    year: "2024",
    category: "Immersive Experience / Public Art",
    cover: getAsset("04-hyperdrive.png"),
    description: [
      "Hyperdrive took over the main stage of 2024 Seoul Light Festival, welcoming the public to experince 360° binaural sound, sensory effects, and theatrical design.",
    ],
    media: [],
  },
  {
    id: "05",
    slug: "hugo-boss",
    hoverTitle: "HUGO BOSS X DAVID BECKHAM",
    fullTitle: "",
    year: "2025",
    category: "Live Visuals / Brand Activation",
    cover: getAsset("05-hugoboss.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  /* --- READY SLOTS FOR PROJECTS 06 & 07 (Uncomment when uploaded) ---
  {
    id: "06",
    slug: "project-06",
    hoverTitle: "Project 06 Title",
    fullTitle: "Project 06 Elaborated Title",
    year: "2025",
    category: "Category",
    cover: getAsset("06-filename.jpg"),
    description: ["Project description coming soon."],
    media: [],
  },
  {
    id: "07",
    slug: "project-07",
    hoverTitle: "Project 07 Title",
    fullTitle: "Project 07 Elaborated Title",
    year: "2025",
    category: "Category",
    cover: getAsset("07-filename.jpg"),
    description: ["Project description coming soon."],
    media: [],
  },
  --------------------------------------------------------------------- */
  {
    id: "08",
    slug: "nissan",
    hoverTitle: "Nissan E-POWER",
    fullTitle: "Nissan E-POWER MILESTONE",
    year: "2024",
    category: "Immersive Experience / Brand Activation",
    cover: getAsset("08-nissan.jpg"),
    description: [
      "To celebrate Nissan's 100,000 e-POWER vehicle sales milestone in Europe, stunning visuals reflecting the creativity and engineering genius of Nissan's Quashquai and X-Trail models were projected onto the vehicles.",
    ],
    media: [],
  },
  {
    id: "09",
    slug: "james",
    hoverTitle: "James World Tour",
    fullTitle: "James World Tour",
    year: "2025, 2024",
    category: "Live Visuals / Media System",
    cover: getAsset("09-james.jpg"),
    description: [
      "Global fans enjoyed James's music alongside cutting-edge technologies for live visuals and effects, designed to fit venues of all scales and systems across the UK.",
    ],
    media: [],
  },
  {
    id: "10",
    slug: "the-ks-leeds",
    hoverTitle: "The K's — Leeds",
    fullTitle: "The K's Live in Leeds",
    year: "2025",
    category: "Live Concert Visuals",
    cover: getAsset("10-theks-leeds.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "11",
    slug: "cultvr",
    hoverTitle: "CULT VR",
    fullTitle: "Resonance at CultVR",
    year: "2025",
    category: "Creative Technology / Immersive Experience",
    cover: getAsset("11-eeg.jpg"),
    description: [
      "Resonance is a live experiment where brain activity shapes the environment in real time. Five participants sit on stage, their brainwaves projected as shifting states of focus, calm, or distraction. The audience witnesses these invisible patterns merge, fragment, and reform, creating a collective portrait of thought and feeling.",
    ],
    media: [],
  },
  {
    id: "12",
    slug: "espolon",
    hoverTitle: "Espolòn Tequila",
    fullTitle: "Espolòn Tequila Halloween Activation",
    year: "2026",
    category: "Brand Activation / Digital Experience",
    cover: getAsset("12-espolon.png"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "13",
    slug: "sxsw",
    hoverTitle: "SXSW",
    fullTitle: "SXSW Showcase",
    year: "2025",
    category: "Exhibition / Installation",
    cover: getAsset("13-sxsw.png"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "14",
    slug: "aba-miami",
    hoverTitle: "ABA Miami",
    fullTitle: "ABA Miami",
    year: "2025",
    category: "Spatial Visuals",
    cover: getAsset("14-aba-miami.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "15",
    slug: "harrods",
    hoverTitle: "Harrods",
    fullTitle: "Harrods",
    year: "2025",
    category: "Retail Installation",
    cover: getAsset("15-harrods.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "16",
    slug: "lapland",
    hoverTitle: "Lapland",
    fullTitle: "Lapland",
    year: "2025",
    category: "Immersive Environment",
    cover: getAsset("16-lapland.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "17",
    slug: "boiler-room-club-shy",
    hoverTitle: "Boiler Room: Club Shy",
    fullTitle: "Boiler Room — Club Shy",
    year: "2025",
    category: "Live Visuals",
    cover: getAsset("17-boiler-clubshy.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "18",
    slug: "jo-malone",
    hoverTitle: "Jo Malone London",
    fullTitle: "Jo Malone London",
    year: "2025",
    category: "Brand Installation",
    cover: getAsset("18-jomalone.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "19",
    slug: "boiler-room-burgess",
    hoverTitle: "Boiler Room: Burgess",
    fullTitle: "Boiler Room — Burgess",
    year: "2025",
    category: "Live Visuals",
    cover: getAsset("19-boiler-burgess.png"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "20",
    slug: "ice-spice",
    hoverTitle: "Ice Spice",
    fullTitle: "Ice Spice",
    year: "2025",
    category: "Stage Visuals",
    cover: getAsset("20-icespice.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "21",
    slug: "printworks",
    hoverTitle: "Printworks",
    fullTitle: "Printworks London",
    year: "2025",
    category: "Architectural Projection",
    cover: getAsset("21-printworks.jpg"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
];

export { getAsset };
export default projectsData;
