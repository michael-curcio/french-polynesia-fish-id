import bluewater from './bluewater.js';
import groupersSnappers from './groupers-snappers.js';
import reefBeaches from './reef-beaches.js';
import sharksHazards from './sharks-hazards.js';
import PHOTOS from './photos.js';
import RECORDS, { CHECKED as RECORDS_CHECKED, NOTE as RECORDS_NOTE } from './records.js';
export { SITES, WEEK, PLACE } from './week.js';

export { RECORDS_CHECKED, RECORDS_NOTE };
export const SPECIES = [...bluewater, ...groupersSnappers, ...reefBeaches, ...sharksHazards]
  .map((s) => ({ ...s, photos: PHOTOS[s.id] || [], records: RECORDS[s.id] || null }));

export const BY_ID = Object.fromEntries(SPECIES.map((s) => [s.id, s]));

export const GROUPS = [
  { id: 'bluewater', name: 'Bluewater & Gordo Banks', blurb: 'Tuna, wahoo, dorado, amberjack', hero: 'wahoo' },
  { id: 'groupers-snappers', name: 'Groupers & Snappers', blurb: 'Cabrillas, garropa, pargos', hero: 'leopard-grouper' },
  { id: 'reef', name: 'Rocky Reef', blurb: 'Vieja, cochi, jacks, grunts', hero: 'mexican-hogfish' },
  { id: 'beaches', name: 'Beaches & Surf', blurb: 'Roosterfish, pompano, sierra', hero: 'roosterfish' },
  { id: 'sharks-rays', name: 'Sharks & Rays', blurb: 'Hammerheads, bulls, mantas', hero: 'scalloped-hammerhead' },
  { id: 'hazards', name: 'Protected & Hazards', blurb: 'Turtles, sea lions, morays, venom', hero: 'olive-ridley-turtle' }
];

export const DECKS = [
  { id: 'trophy', name: 'Trophy targets', blurb: 'Yellowfin, wahoo, garropa, pargo prieto and more', hero: 'yellowfin-tuna', filter: (s) => s.verdict === 'target' },
  { id: 'nino', name: 'El Niño this week', blurb: 'Who\'s running, who\'s gone north', hero: 'dorado', filter: (s) => !!s.nino },
  { id: 'leave', name: 'Leave it', blurb: 'Illegal, protected or not worth it', hero: 'whale-shark', filter: (s) => s.verdict === 'avoid' || s.verdict === 'protected' }
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
    title: 'Licence',
    items: [
      'You need a Mexican sport fishing permit (permiso de pesca deportiva) from CONAPESCA; buy it online before you go. Spearfishing has its own individual licence category.',
      'Charter boats usually cover the boat; each diver still needs a personal permit. Check with your operator.'
    ]
  },
  {
    title: 'Gear and method',
    items: [
      'Breath-hold diving only: no scuba, hookah or compressor while spearfishing.',
      'One rubber- or spring-powered speargun (or pole spear or sling) per person. No powerheads; hooks and gaffs aren\'t allowed for spearfishing.',
      'Fish only: no lobster, crabs, octopus, clams or other shellfish by spearfishing.'
    ]
  },
  {
    title: 'Limits',
    items: [
      'Spearfishing: up to 5 fish per person per day.',
      'Billfish (marlin, sailfish, swordfish) and sharks: 1 per person per day under the sport rules. Dorado and roosterfish: 2. Sources differ on how these count toward the 5-fish spearfishing limit.',
      'Marlin, sailfish, swordfish, dorado and roosterfish are reserved for sport fishing within 50 nautical miles; billfish are released by local custom.'
    ]
  },
  {
    title: 'Where you can\'t spear',
    items: [
      'Cabo Pulmo National Park (Pulmo Point to Los Frailes): no fishing of any kind. Dive it with a registered operator and pay the park fee.',
      'Cabo San Lucas protected area (Land\'s End and the bay): an underwater refuge since 1973, with no fishing authorisation. Dive only.',
      'Crowded swimming and snorkel beaches such as Santa María and Chileno: don\'t spear among swimmers; ask locally.'
    ]
  },
  {
    title: 'Protected',
    items: [
      'All sea turtles (since 1990), marine mammals including sea lions and whales, and whale sharks.',
      'Manta rays and devil rays (mobulas): catching them is banned.',
      'Totoaba is fully protected; gulf grouper and Pacific goliath grouper are endangered or rare, so leave them.',
      'No collecting coral, sea fans, shells or live rock.'
    ]
  }
];

export const SOURCES = [
  { label: 'NOAA CPC: ENSO diagnostic discussion, 12 Nov 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml' },
  { label: 'NOAA National Hurricane Center: eastern Pacific', url: 'https://www.nhc.noaa.gov/?epac' },
  { label: 'Pisces Sportfishing: weekly Cabo report (6–12 Nov 2026)', url: 'https://blog.piscessportfishing.com/' },
  { label: 'Gordo Banks Pangas: San José del Cabo fish reports', url: 'https://gordobanks.com/category/fish-reports/' },
  { label: 'NOM-017-PESC-1994 sport fishing rules (2013 modification, DOF)', url: 'https://dof.gob.mx/nota_detalle.php?codigo=5323155&fecha=25%2F11%2F2013' },
  { label: 'NOM-017-PESC-1994 full text (gob.mx)', url: 'https://www.gob.mx/cms/uploads/attachment/file/311370/NOM_017_PESC.pdf' },
  { label: 'CONAPESCA sport fishing manual', url: 'https://www.gob.mx/cms/uploads/attachment/file/525/manual-pesca-deportiva-mexico.pdf' },
  { label: 'Baja Bound: Mexican fishing licences', url: 'https://www.bajabound.com/before/permits/fishing' },
  { label: 'Mongabay: Cabo Pulmo National Park', url: 'https://news.mongabay.com/2021/10/local-communities-saved-cabo-pulmo-with-a-national-park-then-came-the-tourists' },
  { label: 'El Sudcaliforniano: Cabo San Lucas protected area, no fishing authorisation', url: 'https://oem.com.mx/elsudcaliforniano/local/cabo-san-lucas-protected-natural-area-no-management-plan-no-authorization-for-fishing-30792631' },
  { label: 'IUSA spearfishing world records', url: 'https://www.iusarecords.com/RecordsWorld.aspx' }
];

// Fish Info quiz. The first option is the correct one; options are shuffled when shown.
export const QUESTIONS = [
  { topic: 'legal', q: 'Can you spearfish on scuba in Mexico?', options: ['No: breath-hold only', 'Yes, with a permit', 'Only below 20 m', 'Only at night'], why: 'Underwater sport fishing is breath-hold diving only.' },
  { topic: 'legal', q: 'How many fish may you spear per day in Mexico?', options: ['5', '10', '20', 'No limit'], why: 'The spearfishing limit is 5 fish per person per day.' },
  { topic: 'legal', q: 'Which of these may you take while spearfishing in Mexico?', options: ['Fish only', 'Lobster and octopus too', 'Any marine animal', 'Shellfish but not fish'], why: 'Crustaceans and molluscs are off-limits to spearfishers.' },
  { topic: 'legal', q: 'How many spearguns may each diver carry?', options: ['One', 'Two', 'Three', 'No limit'], why: 'One rubber- or spring-powered gun per person.' },
  { topic: 'legal', q: 'Can you spearfish in Cabo Pulmo National Park?', options: ['No: no fishing of any kind', 'Yes, with a sling', 'Only pelagic fish', 'Only outside the reef'], why: 'The whole park is closed to fishing.' },
  { topic: 'legal', q: 'What is the rule at Land\'s End in Cabo San Lucas?', options: ['A protected underwater refuge: dive only', 'Open to spearfishing', 'Open on weekdays', 'Open for pole spears only'], why: 'It has been an underwater refuge since 1973.' },
  { topic: 'legal', species: 'olive-ridley-turtle', q: 'Since when have sea turtles been fully protected in Mexico?', options: ['1990', '2015', '1973', '2007'], why: 'No taking turtles, eggs or meat.' },
  { topic: 'legal', species: 'giant-manta', q: 'What does Mexican law say about manta and devil rays?', options: ['Catching them is banned', 'One per day', 'Commercial only', 'Allowed with a permit'], why: 'Mantas and mobulas may not be caught.' },
  { topic: 'legal', species: 'dorado', q: 'Dorado, marlin, sailfish and roosterfish are reserved for whom within 50 nautical miles?', options: ['Sport fishing', 'Commercial longliners', 'Local co-ops only', 'Nobody: they\'re fully protected'], why: 'Commercial take of these species is barred near shore.' },
  { topic: 'legal', q: 'What paperwork does each spearo need in Mexico?', options: ['A CONAPESCA sport fishing permit', 'A US state licence', 'Nothing', 'A scuba card'], why: 'Buy it online before your trip.' },

  { topic: 'safety', species: 'bull-shark', q: 'A bull shark gets pushy around your speared fish. Best move?', options: ['Give up the fish and leave the water calmly', 'Fight it for the fish', 'Shoot it', 'Swim off fast, splashing'], why: 'No fish is worth a bite.' },
  { topic: 'safety', species: 'round-stingray', q: 'How do you avoid round stingrays at the beach?', options: ['Shuffle your feet', 'Walk on tiptoe', 'Run in fast', 'Only wade at night'], why: 'Shuffling warns buried rays.' },
  { topic: 'safety', q: 'When does the eastern Pacific hurricane season end?', options: ['30 November', '31 October', '31 December', 'It never ends'], why: 'El Niño years tend to bring more and stronger storms; check the NHC daily.' },
  { topic: 'safety', species: 'stone-scorpionfish', q: 'How do you treat a scorpionfish sting?', options: ['Soak in water as hot as you can bear, then see a doctor', 'Ice it', 'Rub sand on it', 'Ignore it'], why: 'Heat breaks down the venom.' },
  { topic: 'safety', q: 'Why always dive Gordo Banks with a boat following you?', options: ['Strong currents carry divers away fast', 'It\'s required by law', 'The water is too cold', 'To scare sharks'], why: 'Drifts over the banks move quickly.' },

  { topic: 'hunting', species: 'wahoo', q: 'What brings wahoo in over Gordo Banks?', options: ['Flashers and a little chum, hanging still near the bank top', 'Chasing them at the surface', 'Diving to the bottom at 40 m', 'Night diving with lights'], why: 'Wahoo usually make one fast pass.' },
  { topic: 'hunting', species: 'yellowfin-tuna', q: 'What rig holds a big yellowfin?', options: ['A breakaway to a float line and several floats', 'A short fixed line', 'A pole spear', 'A reel with 10 m of line'], why: 'A big tuna will empty a reel.' },
  { topic: 'hunting', species: 'pacific-dog-snapper', q: 'When is the best chance at a big pargo prieto?', options: ['Dawn or dusk, ambushing at a cave or ledge', 'Midday, chasing it over sand', 'In the surf at noon', 'In blue water offshore'], why: 'Big pargos are wary and nocturnal.' },
  { topic: 'hunting', species: 'broomtail-grouper', q: 'Where should you shoot a big garropa?', options: ['Through the head behind the eye', 'In the tail', 'In the belly', 'Anywhere'], why: 'Body-shot groupers wedge into holes.' },

  { topic: 'id', species: 'broomtail-grouper', q: 'How do you tell a broomtail grouper from a gulf grouper?', options: ['Ragged, broom-like tail edge', 'Yellow pectoral fins', 'Red spots all over', 'A black tail saddle'], why: 'Gulf grouper has a smooth tail edge and is endangered.' },
  { topic: 'id', species: 'yellow-snapper', q: 'Which snapper is rosy at the front and bright yellow at the back?', options: ['Yellow snapper (pargo amarillo)', 'Pacific dog snapper', 'Barred pargo', 'Pacific red snapper'], why: 'It\'s the commonest reef snapper here.' },
  { topic: 'id', species: 'finescale-triggerfish', q: 'What do Baja spearos call the finescale triggerfish?', options: ['Cochi', 'Vieja', 'Garropa', 'Botete'], why: 'Sweet meat under tough skin.' },
  { topic: 'id', species: 'mexican-hogfish', q: 'What gives away a male Mexican hogfish?', options: ['A big fleshy hump on the forehead', 'A comb of long dorsal spines', 'Blue vertical bars', 'A black tail saddle'], why: 'Females are reddish with two dark stripes.' },
  { topic: 'id', species: 'roosterfish', q: 'Which fish has seven long dorsal spines like a rooster\'s comb?', options: ['Roosterfish', 'Sailfish', 'Bigeye trevally', 'Dorado'], why: 'Leave it: reserved and released.' },
  { topic: 'id', species: 'bigeye-trevally', q: 'Which jack has a white-tipped second dorsal and forms Cabo Pulmo\'s fish tornado?', options: ['Bigeye trevally', 'Pacific crevalle jack', 'Almaco jack', 'Yellowtail'], why: 'Protected inside the park.' },
  { topic: 'id', species: 'barred-pargo', q: 'Which snapper has about eight dark bars and huge fangs?', options: ['Barred pargo (coconaco)', 'Yellow snapper', 'Spotted rose snapper', 'Mullet snapper'], why: 'A prized spearo fish.' },
  { topic: 'id', species: 'black-skipjack', q: 'How do you recognise a black skipjack?', options: ['Wavy dark stripes on the back and black spots under the pectoral', 'Yellow finlets and side stripe', 'Blue vertical bars', 'A sail-like dorsal'], why: 'Common small tuna; mostly bait.' },

  { topic: 'eating', species: 'dorado', q: 'Why ice dorado and tuna straight away?', options: ['Warm fish build histamine (scombroid poisoning)', 'To kill parasites', 'It\'s the law', 'To keep the colour'], why: 'Bleed, gut and ice fast.' },
  { topic: 'eating', species: 'guineafowl-puffer', q: 'Why never eat a puffer (botete)?', options: ['Tetrodotoxin can kill', 'It\'s full of ciguatoxin', 'It\'s illegal', 'It tastes bitter'], why: 'The toxin is in the liver, gut and skin.' },

  { topic: 'nino', q: 'What did NOAA\'s 12 November 2026 update say about El Niño?', options: ['Strong to very strong and still strengthening', 'Over and fading', 'Neutral', 'La Niña developing'], why: 'Niño-3.4 reached +2.5 °C.' },
  { topic: 'nino', species: 'yellowtail', q: 'What usually happens to yellowtail (jurel) off Cabo in a strong El Niño?', options: ['Most move north to cooler water', 'They arrive in record numbers', 'They move into the surf zone', 'Nothing changes'], why: 'Jurel prefer cooler water.' },
  { topic: 'nino', q: 'How can a deeper thermocline affect spearfishing for pelagics?', options: ['Fish can hold deeper during the day', 'Fish come to the beach', 'Visibility drops to zero', 'Tuna stop feeding'], why: 'Warm surface water pushes the cooler layer down.' },
  { topic: 'nino', species: 'scalloped-hammerhead', q: 'Where do hammerheads tend to go in strong El Niño years?', options: ['Farther north along Baja', 'Into the Caribbean', 'Into deeper trenches only', 'Into estuaries'], why: 'They follow warm water north.' }
];
