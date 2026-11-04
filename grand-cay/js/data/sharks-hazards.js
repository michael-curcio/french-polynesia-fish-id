// Sharks & rays, and protected species & hazards.
const SHARK_LAW = 'The Bahamas has been a shark sanctuary since 2011: no catching, landing, possessing or selling sharks or shark products. Release any shark caught by accident.';

export default [
  {
    id: 'caribbean-reef-shark',
    name: 'Caribbean reef shark',
    aka: [],
    sci: 'Carcharhinus perezi',
    family: 'Carcharhinidae (requiem sharks)',
    group: 'sharks-rays',
    verdict: 'protected',
    note: 'The shark you\'ll see most on Bahamian reefs, and the one most likely to take your fish.',
    abundance: 'common',
    size: { m: [1.5, 2.5], maxM: 3 },
    depth: [5, 40],
    features: [
      'Grey-brown back, white belly; no obvious markings',
      'Dusky tips on the pectoral, pelvic and lower tail fins',
      'Small ridge between the dorsal fins'
    ],
    lookAlikes: [
      { id: 'blacktip-shark', name: 'Blacktip shark', tell: 'Black tips on most fins, white band on the flank, pointed snout.' },
      { id: 'bull-shark', name: 'Bull shark', tell: 'Bulkier, blunt snout, no ridge between the dorsals.' }
    ],
    where: 'Outer reef, drop-offs and deep patch reefs.',
    behavior: 'Arrives within seconds of a speared fish thrashing. Usually cautious with divers, bolder when fish are in the water.',
    hunt: null,
    rules: { status: 'protected', text: SHARK_LAW },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: [
      'Move spots if reef sharks start showing up after your first shot.',
      'Never keep fish on a stringer on your body; get them into the boat at once.',
      'Face an approaching shark and keep it in view; don\'t splash.'
    ]
  },
  {
    id: 'nurse-shark',
    name: 'Nurse shark',
    aka: [],
    sci: 'Ginglymostoma cirratum',
    family: 'Ginglymostomatidae (nurse sharks)',
    group: 'sharks-rays',
    verdict: 'protected',
    note: 'Docile bottom shark that bites hard if grabbed or cornered.',
    abundance: 'common',
    size: { m: [1.5, 3], maxM: 3 },
    depth: [1, 40],
    features: [
      'Brown, flattened head; two fleshy barbels at the nostrils',
      'Two dorsal fins set far back, close together',
      'Long upper tail lobe with no lower lobe'
    ],
    lookAlikes: [
      { id: 'lemon-shark', name: 'Lemon shark', tell: 'Yellow-brown, two dorsals of nearly equal size, no barbels; swims in open water.' }
    ],
    where: 'Resting under ledges and on sand; around docks where fish are cleaned.',
    behavior: 'Rests on the bottom by day. Tame around cleaning stations at docks.',
    hunt: null,
    rules: { status: 'protected', text: SHARK_LAW },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: ['Never grab or ride one: a nurse shark latches on and won\'t let go.']
  },
  {
    id: 'lemon-shark',
    name: 'Lemon shark',
    aka: [],
    sci: 'Negaprion brevirostris',
    family: 'Carcharhinidae (requiem sharks)',
    group: 'sharks-rays',
    verdict: 'protected',
    note: 'Yellowish shark of the flats and mangroves.',
    abundance: 'occasional',
    size: { m: [2, 3], maxM: 3.4 },
    depth: [0, 20],
    features: [
      'Yellow-brown to olive back',
      'Second dorsal fin almost as big as the first',
      'Short, blunt snout'
    ],
    lookAlikes: [
      { id: 'nurse-shark', name: 'Nurse shark', tell: 'Barbels on the snout, dorsals set far back, rests on the bottom.' },
      { id: 'bull-shark', name: 'Bull shark', tell: 'Grey, small second dorsal, very bulky.' }
    ],
    where: 'Flats, mangrove creeks and shallow sand; young use mangroves as nurseries.',
    behavior: 'Patrols flats and shallows; bolder around boats and fish scraps.',
    hunt: null,
    rules: { status: 'protected', text: SHARK_LAW },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: []
  },
  {
    id: 'bull-shark',
    name: 'Bull shark',
    aka: [],
    sci: 'Carcharhinus leucas',
    family: 'Carcharhinidae (requiem sharks)',
    group: 'sharks-rays',
    verdict: 'protected',
    note: 'Heavy, bold and dangerous around speared fish. Leave the water if one gets pushy.',
    abundance: 'occasional',
    size: { m: [2, 3], maxM: 3.5 },
    depth: [0, 30],
    features: [
      'Very thick, heavy body; short, blunt, rounded snout',
      'Plain grey with a white belly; fin tips dusky on young',
      'Big first dorsal, small second; no ridge between them'
    ],
    lookAlikes: [
      { id: 'caribbean-reef-shark', name: 'Caribbean reef shark', tell: 'Slimmer, longer snout, ridge between the dorsals.' },
      { id: 'lemon-shark', name: 'Lemon shark', tell: 'Yellowish, second dorsal almost as big as the first.' }
    ],
    where: 'Channels, harbours, murky water and reefs; anywhere fish are being cleaned.',
    behavior: 'Bold and persistent when fish are in the water; often in murky water.',
    hunt: null,
    rules: { status: 'protected', text: SHARK_LAW },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: ['Give up the fish rather than fight a bull shark for it.']
  },
  {
    id: 'tiger-shark',
    name: 'Tiger shark',
    aka: [],
    sci: 'Galeocerdo cuvier',
    family: 'Galeocerdonidae (tiger sharks)',
    group: 'sharks-rays',
    verdict: 'protected',
    note: 'Huge, blunt-headed shark of the northern Bahamas banks; famous at Tiger Beach off Grand Bahama.',
    abundance: 'rare',
    size: { m: [3, 4.5], maxM: 5.5 },
    depth: [0, 50],
    features: [
      'Very broad, square snout',
      'Dark vertical stripes or blotches on the back, fading in big adults',
      'Long upper tail lobe; huge girth'
    ],
    lookAlikes: [
      { id: 'great-hammerhead', name: 'Great hammerhead', tell: 'Hammer-shaped head and very tall, sickle-shaped first dorsal.' }
    ],
    where: 'On the Little Bahama Bank and its edges, sand and seagrass, sometimes surprisingly shallow.',
    behavior: 'Slow, curious and often comes in from behind. Visits in cooler months.',
    hunt: null,
    rules: { status: 'protected', text: SHARK_LAW },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: ['Leave the water calmly if a tiger shark shows interest; keep facing it as you go.']
  },
  {
    id: 'great-hammerhead',
    name: 'Great hammerhead',
    aka: [],
    sci: 'Sphyrna mokarran',
    family: 'Sphyrnidae (hammerheads)',
    group: 'sharks-rays',
    verdict: 'protected',
    note: 'Critically endangered giant. Exciting to see, best kept at a distance.',
    abundance: 'rare',
    size: { m: [2.5, 4.5], maxM: 6 },
    depth: [0, 50],
    features: [
      'Wide hammer-shaped head with a nearly straight front edge',
      'Very tall, sickle-shaped first dorsal fin',
      'Grey-brown back, white belly'
    ],
    lookAlikes: [
      { id: 'tiger-shark', name: 'Tiger shark', tell: 'Square, flat snout, no hammer; stripes on the back.' }
    ],
    where: 'Sand flats and reef edges; most often seen in winter in the northern Bahamas.',
    behavior: 'Hunts stingrays on the sand; drawn to speared fish.',
    hunt: null,
    rules: { status: 'protected', text: SHARK_LAW },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: []
  },
  {
    id: 'blacktip-shark',
    name: 'Blacktip shark',
    aka: [],
    sci: 'Carcharhinus limbatus',
    family: 'Carcharhinidae (requiem sharks)',
    group: 'sharks-rays',
    verdict: 'protected',
    note: 'Fast, nervous shark of the shallows.',
    abundance: 'occasional',
    size: { m: [1.3, 1.8], maxM: 2.5 },
    depth: [0, 20],
    features: [
      'Black tips on most fins (fading on the anal fin)',
      'White band running along the flank',
      'Long, pointed snout'
    ],
    lookAlikes: [
      { id: 'caribbean-reef-shark', name: 'Caribbean reef shark', tell: 'Dusky (not black) fin tips, no flank band, shorter snout.' }
    ],
    where: 'Flats, channels and shallow reef.',
    behavior: 'Fast and skittish; gathers in schools in winter.',
    hunt: null,
    rules: { status: 'protected', text: SHARK_LAW },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: []
  },
  {
    id: 'southern-stingray',
    name: 'Southern stingray',
    aka: [],
    sci: 'Hypanus americanus',
    family: 'Dasyatidae (whiptail stingrays)',
    group: 'sharks-rays',
    verdict: 'avoid',
    note: 'Harmless unless stepped on or grabbed. Watch where you put your feet and knees.',
    abundance: 'common',
    size: { m: [0.6, 1.5], maxM: 2 },
    depth: [0, 30],
    features: [
      'Diamond-shaped disc, grey to brown on top, white below',
      'Whip-like tail with a serrated, venomous spine',
      'Often buried in sand with only the eyes showing'
    ],
    lookAlikes: [
      { id: 'spotted-eagle-ray', name: 'Spotted eagle ray', tell: 'White spots on a dark back, duck-bill snout; swims in mid-water.' }
    ],
    where: 'Sand flats and sand patches between reefs.',
    behavior: 'Rests buried in sand; digs for crabs and clams, often with jacks following it.',
    hunt: null,
    rules: { status: 'open', text: 'No Bahamian protection found, but not a spearfishing target.' },
    eat: { rating: 0, cig: 'unknown', text: 'Not worth taking.', tips: [] },
    notes: ['Shuffle your feet when wading to warn buried rays.', 'A sting is very painful: hot-water soak and medical care.']
  },
  {
    id: 'spotted-eagle-ray',
    name: 'Spotted eagle ray',
    aka: ['Whitespotted eagle ray'],
    sci: 'Aetobatus narinari',
    family: 'Aetobatidae (eagle rays)',
    group: 'sharks-rays',
    verdict: 'avoid',
    note: 'Graceful and harmless. Leave it be.',
    abundance: 'occasional',
    size: { m: [1, 2.5], maxM: 3 },
    depth: [0, 40],
    features: [
      'Dark back covered in white spots and rings',
      'Pointed, duck-bill snout',
      'Very long, thin tail with venomous spines at the base'
    ],
    lookAlikes: [
      { id: 'southern-stingray', name: 'Southern stingray', tell: 'Plain grey-brown, sits on the bottom, no spots.' }
    ],
    where: 'Over sand, seagrass and channels; often in small groups.',
    behavior: 'Glides in mid-water; digs for clams and conchs.',
    hunt: null,
    rules: { status: 'open', text: 'Listed as endangered (IUCN). Not a target.' },
    eat: { rating: 0, cig: 'unknown', text: 'Not taken.', tips: [] },
    notes: []
  },
  {
    id: 'green-turtle',
    name: 'Green sea turtle',
    aka: [],
    sci: 'Chelonia mydas',
    family: 'Cheloniidae (sea turtles)',
    group: 'hazards',
    verdict: 'protected',
    note: 'Fully protected in the Bahamas since 2009.',
    abundance: 'common',
    size: { cm: [80, 120] },
    depth: [0, 30],
    features: [
      'Small, rounded head with one pair of scales between the eyes',
      'Smooth, olive to brown shell; scales don\'t overlap',
      'Serrated lower jaw for grazing seagrass'
    ],
    lookAlikes: [
      { id: 'hawksbill-turtle', name: 'Hawksbill turtle', tell: 'Hawk-like beak and overlapping, tortoiseshell scales with a jagged rear edge.' },
      { id: 'loggerhead-turtle', name: 'Loggerhead turtle', tell: 'Huge head and reddish-brown shell.' }
    ],
    where: 'Seagrass beds and around docks and harbours.',
    behavior: 'Grazes seagrass; rests under ledges.',
    hunt: null,
    rules: { status: 'protected', text: 'All sea turtles are fully protected in the Bahamas since 2009: no taking, harming or possessing turtles, eggs or shell.' },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: []
  },
  {
    id: 'hawksbill-turtle',
    name: 'Hawksbill turtle',
    aka: [],
    sci: 'Eretmochelys imbricata',
    family: 'Cheloniidae (sea turtles)',
    group: 'hazards',
    verdict: 'protected',
    note: 'Critically endangered reef turtle. Fully protected.',
    abundance: 'occasional',
    size: { cm: [60, 90] },
    depth: [0, 30],
    features: [
      'Narrow head with a hooked, hawk-like beak',
      'Overlapping amber-and-brown tortoiseshell scales',
      'Jagged, serrated rear edge to the shell'
    ],
    lookAlikes: [
      { id: 'green-turtle', name: 'Green sea turtle', tell: 'Rounded head, smooth shell with non-overlapping scales.' }
    ],
    where: 'Coral reefs, especially around sponges.',
    behavior: 'Feeds on sponges on the reef.',
    hunt: null,
    rules: { status: 'protected', text: 'Fully protected since 2009.' },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal; hawksbill meat has also caused serious poisoning.', tips: [] },
    notes: []
  },
  {
    id: 'loggerhead-turtle',
    name: 'Loggerhead turtle',
    aka: [],
    sci: 'Caretta caretta',
    family: 'Cheloniidae (sea turtles)',
    group: 'hazards',
    verdict: 'protected',
    note: 'Big-headed turtle common on the northern Bahamas banks. Fully protected.',
    abundance: 'occasional',
    size: { cm: [80, 110] },
    depth: [0, 40],
    features: [
      'Very large, broad head with powerful jaws',
      'Reddish-brown, heart-shaped shell',
      'Often carries barnacles'
    ],
    lookAlikes: [
      { id: 'green-turtle', name: 'Green sea turtle', tell: 'Small, rounded head; olive shell.' }
    ],
    where: 'Reefs, sand and seagrass; moves between Florida and the Bahamas.',
    behavior: 'Crushes conchs, crabs and urchins.',
    hunt: null,
    rules: { status: 'protected', text: 'Fully protected since 2009.' },
    eat: { rating: 0, cig: 'unknown', text: 'Illegal to take.', tips: [] },
    notes: []
  },
  {
    id: 'goliath-grouper',
    name: 'Goliath grouper',
    aka: ['Jewfish (old name)'],
    sci: 'Epinephelus itajara',
    family: 'Epinephelidae (groupers)',
    group: 'hazards',
    verdict: 'avoid',
    note: 'Rare in the Bahamas and vulnerable. Leave it, and it can\'t be carried into US waters.',
    abundance: 'rare',
    size: { kg: [50, 200], cm: [120, 200], maxKg: 400 },
    depth: [3, 40],
    features: [
      'Enormous, broad head and body; tiny eyes',
      'Brown-yellow with small dark spots and faint, slanting bars',
      'Rounded tail and fins'
    ],
    lookAlikes: [
      { id: 'black-grouper', name: 'Black grouper', tell: 'Square, black-edged tail; brassy blotches; much smaller.' },
      { id: 'nassau-grouper', name: 'Nassau grouper', tell: 'Bars, tail saddle, much smaller.' }
    ],
    where: 'Wrecks, deep ledges and mangrove channels.',
    behavior: 'Slow and curious; booms loudly when disturbed.',
    hunt: null,
    rules: { status: 'restricted', text: 'No specific Bahamian protection found, but harvest is banned in US waters and boats can\'t bring it through them.' },
    eat: { rating: 0, cig: 'high', text: 'Don\'t take it; big groupers carry high ciguatera risk.', tips: [] },
    notes: []
  },
  {
    id: 'green-moray',
    name: 'Green moray',
    aka: [],
    sci: 'Gymnothorax funebris',
    family: 'Muraenidae (morays)',
    group: 'hazards',
    verdict: 'avoid',
    note: 'Big moray that lives in the same holes as crawfish. Look before you reach.',
    abundance: 'common',
    size: { m: [1, 1.8], maxM: 2.5 },
    depth: [1, 30],
    features: [
      'Plain green to olive-brown eel (the colour is a yellow mucus over blue skin)',
      'Thick body and big head; mouth opens and closes as it breathes'
    ],
    lookAlikes: [
      { id: 'spotted-moray', name: 'Spotted moray', tell: 'Smaller, pale with dense dark spots.' }
    ],
    where: 'Ledges, holes and crevices on every reef.',
    behavior: 'Hides by day with its head out; drawn to the smell of speared fish.',
    hunt: null,
    rules: { status: 'open', text: 'Not a target.' },
    eat: { rating: 0, cig: 'high', text: 'Morays are a high ciguatera risk.', tips: [] },
    notes: ['Never reach into a hole for a lobster or fish without looking first.']
  },
  {
    id: 'spotted-moray',
    name: 'Spotted moray',
    aka: [],
    sci: 'Gymnothorax moringa',
    family: 'Muraenidae (morays)',
    group: 'hazards',
    verdict: 'avoid',
    note: 'Common moray with a nasty bite.',
    abundance: 'common',
    size: { m: [0.5, 1], maxM: 1.2 },
    depth: [1, 20],
    features: [
      'Pale white to yellowish body crowded with dark brown spots',
      'Dark edge to the dorsal fin'
    ],
    lookAlikes: [
      { id: 'green-moray', name: 'Green moray', tell: 'Plain green and much bigger.' }
    ],
    where: 'Shallow reef, rubble and seagrass.',
    behavior: 'Hunts in the open more than other morays, especially at dusk.',
    hunt: null,
    rules: { status: 'open', text: 'Not a target.' },
    eat: { rating: 0, cig: 'high', text: 'Not eaten.', tips: [] },
    notes: []
  },
  {
    id: 'spotted-scorpionfish',
    name: 'Spotted scorpionfish',
    aka: [],
    sci: 'Scorpaena plumieri',
    family: 'Scorpaenidae (scorpionfishes)',
    group: 'hazards',
    verdict: 'avoid',
    note: 'Perfectly camouflaged with venomous spines. Watch your hands and knees.',
    abundance: 'common',
    size: { cm: [20, 35] },
    depth: [1, 30],
    features: [
      'Mottled brown camouflage with fleshy tabs',
      'Three dark bars on the tail',
      'Black inner surface of the pectoral fin with white spots, flashed when disturbed'
    ],
    lookAlikes: [
      { id: 'lionfish', name: 'Red lionfish', tell: 'Bold red-and-white stripes and long fan fins.' }
    ],
    where: 'On rock, rubble and coral; looks like part of the reef.',
    behavior: 'Lies still and ambushes small fish.',
    hunt: null,
    rules: { status: 'open', text: 'Legal, but a hazard more than a target.' },
    eat: { rating: 3, cig: 'low', text: 'Edible, with care around the spines.', tips: [] },
    notes: ['Spine wounds: hot-water soak (as hot as bearable) and medical care.']
  },
  {
    id: 'porcupinefish',
    name: 'Porcupinefish',
    aka: ['Puffer'],
    sci: 'Diodon hystrix',
    family: 'Diodontidae (porcupinefishes)',
    group: 'hazards',
    verdict: 'avoid',
    note: 'Never eat it: organs carry tetrodotoxin.',
    abundance: 'common',
    size: { cm: [30, 50] },
    depth: [2, 20],
    features: [
      'Big eyes and a wide, beak-like mouth',
      'Body covered in spines that stand up when it inflates',
      'Pale brown with small dark spots'
    ],
    lookAlikes: [],
    where: 'Under ledges on the reef by day.',
    behavior: 'Slow-moving; puffs up when threatened.',
    hunt: null,
    rules: { status: 'open', text: 'Not a target.' },
    eat: { rating: 0, cig: 'unknown', text: 'Tetrodotoxin in the liver, gut and skin can kill.', tips: [] },
    notes: []
  }
];
