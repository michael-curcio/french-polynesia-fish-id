import blueWater from './blue-water.js';
import groupersSnappers from './groupers-snappers.js';
import reef from './reef.js';
import flatsShellfish from './flats-shellfish.js';
import sharksHazards from './sharks-hazards.js';
import PHOTOS from './photos.js';

export const SPECIES = [...blueWater, ...groupersSnappers, ...reef, ...flatsShellfish, ...sharksHazards]
  .map((s) => ({ ...s, photos: PHOTOS[s.id] || [] }));

export const BY_ID = Object.fromEntries(SPECIES.map((s) => [s.id, s]));

export const GROUPS = [
  { id: 'blue-water', name: 'Blue Water & Bank Edge', blurb: 'Wahoo, mahi, tuna, kingfish', hero: 'wahoo' },
  { id: 'groupers-snappers', name: 'Groupers & Snappers', blurb: 'Nassau, rockfish, mutton, cubera', hero: 'mutton-snapper' },
  { id: 'reef', name: 'Reef & Patch Reefs', blurb: 'Hogfish, triggers, porgies, jacks', hero: 'hogfish' },
  { id: 'flats', name: 'Flats & Shallows', blurb: 'Bonefish, permit, tarpon, barracuda', hero: 'bonefish' },
  { id: 'shellfish', name: 'Crawfish & Conch', blurb: 'Seasons and size rules', hero: 'spiny-lobster' },
  { id: 'sharks-rays', name: 'Sharks & Rays', blurb: 'All sharks protected', hero: 'caribbean-reef-shark' },
  { id: 'hazards', name: 'Protected & Hazards', blurb: 'Turtles, morays, venom', hero: 'green-turtle' }
];

// Extra decks shown on the home page, built from verdicts.
export const DECKS = [
  { id: 'trophy', name: 'Trophy targets', blurb: 'Hogfish, black grouper, mutton, wahoo and more', hero: 'black-grouper', filter: (s) => s.verdict === 'target' },
  { id: 'leave', name: 'Leave it', blurb: 'Illegal, protected or not worth it', hero: 'caribbean-reef-shark', filter: (s) => s.verdict === 'avoid' || s.verdict === 'protected' }
];

export const VERDICTS = {
  target: { label: 'Trophy Target', short: 'Trophy target' },
  shoot: { label: 'Shoot', short: 'Shoot' },
  invasive: { label: 'Invasive: Shoot', short: 'Shoot on sight' },
  avoid: { label: 'Avoid', short: 'Leave it' },
  protected: { label: 'Illegal', short: 'Illegal to take' }
};

export const RISK = { none: 'None', low: 'Low', moderate: 'Moderate', high: 'High', 'very-high': 'Very high', unknown: 'Unknown' };
export const DIFFICULTY = ['', 'Beginner', 'Easy', 'Intermediate', 'Advanced', 'Expert'];
export const RULE_STATUS = { open: 'Open', restricted: 'Rules apply', protected: 'Protected' };

export const RULES = [
  {
    title: 'Gear and method',
    items: [
      'Hawaiian sling or pole spear only. Spearguns, or any spear with a trigger, are illegal.',
      'Breath-hold diving only. No scuba, hookah or air compressor to take fish, crawfish, conch or any marine life.',
      'Visitors on a foreign boat need a Bahamas sport fishing permit, with spearfishing endorsed on it by the issuing officer.'
    ]
  },
  {
    title: 'Where you can\'t spear',
    items: [
      'Within 200 yards (183 m) of the shore of any Family Island cay at low water. That covers Grand Cay, Walker\'s Cay and the cays around them.',
      'Walker\'s Cay National Park, north of Walker\'s Cay, is a no-take marine park: no fishing, spearing, conching or crawfishing. Ask locally for the boundary.',
      'For context: within 1 mile of New Providence and of Grand Bahama\'s south coast.'
    ]
  },
  {
    title: 'Seasons and sizes',
    items: [
      'Nassau grouper: closed 1 December – 28 February. Minimum 3 lb (1.4 kg) the rest of the year.',
      'Grouper and rockfish (black grouper): minimum 3 lb (1.4 kg).',
      'Crawfish: open 1 August – 31 March. Minimum 3¼ in (8.3 cm) carapace or 5½ in (14 cm) tail. No egg-bearing females.',
      'Conch: only adults with a well-formed, flared lip.'
    ]
  },
  {
    title: 'Visiting-boat limits (on board at any time)',
    items: [
      '18 pelagic fish in any mix of dolphin (mahi), wahoo, kingfish and tuna, whatever the number of people aboard.',
      'Demersal (reef) fish: 60 lb or 20 fish.',
      '10 crawfish.',
      '6 conch.'
    ]
  },
  {
    title: 'Protected',
    items: [
      'All sharks (shark sanctuary since 2011): no catching, landing, possessing or selling. Release any caught by accident.',
      'All sea turtles (since 2009): no taking turtles, eggs or shell.',
      'Bonefish: no netting, buying or selling. Flats anglers need a licence; bonefish, permit and tarpon are catch-and-release in practice.'
    ]
  },
  {
    title: 'Taking fish home by boat to Florida',
    items: [
      'Only dolphin (mahi), wahoo and reef fish may come back as fillets, with the skin on the whole fillet. Two fillets count as one fish.',
      'Run straight through US and Florida waters with fishing gear stowed.',
      'Queen conch, Nassau grouper and goliath grouper can\'t be brought through US waters by boat.'
    ]
  }
];

export const SOURCES = [
  { label: 'Bahamas Ministry of Tourism: fishing regulations & FAQ', url: 'https://www.bahamas.com/fishing-faq' },
  { label: 'Bahamas Ministry of Tourism: fishing regulations (2020 PDF)', url: 'https://www.bahamas.com/deepsea-fishing-guide/bmot-icast_2020_fishing_regulations.pdf' },
  { label: 'Friends of the Environment (Abaco): fisheries regulations', url: 'https://www.friendsoftheenvironment.org/_files/ugd/04dc81_5844312c05564d13a5d46d8cafb866b3.pdf' },
  { label: 'Friends of the Environment (Abaco): protected areas', url: 'https://friendsoftheenvironment.org/protected-areas' },
  { label: 'BREEF: Bahamas fisheries regulations poster', url: 'https://breef.org/wp-content/uploads/2020/02/BREEF-Fisheries-Regulations-poster.pdf' },
  { label: 'Dept. of Marine Resources: Nassau grouper closed season notice', url: 'https://www.bahamas.gov.bs/wps/wcm/connect/mof_content/internet/all+notices/nassau+grouper+season+closure+2021' },
  { label: 'Perry Institute: Nassau grouper (critically endangered)', url: 'https://www.perryinstitute.org/wp-content/uploads/2023/05/Nassau-Grouper_Critically-Endangered-Poster_LH-Revised.pdf' },
  { label: 'Pew: Bahamas shark sanctuary (2011)', url: 'https://www.pewtrusts.org/about/news-room/press-releases-and-statements/2011/07/05/bahamas-acts-to-protect-sharks' },
  { label: 'Walker\'s Cay National Park', url: 'https://en.wikipedia.org/wiki/Walker%27s_Cay_National_Park' },
  { label: 'FWC: bringing fish back from the Bahamas', url: 'https://myfwc.com/fishing/saltwater/recreational/bahamas/' },
  { label: 'Tribune242: species that can\'t be brought into US waters', url: 'https://tribune242.com/news/2016/sep/15/da-hook' },
  { label: 'Eyewitness News: doctor warns against eating barracuda', url: 'https://ewnews.com/?p=90619' },
  { label: 'Perry Institute: parrotfish decline in the Bahamas', url: 'https://perryinstitute.org/new-research-shows-alarming-decline-in-parrotfish-densities-around-new-providence-and-rose-island' },
  { label: 'Fisheries Act, 2020 (Ecolex)', url: 'https://www.ecolex.org/details/legislation/fisheries-act-2020-no-40-of-2020-lex-faoc211803/' }
];

// Fish Info quiz. The first option is the correct one; options are shuffled when shown.
export const QUESTIONS = [
  { topic: 'legal', q: 'Which spearfishing gear is legal in the Bahamas?', options: ['Hawaiian sling or pole spear', 'Any speargun under 1 m', 'Pneumatic speargun', 'Band speargun with a reel'], why: 'Spearguns, or anything with a trigger, are banned.' },
  { topic: 'legal', q: 'Can you spearfish on scuba or hookah in the Bahamas?', options: ['No: breath-hold only', 'Yes, with a permit', 'Only below 20 m', 'Only for lionfish'], why: 'No scuba or compressor for taking any marine life.' },
  { topic: 'legal', q: 'How close to the shore of Grand Cay can you spearfish?', options: ['No closer than 200 yards', 'No closer than 1 mile', 'Right up to the beach', 'No closer than 50 yards'], why: 'The 200-yard rule covers every Family Island cay.' },
  { topic: 'legal', q: 'Can you spear fish in Walker\'s Cay National Park?', options: ['No: it\'s a no-take park', 'Yes, with a sling', 'Only lionfish and crawfish', 'Only outside crawfish season'], why: 'Bahamas National Trust marine parks are no-take.' },
  { topic: 'legal', species: 'nassau-grouper', q: 'When is Nassau grouper season closed?', options: ['1 December – 28 February', '1 April – 31 July', '1 June – 31 August', 'It never closes'], why: 'It protects the winter spawning aggregations.' },
  { topic: 'legal', species: 'nassau-grouper', q: 'What is the minimum weight for a Nassau grouper?', options: ['3 lb (1.4 kg)', '1 lb (0.45 kg)', '5 lb (2.3 kg)', '10 lb (4.5 kg)'], why: 'The same 3 lb minimum applies to rockfish.' },
  { topic: 'legal', species: 'spiny-lobster', q: 'When is crawfish season open?', options: ['1 August – 31 March', '1 April – 31 July', '1 December – 28 February', 'All year'], why: 'The closed season is 1 April – 31 July.' },
  { topic: 'legal', species: 'spiny-lobster', q: 'What makes a crawfish legal to take in season?', options: ['3¼ in carapace or 5½ in tail, and no eggs', 'Any size, as long as it has no eggs', 'At least 1 lb in weight', 'Antennae longer than the body'], why: 'Egg-bearing females are always protected.' },
  { topic: 'legal', species: 'spiny-lobster', q: 'How many crawfish may a visiting boat have on board?', options: ['10', '6 per person', '20', 'No limit'], why: 'The limit is per vessel, at any time.' },
  { topic: 'legal', species: 'queen-conch', q: 'How many conch may a visiting boat have on board?', options: ['6', '10', '20', '2 per person'], why: 'And only adults with a well-formed, flared lip.' },
  { topic: 'legal', q: 'How many pelagic fish (mahi, wahoo, kingfish, tuna) may a visiting boat hold?', options: ['18 in total', '6 per person', '6 in total', 'No limit'], why: 'It doesn\'t depend on the number of people aboard.' },
  { topic: 'legal', q: 'What is the visiting-boat limit for reef (demersal) fish?', options: ['60 lb or 20 fish', '20 lb or 10 fish', '100 lb', '10 fish per person'], why: 'Groupers, snappers, hogfish, porgies and similar fish all count.' },
  { topic: 'legal', species: 'caribbean-reef-shark', q: 'A reef shark grabs your speared fish and gets tangled. What does the law say?', options: ['Release it: all sharks are protected', 'You may keep it if it\'s over 2 m', 'Keep it if it\'s already dead', 'Report it, then keep it'], why: 'The Bahamas has been a shark sanctuary since 2011.' },
  { topic: 'legal', species: 'green-turtle', q: 'Since when have sea turtles been fully protected in the Bahamas?', options: ['2009', '1986', '2017', '2020'], why: 'No taking turtles, eggs or shell.' },
  { topic: 'legal', species: 'bonefish', q: 'Which of these is banned for bonefish in the Bahamas?', options: ['Netting, buying and selling', 'Catch and release', 'Fly fishing', 'Photographing them'], why: 'The flats rules came into force in January 2017.' },
  { topic: 'legal', q: 'Heading home to Florida by boat, which fish may travel as fillets?', options: ['Mahi, wahoo and reef fish, skin on', 'Any fish, skinned', 'Only whole fish', 'Only tuna'], why: 'Two fillets count as one fish.' },
  { topic: 'legal', q: 'Which of these can\'t be carried back through US waters by boat?', options: ['Queen conch and Nassau grouper', 'Mahi and wahoo fillets', 'Hogfish', 'Mutton snapper'], why: 'They are banned from harvest in US waters.' },
  { topic: 'legal', species: 'lionfish', q: 'Do the normal spearing rules apply to lionfish?', options: ['Yes, outside sanctioned derbies', 'No, anything goes for lionfish', 'Only the scuba rule is lifted', 'Lionfish may be speared in national parks'], why: 'Lionfish have no limit, but gear, distance and park rules still apply.' },

  { topic: 'safety', q: 'Why shouldn\'t you hang a stringer of fish off your body in the Bahamas?', options: ['Reef and bull sharks home in on struggling fish', 'It slows you down on the dive', 'The fish spoil faster', 'It\'s illegal to use stringers'], why: 'Get fish into the boat or float right away.' },
  { topic: 'safety', species: 'lionfish', q: 'How do you treat a lionfish sting?', options: ['Soak in water as hot as you can bear, then get medical help', 'Ice pack straight away', 'Urinate on it', 'Rub it with sand'], why: 'Heat breaks down the venom protein.' },
  { topic: 'safety', species: 'great-barracuda', q: 'Why remove shiny jewellery when diving with barracuda?', options: ['Flashes look like baitfish', 'It attracts sharks only', 'It\'s heavy', 'Salt corrodes it'], why: 'Barracuda strike at flashes.' },
  { topic: 'safety', species: 'green-moray', q: 'What should you do before reaching into a hole for a crawfish?', options: ['Look first: morays share the same holes', 'Tap the rock twice', 'Nothing: morays are harmless', 'Wear thin gloves'], why: 'A green moray bite is serious.' },
  { topic: 'safety', species: 'nurse-shark', q: 'Is a nurse shark safe to grab by the tail?', options: ['No: it can latch on and won\'t let go', 'Yes: it has no teeth', 'Yes, if it\'s small', 'Only when it\'s asleep'], why: 'Nurse sharks are docile until grabbed.' },
  { topic: 'safety', species: 'southern-stingray', q: 'How do you avoid stepping on a stingray when wading?', options: ['Shuffle your feet', 'Walk on tiptoe', 'Wade only at night', 'Splash ahead of you'], why: 'Shuffling warns buried rays to move.' },
  { topic: 'safety', species: 'bull-shark', q: 'A bull shark gets pushy over your speared fish. Best move?', options: ['Give up the fish and leave the water calmly', 'Fight it for the fish', 'Shoot it with the sling', 'Swim away fast, splashing'], why: 'No fish is worth a bite.' },

  { topic: 'hunting', species: 'hogfish', q: 'What\'s the classic way to get close to a hogfish?', options: ['Lie still on the sand and let it come to you', 'Chase it into a hole', 'Swim fast at it from above', 'Shoot from the surface'], why: 'Hogfish are curious; chasing sends them off.' },
  { topic: 'hunting', species: 'mutton-snapper', q: 'Where do mutton snapper feed around Grand Cay?', options: ['Sand edges around the base of patch reefs', 'Mid-water in the Gulf Stream', 'Only in mangrove creeks', 'Inside caves below 40 m'], why: 'Lie still near a coral head and wait.' },
  { topic: 'hunting', q: 'With a Hawaiian sling, what range should you shoot from?', options: ['Under about 2 m', '4–5 m', '6 m or more', 'Any range in clear water'], why: 'A free sling shaft loses power quickly.' },
  { topic: 'hunting', species: 'black-grouper', q: 'Where should you hit a big black grouper?', options: ['Through the head behind the eye', 'In the tail', 'In the belly', 'Anywhere: it won\'t run'], why: 'Body-shot rockfish dive into a hole and wedge in.' },
  { topic: 'hunting', species: 'spiny-lobster', q: 'Why use a tickle stick and net for crawfish?', options: ['You can check size and eggs before you commit', 'Spearing crawfish is always illegal', 'It works deeper', 'It keeps morays away'], why: 'A speared short is a dead short.' },
  { topic: 'hunting', species: 'mahi-mahi', q: 'Where do you find mahi?', options: ['Under weed lines and floating debris', 'Under ledges on patch reefs', 'On the flats at low tide', 'In mangrove creeks'], why: 'Drift with the weed and let them circle in.' },
  { topic: 'hunting', species: 'nassau-grouper', q: 'Which Nassau grouper should you never hunt?', options: ['Fish gathered at a spawning aggregation', 'Fish over 3 lb', 'Fish in 10 m of water', 'Fish near a ledge'], why: 'Aggregations are what keep the species alive.' },
  { topic: 'hunting', species: 'queen-triggerfish', q: 'A queen triggerfish has locked itself into a crack. How do you free it?', options: ['Press down the second dorsal spine', 'Pull hard on the tail', 'Wait for it to tire', 'Shoot it again'], why: 'The second spine is the "trigger" that unlocks the first.' },

  { topic: 'id', species: 'nassau-grouper', q: 'Which mark tells a Nassau grouper from other Bahamian groupers?', options: ['Black saddle on the tail base', 'Yellow edge on the pectoral fins', 'Slanting pale tiger stripes', 'Red spots all over'], why: 'Also look for the tuning-fork mark between the eyes.' },
  { topic: 'id', species: 'yellowfin-grouper', q: 'What gives away a yellowfin grouper?', options: ['Bright yellow outer third of the pectoral fins', 'Black tail saddle', 'Blue lines on the face', 'A long snout'], why: 'Black grouper lack the yellow fin edge.' },
  { topic: 'id', species: 'mutton-snapper', q: 'Which mark helps identify a mutton snapper?', options: ['Small black spot below the soft dorsal', 'Yellow stripe from snout to tail', 'Pale triangle under the eye', 'Five dark bars'], why: 'Plus thin blue lines under the eye.' },
  { topic: 'id', species: 'dog-snapper', q: 'What is the best field mark for a dog snapper?', options: ['Pale triangle below the eye', 'Black spot below the dorsal', 'Yellow tail', 'Blue stripes'], why: 'Look for the big canine teeth too.' },
  { topic: 'id', species: 'wahoo', q: 'How do you tell a wahoo from a king mackerel?', options: ['Wahoo has blue vertical bars and a long, low first dorsal', 'Wahoo has a sharply dipping lateral line', 'Kingfish has blue bars', 'Wahoo has yellow finlets'], why: 'The kingfish is plain silver with a dipping lateral line.' },
  { topic: 'id', species: 'cero', q: 'What separates a cero from a king mackerel?', options: ['Bronze spots and a side stripe', 'Blue bars', 'A tall, sickle-shaped dorsal', 'Plain silver flanks'], why: 'Ceros also have a black patch on the front dorsal.' },
  { topic: 'id', species: 'hogfish', q: 'Which feature identifies a hogfish?', options: ['Long, trailing first three dorsal spines', 'Black tail saddle', 'Blue face lines', 'Yellow side stripe'], why: 'Plus the long pig-like snout.' },
  { topic: 'id', species: 'queen-triggerfish', q: 'What do Bahamians call the queen triggerfish?', options: ['Turbot', 'Rockfish', 'Muttonfish', 'Kingfish'], why: 'Also "old wife".' },
  { topic: 'id', species: 'black-grouper', q: 'What is "rockfish" in the Bahamas?', options: ['Black grouper', 'Red hind', 'Rock hind', 'Scorpionfish'], why: 'The 3 lb grouper minimum covers rockfish too.' },
  { topic: 'id', species: 'spiny-lobster', q: 'What do Bahamians call the spiny lobster?', options: ['Crawfish', 'Bug', 'Langosta', 'Conch'], why: 'Crawfish season opens 1 August.' },
  { topic: 'id', species: 'bar-jack', q: 'Which jack has a black-and-blue stripe along its back into the lower tail?', options: ['Bar jack', 'Horse-eye jack', 'Crevalle jack', 'Black jack'], why: 'Bar jacks often follow stingrays.' },
  { topic: 'id', species: 'black-jack', q: 'How do you recognise a black jack?', options: ['Dark grey to black all over, with jet-black scutes', 'Yellow tail with a dark edge', 'Black spot on the pectoral fin', 'Blue stripe along the back'], why: 'Leave it: high ciguatera risk.' },
  { topic: 'id', species: 'queen-conch', q: 'How can you tell an adult queen conch?', options: ['A thick, flared lip', 'A thin, sharp edge', 'Pink spines', 'A smooth white shell'], why: 'Thin-lipped "rollers" are juveniles.' },
  { topic: 'id', species: 'hawksbill-turtle', q: 'How do you tell a hawksbill from a green turtle?', options: ['Hooked beak and overlapping shell scales', 'Huge head and red shell', 'Rounded head and smooth shell', 'White spots on the back'], why: 'Both are fully protected.' },

  { topic: 'eating', species: 'great-barracuda', q: 'Which Bahamian fish is the classic ciguatera carrier?', options: ['Great barracuda', 'Mahi-mahi', 'Hogfish', 'Lane snapper'], why: 'A Bahamian doctor has urged people to stop eating it.' },
  { topic: 'eating', q: 'Does cooking destroy ciguatoxin?', options: ['No: cooking, freezing and drying don\'t help', 'Yes, if boiled', 'Yes, if frozen first', 'Only grilling does'], why: 'Avoid high-risk species and big fish, and skip heads and guts.' },
  { topic: 'eating', q: 'Which parts of a reef fish are most likely to hold ciguatoxin?', options: ['Head, liver, guts and roe', 'Fillets only', 'Skin only', 'Tail meat'], why: 'Never eat the organs of a risky fish.' },
  { topic: 'eating', species: 'mahi-mahi', q: 'Why ice mahi and tuna straight away?', options: ['Warm fish build histamine (scombroid poisoning)', 'To kill ciguatoxin', 'To loosen the skin', 'It\'s the law'], why: 'Bleed, gut and ice fast.' },
  { topic: 'eating', species: 'lionfish', q: 'Is lionfish safe to eat?', options: ['Yes: the venom is only in the spines', 'No: the meat is venomous', 'Only when raw', 'Only the liver'], why: 'Clip the spines before cleaning.' },
  { topic: 'eating', species: 'porcupinefish', q: 'Why never eat a porcupinefish?', options: ['Its organs carry tetrodotoxin', 'It\'s always full of ciguatoxin', 'It\'s illegal', 'It tastes of ammonia'], why: 'Tetrodotoxin can kill.' },
  { topic: 'eating', species: 'greater-amberjack', q: 'Which amberjack is safer to eat?', options: ['A smaller one, under about 10 kg', 'The biggest one you can find', 'Any size if cooked well', 'Only the head'], why: 'Big amberjacks carry more ciguatera risk.' },

  { topic: 'behavior', species: 'nassau-grouper', q: 'Why does Nassau grouper season close in winter?', options: ['They gather at a few spawning sites around winter full moons', 'They migrate to Florida', 'They go too deep to find', 'Their meat is toxic in winter'], why: 'Whole aggregations can be wiped out in days.' },
  { topic: 'behavior', species: 'stoplight-parrotfish', q: 'Why leave parrotfish alone?', options: ['They graze algae that would smother coral', 'They are toxic', 'They are illegal to take', 'They bite divers'], why: 'Bahamian parrotfish numbers are falling.' },
  { topic: 'behavior', species: 'tiger-shark', q: 'Where off the northern Bahamas is famous for tiger sharks?', options: ['Tiger Beach, off Grand Bahama', 'Exuma Cays Land and Sea Park', 'Nassau Harbour', 'Bimini Road'], why: 'Tigers roam the Little Bahama Bank.' },
  { topic: 'behavior', species: 'spiny-lobster', q: 'When do crawfish come out of their holes to feed?', options: ['At night', 'At midday', 'Only at low tide', 'Only in summer'], why: 'By day only the antennae show.' }
];
