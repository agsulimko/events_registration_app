// api.js
import axios from 'axios';
axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

export const getEvents = async (page, make) => {
  const url = new URL('/events', axios.defaults.baseURL);
  if (page) {
    url.searchParams.append('page', page);
  }
  url.searchParams.append('limit', 12);
  // if (make) {
  //   url.searchParams.append('make', make);
  // }

  try {
    const response = await axios.get(url.toString());
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch events:', error.message);
    throw error;
  }
};
