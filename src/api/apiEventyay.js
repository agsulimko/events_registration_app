import axios from 'axios';

const baseURL = 'https://api.eventyay.com/v1';

let authToken = null;
let isFetchingToken = false;

const getAuthToken = async () => {
  if (authToken) {
    console.log('Using cached auth token');
    return authToken;
  }
  if (isFetchingToken) {
    // console.log('Token is already being fetched, please wait');
    while (isFetchingToken) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return authToken;
  }

  isFetchingToken = true;
  try {
    // console.log('Fetching new auth token');
    const response = await axios.post(
      'https://api.eventyay.com/v1/auth/login',
      {
        email: 'a.g.sulimko@gmail.com',
        password: 'Opel1978',
      }
    );
    authToken = response.data.access_token;
    console.log('Auth token:', response);
    return authToken;
  } catch (error) {
    console.error('Error fetching auth token:', error);
    throw error;
  } finally {
    isFetchingToken = false;
  }
};

export const getAllEventyay = async page => {
  try {
    const authToken = await getAuthToken(); // Получение актуального токена
    const response = await axios.get(`${baseURL}/events`, {
      headers: {
        Authorization: `JWT ${authToken}`,
      },
      params: {
        'location-name': 'Vienna',
        'page[size]': 4,
        'page[number]': page,
      },
    });
    console.log('events:', response.data.data);
    return response.data.data;
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error', error.message);
    }
    throw error;
  }
};
