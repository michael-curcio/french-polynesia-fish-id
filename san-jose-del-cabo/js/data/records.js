// IUSA Sling/Polespear world records: freediving, muscle-powered spear released by hand, no trigger.
// Mexico also allows rubber and spring spearguns; their records sit in IUSA's separate speargun division.
// Source: International Underwater Spearfishing Association, https://www.iusarecords.com
// Each entry: { kg, lb, holder, place, date: 'YYYY-MM-DD', url } for the men's and women's Sling/Polespear
// divisions, plus `gun` for the men's speargun record where one set in Mexico turned up.
// Read from IUSA record pages through web search (iusarecords.com itself was not reachable),
// so a record may have been broken since. Species with no entry had no record turn up.
export const CHECKED = '2026-11-16';
export const NOTE = 'IUSA records, from record pages checked Nov 2026. Records change: confirm on iusarecords.com.';

export default {
  'pacific-dog-snapper': {
    men: { kg: 10.8, lb: 23.8, holder: 'Manuel J. Menendez II', place: 'Panama', date: '2014-04-11', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=683' }
  },
  'almaco-jack': {
    men: { kg: 19.8, lb: 43.6, holder: 'Peter Correale', place: 'Panama', date: '2016-04-29', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=848' }
  },
  'mullet-snapper': {
    gun: { kg: 19.5, lb: 43.0, holder: 'Stanislav Mihaylov', place: 'Mexico', date: '2015-06-02', url: 'https://www.iusarecords.com/RecordsWorld.aspx' }
  },
  'yellowtail': {
    gun: { kg: 39.7, lb: 87.6, holder: 'Brandon Wahlers', place: 'Mexico', date: '2009-08-23', url: 'https://www.iusarecords.com/RecordsWorld.aspx' }
  },
  'roosterfish': {
    gun: { kg: 34.6, lb: 76.3, holder: 'Matt Davidson', place: 'Mexico', date: '2010-07-08', url: 'https://www.iusarecords.com/RecordsWorld.aspx' }
  },
  'pacific-crevalle-jack': {
    gun: { kg: 11.3, lb: 25.0, holder: 'John Ross', place: 'Mexico', date: '2013-11-04', url: 'https://www.iusarecords.com/RecordsWorld.aspx' }
  },
  'bigeye-trevally': {
    gun: { kg: 7.7, lb: 17.0, holder: 'Roberto Reyes', place: 'Mexico', date: '2006-07-19', url: 'https://www.iusarecords.com/RecordsWorld.aspx' }
  },
  'gulf-grouper': {
    gun: { kg: 95.7, lb: 211.0, holder: 'Dewey Hennessy', place: 'Mexico', date: '1968-05-05', url: 'https://www.iusarecords.com/RecordsWorld.aspx' }
  },
  'wahoo': {
    men: { kg: 40.5, lb: 89.3, holder: 'Judd Rosen', place: '', date: '', url: 'https://www.iusarecords.com/FishRecordsDetail.aspx?SpeciesID=275' }
  }
};
