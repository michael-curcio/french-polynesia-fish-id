// IUSA Sling/Polespear world records: freediving, muscle-powered spear released by hand, no trigger.
// The Hawaiian sling and pole spear (the only legal Bahamian gear) share this division.
// Source: International Underwater Spearfishing Association, https://www.iusarecords.com
// Each entry: { kg, lb, holder, place, date: 'YYYY-MM-DD', url } for the men's and women's divisions,
// or { note } when IUSA doesn't accept the species.
// These were read from IUSA record pages through web search (iusarecords.com itself was not reachable),
// so a record may have been broken since. Species with no entry had no record turn up.
export const CHECKED = '2026-11-05';
export const NOTE = 'From IUSA record pages, checked 5 Nov 2026. Records change: confirm on iusarecords.com before an attempt.';

export default {
  'mutton-snapper': {
    men: { kg: 7.8, lb: 17.2, holder: 'Brian Kirkpatrick', place: 'Strangers Cay, Abaco, Bahamas', date: '2016-07-09', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=884' }
  },
  'horse-eye-jack': {
    men: { kg: 6.8, lb: 15.0, holder: 'Craig Copik', place: 'Bermuda', date: '2013-08-20', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=627' }
  },
  'cero': {
    men: { kg: 5.9, lb: 12.9, holder: 'Sterling Wilson', place: 'Berry Islands, Bahamas', date: '2016-06-19', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=850' }
  },
  'tiger-grouper': {
    men: { kg: 7.7, lb: 17.0, holder: 'Sawyer Lyons', place: 'Bahamas', date: '2021-07-09', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=1245' }
  },
  'yellowfin-grouper': {
    women: { kg: 11.4, lb: 25.1, holder: 'Nathalie Meyers', place: 'Bahamas', date: '2021-04-17', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=1236' }
  },
  'ocean-triggerfish': {
    women: { kg: 5.8, lb: 12.7, holder: 'Stephanie Schuldt', place: 'Bahamas', date: '2021-01-26', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=1229' }
  },
  'almaco-jack': {
    men: { kg: 19.8, lb: 43.6, holder: 'Peter Correale', place: 'Panama', date: '2016-04-29', url: 'https://www.iusarecords.com/ViewRecord.aspx?id=848' }
  },
  'cubera-snapper': {
    men: { kg: 59.0, lb: 130.0, holder: 'Luke Maillis', place: '', date: '2018-04-25', url: 'https://www.iusarecords.com/FishRecordsDetail.aspx?SpeciesID=71' }
  },
  'wahoo': {
    men: { kg: 40.5, lb: 89.3, holder: 'Judd Rosen', place: '', date: '', url: 'https://www.iusarecords.com/FishRecordsDetail.aspx?SpeciesID=275' }
  },
  'nassau-grouper': {
    note: 'Not eligible: IUSA bars Nassau grouper from records as an endangered species.'
  }
};
