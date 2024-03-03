export function getAirlineTailImageUrl(callsign: string) {
  const imageBaseUrl = 'https://static.skyscope.app/tails/';

  const regex = /[A-Z]{3}/;
  const match = callsign.match(regex);

  return `${imageBaseUrl}${match?.join("") || "XXX"}.png`;
}