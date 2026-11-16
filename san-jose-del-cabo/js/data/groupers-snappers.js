// Groupers (cabrillas) and snappers (pargos): the rocky-reef predators.
const LIMIT = 'No size limit. Counts toward the spearfishing limit of 5 fish per person per day.';

export default [
  {
    id: 'leopard-grouper',
    name: 'Leopard grouper',
    aka: ['Golden grouper (yellow phase)'],
    local: 'Cabrilla sardinera',
    sci: 'Mycteroperca rosacea',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'The everyday grouper of the southern Gulf of California. Good eating; take a few, not a limit.',
    abundance: 'common',
    size: { kg: [1, 5], cm: [35, 70] },
    depth: [3, 40],
    features: [
      'Grey to reddish-brown body covered in small, dark reddish-brown spots',
      'Fins edged pale; tail slightly concave',
      'Some fish are bright golden-yellow all over ("golden grouper")'
    ],
    lookAlikes: [
      { id: 'spotted-cabrilla', name: 'Spotted cabrilla', tell: 'Rounded tail, heavier head, dense red-brown spots with faint dark bars.' },
      { id: 'broomtail-grouper', name: 'Broomtail grouper', tell: 'Ragged, broom-like tail edge and blotchy marbling; grows far bigger.' }
    ],
    where: 'Rocky reefs and boulder slopes along the coast and around points; also over bait schools in mid-water.',
    behavior: 'Often hunts in loose groups with jacks around sardine schools; curious and approachable.',
    hunt: { summary: 'Approach low along the rocks; leopards often hover in the open.', tips: ['Shoot before it turns for a crack.'], shot: 'Head or spine behind the head.', difficulty: 2 },
    rules: { status: 'open', text: LIMIT + ' Listed as vulnerable (IUCN).' },
    eat: { rating: 5, cig: 'low', text: 'Excellent white meat.', tips: [] },
    notes: []
  },
  {
    id: 'broomtail-grouper',
    name: 'Broomtail grouper',
    aka: [],
    local: 'Garropa',
    sci: 'Mycteroperca xenarcha',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'target',
    note: 'A big, wary grouper and one of Cabo\'s most sought-after spearfishing fish.',
    abundance: 'occasional',
    size: { kg: [8, 30], cm: [70, 120], maxKg: 45 },
    depth: [5, 40],
    features: [
      'Tail edge ragged like a broom: rays stick out past the fin membrane',
      'Grey to brown with darker blotches and pale marbling',
      'Long, heavy body with a large mouth'
    ],
    lookAlikes: [
      { id: 'gulf-grouper', name: 'Gulf grouper', tell: 'Smooth-edged tail; grey with dark blotches; often huge. Endangered: leave it.' },
      { id: 'leopard-grouper', name: 'Leopard grouper', tell: 'Small dense spots, smooth tail edge; much smaller.' }
    ],
    where: 'Rocky reefs, ledges and caves, and around mangrove-lined estuary mouths for young fish.',
    behavior: 'Holds near deep cover and retreats when pressured.',
    hunt: {
      summary: 'Drop quietly near its ledge and let it come out to look; never chase it into a cave.',
      tips: ['Big fish wedge into holes: a stoning shot or no shot.', 'Dive with a buddy for deep holes.'],
      shot: 'Through the head behind the eye.',
      difficulty: 4
    },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'moderate', text: 'Excellent; big groupers carry some ciguatera risk.', tips: [] },
    notes: []
  },
  {
    id: 'gulf-grouper',
    name: 'Gulf grouper',
    aka: [],
    local: 'Baya',
    sci: 'Mycteroperca jordani',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'avoid',
    note: 'Endangered giant of the Gulf of California, much reduced by fishing. Leave it.',
    abundance: 'rare',
    size: { kg: [20, 90], cm: [100, 200] },
    depth: [10, 50],
    features: [
      'Huge, heavy grouper; grey to olive-brown with darker blotches',
      'Smooth-edged, slightly concave tail with a pale rim',
      'Big jaw; small eye for its size'
    ],
    lookAlikes: [
      { id: 'broomtail-grouper', name: 'Broomtail grouper', tell: 'Ragged, broom-like tail edge.' },
      { id: 'pacific-goliath-grouper', name: 'Pacific goliath grouper', tell: 'Rounded tail, tiny eyes, brown-yellow with small spots.' }
    ],
    where: 'Deep rocky reefs, pinnacles and seamounts.',
    behavior: 'Gathers to spawn in spring; slow to recover.',
    hunt: null,
    rules: { status: 'open', text: 'No federal ban found, but listed as endangered (IUCN). Don\'t take it.' },
    eat: { rating: 0, cig: 'moderate', text: 'Leave it.', tips: [] },
    notes: []
  },
  {
    id: 'spotted-cabrilla',
    name: 'Spotted cabrilla',
    aka: [],
    local: 'Cabrilla pinta',
    sci: 'Epinephelus analogus',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Heavy-bodied reef grouper; a good table fish.',
    abundance: 'common',
    size: { kg: [1, 6], cm: [35, 70] },
    depth: [2, 40],
    features: [
      'Pale body densely covered in red-brown spots',
      'Faint dark vertical bars on the side',
      'Rounded tail; broad head'
    ],
    lookAlikes: [
      { id: 'leopard-grouper', name: 'Leopard grouper', tell: 'Slimmer, slightly concave tail, finer spots.' },
      { id: 'flag-cabrilla', name: 'Flag cabrilla', tell: 'Small, olive with white spots and a black saddle on the tail base.' }
    ],
    where: 'Rocky reefs and boulder fields, also near river mouths and estuaries.',
    behavior: 'Sits near holes; fairly approachable.',
    hunt: { summary: 'Approach low and shoot before it backs into its hole.', tips: [], shot: 'Head or spine behind the head.', difficulty: 2 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Very good white meat.', tips: [] },
    notes: []
  },
  {
    id: 'flag-cabrilla',
    name: 'Flag cabrilla',
    aka: [],
    local: 'Cabrilla piedrera',
    sci: 'Epinephelus labriformis',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Small, common rock grouper. Pan fish.',
    abundance: 'common',
    size: { kg: [0.3, 1], cm: [20, 40] },
    depth: [1, 30],
    features: [
      'Olive-brown to reddish with scattered white spots',
      'Black saddle on the top of the tail base',
      'Red-edged fins'
    ],
    lookAlikes: [
      { id: 'panama-graysby', name: 'Panama graysby', tell: 'Reddish with dark bars and blue spots on the head; no tail saddle.' }
    ],
    where: 'Shallow rocky reefs everywhere along the coast.',
    behavior: 'Perches on rocks and darts into cracks.',
    hunt: { summary: 'Easy close shot.', tips: [], shot: 'Head.', difficulty: 1 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 3, cig: 'low', text: 'Sweet but small.', tips: [] },
    notes: []
  },
  {
    id: 'panama-graysby',
    name: 'Panama graysby',
    aka: [],
    sci: 'Cephalopholis panamensis',
    family: 'Epinephelidae (groupers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Little reef grouper; pan fish only.',
    abundance: 'common',
    size: { kg: [0.2, 0.6], cm: [20, 30] },
    depth: [3, 40],
    features: [
      'Reddish-brown with darker vertical bars',
      'Bright blue spots and lines on the head',
      'Rounded tail'
    ],
    lookAlikes: [
      { id: 'flag-cabrilla', name: 'Flag cabrilla', tell: 'White spots and a black tail-base saddle.' }
    ],
    where: 'Ledges and caves on rocky reefs.',
    behavior: 'Shy; stays in the shade.',
    hunt: { summary: 'Close shot under a ledge.', tips: [], shot: 'Head.', difficulty: 1 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 3, cig: 'low', text: 'Good but small.', tips: [] },
    notes: []
  },
  {
    id: 'pacific-dog-snapper',
    name: 'Pacific dog snapper',
    aka: ['Pacific cubera snapper', 'Black snapper'],
    local: 'Pargo prieto',
    sci: 'Lutjanus novemfasciatus',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'target',
    note: 'The biggest snapper in the eastern Pacific and Cabo\'s top reef trophy.',
    abundance: 'occasional',
    size: { kg: [8, 25], cm: [70, 110], maxKg: 45 },
    depth: [3, 40],
    features: [
      'Heavy, dark grey-bronze snapper with big canine teeth showing at the front of the jaw',
      'Young fish have pale vertical bars that fade with age',
      'Reddish tinge on the belly and fins'
    ],
    lookAlikes: [
      { id: 'mullet-snapper', name: 'Mullet snapper', tell: 'Slimmer, with dark horizontal stripes along the body.' },
      { id: 'barred-pargo', name: 'Barred pargo', tell: 'Deeper body with strong dark bars and huge fangs.' }
    ],
    where: 'Rocky points, caves and ledges; young fish in mangrove estuaries.',
    behavior: 'Wary, solitary and nocturnal; holds deep in cover by day.',
    hunt: {
      summary: 'Ambush on a ledge or cave mouth at dawn or dusk; a pargo won\'t tolerate a chase.',
      tips: ['Big fish run for the rocks: a stoning shot or no shot.'],
      shot: 'Through the head or spine.',
      difficulty: 5
    },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 4, cig: 'moderate', text: 'Good eating; very large fish carry more risk.', tips: [] },
    notes: []
  },
  {
    id: 'mullet-snapper',
    name: 'Mullet snapper',
    aka: [],
    local: 'Pargo raicero',
    sci: 'Lutjanus aratus',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Big, striped snapper of rocks and estuary mouths. Excellent eating.',
    abundance: 'occasional',
    size: { kg: [2, 10], cm: [45, 90] },
    depth: [2, 30],
    features: [
      'Long body for a snapper; olive-grey with dark horizontal stripes along the scale rows',
      'Reddish tinge on the lower side and fins',
      'Canine teeth at the front of the jaw'
    ],
    lookAlikes: [
      { id: 'pacific-dog-snapper', name: 'Pacific dog snapper', tell: 'Heavier and darker, no horizontal stripes.' }
    ],
    where: 'Rocky reefs and around river and estuary mouths.',
    behavior: 'Moves between reef and estuary; wary.',
    hunt: { summary: 'Wait near the rocks at the edge of sand or a channel.', tips: [], shot: 'Spine behind the head.', difficulty: 3 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Excellent.', tips: [] },
    notes: []
  },
  {
    id: 'yellow-snapper',
    name: 'Yellow snapper',
    aka: ['Amarillo snapper'],
    local: 'Pargo amarillo',
    sci: 'Lutjanus argentiventris',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'The common reef snapper: rosy at the front, yellow at the back.',
    abundance: 'common',
    size: { kg: [0.5, 3], cm: [30, 55] },
    depth: [1, 30],
    features: [
      'Rosy-pink front half fading to bright yellow at the rear and tail',
      'Blue line under the eye on many fish',
      'Yellow fins'
    ],
    lookAlikes: [
      { id: 'spotted-rose-snapper', name: 'Spotted rose snapper', tell: 'Pink with diagonal yellow lines and a black spot below the dorsal.' }
    ],
    where: 'Rocky reefs, caves and boulder slopes; common at every rocky point.',
    behavior: 'Groups under ledges; curious but learns fast.',
    hunt: { summary: 'Approach low; take the closest fish before the group backs off.', tips: [], shot: 'Behind the gill plate.', difficulty: 2 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Excellent pan fish.', tips: [] },
    notes: []
  },
  {
    id: 'barred-pargo',
    name: 'Barred pargo',
    aka: [],
    local: 'Pargo coconaco',
    sci: 'Hoplopagrus guentherii',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'target',
    note: 'Heavy, barred snapper with huge fangs; a prized spearfishing fish.',
    abundance: 'occasional',
    size: { kg: [3, 10], cm: [45, 80] },
    depth: [3, 30],
    features: [
      'Deep, heavy body with about eight dark vertical bars on an olive to reddish background',
      'Very large canine teeth',
      'Reddish fins'
    ],
    lookAlikes: [
      { id: 'pacific-dog-snapper', name: 'Pacific dog snapper', tell: 'Darker and plainer as an adult; bars only on young fish.' }
    ],
    where: 'Rocky reefs and caves.',
    behavior: 'Wary; holds in caves and under boulders by day.',
    hunt: { summary: 'Look in caves and under ledges; a quiet approach and a stoning shot.', tips: [], shot: 'Head or spine.', difficulty: 4 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Excellent.', tips: [] },
    notes: []
  },
  {
    id: 'pacific-red-snapper',
    name: 'Pacific red snapper',
    aka: [],
    local: 'Huachinango',
    sci: 'Lutjanus peru',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Deep red snapper of the banks; the classic huachinango on Mexican menus.',
    abundance: 'occasional',
    size: { kg: [1, 5], cm: [35, 70] },
    depth: [20, 80],
    features: ['Red to pink all over with silvery belly', 'Pointed anal fin', 'Red eye'],
    lookAlikes: [{ id: 'spotted-rose-snapper', name: 'Spotted rose snapper', tell: 'Yellow lines and a black spot; shallower.' }],
    where: 'Deep rocky bottom and bank edges, mostly beyond freediving depth.',
    behavior: 'Schools near the bottom in deep water.',
    hunt: { summary: 'Mostly too deep for freedivers; occasional fish on deep bank edges.', tips: [], shot: 'Behind the gill plate.', difficulty: 4 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 5, cig: 'low', text: 'Excellent whole-fried or grilled.', tips: [] },
    notes: []
  },
  {
    id: 'spotted-rose-snapper',
    name: 'Spotted rose snapper',
    aka: [],
    local: 'Flamenco',
    sci: 'Lutjanus guttatus',
    family: 'Lutjanidae (snappers)',
    group: 'groupers-snappers',
    verdict: 'shoot',
    note: 'Small pink snapper; good pan fish.',
    abundance: 'common',
    size: { kg: [0.3, 1.5], cm: [25, 45] },
    depth: [5, 40],
    features: [
      'Pink body with thin diagonal golden-yellow lines',
      'Black spot on the side below the soft dorsal',
      'Yellow-tinged fins'
    ],
    lookAlikes: [{ id: 'yellow-snapper', name: 'Yellow snapper', tell: 'Rosy front, bright yellow rear, no black spot.' }],
    where: 'Rocky reefs and sand edges.',
    behavior: 'Small groups near the bottom.',
    hunt: { summary: 'Close shot near the bottom.', tips: [], shot: 'Behind the gill plate.', difficulty: 2 },
    rules: { status: 'open', text: LIMIT },
    eat: { rating: 4, cig: 'low', text: 'Good pan fish.', tips: [] },
    notes: []
  }
];
