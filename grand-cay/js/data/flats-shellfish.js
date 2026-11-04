// Flats & shallows, plus crawfish and conch.
const FLATS = 'The Bahamas flats-fishing rules (in force since January 2017) cover bonefish, permit and tarpon: anglers need a flats licence, and catch and release is the norm.';

export default [
  {
    id: 'bonefish',
    name: 'Bonefish',
    aka: ['Grey ghost'],
    sci: 'Albula vulpes',
    family: 'Albulidae (bonefishes)',
    group: 'flats',
    verdict: 'avoid',
    note: 'A protected sport fish worth far more alive to the Abaco fishing economy. Never spear one.',
    abundance: 'common',
    size: { kg: [1, 4], cm: [40, 65], maxKg: 8.6 },
    depth: [0, 2],
    features: [
      'Bright silver body that mirrors the sand; faint dark lines along the back',
      'Pointed, conical snout overhanging a small mouth',
      'Deeply forked tail with dusky tips'
    ],
    lookAlikes: [
      { id: 'permit', name: 'Permit', tell: 'Deep, round silver body with a black-tipped, sickle-shaped dorsal and tail.' }
    ],
    where: 'Sand and grass flats around Grand Cay and the neighbouring cays, tailing on the rising tide.',
    behavior: 'Schools on the flats feeding on crabs and shrimp, nose-down with tails breaking the surface.',
    hunt: null,
    rules: { status: 'restricted', text: 'Netting, buying and selling bonefish are banned. ' + FLATS },
    eat: { rating: 1, cig: 'unknown', text: 'Bony; traditionally eaten in some islands but not worth it.', tips: [] },
    notes: []
  },
  {
    id: 'permit',
    name: 'Permit',
    aka: [],
    sci: 'Trachinotus falcatus',
    family: 'Carangidae (jacks & pompanos)',
    group: 'flats',
    verdict: 'avoid',
    note: 'A flats-fishing prize. Leave it for the fly rods.',
    abundance: 'occasional',
    size: { kg: [5, 15], cm: [60, 90], maxKg: 27 },
    depth: [0.5, 20],
    features: [
      'Deep, nearly round silver body',
      'Sickle-shaped dorsal, anal and tail fins with black tips',
      'Blunt head; dark patch near the pectoral fin on some fish'
    ],
    lookAlikes: [
      { id: 'bonefish', name: 'Bonefish', tell: 'Slim, torpedo body with a pointed snout.' },
      { id: 'crevalle-jack', name: 'Crevalle jack', tell: 'Black spot on the gill cover; scutes; yellowish tail.' }
    ],
    where: 'Flats, channels and nearby reefs and wrecks.',
    behavior: 'Cruises the flats alone or in small schools; very spooky in shallow water.',
    hunt: null,
    rules: { status: 'restricted', text: FLATS },
    eat: { rating: 4, cig: 'low', text: 'Good eating, but almost always released.', tips: [] },
    notes: []
  },
  {
    id: 'tarpon',
    name: 'Tarpon',
    aka: ['Silver king'],
    sci: 'Megalops atlanticus',
    family: 'Megalopidae (tarpons)',
    group: 'flats',
    verdict: 'avoid',
    note: 'Huge silver sport fish; catch and release only in practice. Don\'t spear.',
    abundance: 'rare',
    size: { m: [1.2, 2], maxM: 2.5 },
    depth: [0.5, 15],
    features: [
      'Big, armour-like silver scales',
      'Upturned, bucket-shaped mouth',
      'Last dorsal ray drawn into a long filament'
    ],
    lookAlikes: [],
    where: 'Channels, creeks, harbours and docks; often around marinas at dusk.',
    behavior: 'Rolls at the surface to gulp air; schools in channels.',
    hunt: null,
    rules: { status: 'restricted', text: FLATS },
    eat: { rating: 0, cig: 'unknown', text: 'Not eaten: bony and poor.', tips: [] },
    notes: []
  },
  {
    id: 'great-barracuda',
    name: 'Great barracuda',
    aka: ['’Cuda'],
    sci: 'Sphyraena barracuda',
    family: 'Sphyraenidae (barracudas)',
    group: 'flats',
    verdict: 'avoid',
    note: 'The Bahamas\' best-known ciguatera fish, and the thief that steals speared fish. Leave it.',
    abundance: 'common',
    size: { kg: [2, 12], cm: [60, 130], maxKg: 50 },
    depth: [0, 30],
    features: [
      'Long, silvery body with scattered black blotches on the lower flank',
      'Dark slanting bars on the upper side; can flash darker',
      'Big underslung jaw full of fang-like teeth',
      'Two well-separated dorsal fins'
    ],
    lookAlikes: [
      { id: 'cero', name: 'Cero', tell: 'Bronze spots and stripe, mackerel finlets, small teeth.' },
      { id: 'wahoo', name: 'Wahoo', tell: 'Blue bars, long low first dorsal, blue-water fish.' }
    ],
    where: 'Everywhere: flats, patch reefs, the outer reef and around boats.',
    behavior: 'Hangs motionless near divers, curious. Strikes at flashing fish, so it will hit a struggling speared fish.',
    hunt: null,
    rules: { status: 'open', text: 'Legal, with no size limit or season.' },
    eat: {
      rating: 2,
      cig: 'very-high',
      text: 'A Bahamian doctor has publicly urged people to stop eating barracuda. Large ones are the classic ciguatera fish.',
      tips: ['Don\'t eat it.']
    },
    notes: ['Get speared fish out of the water fast: a barracuda will grab a fish on a stringer and can hit a hand.', 'Remove shiny jewellery; flashes look like baitfish.']
  },
  {
    id: 'spiny-lobster',
    name: 'Caribbean spiny lobster',
    aka: ['Bahamas lobster'],
    bahamian: 'Crawfish',
    sci: 'Panulirus argus',
    family: 'Palinuridae (spiny lobsters)',
    group: 'shellfish',
    verdict: 'shoot',
    label: 'Take in season',
    note: 'The Bahamas\' most valuable catch. Legal 1 August – 31 March, if legal size and not carrying eggs.',
    abundance: 'common',
    size: { kg: [0.5, 1.5], cm: [20, 45] },
    depth: [1, 30],
    features: [
      'Spiny, mottled brown and cream shell; no big claws',
      'Two long, spiny antennae; two cream spots on the tail segments',
      'Two forward-pointing horns above the eyes'
    ],
    lookAlikes: [
      { id: null, name: 'Spotted spiny lobster', tell: 'Dark purple-brown with white spots all over; smaller.' },
      { id: null, name: 'Spanish (slipper) lobster', tell: 'Flat, plate-like antennae; no long whips.' }
    ],
    where: 'Under ledges, coral heads and in "condos" on patch reefs and the outer reef; antennae give them away.',
    behavior: 'Hides by day with antennae poking out; walks out to feed at night. Moves in long single-file lines in autumn.',
    hunt: {
      summary: 'Look under every ledge for antennae, then measure before you take it.',
      tips: [
        'A tickle stick and net lets you check size and eggs before you commit.',
        'If you use a sling or pole spear, be sure first: a speared short is a dead short.',
        'Check under the tail for orange egg masses and release berried females.'
      ],
      shot: 'With a pole spear, through the body shell (carapace), not the tail meat.',
      difficulty: 2
    },
    rules: {
      status: 'restricted',
      text: 'Season 1 August – 31 March. Minimum 3¼ in (8.3 cm) carapace or 5½ in (14 cm) tail. Egg-bearing females are protected and stripping eggs is illegal. Visiting boats: 10 crawfish on board at any time. No scuba or compressor.',
      closed: { from: [4, 1], to: [7, 31] }
    },
    eat: { rating: 5, cig: 'none', text: 'Prized: grilled, cracked or in a stew.', tips: [] },
    notes: []
  },
  {
    id: 'queen-conch',
    name: 'Queen conch',
    aka: [],
    bahamian: 'Conch',
    sci: 'Aliger gigas',
    family: 'Strombidae (true conchs)',
    group: 'shellfish',
    verdict: 'shoot',
    label: 'Adults only',
    note: 'A Bahamian staple in steep decline. Take only adults with a thick, flared lip, and only what you\'ll eat.',
    abundance: 'common',
    size: { cm: [15, 30] },
    depth: [1, 25],
    features: [
      'Heavy spiral shell with blunt spines on the shoulders',
      'Glossy pink inside the opening',
      'Adults grow a wide, flared, thick lip; juveniles ("rollers") have a thin edge'
    ],
    lookAlikes: [
      { id: null, name: 'Milk conch', tell: 'Smaller, whitish shell and opening; often in shallow grass.' }
    ],
    where: 'Seagrass beds and sand flats on the bank.',
    behavior: 'Grazes algae on grass and sand; often in groups.',
    hunt: {
      summary: 'Picked up by hand while free-diving. Leave rollers and thin-lipped shells.',
      tips: ['Lip thickness (about 15 mm or more) is the best sign of a mature conch.'],
      shot: 'Not speared: collected by hand.',
      difficulty: 1
    },
    rules: {
      status: 'restricted',
      text: 'Shell must have a well-formed, flared lip. Visiting boats: 6 conch on board at any time. No scuba or compressor. A 15 mm lip-thickness standard has been proposed. Queen conch can\'t be carried into US waters by boat.'
    },
    eat: { rating: 5, cig: 'none', text: 'Cracked, in salad or in fritters.', tips: ['Raw conch salad carries some Vibrio risk; eat it fresh.'] },
    notes: []
  }
];
