// Reef & patch reefs: hogfish, triggers, porgies, grunts, jacks, lionfish, parrotfish.
const DEMERSAL = 'Counts toward the visiting-boat demersal limit (60 lb or 20 fish).';

export default [
  {
    id: 'hogfish',
    name: 'Hogfish',
    aka: ['Hog snapper'],
    sci: 'Lachnolaimus maximus',
    family: 'Labridae (wrasses)',
    group: 'reef',
    verdict: 'target',
    note: 'The spearo\'s fish of the Bahamas: hard to catch on a hook, superb to eat. Take the big males.',
    abundance: 'occasional',
    size: { kg: [1, 4], cm: [35, 60], maxKg: 11 },
    depth: [3, 30],
    features: [
      'Long, pig-like snout; deep, laterally flattened body',
      'First three dorsal spines long and trailing like streamers',
      'Black spot at the rear base of the soft dorsal',
      'Big males: dark maroon-purple head and snout; females mottled pink to grey'
    ],
    lookAlikes: [
      { id: 'jolthead-porgy', name: 'Jolthead porgy', tell: 'Steep blunt head, no long dorsal spines, blue line under the eye.' }
    ],
    where: 'Sand and rubble around patch reefs and the reef edge, where it roots for crabs and conchs; also hard-bottom flats.',
    behavior: 'Feeds by blowing into the sand. Curious: will often swim towards a diver lying still on the bottom.',
    hunt: {
      summary: 'Drop to the sand some distance away and lie still; hogfish often come to inspect you.',
      tips: [
        'Stir sand or scrape rubble to imitate another feeding fish.',
        'Don\'t chase: a spooked hog swims off steadily just out of sling range.',
        'Let the small females go and take big, dark-headed males.'
      ],
      shot: 'Behind the gill plate, high toward the spine. The body is thin, so a shaft holds well.',
      difficulty: 3
    },
    rules: { status: 'open', text: 'No size limit or season. ' + DEMERSAL },
    eat: {
      rating: 5,
      cig: 'low',
      text: 'Among the best-eating fish in the Caribbean: sweet, white and flaky. Occasionally linked to ciguatera.',
      tips: []
    },
    notes: ['Hook-and-line catch is rare, so most hogfish on Bahamian tables were speared.']
  },
  {
    id: 'queen-triggerfish',
    name: 'Queen triggerfish',
    aka: ['Old wife'],
    bahamian: 'Turbot',
    sci: 'Balistes vetula',
    family: 'Balistidae (triggerfishes)',
    group: 'reef',
    verdict: 'shoot',
    note: 'The Bahamian "turbot". Tough-skinned, tasty and fairly easy.',
    abundance: 'common',
    size: { kg: [0.7, 2], cm: [30, 45], maxKg: 5.4 },
    depth: [3, 30],
    features: [
      'Two bright blue lines curving across the face',
      'Lines radiating from the eye; yellow-green to blue-grey body',
      'Long streamers on the soft dorsal fin and tail tips'
    ],
    lookAlikes: [
      { id: 'ocean-triggerfish', name: 'Ocean triggerfish', tell: 'Plain grey-brown, black spot at the pectoral base; lives up in open water off the edge.' }
    ],
    where: 'Patch reefs, rubble and sand edges.',
    behavior: 'Swims slowly over sand and rubble, flipping rocks for urchins. Locks into a hole with its spine when chased.',
    hunt: {
      summary: 'An easy approach over rubble; shoot before it reaches a hole.',
      tips: ['If it wedges into a crack, pressing the second dorsal spine releases the "trigger".'],
      shot: 'Behind the eye or high behind the gill plate; the skin is thick, so get close.',
      difficulty: 2
    },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Sweet, firm meat. Skin it rather than scale it.', tips: [] },
    notes: ['Strong teeth: keep fingers away from the mouth.']
  },
  {
    id: 'ocean-triggerfish',
    name: 'Ocean triggerfish',
    aka: [],
    sci: 'Canthidermis sufflamen',
    family: 'Balistidae (triggerfishes)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Big, plain triggerfish of the drop-off. Comes to divers.',
    abundance: 'occasional',
    size: { kg: [1, 3], cm: [35, 55], maxKg: 6 },
    depth: [10, 40],
    features: [
      'Plain grey to brown oval body',
      'Black blotch at the base of the pectoral fin',
      'Long, matching soft dorsal and anal fins that it sculls with'
    ],
    lookAlikes: [
      { id: 'queen-triggerfish', name: 'Queen triggerfish', tell: 'Blue facial lines, colourful body; stays on the bottom.' }
    ],
    where: 'Mid-water along the drop-off and over deep reef.',
    behavior: 'Hangs in the water column in small groups; curious about divers.',
    hunt: { summary: 'Dive the edge and let it approach; it often comes very close.', tips: [], shot: 'Behind the eye or high behind the gill.', difficulty: 2 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good, firm white meat; skin it.', tips: [] },
    notes: []
  },
  {
    id: 'jolthead-porgy',
    name: 'Jolthead porgy',
    aka: [],
    sci: 'Calamus bajonado',
    family: 'Sparidae (porgies)',
    group: 'reef',
    verdict: 'shoot',
    note: 'The big porgy. Bold, sand-feeding and good eating.',
    abundance: 'common',
    size: { kg: [1, 3], cm: [30, 50], maxKg: 10.6 },
    depth: [3, 30],
    features: [
      'Deep, silvery-brassy body with a steep, blunt forehead',
      'Blue line under the eye',
      'Silvery scales with a brassy sheen'
    ],
    lookAlikes: [
      { id: 'saucereye-porgy', name: 'Saucereye porgy', tell: 'Smaller, with a big eye and blue spots and lines on the cheek.' },
      { id: 'hogfish', name: 'Hogfish', tell: 'Long snout and long trailing dorsal spines.' }
    ],
    where: 'Sand and rubble at the base of patch reefs.',
    behavior: 'Roots in sand for crabs and urchins; fairly unafraid.',
    hunt: { summary: 'Approach low over sand; often holds still to watch you.', tips: [], shot: 'Behind the gill plate.', difficulty: 2 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good, white meat.', tips: [] },
    notes: []
  },
  {
    id: 'saucereye-porgy',
    name: 'Saucereye porgy',
    aka: [],
    sci: 'Calamus calamus',
    family: 'Sparidae (porgies)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Common pan-size porgy.',
    abundance: 'common',
    size: { kg: [0.4, 1.2], cm: [25, 35] },
    depth: [3, 20],
    features: [
      'Deep, silvery body with a big eye',
      'Blue spots and wavy blue lines on the cheek',
      'Steep forehead'
    ],
    lookAlikes: [
      { id: 'jolthead-porgy', name: 'Jolthead porgy', tell: 'Bigger, plainer face with a single blue line under the eye.' }
    ],
    where: 'Patch reefs and sand edges.',
    behavior: 'Alone or in pairs near reef.',
    hunt: { summary: 'Easy close shot.', tips: [], shot: 'Behind the gill plate.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good pan fish.', tips: [] },
    notes: []
  },
  {
    id: 'white-margate',
    name: 'White margate',
    aka: ['Margate'],
    sci: 'Haemulon album',
    family: 'Haemulidae (grunts)',
    group: 'reef',
    verdict: 'shoot',
    note: 'The biggest grunt; a solid table fish.',
    abundance: 'occasional',
    size: { kg: [1, 3], cm: [35, 55] },
    depth: [5, 30],
    features: [
      'Big, deep grunt, pearly grey-white',
      'Dark scale centres form faint lines; fins dusky',
      'Red inside the mouth (seen when it grunts)'
    ],
    lookAlikes: [
      { id: 'black-margate', name: 'Black margate', tell: 'Dark-centred scales, thick lips and black pelvic and anal fins.' },
      { id: 'white-grunt', name: 'White grunt', tell: 'Smaller, with blue and yellow stripes on the head.' }
    ],
    where: 'Sand flats and seagrass near reefs, often in groups.',
    behavior: 'Feeds over sand; moderately wary.',
    hunt: { summary: 'Wait at a reef edge for the group to drift past over the sand.', tips: [], shot: 'Behind the gill plate.', difficulty: 2 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good, mild meat.', tips: [] },
    notes: []
  },
  {
    id: 'black-margate',
    name: 'Black margate',
    aka: [],
    sci: 'Anisotremus surinamensis',
    family: 'Haemulidae (grunts)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Thick-lipped, dark grunt of ledges and caves.',
    abundance: 'occasional',
    size: { kg: [1, 4], cm: [35, 55] },
    depth: [3, 20],
    features: [
      'Deep, silvery-grey body; each scale has a dark centre',
      'Thick lips; black pelvic and anal fins',
      'Steep forehead'
    ],
    lookAlikes: [
      { id: 'white-margate', name: 'White margate', tell: 'Pale pearly-grey; no dark scale blotches.' }
    ],
    where: 'Under ledges, in caves and near wrecks.',
    behavior: 'Hangs under cover by day; shy.',
    hunt: { summary: 'Look under ledges; approach low and slow.', tips: [], shot: 'Behind the gill plate.', difficulty: 2 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good eating.', tips: [] },
    notes: []
  },
  {
    id: 'bluestriped-grunt',
    name: 'Bluestriped grunt',
    aka: [],
    sci: 'Haemulon sciurus',
    family: 'Haemulidae (grunts)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Classic "grits and grunts" pan fish.',
    abundance: 'common',
    size: { kg: [0.3, 1], cm: [25, 35] },
    depth: [1, 15],
    features: [
      'Yellow body covered in narrow, bright blue stripes',
      'Dark tail and rear dorsal fin'
    ],
    lookAlikes: [
      { id: 'white-grunt', name: 'White grunt', tell: 'Blue-and-yellow stripes on the head only; body pale with checked scales.' }
    ],
    where: 'Shallow reefs, mangrove edges and docks; often in big schools.',
    behavior: 'Schools by day under ledges and elkhorn coral.',
    hunt: { summary: 'Close shot on schooling fish.', tips: [], shot: 'Behind the gill plate.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 3, cig: 'low', text: 'Good fried whole.', tips: [] },
    notes: []
  },
  {
    id: 'white-grunt',
    name: 'White grunt',
    aka: [],
    sci: 'Haemulon plumierii',
    family: 'Haemulidae (grunts)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Common grunt with a striped face.',
    abundance: 'common',
    size: { kg: [0.3, 1], cm: [25, 35] },
    depth: [2, 20],
    features: [
      'Blue and yellow stripes on the head only',
      'Pale body with a checked scale pattern',
      'Red mouth lining'
    ],
    lookAlikes: [
      { id: 'bluestriped-grunt', name: 'Bluestriped grunt', tell: 'Blue stripes along the whole yellow body.' },
      { id: 'white-margate', name: 'White margate', tell: 'Bigger and plain pearly grey; no head stripes.' }
    ],
    where: 'Patch reefs and seagrass.',
    behavior: 'Schools under ledges by day; feeds over sand and grass at night.',
    hunt: { summary: 'Close shot on fish in the school.', tips: [], shot: 'Behind the gill plate.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 3, cig: 'low', text: 'Good pan fish.', tips: [] },
    notes: []
  },
  {
    id: 'bar-jack',
    name: 'Bar jack',
    aka: [],
    sci: 'Caranx ruber',
    family: 'Carangidae (jacks)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Common small jack that often swims right up to divers.',
    abundance: 'common',
    size: { kg: [0.5, 2], cm: [30, 45] },
    depth: [1, 20],
    features: [
      'Silvery jack with a black-and-electric-blue stripe along the back',
      'The stripe runs down into the lower lobe of the tail',
      'Slender body for a jack'
    ],
    lookAlikes: [
      { id: 'horse-eye-jack', name: 'Horse-eye jack', tell: 'Bigger, big eye, dark-edged yellow tail, no blue back stripe.' },
      { id: 'yellowtail-snapper', name: 'Yellowtail snapper', tell: 'Yellow stripe and yellow tail.' }
    ],
    where: 'Over reefs and sand flats; often follows stingrays to snatch prey.',
    behavior: 'Small groups; very curious, follows divers around.',
    hunt: { summary: 'Easy: it comes to you.', tips: [], shot: 'Behind the gill plate.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 3, cig: 'moderate', text: 'Decent, darker meat; bleed it. Occasionally implicated in Caribbean ciguatera.', tips: [] },
    notes: []
  },
  {
    id: 'horse-eye-jack',
    name: 'Horse-eye jack',
    aka: [],
    sci: 'Caranx latus',
    family: 'Carangidae (jacks)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Schooling jack of the outer reef. Fun to hunt, risky to eat when big.',
    abundance: 'common',
    size: { kg: [2, 6], cm: [45, 70], maxKg: 13 },
    depth: [5, 30],
    features: [
      'Big eye; silvery body, dark grey-blue back',
      'Yellow tail with a dark edge',
      'Hard, dark scutes along the tail base; small black spot at the top of the gill cover'
    ],
    lookAlikes: [
      { id: 'crevalle-jack', name: 'Crevalle jack', tell: 'Blunter head, black spot on the pectoral fin; yellower belly.' },
      { id: 'black-jack', name: 'Black jack', tell: 'Dark grey to black all over, steep snout, black scutes.' },
      { id: 'bar-jack', name: 'Bar jack', tell: 'Smaller, with a blue-black stripe along the back.' }
    ],
    where: 'Outer reef and drop-off, often circling in schools.',
    behavior: 'Big schools mill on the reef edge and swing close to divers.',
    hunt: { summary: 'Dive into the school\'s path and let it circle you.', tips: [], shot: 'Behind the gill plate on the lateral line.', difficulty: 2 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 2, cig: 'high', text: 'Coarse, dark meat; a known ciguatera carrier in the Caribbean and Florida.', tips: ['Skip big horse-eyes for the table.'] },
    notes: []
  },
  {
    id: 'crevalle-jack',
    name: 'Crevalle jack',
    aka: ['Jack crevalle'],
    sci: 'Caranx hippos',
    family: 'Carangidae (jacks)',
    group: 'reef',
    verdict: 'shoot',
    note: 'Powerful, blunt-headed jack. Great fight, average table fare.',
    abundance: 'occasional',
    size: { kg: [3, 10], cm: [50, 90], maxKg: 32 },
    depth: [1, 30],
    features: [
      'Blunt, steep head; deep, silvery-green body',
      'Black spot on the gill cover and another on the pectoral fin',
      'Yellowish belly and tail; strong scutes'
    ],
    lookAlikes: [
      { id: 'horse-eye-jack', name: 'Horse-eye jack', tell: 'Bigger eye, no black spot on the pectoral fin.' }
    ],
    where: 'Channels, reef edges, flats and around cuts between cays.',
    behavior: 'Fast schools that crash bait; moves through quickly.',
    hunt: { summary: 'Intercept a school at a channel or cut; shots are fast and brief.', tips: [], shot: 'Behind the gill plate.', difficulty: 3 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 2, cig: 'moderate', text: 'Strong, dark meat; better smoked. Bleed it at once.', tips: [] },
    notes: []
  },
  {
    id: 'black-jack',
    name: 'Black jack',
    aka: [],
    sci: 'Caranx lugubris',
    family: 'Carangidae (jacks)',
    group: 'reef',
    verdict: 'avoid',
    note: 'Leave it: deep, dark jack with a strong ciguatera reputation.',
    abundance: 'rare',
    size: { kg: [5, 15], cm: [60, 90] },
    depth: [15, 60],
    features: [
      'Dark grey to black all over, including the fins',
      'Concave dip above the snout gives a steep, angled head',
      'Jet-black scutes on the tail base'
    ],
    lookAlikes: [
      { id: 'horse-eye-jack', name: 'Horse-eye jack', tell: 'Silvery with a yellow tail; big eye.' }
    ],
    where: 'Deep drop-offs and walls, usually below 20 m.',
    behavior: 'Alone or in small groups at the edge; comes up to look at divers.',
    hunt: null,
    rules: { status: 'open', text: 'Legal, but not worth the ciguatera risk.' },
    eat: { rating: 1, cig: 'high', text: 'Repeatedly listed with barracuda and amberjack among the highest-risk ciguatera fish.', tips: ['Don\'t eat it.'] },
    notes: []
  },
  {
    id: 'lionfish',
    name: 'Red lionfish',
    aka: ['Lionfish'],
    sci: 'Pterois volitans',
    family: 'Scorpaenidae (scorpionfishes)',
    group: 'reef',
    verdict: 'invasive',
    note: 'Invasive and eats juvenile reef fish. Shoot every one you see, and handle with care.',
    abundance: 'common',
    size: { kg: [0.2, 0.7], cm: [20, 35] },
    depth: [1, 60],
    features: [
      'Red-brown and white vertical stripes',
      'Long, fan-like pectoral fins and tall, venomous dorsal spines',
      'Fleshy tabs above the eyes and on the chin'
    ],
    lookAlikes: [
      { id: 'spotted-scorpionfish', name: 'Spotted scorpionfish', tell: 'Mottled camouflage, no long fin rays; lies still on the bottom.' }
    ],
    where: 'Everywhere: ledges, coral heads, wrecks, mangroves and deep reef.',
    behavior: 'Hovers near ledges, slow and unafraid; corners small fish with its fins spread.',
    hunt: {
      summary: 'Easy: approach slowly and shoot it from the front or side. Bahamian rules on gear and distance still apply.',
      tips: [
        'Use a pole spear with a paralyser tip and a lionfish container (zookeeper) or puncture-proof bag.',
        'Never grab one; the spines go through gloves.'
      ],
      shot: 'Head or mid-body; anywhere that pins it.',
      difficulty: 1
    },
    rules: { status: 'open', text: 'No limit. Spearing rules (sling or pole spear, 200 yards from shore, no parks, no scuba) still apply outside government-sanctioned derbies.' },
    eat: {
      rating: 4,
      cig: 'low',
      text: 'Delicious, mild white meat. The venom is only in the spines and is destroyed by cooking. Clip the spines with scissors before cleaning.',
      tips: []
    },
    notes: ['A sting causes intense pain: soak in hot water (as hot as you can bear) for 30–90 minutes and get medical help.']
  },
  {
    id: 'stoplight-parrotfish',
    name: 'Stoplight parrotfish',
    aka: [],
    sci: 'Sparisoma viride',
    family: 'Scaridae (parrotfishes)',
    group: 'reef',
    verdict: 'avoid',
    note: 'Legal and unregulated, but parrotfish keep algae off the coral and Bahamian numbers are falling. Leave them.',
    abundance: 'common',
    size: { kg: [0.5, 1.5], cm: [30, 45] },
    depth: [1, 20],
    features: [
      'Supermales green with a yellow spot at the top of the gill cover and a yellow tail base',
      'Females (initial phase) red belly, brown-scaled back with white spots',
      'Parrot-like beak'
    ],
    lookAlikes: [
      { id: 'rainbow-parrotfish', name: 'Rainbow parrotfish', tell: 'Much bigger; orange-bronze head and fins, green body.' }
    ],
    where: 'Every reef on the bank.',
    behavior: 'Grazes algae off dead coral all day; sleeps in a mucus cocoon at night.',
    hunt: null,
    rules: { status: 'open', text: 'No Bahamian rule yet. Researchers have urged protection as parrotfish harvest rises.' },
    eat: { rating: 3, cig: 'low', text: 'Edible but soft; often taken as bycatch in traps.', tips: [] },
    notes: []
  },
  {
    id: 'rainbow-parrotfish',
    name: 'Rainbow parrotfish',
    aka: [],
    sci: 'Scarus guacamaia',
    family: 'Scaridae (parrotfishes)',
    group: 'reef',
    verdict: 'avoid',
    note: 'The largest herbivore on Atlantic reefs and mangrove-dependent as a juvenile. Leave it.',
    abundance: 'occasional',
    size: { kg: [3, 10], cm: [60, 100] },
    depth: [1, 15],
    features: [
      'Orange-bronze head, fins and tail',
      'Green scales edged bronze on the body',
      'Big, blue-green beak'
    ],
    lookAlikes: [
      { id: 'stoplight-parrotfish', name: 'Stoplight parrotfish', tell: 'Smaller; green males with a yellow tail spot, red-bellied females.' }
    ],
    where: 'Shallow reefs near mangroves and channels.',
    behavior: 'Grazes in groups; young live in mangroves.',
    hunt: null,
    rules: { status: 'open', text: 'No Bahamian rule; listed as near threatened (IUCN).' },
    eat: { rating: 3, cig: 'low', text: 'Edible but not worth the reef\'s loss.', tips: [] },
    notes: []
  }
];
