import axios from 'axios';

const baseURL = 'https://api.eventyay.com/v1';

const getAuthToken = async () => {
  try {
    const response = await axios.post(
      'https://api.eventyay.com/v1/auth/login',
      {
        email: 'a.g.sulimko@gmail.com',
        password: 'Opel1978',
      }
    );
    const authToken = response.data.access_token;
    console.log(response);
    return authToken;
  } catch (error) {
    console.error('Error fetching auth token:', error);
    throw error;
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
        'page[size]': 3,
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
