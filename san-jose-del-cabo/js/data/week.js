// San José del Cabo: place constants, this week's ocean conditions, and dive sites.
// Sunrise, sunset and moon are computed in the app for the current week.

export const PLACE = {
  name: 'San José del Cabo',
  lat: 23.06,
  lon: -109.70,
  utcOffset: -7, // Baja California Sur keeps Mountain Standard Time all year
  tz: 'MST (UTC−7)'
};

const map = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const WEEK = {
  updated: '2026-11-16',
  enso: {
    headline: 'Strong El Niño, still strengthening',
    detail: 'NOAA\'s 12 November update has the Niño-3.4 index at +2.5 °C and strong-to-very-strong El Niño likely through January–March 2027. The next update is 10 December.',
    url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml'
  },
  ocean: [
    { label: 'Water', value: 'Warm for November', note: 'Charter reports for 6–12 November describe warm blue water and calm seas. Mid-November is usually around 26–27 °C here; expect it warmer this year. A 3 mm suit is plenty.' },
    { label: 'Thermocline', value: 'Deeper than usual', note: 'Warm surface water pushes the cool layer down, so pelagics can hold deeper during the day. Try dawn and dusk, and longer drops on the banks.' },
    { label: 'Storms', value: 'Season ends 30 Nov', note: 'El Niño years tend to bring more and stronger eastern Pacific storms, sometimes late. Check the National Hurricane Center before every trip.', url: 'https://www.nhc.noaa.gov/?epac' },
    { label: 'Wind', value: 'Northerlies starting', note: 'The winter north wind usually starts in late autumn and can blow the East Cape side rough for days. Pacific-side and Corridor spots are calmer on north-wind days.' },
    { label: 'Tides', value: 'Check a local table', note: 'Not computed here. Slack tide over the points and banks makes for easier drops.', url: 'https://www.google.com/search?q=San+Jos%C3%A9+del+Cabo+tide+table' }
  ],
  running: [
    { id: 'wahoo', note: 'Season under way at Gordo Banks; high spots and current lines.' },
    { id: 'yellowfin-tuna', note: 'A 226 lb fish came off the banks on 1 November; the bite is patchy with a wide size range.' },
    { id: 'dorado', note: 'Expected to pick up as the water finally cools.' },
    { id: 'striped-marlin', note: 'In the reports offshore; leave billfish to the release fishery.' },
    { id: 'yellowtail', note: 'Scarce: El Niño keeps jurel north in cooler water.' }
  ],
  sources: [
    { label: 'Pisces Sportfishing weekly report, 6–12 Nov 2026', url: 'https://blog.piscessportfishing.com/' },
    { label: 'Gordo Banks Pangas fish reports', url: 'https://gordobanks.com/category/fish-reports/' }
  ]
};

// status: 'open' (spearfishing allowed), 'notake' (no fishing: dive only), 'check' (ask locally first)
export const SITES = [
  {
    id: 'gordo-banks',
    name: 'Gordo Banks',
    area: 'Offshore, east of San José',
    status: 'open',
    access: 'Panga or charter from Puerto Los Cabos (La Playita), a short run out.',
    depth: 'Bluewater; the bank tops are too deep for bottom hunting',
    level: 'Advanced',
    targets: ['wahoo', 'yellowfin-tuna', 'dorado', 'almaco-jack', 'rainbow-runner'],
    notes: 'Two seamounts, Inner and Outer Gordo, and the San José fleet\'s main ground. Drift in blue water with flashers and a float line. Strong currents and sharks: always dive with a boat following, and watch for sportfishing traffic. Once famous for schooling hammerheads.',
    map: map('Gordo Banks San Jose del Cabo')
  },
  {
    id: 'outer-banks',
    name: 'Iman, San Luis and Vinorama banks',
    area: 'Offshore, north-east along the East Cape',
    status: 'open',
    access: 'Longer runs by charter from Puerto Los Cabos.',
    depth: 'Bluewater over deep banks',
    level: 'Advanced',
    targets: ['yellowfin-tuna', 'wahoo', 'dorado'],
    notes: 'Other banks the San José fleet fishes. This autumn\'s reports had tuna pushing bait on the edges of Iman and San Luis and wahoo on the high spots.',
    map: map('Banco Iman Baja California Sur')
  },
  {
    id: 'east-cape-points',
    name: 'East Cape rocky points',
    area: 'Coast road north-east of San José (Punta Gorda and beyond)',
    status: 'open',
    access: 'Shore entries from the coast road on calm days, or by panga.',
    depth: '3–20 m',
    level: 'Intermediate',
    targets: ['yellow-snapper', 'leopard-grouper', 'spotted-cabrilla', 'finescale-triggerfish', 'pacific-crevalle-jack', 'barred-pargo'],
    notes: 'Rocky points and boulder reefs along the Sea of Cortez coast. Best when the north wind is down; it blows this side rough. Roosterfish cruise the beaches: release them.',
    map: map('Punta Gorda San Jose del Cabo')
  },
  {
    id: 'palmilla',
    name: 'Palmilla Point',
    area: 'Corridor, just west of San José',
    status: 'check',
    access: 'Shore entry from the beach by the point.',
    depth: '2–12 m',
    level: 'Beginner',
    targets: ['yellow-snapper', 'flag-cabrilla', 'mexican-hogfish', 'burrito-grunt'],
    notes: 'The nearest reef to town, with a sheltered beach. It\'s busy with swimmers and snorkellers: don\'t spear near people, and ask locally before you hunt.',
    map: map('Punta Palmilla Los Cabos')
  },
  {
    id: 'corridor-bays',
    name: 'Chileno and Santa María bays',
    area: 'Corridor, between San José and Cabo San Lucas',
    status: 'check',
    access: 'Public beaches with parking and shore entries.',
    depth: '2–15 m',
    level: 'Beginner',
    targets: [],
    notes: 'The best snorkelling in the Corridor, with turtles and reef fish. Very busy swimming beaches: treat them as dive and snorkel spots, not hunting grounds.',
    map: map('Bahia Santa Maria Los Cabos')
  },
  {
    id: 'lands-end',
    name: 'Land\'s End and Cabo San Lucas bay',
    area: 'Cabo San Lucas, about 35 km west',
    status: 'notake',
    access: 'Dive operators and water taxis from the Cabo San Lucas marina.',
    depth: '5–30 m (sand falls deeper)',
    level: 'All levels',
    targets: [],
    notes: 'Pelican Rock, Neptune\'s Finger, the famous sand falls and the sea lion colony. A protected underwater refuge since 1973: dive only, no fishing.',
    map: map('Lands End Cabo San Lucas')
  },
  {
    id: 'los-frailes',
    name: 'Los Frailes',
    area: 'East Cape, about 1.5 hours by road',
    status: 'notake',
    access: 'Coast road or Highway 1 via La Ribera; shore entries from the bay.',
    depth: '3–30 m',
    level: 'Intermediate',
    targets: [],
    notes: 'The southern end of Cabo Pulmo National Park. Treat it as no-take: dive and look only.',
    map: map('Bahia Los Frailes Baja California Sur')
  },
  {
    id: 'cabo-pulmo',
    name: 'Cabo Pulmo National Park',
    area: 'East Cape, about 1.5–2 hours by road',
    status: 'notake',
    access: 'Dive with a park-registered operator from Cabo Pulmo village; pay the park fee.',
    depth: '5–30 m',
    level: 'All levels',
    targets: [],
    notes: 'The best-recovered reef in the Gulf of California: bigeye trevally tornadoes, big groupers and pargos, and bull sharks in the cooler months. No fishing of any kind. Strong El Niño years bring coral-bleaching risk; don\'t touch the coral.',
    map: map('Cabo Pulmo National Park')
  }
];
