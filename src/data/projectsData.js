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
    category: "Live visuals / Media systems",
    cover: getAsset("01-gta-cardib.webp"),
    description: [
      "Celebrating the launch of the long-awaited GTA VI, over 5000 fans gathered at Mana Wynwood to enjoy a festival packed full of immersive live visuals, lighting and effects, with artists such as Cardi B, Travis Scott and Tainy bringing the sounds of Vice City to life. ",
    ],
    // Add extra subpage-only filenames (e.g. "01-detail.jpg", "01-video.mp4") or Vimeo/YouTube embed URLs below:
    media: [],
  },
  {
    id: "02",
    slug: "stranger-things",
    hoverTitle: "STRANGER THINGS",
    fullTitle: "Stranger Things: One Last Adventure Fan Activation",
    year: "2025",
    category: "Immersive experience / Brand activation",
    cover: getAsset("02-strangerthings-onelastadventure.webp"),
    description: [
      "Trinity Buoy Wharf transformed into an immersive Stranger Things theme park, hosting 2500 superfans who celebrated the final chapter of the iconic Netflix show. Holographic projections and physical sets brought scenes and characters to life.",
    ],
    media: [],
    blocks: [
      {
        type: "text",
        label: "Brief",
        body: "Trinity Buoy Wharf transformed into an immersive Stranger Things theme park, hosting 2,500 superfans who celebrated the final chapter of the iconic Netflix show. Holographic projections and physical sets brought scenes and characters to life.",
      },
      {
        type: "media",
        items: [
          { src: "strangerthings-vecna2.mp4", kind: "video" },
          { src: "strangerthings-audience1.mp4", kind: "video" },
        ],
      },
      {
        type: "text",
        label: "Method",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Designed a dual-projector Hologauze projection rig powered by Panasonic RQ35K units, routed through a Datapath FX4 and redundant 50m HDMI and CAT6 signal paths from a dedicated 12U back-of-house media server rack synchronized with lighting and audio desks.",
      },
      {
        type: "media",
        items: [
          {
            src: "strangerthings-diagram.jpg",
            kind: "image",
            alt: "Media system architecture diagram for Stranger Things activation",
          },
          {
            src: "strangerthings-wide.jpg",
            kind: "image",
            alt: "Wide view of the Stranger Things holographic projection and crowd",
          },
        ],
      },
    ],
  },
  /* --- READY SLOT FOR PROJECT 03 (Uncomment when image is uploaded) ---
  {
    id: "03",
    slug: "meta",
    hoverTitle: "Project 03 Title",
    fullTitle: "Project 03 Elaborated Title",
    year: "2025",
    category: "Category",
    cover: getAsset("03-filename.webp"),
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
    category: "Immersive experience / Public art",
    cover: getAsset("04-hyperdrive.webp"),
    description: [
      "Hyperdrive took over the main stage of 2024 Seoul Light Festival, welcoming the public to experience 360° binaural sound, sensory effects, and theatrical design.",
    ],
    media: [],
  },
  {
    id: "05",
    slug: "hugo-boss",
    hoverTitle: "HUGO BOSS X DAVID BECKHAM",
    fullTitle: "Boss ONE Launch party at Lightroom London",
    year: "2025",
    category: "Live visuals / Brand activation",
    cover: getAsset("05-hugoboss.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  /* --- READY SLOTS FOR PROJECTS 06 & 07 (Uncomment when uploaded) ---
  {
    id: "06",
    slug: "manchester-airport",
    hoverTitle: "MANCHESTER AIRPORT VIP LOUNGE",
    fullTitle: "Project 06 Elaborated Title",
    year: "2025",
    category: "Category",
    cover: getAsset("06-filename.webp"),
    description: ["Project description coming soon."],
    media: [],
  },
  {
    id: "07",
    slug: "spotify-hq",
    hoverTitle: "AMSTERDAM SPOTIFY HQ",
    fullTitle: "Project 07 Elaborated Title",
    year: "2025",
    category: "Category",
    cover: getAsset("07-filename.webp"),
    description: ["Project description coming soon."],
    media: [],
  },
  --------------------------------------------------------------------- */
  {
    id: "08",
    slug: "nissan",
    hoverTitle: "NISSAN E-POWER",
    fullTitle: "Nissan E-POWER MILESTONE",
    year: "2024",
    category: "Immersive experience / Brand activation",
    cover: getAsset("08-nissan.webp"),
    description: [
      "To celebrate Nissan's 100,000 e-POWER vehicle sales milestone in Europe, stunning visuals reflecting the creativity and engineering genius of Nissan's Qashqai and X-Trail models were projected onto the vehicles.",
    ],
    media: [],
  },
  {
    id: "09",
    slug: "james",
    hoverTitle: "JAMES WORLD TOUR",
    fullTitle: "James World Tour",
    year: "2025, 2024",
    category: "Live visuals / Media systems",
    cover: getAsset("09-james.webp"),
    description: [
      "Global fans enjoyed James's music alongside cutting-edge technologies for live visuals and effects, designed to fit venues of all scales and systems across the UK.",
    ],
    media: [],
  },
  {
    id: "10",
    slug: "the-ks-leeds",
    hoverTitle: "The K's TOUR",
    fullTitle: "The K's National Tour",
    year: "2026",
    category: "Live visuals / Media systems",
    cover: getAsset("10-theks-leeds.webp"),
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
    category: "Immersive experience / Public art",
    cover: getAsset("11-eeg.webp"),
    description: [
      "Resonance is a live experiment where brain activity shapes the environment in real time. Five participants sit on stage, their brainwaves projected as shifting states of focus, calm, or distraction. The audience witnesses these invisible patterns merge, fragment, and reform, creating a collective portrait of thought and feeling.",
    ],
    media: [],
  },
  {
    id: "12",
    slug: "espolon",
    hoverTitle: "ESPOLÒN TEQUILA",
    fullTitle: "Espolòn Tequila Halloween Activation",
    year: "2026",
    category: "Brand activation / Digital experience",
    cover: getAsset("12-espolon.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "13",
    slug: "sxsw",
    hoverTitle: "SXSW X NOTCHVFX",
    fullTitle: "Immersive art installation with Notch VFX for SXSW",
    year: "2025",
    category: "Public art / Immersive experience",
    cover: getAsset("13-sxsw.webp"),
    description: [
      "Responsive digital art that responded to breath, motion, light, and sound. Each piece challenges the boundary between space and sensation",
    ],
    media: [],
  },
  {
    id: "14",
    slug: "aba-miami",
    hoverTitle: "ART BASEL MIAMI",
    fullTitle: "ART BASEL AWARDS",
    year: "2026",
    category: "Live visuals",
    cover: getAsset("14-aba-miami.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "15",
    slug: "harrods",
    hoverTitle: "HARRODS CHRISTMAS WINDOWS",
    fullTitle: "Harrods Christmas Displays 2023",
    year: "2023",
    category: "Public art / Brand experience",
    cover: getAsset("15-harrods.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "16",
    slug: "lapland",
    hoverTitle: "LAPLAND UK",
    fullTitle: "Lapland UK: Magical Winter",
    year: "2024, 2025",
    category: "Immersive Environment / Theatre design",
    cover: getAsset("16-lapland.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "17",
    slug: "boiler-room-club-shy",
    hoverTitle: "COACH X BOILER ROOM",
    fullTitle: "COACH X BOILER ROOM X CLUBSHY",
    year: "2026",
    category: "Live visuals / Media systems",
    cover: getAsset("17-boiler-clubshy.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "18",
    slug: "jo-malone",
    hoverTitle: "JO MALONE LONDON",
    fullTitle: "Jo Malone Christmas Windows 2025",
    year: "2025",
    category: "Brand experience",
    cover: getAsset("18-jomalone.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "19",
    slug: "boiler-room-burgess",
    hoverTitle: "BOILER ROOM X DJEZ X JYOTY",
    fullTitle: "Boiler Room at Burgess Park: DJEZ, JYOTY",
    year: "2023",
    category: "Live visuals / Media systems",
    cover: getAsset("19-boiler-burgess.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "20",
    slug: "ice-spice",
    hoverTitle: "SPOTIFY ICE SPICE LAUNCH",
    fullTitle: "Ice Spice Launch Party with Spotify",
    year: "2023",
    category: "Brand activation / Immersive experience",
    cover: getAsset("20-icespice.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
  {
    id: "21",
    slug: "printworks",
    hoverTitle: "PRINTWORKS X TRICK",
    fullTitle: "Trick label presenting at Printworks",
    year: "2023",
    category: "Live visuals",
    cover: getAsset("21-printworks.webp"),
    description: [
      "Project description coming soon.",
    ],
    media: [],
  },
];

export { getAsset };
export default projectsData;
