// Core heritage site data for the prototype.
// Coordinates are approximate and sourced for demo accuracy, not survey-grade.

export const categories = {
  landmark: { label: "Landmark", symbol: "gye-nyame", color: "#B8472E" },
  sacred: { label: "Sacred Site", symbol: "nyame-dua", color: "#1F5C4F" },
  museum: { label: "Museum", symbol: "akoma", color: "#D4A24C" },
  nature: { label: "Natural Site", symbol: "duafe", color: "#1F5C4F" },
  festival: { label: "Festival", symbol: "sankofa", color: "#B8472E" },
};

export const languages = [
  { code: "en", label: "English" },
  { code: "ga", label: "Ga" },
  { code: "tw", label: "Twi" },
  { code: "ee", label: "Ewe" },
  { code: "dag", label: "Dagbani" },
  { code: "fr", label: "Français" },
];

export const sites = [
  {
    id: "jamestown-lighthouse",
    name: "Jamestown Lighthouse",
    category: "landmark",
    region: "Greater Accra",
    coords: { lat: 5.5311, lng: -0.2123 },
    yearBuilt: "1871 (rebuilt 1930s)",
    blurb:
      "A 28-metre tower that has watched over Accra's fishing canoes for over 150 years.",
    narrative:
      "Welcome to Jamestown. Imagine standing here over a century ago — fishing canoes lined the shore at dawn, their carved hulls slapping against the surf, while merchant ships waited offshore for the tide. The first lighthouse rose here in 1871, a beacon for sailors navigating the treacherous Gulf of Guinea coastline. The tower you see today was rebuilt in the 1930s, standing 28 metres tall, its light visible 16 nautical miles out to sea. Climb to its base and look toward the water: the same Ga fishing families who have worked this coast for generations still launch their canoes from this beach every morning, their rhythm unbroken by the centuries.",
    images: [
      "https://images.unsplash.com/photo-1655898482919-768c4d693c41?w=800&q=80",
    ],
    audioAvailable: ["en", "ga", "tw"],
    qrSlug: "jamestown-lighthouse",
  },
  {
    id: "james-fort",
    name: "James Fort",
    category: "landmark",
    region: "Greater Accra",
    coords: { lat: 5.5316, lng: -0.2131 },
    yearBuilt: "1673–74",
    blurb:
      "A 17th-century British fort and UNESCO World Heritage site that bears witness to the Gold Coast's hardest history.",
    narrative:
      "In 1673, English traders raised these walls on land leased from Ga Mantse Okaikoi, naming the fort for King James II. What began as a trading post became one of the busiest holding points on the Gold Coast during the transatlantic slave trade — its dark, airless rooms still stand as a sober witness to that history. Beneath the streets of Jamestown, sealed tunnels once connected the fort to nearby houses, part of a hidden network historians believe moved people and goods unseen. Walk these courtyards quietly. This ground asks for reflection, not just sightseeing.",
    images: [
      "https://images.unsplash.com/photo-1583407723467-9b2a9c5e1c2c?w=800&q=80",
    ],
    audioAvailable: ["en", "ga"],
    qrSlug: "james-fort",
    sensitivity: "historical-gravity",
  },
  {
    id: "aburi-botanical-gardens",
    name: "Aburi Botanical Gardens",
    category: "nature",
    region: "Eastern Region",
    coords: { lat: 5.8472, lng: -0.1808 },
    yearBuilt: "1890",
    blurb:
      "A 64-hectare colonial-era botanical garden in the cool Akuapem hills, planted in 1890.",
    narrative:
      "Climb into the Akuapem hills and the Accra heat falls away. Aburi was laid out in 1890 as a sanatorium garden — a place for colonial officials to recover from fever in cooler air. Today its avenues of silk cotton and mahogany trees, some over a century old, shade picnicking families and quiet walkers alike. Look for the giant ceiba tree near the entrance, its buttressed roots wider than a doorway. Local guides still point out the medicinal plants their grandmothers once gathered here.",
    images: [
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80",
    ],
    audioAvailable: ["en", "tw"],
    qrSlug: "aburi-gardens",
  },
  {
    id: "wli-waterfalls",
    name: "Wli Waterfalls",
    category: "nature",
    region: "Volta Region",
    coords: { lat: 7.1086, lng: 0.5775 },
    yearBuilt: "Natural site",
    blurb:
      "Ghana's tallest waterfall, sacred to the Ewe communities of the Agumatsa Range.",
    narrative:
      "Deep in the Agumatsa Wildlife Sanctuary, the Wli falls drop nearly 80 metres over the rocks the Ewe people have long considered sacred ground. The walk in takes you through forest alive with hundreds of fruit bats roosting in the cliffside caves — at dusk, watching them lift off into the sky is its own kind of spectacle. For the Ewe communities here, the falls are not just scenery; they're a living part of local cosmology, spoken of with the same respect given to ancestral shrines.",
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    ],
    audioAvailable: ["en", "ee"],
    qrSlug: "wli-falls",
  },
  {
    id: "brazil-house",
    name: "Brazil House",
    category: "museum",
    region: "Greater Accra",
    coords: { lat: 5.5325, lng: -0.2135 },
    yearBuilt: "19th century",
    blurb:
      "A Jamestown landmark built by Afro-Brazilian returnees, telling the story of the Tabom people.",
    narrative:
      "Not every story along this coast runs from Africa outward — some run back. Brazil House was built in the 19th century by Afro-Brazilian returnees, freed and formerly enslaved people who chose to come home and rebuild their lives in Jamestown. Its façade carries the distinct Brazilian colonial style you won't find elsewhere in Accra. Inside, exhibits trace the story of the Tabom people, descendants of those returnees, whose presence reshaped this small stretch of coastline and whose families remain part of Jamestown's fabric today.",
    images: [
      "https://images.unsplash.com/photo-1591608971358-f7c1ee9b9d59?w=800&q=80",
    ],
    audioAvailable: ["en", "ga", "fr"],
    qrSlug: "brazil-house",
  },
  {
    id: "ga-mashie-shrine",
    name: "Naa Korle Shrine Grounds",
    category: "sacred",
    region: "Greater Accra",
    coords: { lat: 5.5366, lng: -0.2245 },
    yearBuilt: "Pre-colonial",
    blurb:
      "A site tied to Naa Korle, the deity for whom the Korle Lagoon is named — central to Ga Mashie spiritual life.",
    narrative:
      "Long before Jamestown had its name, the Ga people called this stretch of coast Ga Mashie, and the lagoon at its edge was — and remains — spiritually significant, named for the deity Naa Korle. This is one of the least documented sites in this app, by design: the Ga Mantse's palace and local elders are the custodians of its deeper history, and what's shared publicly is intentionally limited out of respect for its sacred status. Visitors are welcome to view the grounds from the public path; please don't enter ceremonial areas without a community guide.",
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    ],
    audioAvailable: ["en", "ga"],
    qrSlug: "naa-korle-shrine",
    sensitivity: "sacred-limited-info",
  },
];

export const festivals = [
  {
    id: "homowo",
    name: "Homowo Festival",
    ethnicGroup: "Ga",
    region: "Greater Accra",
    season: "August (dates vary by chieftaincy calendar)",
    blurb:
      "The Ga harvest festival whose name means 'hooting at hunger' — a celebration of survival through a remembered famine.",
    description:
      "Homowo commemorates a period of famine in Ga history, overcome through hard work and unity. The name itself translates to 'hooting at hunger.' Festivities include the sprinkling of kpokpoi (a steamed corn and palm-oil dish) at family homes and along the streets, drumming, the Kpele dance, and a ban on noise-making in the lead-up period meant to let the harvest mature undisturbed.",
    accommodation: "Jamestown and Osu offer the closest lodging to the main processions.",
  },
  {
    id: "aboakyir",
    name: "Aboakyir (Deer Hunt) Festival",
    ethnicGroup: "Effutu",
    region: "Central Region (Winneba)",
    season: "First Saturday of May",
    blurb:
      "A live antelope hunt by two rival Asafo companies, held in Winneba since the 17th century.",
    description:
      "Two Asafo (warrior) companies — Tuafo and Dentsifo — compete to be first to catch a live bush antelope bare-handed, which is then presented to the chief as part of a ritual asking for the community's protection and prosperity. The festival blends competitive spectacle with deep religious significance for the Effutu people.",
    accommodation: "Winneba has guesthouses; many visitors day-trip from Accra (about 1.5 hrs).",
  },
  {
    id: "hogbetsotso",
    name: "Hogbetsotso Festival",
    ethnicGroup: "Anlo Ewe",
    region: "Volta Region (Anloga)",
    season: "First Saturday of November",
    blurb:
      "Commemorates the Anlo Ewe's escape from a tyrannical king's rule and their migration to present-day Ghana.",
    description:
      "Hogbetsotso means 'festival of exodus.' It marks the Anlo Ewe people's escape from the rule of Agorkoli, a historical migration retold through durbar processions, drumming, and the symbolic re-walking of the journey. It's one of the largest annual gatherings of Ewe communities and diaspora.",
    accommodation: "Anloga and nearby Keta have modest guesthouses; Ho offers more options for a slightly longer drive.",
  },
];

export const adinkraSymbols = {
  "gye-nyame": { meaning: "Supremacy of God", usage: "Major landmarks" },
  "nyame-dua": { meaning: "God's altar / protection", usage: "Sacred sites" },
  akoma: { meaning: "The heart — patience and tolerance", usage: "Museums & memory" },
  duafe: { meaning: "The wooden comb — care and cleanliness", usage: "Natural sites" },
  sankofa: { meaning: "Go back and get it", usage: "Festivals & heritage recovery" },
};
