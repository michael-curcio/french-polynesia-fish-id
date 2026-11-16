// Bluewater: Gordo Banks and the other offshore banks off San José del Cabo.
const LIMIT = 'No size limit. Counts toward the spearfishing limit of 5 fish per person per day.';
const RESERVED = 'Reserved for sport fishing within 50 nautical miles of shore (no commercial take). ';

export default [
  {
    id: 'yellowfin-tuna',
    name: 'Yellowfin tuna',
    aka: ['Ahi'],
    local: 'Atún aleta amarilla',
    sci: 'Thunnus albacares',
    family: 'Scombridae (tunas & mackerels)',
    group: 'bluewater',
    verdict: 'target',
    note: 'The Gordo Banks prize. Big fish came off the banks in early November; El Niño\'s warm water keeps them close later than usual.',
    abundance: 'occasional',
    size: { kg: [10, 60], cm: [80, 150], maxKg: 200 },
    depth: [0, 30],
    features: [
      'Torpedo body, dark blue back, silver belly crossed by broken vertical lines',
      'Bright yellow finlets edged black and a yellow side stripe on live fish',
      'Big adults grow very long, sickle-shaped second dorsal and anal fins'
    ],
    lookAlikes: [
      { id: 'black-skipjack', name: 'Black skipjack', tell: 'Much smaller; dark stripes on the back and black spots under the pectoral fin.' },
      { id: null, name: 'Bigeye tuna', tell: 'Bigger eye, shorter second dorsal and anal fins, finlets yellow without a yellow side stripe; usually deeper.' }
    ],
    where: 'Over and around Gordo Banks and the Iman and San Luis banks, often with porpoise, birds or bait balls.',
    behavior: 'Fast schools that rarely stop; big fish sometimes swim up to inspect a diver hanging on a flasher in blue water.',
    hunt: {
      summary: 'Bluewater drift over the banks: drop flashers or chum, hang at 5–15 m and wait for them to rise.',
      tips: [
        'Use a long band gun or a gun with a breakaway to a float line and two or more floats: a 40 kg tuna will empty a reel.',
        'Shoot only inside the range that holds; a body shot on a big yellowfin means a long fight and sharks.',
        'Dive with a boat cover: currents over the banks are strong.'
      ],
      shot: 'The kill zone just behind and above the pectoral fin, or through the spine.',
      difficulty: 5
    },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Superb raw or seared.', tips: ['Bleed, gut and ice fast to avoid scombroid poisoning.'] },
    nino: 'Warm El Niño water keeps tuna on the banks into late autumn. A deeper thermocline can hold them deeper during the day.',
    notes: []
  },
  {
    id: 'wahoo',
    name: 'Wahoo',
    aka: ['Ono'],
    local: 'Peto',
    sci: 'Acanthocybium solandri',
    family: 'Scombridae (tunas & mackerels)',
    group: 'bluewater',
    verdict: 'target',
    note: 'Wahoo season kicks off at Gordo Banks in November. Fast and hard to hold, so rig for it.',
    abundance: 'occasional',
    size: { kg: [7, 25], cm: [100, 160], maxKg: 83 },
    depth: [0, 25],
    features: [
      'Long, torpedo body with a sharp, beak-like snout',
      '20–30 cobalt-blue vertical bars on a silver-blue flank (bars fade after death)',
      'Long, low first dorsal fin; mouth full of flat, razor-sharp teeth'
    ],
    lookAlikes: [
      { id: 'pacific-sierra', name: 'Pacific sierra', tell: 'Smaller, with rows of gold-orange spots and a short, black-tipped first dorsal; stays inshore.' },
      { id: 'mexican-barracuda', name: 'Mexican barracuda', tell: 'Two well-separated dorsal fins and an underslung jaw full of fangs.' }
    ],
    where: 'High spots and current lines over Gordo Banks and the outer banks; edges where bait gathers.',
    behavior: 'Patrols the bank tops alone or in loose packs, often fast near the surface. One of the fastest fish in the sea.',
    hunt: {
      summary: 'Hang still near the bank top in the current; wahoo usually make one fast pass.',
      tips: [
        'Flashers and a little chum bring passes. Lead the fish slightly.',
        'A slip tip and breakaway to a float line holds a wahoo far better than a fixed shaft.'
      ],
      shot: 'Spine just behind the head. A gut shot tears out.',
      difficulty: 5
    },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Excellent firm white meat.', tips: ['Ice it at once; wahoo softens fast in the heat.'] },
    nino: 'Reports this month put wahoo on the high spots and current lines at Gordo Banks.',
    notes: ['Mind the teeth when you land one.']
  },
  {
    id: 'dorado',
    name: 'Dorado',
    aka: ['Mahi-mahi', 'Dolphinfish'],
    local: 'Dorado',
    sci: 'Coryphaena hippurus',
    family: 'Coryphaenidae (dolphinfishes)',
    group: 'bluewater',
    verdict: 'shoot',
    note: 'Curious and good eating. Look under floating weed, logs and buoys.',
    abundance: 'occasional',
    size: { kg: [3, 14], cm: [60, 120], maxKg: 40 },
    depth: [0, 10],
    features: [
      'Gold-green body with blue flecks, fading to grey after death',
      'One dorsal fin from the head to the tail',
      'Bulls have a tall, square forehead; cows a rounded head'
    ],
    lookAlikes: [
      { id: 'rainbow-runner', name: 'Rainbow runner', tell: 'Blue and yellow horizontal stripes and separate finlets; no head-to-tail dorsal.' }
    ],
    where: 'Floating debris, kelp paddies and current lines offshore; sometimes near the banks.',
    behavior: 'Schools of small fish and pairs of big bulls and cows. Circles a still diver at the surface.',
    hunt: {
      summary: 'Drift with a floating object and let them circle in; shoot the closest big fish.',
      tips: ['Once one is shot, the school often stays close for a second shot.'],
      shot: 'Behind the head, high on the shoulder.',
      difficulty: 2
    },
    rules: { status: 'restricted', text: RESERVED + 'Sport limit: 2 dorado per person per day. Sources differ on how dorado count toward the 5-fish spearfishing limit.' },
    eat: { rating: 5, cig: 'low', text: 'Excellent mild white fillets.', tips: ['Ice at once: dorado can build histamine (scombroid) if left warm.'] },
    nino: 'Local reports expect dorado to pick up as the warm water finally starts to cool.',
    notes: []
  },
  {
    id: 'almaco-jack',
    name: 'Almaco jack',
    aka: ['Amberjack (in Cabo)'],
    local: 'Medregal',
    sci: 'Seriola rivoliana',
    family: 'Carangidae (jacks)',
    group: 'bluewater',
    verdict: 'target',
    note: 'The "amberjack" of Cabo spearfishing: curious, powerful and good eating at moderate size.',
    abundance: 'occasional',
    size: { kg: [5, 20], cm: [60, 110], maxKg: 60 },
    depth: [15, 60],
    features: [
      'Deep, flattened jack, olive-brown to bronze back',
      'Dark band from the eye up to the first dorsal fin',
      'Tall, sickle-shaped second dorsal and anal fins'
    ],
    lookAlikes: [
      { id: 'yellowtail', name: 'Yellowtail', tell: 'Slimmer, with a bright yellow tail and a yellow-bronze side stripe.' },
      { id: 'bigeye-trevally', name: 'Bigeye trevally', tell: 'Big eye, hard scutes on the tail base and a white-tipped second dorsal.' }
    ],
    where: 'Bank edges, pinnacles and drop-offs, usually below 20 m.',
    behavior: 'Comes straight up from depth to inspect divers and circles close.',
    hunt: {
      summary: 'Drop down the edge and wait: almacos close the distance themselves.',
      tips: ['A big one dives hard for the bottom; a slip tip and float line stop you losing fish and shafts.'],
      shot: 'Behind the gill plate on the lateral line, or the spine.',
      difficulty: 3
    },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 4, cig: 'moderate', text: 'Excellent sashimi; big fish carry worms in the tail meat and some ciguatera risk.', tips: ['Prefer mid-size fish.'] },
    notes: []
  },
  {
    id: 'yellowtail',
    name: 'Yellowtail',
    aka: ['Yellowtail amberjack'],
    local: 'Jurel',
    sci: 'Seriola dorsalis',
    family: 'Carangidae (jacks)',
    group: 'bluewater',
    verdict: 'shoot',
    note: 'A cool-water jack. In a strong El Niño most yellowtail move north, so expect few this week.',
    abundance: 'rare',
    size: { kg: [4, 12], cm: [60, 100], maxKg: 40 },
    depth: [5, 40],
    features: [
      'Torpedo jack with a bright yellow, deeply forked tail',
      'Yellow-bronze stripe from snout to tail',
      'Olive-blue back, silver belly'
    ],
    lookAlikes: [
      { id: 'almaco-jack', name: 'Almaco jack', tell: 'Deeper body, dark band through the eye and tall sickle fins; no yellow tail.' },
      { id: 'rainbow-runner', name: 'Rainbow runner', tell: 'Blue and yellow stripes, finlets, and blue on the back.' }
    ],
    where: 'Rocky points, pinnacles and banks in cooler water, usually winter and spring.',
    behavior: 'Schools that cruise rocky structure and bait schools; curious when you stay still.',
    hunt: {
      summary: 'Hang near structure in the current and let the school pass close.',
      tips: [],
      shot: 'Behind the gill plate or the spine.',
      difficulty: 3
    },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Excellent raw and grilled.', tips: [] },
    nino: 'El Niño pushes jurel north toward cooler water; Cabo catches usually drop sharply in strong events.',
    notes: []
  },
  {
    id: 'rainbow-runner',
    name: 'Rainbow runner',
    aka: [],
    local: 'Salmón',
    sci: 'Elagatis bipinnulata',
    family: 'Carangidae (jacks)',
    group: 'bluewater',
    verdict: 'shoot',
    note: 'Fast, sleek and fine eating; often under floating objects with dorado.',
    abundance: 'occasional',
    size: { kg: [1.5, 6], cm: [50, 90], maxKg: 17 },
    depth: [0, 20],
    features: [
      'Slender jack with two light-blue stripes and a yellow band between',
      'Olive-blue back, white belly',
      'Two small finlets behind the dorsal and anal fins'
    ],
    lookAlikes: [
      { id: 'yellowtail', name: 'Yellowtail', tell: 'Yellow tail and a single bronze-yellow stripe; no blue stripes or finlets.' },
      { id: 'dorado', name: 'Dorado', tell: 'Gold-green with a dorsal fin running head to tail.' }
    ],
    where: 'Blue water near the banks and under floating objects.',
    behavior: 'Schools in open water; swings in close to inspect divers.',
    hunt: { summary: 'Pick the closest fish as the school turns.', tips: [], shot: 'Spine behind the head.', difficulty: 3 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 4, cig: 'low', text: 'Very good raw or grilled.', tips: [] },
    notes: []
  },
  {
    id: 'black-skipjack',
    name: 'Black skipjack',
    aka: ['Bonito'],
    local: 'Barrilete negro',
    sci: 'Euthynnus lineatus',
    family: 'Scombridae (tunas & mackerels)',
    group: 'bluewater',
    verdict: 'shoot',
    note: 'Common small tuna; strong, dark meat. Most go for bait.',
    abundance: 'common',
    size: { kg: [2, 6], cm: [45, 70] },
    depth: [0, 20],
    features: [
      'Compact tuna with 3–5 dark wavy stripes on the back above the lateral line',
      'A few black spots between the pelvic and pectoral fins',
      'No scales behind the corselet'
    ],
    lookAlikes: [
      { id: 'yellowfin-tuna', name: 'Yellowfin tuna', tell: 'Yellow finlets and side stripe, no back stripes; grows far bigger.' }
    ],
    where: 'Surface schools busting bait offshore and along the coast.',
    behavior: 'Fast, frenzied schools that churn the surface.',
    hunt: { summary: 'Intercept a feeding school; shots are quick.', tips: [], shot: 'Behind the pectoral fin.', difficulty: 3 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 2, cig: 'low', text: 'Dark and strong; better smoked or as bait.', tips: ['Bleed at once.'] },
    notes: []
  },
  {
    id: 'striped-marlin',
    name: 'Striped marlin',
    aka: [],
    local: 'Marlin rayado',
    sci: 'Kajikia audax',
    family: 'Istiophoridae (billfishes)',
    group: 'bluewater',
    verdict: 'avoid',
    note: 'Cabo\'s signature sport fish. Leave billfish to the rod-and-reel boats and release fishery.',
    abundance: 'occasional',
    size: { kg: [40, 90], cm: [200, 290], maxKg: 224 },
    depth: [0, 20],
    features: [
      'Long spear-like bill; tall, pointed first dorsal fin',
      'Pale blue vertical stripes on the flank, lit up when excited',
      'Slimmer than blue marlin'
    ],
    lookAlikes: [
      { id: 'sailfish', name: 'Sailfish', tell: 'Huge, sail-like dorsal fin running most of the back.' }
    ],
    where: 'Offshore and over the banks, often on bait balls.',
    behavior: 'Herds bait to the surface, often in groups.',
    hunt: null,
    rules: { status: 'restricted', text: RESERVED + 'Sport limit: 1 billfish per person per day. Spearing billfish isn\'t accepted locally; release them.' },
    eat: { rating: 0, cig: 'low', text: 'Released in practice.', tips: [] },
    notes: []
  },
  {
    id: 'sailfish',
    name: 'Sailfish',
    aka: [],
    local: 'Pez vela',
    sci: 'Istiophorus platypterus',
    family: 'Istiophoridae (billfishes)',
    group: 'bluewater',
    verdict: 'avoid',
    note: 'Reserved sport fish and a catch-and-release icon. Enjoy it on a bait ball, don\'t shoot it.',
    abundance: 'occasional',
    size: { kg: [20, 50], cm: [180, 270], maxKg: 100 },
    depth: [0, 20],
    features: [
      'Huge, sail-like first dorsal fin, dark blue with spots',
      'Long, slender bill',
      'Blue-black back with pale vertical stripes or spots'
    ],
    lookAlikes: [
      { id: 'striped-marlin', name: 'Striped marlin', tell: 'Tall pointed dorsal, not a sail.' }
    ],
    where: 'Blue water near shore and over the banks in warm months.',
    behavior: 'Hunts sardine balls in packs, flashing colour.',
    hunt: null,
    rules: { status: 'restricted', text: RESERVED + 'Sport limit: 1 billfish per person per day. Release it.' },
    eat: { rating: 0, cig: 'low', text: 'Released in practice.', tips: [] },
    nino: 'Warm water keeps sailfish around longer into autumn.',
    notes: []
  }
];
