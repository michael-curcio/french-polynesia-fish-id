// Blue water: the bank edge and the Gulf Stream side of the northern Abacos.
export default [
  {
    id: 'wahoo',
    name: 'Wahoo',
    aka: ['Ono'],
    sci: 'Acanthocybium solandri',
    family: 'Scombridae (tunas & mackerels)',
    group: 'blue-water',
    verdict: 'target',
    note: 'The blue-water prize off the bank edge. Fast, tough, and hard to hold with a free sling shaft, so pick your shot.',
    abundance: 'occasional',
    size: { kg: [7, 25], cm: [100, 160], maxKg: 83 },
    depth: [0, 20],
    features: [
      'Long, torpedo body with a sharp, beak-like snout',
      '20–30 cobalt-blue vertical bars on a silver-blue flank (bars fade after death)',
      'Long, low first dorsal fin; tail very thin at the base',
      'Mouth packed with flat, razor-sharp triangular teeth'
    ],
    lookAlikes: [
      { id: 'king-mackerel', name: 'King mackerel', tell: 'Plain grey-silver, no bars, lateral line dips sharply under the second dorsal; shorter first dorsal.' },
      { id: 'great-barracuda', name: 'Great barracuda', tell: 'Two well-separated dorsal fins, black blotches on the lower flank, big fang-filled mouth; rarely in open blue.' }
    ],
    where: 'Off the edge of the Little Bahama Bank north of Grand Cay and Walker\'s, where the reef drops into deep blue water. Also around weed lines and floating debris.',
    behavior: 'Patrols the drop-off alone or in loose packs, often fast and on the surface. Best in cooler months; one of the fastest fish in the sea.',
    hunt: {
      summary: 'Hang on the edge in clear blue water and let it come to you; a wahoo rarely gives a second pass.',
      tips: [
        'Dive just off the drop and stay still near the bottom; flashers help draw them in.',
        'A free sling shaft in a 15 kg wahoo usually means a lost fish and a lost shaft. Shoot only inside 2 m.',
        'Get it to the boat fast: Bahamian reef sharks follow a struggling wahoo within seconds.'
      ],
      shot: 'Spine just behind the head or through the head. A gut shot tears out.',
      difficulty: 5
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Counts toward the 18-pelagic limit per visiting boat (dolphin, wahoo, kingfish and tuna combined).'
    },
    eat: {
      rating: 5,
      cig: 'low',
      text: 'Excellent, firm white meat; great raw or grilled. Not a usual ciguatera carrier.',
      tips: ['Bleed and ice it at once; wahoo softens fast in the heat.', 'Florida allows wahoo fillets home from the Bahamas, skin on.']
    },
    notes: ['Razor-sharp teeth: keep fingers clear of the mouth when you land one.']
  },
  {
    id: 'mahi-mahi',
    name: 'Mahi-mahi',
    aka: ['Dolphin', 'Dorado'],
    bahamian: 'Dolphin',
    sci: 'Coryphaena hippurus',
    family: 'Coryphaenidae (dolphinfishes)',
    group: 'blue-water',
    verdict: 'shoot',
    note: 'Curious, close-passing and good eating. Look under weed lines and floating debris.',
    abundance: 'occasional',
    size: { kg: [3, 14], cm: [60, 120], maxKg: 40 },
    depth: [0, 10],
    features: [
      'Brilliant gold-green body with blue flecks, fading to grey after death',
      'One dorsal fin running from head to tail',
      'Bulls have a tall, square forehead; cows a rounded head',
      'Deeply forked tail'
    ],
    lookAlikes: [
      { id: 'rainbow-runner', name: 'Rainbow runner', tell: 'Blue and yellow horizontal stripes, separate dorsal finlets, pointed snout; no head-to-tail dorsal.' }
    ],
    where: 'Weed lines (sargassum), floating logs and buoys in blue water off the bank edge. Most common in spring.',
    behavior: 'Schools of small "chicken" dolphin, pairs of big bulls and cows. Very curious: often circles a diver at the surface.',
    hunt: {
      summary: 'Drift with a weed line or floating object, float quietly at the surface and let them circle in.',
      tips: [
        'Small fish come close enough for a pole spear; take big bulls only inside 2 m.',
        'Shoot one and the school often stays near it, so the next shot is easy.'
      ],
      shot: 'Behind the head, high on the shoulder. Mahi tear loose from a gut hit.',
      difficulty: 2
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Counts toward the 18-pelagic limit per visiting boat.'
    },
    eat: {
      rating: 5,
      cig: 'low',
      text: 'Excellent, mild white fillets. Not a usual ciguatera carrier.',
      tips: ['Ice it straight away: mahi can build histamine (scombroid poisoning) if left warm.']
    },
    notes: []
  },
  {
    id: 'yellowfin-tuna',
    name: 'Yellowfin tuna',
    aka: ['Ahi'],
    sci: 'Thunnus albacares',
    family: 'Scombridae (tunas & mackerels)',
    group: 'blue-water',
    verdict: 'target',
    note: 'Rare off the bank edge and a real fight on a sling. A prize if one swims inside range.',
    abundance: 'rare',
    size: { kg: [10, 60], cm: [80, 150], maxKg: 200 },
    depth: [0, 30],
    features: [
      'Torpedo body, dark blue back, silver belly with broken vertical lines',
      'Bright yellow finlets edged black; yellow side stripe on live fish',
      'Big adults have very long, sickle-shaped second dorsal and anal fins'
    ],
    lookAlikes: [
      { id: 'blackfin-tuna', name: 'Blackfin tuna', tell: 'Smaller (usually under 8 kg); finlets dusky with only a hint of yellow; short dorsal and anal fins.' }
    ],
    where: 'Deep blue water off the drop-off, usually with birds working bait. Seldom close to the reef.',
    behavior: 'Fast-moving schools that rarely stop. Come in to flashers and chum on still days.',
    hunt: {
      summary: 'A long-shot target with Bahamian gear. Only a stoning shot inside 2 m will hold it.',
      tips: [
        'Look for diving birds and bait balls off the edge.',
        'Pass on anything you can\'t stone; a running tuna takes the shaft and draws sharks.'
      ],
      shot: 'The "triangle" just behind and above the pectoral fin, into the spine.',
      difficulty: 5
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Counts toward the 18-pelagic limit per visiting boat.'
    },
    eat: {
      rating: 5,
      cig: 'low',
      text: 'Superb raw or seared. Not a usual ciguatera carrier.',
      tips: ['Bleed, gut and ice quickly to avoid scombroid poisoning.']
    },
    notes: []
  },
  {
    id: 'blackfin-tuna',
    name: 'Blackfin tuna',
    aka: [],
    sci: 'Thunnus atlanticus',
    family: 'Scombridae (tunas & mackerels)',
    group: 'blue-water',
    verdict: 'shoot',
    note: 'The common small tuna of the bank edge. Fast, but often swings close to divers.',
    abundance: 'occasional',
    size: { kg: [2, 8], cm: [45, 80], maxKg: 22 },
    depth: [0, 30],
    features: [
      'Compact tuna, dark navy back and silver flanks',
      'Finlets dusky or dark with little or no yellow',
      'Faint bronze side band on live fish; short dorsal and anal fins'
    ],
    lookAlikes: [
      { id: 'yellowfin-tuna', name: 'Yellowfin tuna', tell: 'Bright yellow finlets and side stripe; adults have long, yellow sickle fins.' },
      { id: 'cero', name: 'Cero', tell: 'Long mackerel shape with rows of bronze spots and a stripe; small sharp teeth.' }
    ],
    where: 'Along the drop-off and over deep reef edges, chasing bait. Comes up to flashers.',
    behavior: 'Fast schools that make quick passes along the edge. Curious about divers on the way down.',
    hunt: {
      summary: 'Dive on the edge and turn as the school passes; shoot the nearest fish broadside.',
      tips: ['Dropping a flasher and staying deep draws passes.', 'Small and soft-mouthed: a solid body shot usually holds.'],
      shot: 'Behind the pectoral fin into the spine.',
      difficulty: 3
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Counts toward the 18-pelagic limit per visiting boat.'
    },
    eat: {
      rating: 4,
      cig: 'low',
      text: 'Very good sashimi and steaks; darker than yellowfin.',
      tips: ['Bleed and ice fast (scombroid risk).']
    },
    notes: []
  },
  {
    id: 'king-mackerel',
    name: 'King mackerel',
    aka: ['Kingfish'],
    bahamian: 'Kingfish',
    sci: 'Scomberomorus cavalla',
    family: 'Scombridae (tunas & mackerels)',
    group: 'blue-water',
    verdict: 'shoot',
    note: 'Big silver missile of the bank edge. Fine eating at moderate size.',
    abundance: 'occasional',
    size: { kg: [4, 15], cm: [70, 120], maxKg: 45 },
    depth: [5, 40],
    features: [
      'Long, plain silver-grey mackerel with no bars or spots on adults',
      'Lateral line drops sharply below the second dorsal fin',
      'Front of first dorsal fin plain grey (no black patch)'
    ],
    lookAlikes: [
      { id: 'cero', name: 'Cero', tell: 'Smaller; bronze spots in rows and a yellow-bronze stripe along the side; black patch on front dorsal.' },
      { id: 'wahoo', name: 'Wahoo', tell: 'Blue vertical bars, longer snout, long low first dorsal.' }
    ],
    where: 'Bank edge, deep reefs and bait schools. Sometimes up on the reef after bait.',
    behavior: 'Moves in loose groups, fast and wary. Often seen at the edge of visibility.',
    hunt: {
      summary: 'Stay still near the bottom on the edge; kings pass once and rarely come close.',
      tips: ['A shot over 2 m with a sling usually misses or pulls out.'],
      shot: 'Spine behind the head.',
      difficulty: 4
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Counts toward the 18-pelagic limit per visiting boat.'
    },
    eat: {
      rating: 3,
      cig: 'moderate',
      text: 'Good fresh or smoked; oily. Big kings have caused ciguatera in the Caribbean.',
      tips: ['Keep the smaller fish; skip the head, liver and roe.']
    },
    notes: ['Sharp teeth like a wahoo: mind your hands.']
  },
  {
    id: 'cero',
    name: 'Cero',
    aka: ['Cero mackerel'],
    sci: 'Scomberomorus regalis',
    family: 'Scombridae (tunas & mackerels)',
    group: 'blue-water',
    verdict: 'shoot',
    note: 'The reef mackerel. Comes close over the reef and eats well.',
    abundance: 'common',
    size: { kg: [1, 4], cm: [45, 80], maxKg: 8 },
    depth: [2, 20],
    features: [
      'Slim mackerel; bronze-yellow stripe along the side from pectoral to tail',
      'Rows of bronze-yellow spots above and below the stripe',
      'Black patch on the front of the first dorsal fin'
    ],
    lookAlikes: [
      { id: 'king-mackerel', name: 'King mackerel', tell: 'Much bigger, plain silver, no stripe or spots; lateral line dips sharply.' },
      { id: 'great-barracuda', name: 'Great barracuda', tell: 'Black blotches on the lower flank and separate dorsals; underslung, toothy jaw.' }
    ],
    where: 'Over patch reefs and the outer reef, often near the surface chasing baitfish.',
    behavior: 'Alone or in small groups, cruising fast over the reef. Curious enough to swing past a still diver.',
    hunt: {
      summary: 'Wait over the reef top; ceros make quick passes and turn broadside close in.',
      tips: ['Lead the fish slightly: ceros move fast.'],
      shot: 'Behind the head or through the gill plate.',
      difficulty: 3
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Treated as a pelagic in visiting-boat limits.'
    },
    eat: {
      rating: 4,
      cig: 'low',
      text: 'Very good, mild for a mackerel. Eat it fresh.',
      tips: []
    },
    notes: []
  },
  {
    id: 'greater-amberjack',
    name: 'Greater amberjack',
    aka: ['AJ'],
    sci: 'Seriola dumerili',
    family: 'Carangidae (jacks)',
    group: 'blue-water',
    verdict: 'target',
    note: 'A brute on deep ledges and wrecks. Shoot it for the fight; eat only the smaller ones.',
    abundance: 'occasional',
    size: { kg: [8, 30], cm: [80, 130], maxKg: 80 },
    depth: [15, 60],
    features: [
      'Big, powerful jack, brown to olive back and silver belly',
      'Dark "nuchal" band running from the snout through the eye to the first dorsal',
      'Amber stripe along the side on live fish; no scutes on the tail'
    ],
    lookAlikes: [
      { id: 'almaco-jack', name: 'Almaco jack', tell: 'Deeper, shorter body; tall, sickle-shaped second dorsal and anal fins.' },
      { id: 'horse-eye-jack', name: 'Horse-eye jack', tell: 'Big eye, hard scutes on the tail base, dark-edged yellow tail.' }
    ],
    where: 'Deep ledges, the drop-off and wrecks; usually below 20 m.',
    behavior: 'Schools that come up from depth to inspect a diver, then circle off.',
    hunt: {
      summary: 'Dive the edge and wait: AJs rise to inspect you and often come within range.',
      tips: [
        'Scraping or a flasher brings them in.',
        'A big AJ drags hard for the bottom; a sling shot needs to stone it or you lose the fish.'
      ],
      shot: 'Spine behind the head, or the "kill shot" just above the pectoral fin.',
      difficulty: 4
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Counts toward the visiting-boat demersal limit (60 lb or 20 fish).'
    },
    eat: {
      rating: 3,
      cig: 'high',
      text: 'Good when small; big amberjacks are a well-known ciguatera carrier in the Bahamas and Caribbean. Worms are common in the tail meat.',
      tips: ['Keep fish under about 10 kg for the table.', 'Never eat the head, liver or roe.']
    },
    notes: []
  },
  {
    id: 'almaco-jack',
    name: 'Almaco jack',
    aka: [],
    sci: 'Seriola rivoliana',
    family: 'Carangidae (jacks)',
    group: 'blue-water',
    verdict: 'shoot',
    note: 'Curious, close-coming jack of the edge and wrecks.',
    abundance: 'occasional',
    size: { kg: [3, 12], cm: [50, 90], maxKg: 60 },
    depth: [15, 60],
    features: [
      'Deep, flattened jack, bronze to olive-brown back',
      'Dark band from the eye to the first dorsal',
      'Long, sickle-shaped second dorsal and anal fins'
    ],
    lookAlikes: [
      { id: 'greater-amberjack', name: 'Greater amberjack', tell: 'Longer, more torpedo-shaped body; shorter, lower second dorsal.' }
    ],
    where: 'Drop-offs and deep ledges, often in small groups.',
    behavior: 'Swims straight up to divers and circles; very curious.',
    hunt: {
      summary: 'Let it come to you on the edge; almacos usually close the distance themselves.',
      tips: ['Turn slowly with the fish rather than swimming at it.'],
      shot: 'Behind the gill plate on the lateral line.',
      difficulty: 3
    },
    rules: {
      status: 'open',
      text: 'No size limit or season. Counts toward the visiting-boat demersal limit.'
    },
    eat: {
      rating: 4,
      cig: 'moderate',
      text: 'Excellent sashimi and grill fish; big ones carry some ciguatera risk.',
      tips: ['Prefer mid-size fish.']
    },
    notes: []
  },
  {
    id: 'rainbow-runner',
    name: 'Rainbow runner',
    aka: [],
    sci: 'Elagatis bipinnulata',
    family: 'Carangidae (jacks)',
    group: 'blue-water',
    verdict: 'shoot',
    note: 'Fast, sleek and fine eating; often with mahi under weed.',
    abundance: 'occasional',
    size: { kg: [1.5, 6], cm: [50, 90], maxKg: 17 },
    depth: [0, 20],
    features: [
      'Slender, torpedo jack with two light-blue stripes and a yellow band between',
      'Olive-blue back, white belly',
      'Two small finlets behind the dorsal and anal fins'
    ],
    lookAlikes: [
      { id: 'mahi-mahi', name: 'Mahi-mahi', tell: 'Gold-green with a dorsal fin from head to tail; blunt head on bulls.' },
      { id: 'bar-jack', name: 'Bar jack', tell: 'Deeper body, single black-and-blue stripe along the back into the lower tail.' }
    ],
    where: 'Blue water off the edge, under weed lines and around floating objects.',
    behavior: 'Schools in open water; often swings in close to inspect divers.',
    hunt: {
      summary: 'Hang under a weed line or near the edge; runners pass close and fast.',
      tips: ['Pick the closest fish as the school turns.'],
      shot: 'Spine behind the head.',
      difficulty: 3
    },
    rules: {
      status: 'open',
      text: 'No size limit or season.'
    },
    eat: {
      rating: 4,
      cig: 'low',
      text: 'Very good raw or grilled.',
      tips: []
    },
    notes: []
  }
];
