// Groupers & snappers: the reef predators.
const DEMERSAL = 'Counts toward the visiting-boat demersal limit (60 lb or 20 fish).';

export default [
  {
    id: 'nassau-grouper',
    name: 'Nassau grouper',
    aka: [],
    bahamian: 'Grouper',
    sci: 'Epinephelus striatus',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'The national fish dish, and critically endangered. Legal March to November over 3 lb. Take one, not a limit.',
    abundance: 'occasional',
    size: { kg: [3, 10], cm: [45, 75], maxKg: 25 },
    depth: [5, 30],
    features: [
      'Five dark brown bars on a tan to pinkish body; the bars can lighten or darken in seconds',
      'Large black saddle on the tail base, right in front of the tail',
      'Dark "tuning fork" band from the snout up between the eyes',
      'Black dots around the eye'
    ],
    lookAlikes: [
      { id: 'red-hind', name: 'Red hind', tell: 'Covered in small red spots, no bars or saddle; dark-edged tail and fins.' },
      { id: 'tiger-grouper', name: 'Tiger grouper', tell: 'Narrow, slanting pale and dark "tiger" stripes; no black tail saddle.' },
      { id: 'black-grouper', name: 'Black grouper', tell: 'Rectangular brassy blotches, square tail edged black; no tail saddle or tuning-fork mark.' }
    ],
    where: 'Ledges, caves and coral heads on the outer reef and bigger patch reefs.',
    behavior: 'Curious and bold; often comes out to look at divers. In December–February it gathers at a few spawning sites around the full moon, which is why the season closes.',
    hunt: {
      summary: 'Easy to approach, so the real skill is restraint: take one big fish above the size limit.',
      tips: [
        'Approach low and slow; a Nassau often sits and watches you.',
        'Never shoot into a hole you can\'t reach: a wounded grouper wedges in and dies there.',
        'Never hunt a spawning aggregation, in or out of season.'
      ],
      shot: 'Through the head behind the eye, or spine behind the head, so it can\'t run into a hole.',
      difficulty: 1
    },
    rules: {
      status: 'restricted',
      text: 'Closed season 1 December – 28 February: no taking, landing, buying or selling. Minimum weight 3 lb (1.4 kg). Can\'t be carried into US waters by boat.',
      closed: { from: [12, 1], to: [2, 28] }
    },
    eat: {
      rating: 5,
      cig: 'moderate',
      text: 'Classic Bahamian eating fish: steamed, fried or in a chowder.',
      tips: ['Very large fish carry more ciguatera risk; skip the head and guts.']
    },
    notes: ['Listed as critically endangered (IUCN). The Bahamas holds some of the last big populations.']
  },
  {
    id: 'black-grouper',
    name: 'Black grouper',
    aka: [],
    bahamian: 'Rockfish',
    sci: 'Mycteroperca bonaci',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'target',
    note: 'The big grouper of the Bahamas. Wary, strong and a true trophy on a sling.',
    abundance: 'occasional',
    size: { kg: [5, 25], cm: [60, 110], maxKg: 100 },
    depth: [10, 40],
    features: [
      'Long grouper with rectangular, brassy-bronze blotches in rows on a grey body',
      'Square tail with a black edge; dark-edged soft dorsal and anal fins',
      'No black saddle on the tail base'
    ],
    lookAlikes: [
      { id: 'yellowfin-grouper', name: 'Yellowfin grouper', tell: 'Outer third of the pectoral fins bright yellow; oval blotches, often reddish.' },
      { id: 'tiger-grouper', name: 'Tiger grouper', tell: 'Slanting pale "tiger" stripes; smaller.' },
      { id: 'nassau-grouper', name: 'Nassau grouper', tell: 'Five dark bars, black tail saddle and tuning-fork mark between the eyes.' }
    ],
    where: 'Deeper ledges, the outer reef wall and drop-offs, usually below 15 m.',
    behavior: 'Shy of hunters; hangs near cover and slides into a hole when pushed.',
    hunt: {
      summary: 'Find it on a ledge, drop down quietly a few metres away and let it turn to look at you.',
      tips: [
        'Big black grouper run straight for a hole: you need a stoning shot.',
        'Go with a buddy: pulling a big fish from a ledge on one breath is dangerous.'
      ],
      shot: 'Through the head behind the eye. A body shot on a big rockfish usually ends in a hole.',
      difficulty: 4
    },
    rules: {
      status: 'restricted',
      text: 'Minimum weight 3 lb (1.4 kg) for grouper and rockfish. ' + DEMERSAL
    },
    eat: {
      rating: 5,
      cig: 'moderate',
      text: 'Excellent, but big black grouper have caused ciguatera in Florida and the Caribbean.',
      tips: ['Favour fish under about 10 kg for the table.', 'Never eat the head, liver or roe.']
    },
    notes: []
  },
  {
    id: 'tiger-grouper',
    name: 'Tiger grouper',
    aka: [],
    sci: 'Mycteroperca tigris',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Handsome mid-size grouper of the outer reef. Good eating.',
    abundance: 'occasional',
    size: { kg: [2, 6], cm: [45, 75], maxKg: 10 },
    depth: [10, 40],
    features: [
      'Narrow, slanting pale bars across a dark olive-brown body ("tiger" stripes)',
      'Pointed head; small, scattered dark spots',
      'Fins edged pale to yellow; can flash dark or pale in seconds'
    ],
    lookAlikes: [
      { id: 'black-grouper', name: 'Black grouper', tell: 'Bronze rectangular blotches, no slanting stripes; much bigger.' },
      { id: 'nassau-grouper', name: 'Nassau grouper', tell: 'Vertical bars, black tail saddle, tuning-fork mark.' }
    ],
    where: 'Outer reef and deep patch reefs, often at cleaning stations.',
    behavior: 'Sits still near cover; fairly approachable.',
    hunt: {
      summary: 'Approach low along the reef and take it before it slides under a ledge.',
      tips: ['Watch cleaning stations: tigers hover there with fins spread.'],
      shot: 'Head or spine behind the head.',
      difficulty: 2
    },
    rules: {
      status: 'open',
      text: 'No specific limit found; to be safe, treat the 3 lb grouper minimum as applying. ' + DEMERSAL
    },
    eat: {
      rating: 4,
      cig: 'moderate',
      text: 'Very good, white and firm.',
      tips: ['Skip the head and guts.']
    },
    notes: []
  },
  {
    id: 'yellowfin-grouper',
    name: 'Yellowfin grouper',
    aka: [],
    sci: 'Mycteroperca venenosa',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Legal and catchable, but one of the riskier ciguatera fish. Its scientific name means "venomous".',
    abundance: 'occasional',
    size: { kg: [3, 12], cm: [50, 90], maxKg: 18.5 },
    depth: [10, 40],
    features: [
      'Outer third of the pectoral fins bright yellow',
      'Oval dark blotches in rows; often reddish-orange on deeper fish',
      'Square tail edged dark'
    ],
    lookAlikes: [
      { id: 'black-grouper', name: 'Black grouper', tell: 'Pectoral fin only narrowly edged orange, not a broad yellow band; brassy rectangular blotches.' }
    ],
    where: 'Outer reef and deep ledges; sometimes in seagrass when young.',
    behavior: 'Moderately wary; holds close to cover.',
    hunt: {
      summary: 'Hunted like a black grouper: quiet approach along the ledge and a head shot.',
      tips: [],
      shot: 'Head shot behind the eye.',
      difficulty: 3
    },
    rules: {
      status: 'open',
      text: 'No specific limit found; to be safe, treat the 3 lb grouper minimum as applying. ' + DEMERSAL
    },
    eat: {
      rating: 3,
      cig: 'high',
      text: 'Tasty, but often implicated in ciguatera in the Caribbean. Bigger fish are riskier.',
      tips: ['Ask local fishers whether yellowfin from that reef is eaten.', 'Never eat the head, liver or roe.']
    },
    notes: []
  },
  {
    id: 'red-hind',
    name: 'Red hind',
    aka: ['Strawberry grouper'],
    sci: 'Epinephelus guttatus',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Small, common grouper and a good pan fish.',
    abundance: 'common',
    size: { kg: [0.5, 2], cm: [30, 45] },
    depth: [5, 30],
    features: [
      'Pale body covered in small red spots',
      'Black edge on the soft dorsal, anal and tail fins, often with a white rim',
      'No bars or tail saddle'
    ],
    lookAlikes: [
      { id: 'rock-hind', name: 'Rock hind', tell: 'Spots darker brown-orange; black saddles along the back and on the tail base; no black fin edges.' },
      { id: 'graysby', name: 'Graysby', tell: 'Much smaller, with 3–5 dark or pale spots along the base of the dorsal; rounded tail.' }
    ],
    where: 'Patch reefs and rubble on the bank; outer reef.',
    behavior: 'Sits on the bottom near a hole; fairly approachable.',
    hunt: {
      summary: 'Easy pan fish: approach low and shoot before it backs into a hole.',
      tips: ['A paralyser (three-prong) tip on a pole spear is ideal for hinds.'],
      shot: 'Head or behind the gill plate.',
      difficulty: 1
    },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Very good white meat.', tips: [] },
    notes: []
  },
  {
    id: 'rock-hind',
    name: 'Rock hind',
    aka: [],
    sci: 'Epinephelus adscensionis',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Shallow-water hind; tasty and easy.',
    abundance: 'common',
    size: { kg: [0.5, 1.5], cm: [25, 40] },
    depth: [2, 20],
    features: [
      'Pale body with dark orange-brown spots',
      'Two to four black saddles along the back, plus one on the tail base',
      'No black edges on the fins'
    ],
    lookAlikes: [
      { id: 'red-hind', name: 'Red hind', tell: 'Red spots, black-edged rear fins, no saddles.' }
    ],
    where: 'Shallow rocky reef and rubble, often near shore and on the reef flat.',
    behavior: 'Wedges into holes when chased; often perches on rock in the open.',
    hunt: {
      summary: 'Approach low and shoot it on its perch.',
      tips: [],
      shot: 'Head or behind the gill plate.',
      difficulty: 1
    },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good white meat.', tips: [] },
    notes: []
  },
  {
    id: 'coney',
    name: 'Coney',
    aka: [],
    sci: 'Cephalopholis fulva',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Little grouper in three colour phases. Good pan fish.',
    abundance: 'common',
    size: { kg: [0.2, 0.6], cm: [15, 30] },
    depth: [3, 30],
    features: [
      'Three colour phases: red-brown, bicoloured, or bright yellow',
      'Small blue spots all over the head and body',
      'Two black spots on the lower lip and two on the tail base'
    ],
    lookAlikes: [
      { id: 'graysby', name: 'Graysby', tell: 'Pale with dense red-brown spots and 3–5 spots along the dorsal base; rounded tail.' }
    ],
    where: 'Every reef on the bank, from shallow patch reefs to the outer wall.',
    behavior: 'Perches on coral and darts into cracks when chased.',
    hunt: { summary: 'Easy, close shot with a pole spear.', tips: [], shot: 'Head or behind the gill.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 3, cig: 'low', text: 'Sweet but small; fry whole.', tips: [] },
    notes: []
  },
  {
    id: 'graysby',
    name: 'Graysby',
    aka: [],
    sci: 'Cephalopholis cruentata',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'The smallest common grouper. Pan fish only.',
    abundance: 'common',
    size: { kg: [0.2, 0.5], cm: [15, 30] },
    depth: [3, 30],
    features: [
      'Pale grey-tan body densely covered in red-brown spots',
      'Three to five dark or pale spots along the base of the dorsal fin',
      'Rounded tail'
    ],
    lookAlikes: [
      { id: 'coney', name: 'Coney', tell: 'Blue spots, two black spots on the lip and tail base; square tail.' },
      { id: 'red-hind', name: 'Red hind', tell: 'Larger; black-edged rear fins.' }
    ],
    where: 'Coral heads and ledges on any reef.',
    behavior: 'Shy; sits in the shade of a ledge.',
    hunt: { summary: 'Close shot as it sits under a ledge.', tips: [], shot: 'Head.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 3, cig: 'low', text: 'Good but small.', tips: [] },
    notes: []
  },
  {
    id: 'mutton-snapper',
    name: 'Mutton snapper',
    aka: ['Muttonfish'],
    bahamian: 'Mutton fish',
    sci: 'Lutjanus analis',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'target',
    note: 'Wary, sand-edge snapper and a prized catch around Grand Cay\'s patch reefs.',
    abundance: 'occasional',
    size: { kg: [2, 7], cm: [45, 75], maxKg: 15.6 },
    depth: [3, 30],
    features: [
      'Olive-green back fading to pinkish-red below',
      'Small black spot on the upper side, below the soft dorsal',
      'Thin blue lines below the eye; pointed anal fin',
      'Tail red-tinged with a dark edge'
    ],
    lookAlikes: [
      { id: 'lane-snapper', name: 'Lane snapper', tell: 'Much smaller; yellow horizontal stripes and a bigger black spot.' },
      { id: 'dog-snapper', name: 'Dog snapper', tell: 'Pale triangle below the eye and big canine teeth; no black spot.' }
    ],
    where: 'Sand edges around the base of patch reefs and coral heads on the bank; also seagrass.',
    behavior: 'Feeds over sand near reefs; very wary of divers and keeps its distance.',
    hunt: {
      summary: 'Lie still on the sand beside a coral head and let it come back to you.',
      tips: [
        'Muttons spook from a diver swimming at them; drop well upcurrent and wait.',
        'Stir the sand a little to bring them in.'
      ],
      shot: 'Spine behind the head or through the gill plate.',
      difficulty: 4
    },
    rules: { status: 'open', text: 'No size limit or season. ' + DEMERSAL },
    eat: { rating: 5, cig: 'low', text: 'One of the best-eating snappers.', tips: [] },
    notes: []
  },
  {
    id: 'cubera-snapper',
    name: 'Cubera snapper',
    aka: [],
    sci: 'Lutjanus cyanopterus',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'target',
    note: 'The biggest snapper in the Atlantic. A trophy, but don\'t eat a big one.',
    abundance: 'rare',
    size: { kg: [10, 30], cm: [80, 120], maxKg: 57 },
    depth: [10, 40],
    features: [
      'Huge, heavy snapper; dark grey to reddish-brown',
      'Thick lips and big canine teeth visible at the front of the jaw',
      'Tongue tooth patch without a backward extension (hard to see in the water)'
    ],
    lookAlikes: [
      { id: 'gray-snapper', name: 'Gray snapper', tell: 'Much smaller (rarely over 4 kg); dark stripe through the eye on young fish.' },
      { id: 'dog-snapper', name: 'Dog snapper', tell: 'Pale triangle below the eye; rarely over 10 kg.' }
    ],
    where: 'Deep ledges, caves and wrecks, sometimes in deep channels between cays.',
    behavior: 'Wary and solitary except at summer full-moon spawning aggregations.',
    hunt: {
      summary: 'Ambush on a ledge or wreck; a cubera won\'t tolerate a chase.',
      tips: ['A sling barely holds a big cubera: only a stoning shot lands it.', 'Never hunt a spawning aggregation.'],
      shot: 'Through the head or the spine.',
      difficulty: 5
    },
    rules: { status: 'open', text: 'No size limit or season. ' + DEMERSAL },
    eat: {
      rating: 3,
      cig: 'high',
      text: 'Large cubera are a known ciguatera risk in the Caribbean.',
      tips: ['Release or skip eating anything over about 7 kg.']
    },
    notes: []
  },
  {
    id: 'dog-snapper',
    name: 'Dog snapper',
    aka: [],
    sci: 'Lutjanus jocu',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Big-toothed reef snapper; good eating at moderate size.',
    abundance: 'occasional',
    size: { kg: [2, 6], cm: [40, 70] },
    depth: [5, 30],
    features: [
      'Pale triangle or bar below the eye, the best field mark',
      'Big, fang-like canines at the front of the upper jaw',
      'Bronze to reddish body; pale vertical bars on some fish'
    ],
    lookAlikes: [
      { id: 'cubera-snapper', name: 'Cubera snapper', tell: 'No pale triangle under the eye; much bigger.' },
      { id: 'mutton-snapper', name: 'Mutton snapper', tell: 'Black spot under the soft dorsal; blue lines under the eye.' }
    ],
    where: 'Ledges and caves on the outer reef and big patch reefs.',
    behavior: 'Hangs near cover; moderately wary.',
    hunt: { summary: 'Quiet approach along a ledge; often hangs just inside a cave mouth.', tips: [], shot: 'Head or spine behind the head.', difficulty: 3 },
    rules: { status: 'open', text: 'No size limit or season. ' + DEMERSAL },
    eat: { rating: 4, cig: 'moderate', text: 'Good eating; large dog snapper have been linked to ciguatera.', tips: ['Prefer smaller fish.'] },
    notes: []
  },
  {
    id: 'gray-snapper',
    name: 'Gray snapper',
    aka: ['Mangrove snapper'],
    sci: 'Lutjanus griseus',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Common, wily and delicious. From mangroves to the outer reef.',
    abundance: 'common',
    size: { kg: [0.5, 2], cm: [25, 45] },
    depth: [1, 20],
    features: [
      'Grey to coppery body, often with reddish-bronze tint',
      'Dark stripe from the snout through the eye on younger fish',
      'Two prominent canine teeth at the front of the upper jaw',
      'Dark-edged soft dorsal fin; no black spot'
    ],
    lookAlikes: [
      { id: 'schoolmaster', name: 'Schoolmaster', tell: 'Yellow fins and pale vertical bars; blue line under the eye.' },
      { id: 'cubera-snapper', name: 'Cubera snapper', tell: 'Far bigger, thicker-lipped and heavier.' }
    ],
    where: 'Mangrove edges and creeks, docks, ledges and patch reefs.',
    behavior: 'Schools under ledges by day; very wary of divers once hunted.',
    hunt: { summary: 'Sneak up from behind cover or wait at a ledge for the school to drift out.', tips: ['They learn fast: the first shot is the easy one.'], shot: 'Behind the gill plate.', difficulty: 3 },
    rules: { status: 'open', text: 'No size limit or season. ' + DEMERSAL },
    eat: { rating: 5, cig: 'low', text: 'Excellent fried or grilled whole.', tips: [] },
    notes: []
  },
  {
    id: 'schoolmaster',
    name: 'Schoolmaster',
    aka: [],
    sci: 'Lutjanus apodus',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'The yellow-finned snapper hanging under every ledge.',
    abundance: 'common',
    size: { kg: [0.5, 1.5], cm: [25, 40] },
    depth: [1, 20],
    features: [
      'Bright yellow fins on a grey-bronze body',
      'Eight pale vertical bars (may fade)',
      'Thin blue line below the eye on young fish'
    ],
    lookAlikes: [
      { id: 'gray-snapper', name: 'Gray snapper', tell: 'Dull grey fins, no yellow; no pale bars.' },
      { id: 'yellowtail-snapper', name: 'Yellowtail snapper', tell: 'Bright yellow stripe from snout to a deeply forked yellow tail.' }
    ],
    where: 'Under ledges, elkhorn coral and mangrove edges.',
    behavior: 'Hangs in groups in the shade of coral; drifts back as you approach.',
    hunt: { summary: 'Approach low and take the closest fish before the group backs off.', tips: [], shot: 'Behind the gill plate.', difficulty: 2 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Very good pan fish.', tips: [] },
    notes: []
  },
  {
    id: 'yellowtail-snapper',
    name: 'Yellowtail snapper',
    aka: ['Yellowtail'],
    sci: 'Ocyurus chrysurus',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'The open-water snapper. Easy to spot, hard to get close to once spooked.',
    abundance: 'common',
    size: { kg: [0.5, 1.5], cm: [30, 45] },
    depth: [3, 30],
    features: [
      'Bright yellow stripe from the snout to a deeply forked, all-yellow tail',
      'Blue-grey back with yellow spots; silvery-white belly',
      'Swims in mid-water above the reef'
    ],
    lookAlikes: [
      { id: 'schoolmaster', name: 'Schoolmaster', tell: 'Yellow fins but no side stripe; stays near cover.' },
      { id: 'bar-jack', name: 'Bar jack', tell: 'Black-and-blue stripe along the back, not yellow.' }
    ],
    where: 'Above patch reefs and the outer reef, often in loose schools.',
    behavior: 'Swims above the reef in loose groups; comes in to chum and to divers cleaning fish.',
    hunt: { summary: 'Hang still above the reef; yellowtails approach to investigate, especially if you stir the bottom.', tips: ['A little chum or a cracked sea urchin brings them close.'], shot: 'Body behind the head.', difficulty: 2 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 5, cig: 'low', text: 'Excellent, delicate white meat.', tips: [] },
    notes: []
  },
  {
    id: 'lane-snapper',
    name: 'Lane snapper',
    aka: [],
    sci: 'Lutjanus synagris',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Small pink-and-yellow snapper of sand and grass.',
    abundance: 'common',
    size: { kg: [0.2, 0.7], cm: [20, 35] },
    depth: [3, 25],
    features: [
      'Pink to silvery body with 8–10 thin yellow horizontal stripes',
      'Large diffuse black spot below the soft dorsal',
      'Yellow fins; black-edged tail'
    ],
    lookAlikes: [
      { id: 'mutton-snapper', name: 'Mutton snapper', tell: 'Much larger; tiny black spot and blue lines under the eye; no yellow stripes.' },
      { id: 'mahogany-snapper', name: 'Mahogany snapper', tell: 'Big eye and red-edged fins; no yellow side stripes.' }
    ],
    where: 'Seagrass and sand around patch reefs.',
    behavior: 'Small groups over sand and grass.',
    hunt: { summary: 'Easy, close shot over sand and grass.', tips: [], shot: 'Body behind the head.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good pan fish.', tips: [] },
    notes: []
  },
  {
    id: 'mahogany-snapper',
    name: 'Mahogany snapper',
    aka: [],
    sci: 'Lutjanus mahogoni',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Big-eyed small snapper of the shallows.',
    abundance: 'common',
    size: { kg: [0.2, 0.6], cm: [20, 35] },
    depth: [2, 15],
    features: [
      'Silvery body with a reddish tinge; big eye',
      'Diffuse dark spot below the soft dorsal',
      'Red-edged dorsal and tail fins'
    ],
    lookAlikes: [
      { id: 'lane-snapper', name: 'Lane snapper', tell: 'Thin yellow stripes along the side; pink body.' }
    ],
    where: 'Shallow patch reefs and reef flats.',
    behavior: 'Loose groups near coral.',
    hunt: { summary: 'Close shot near coral heads.', tips: [], shot: 'Body behind the head.', difficulty: 1 },
    rules: { status: 'open', text: DEMERSAL },
    eat: { rating: 4, cig: 'low', text: 'Good pan fish.', tips: [] },
    notes: []
  }
];
