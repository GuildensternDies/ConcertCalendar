import axios from 'axios';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const KEY = '9VxXHQaAUHAOlVQS96qQquEivyI5hsn0'

export const getConcerts = async (date, zip) => {
  const resp = await axios.get(`${BASE_URL}postalCode=${zip}&localStartEndDateTime=${date}T00:00:00,${date}T23:59:59&radius=50&apikey=${KEY}`)
  return resp.data._embedded;
}