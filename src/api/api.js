// api.js
import axios from 'axios';
axios.defaults.baseURL = 'https://66430a433c01a059ea213b70.mockapi.io/api';

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
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch events:', error.message);
    throw error;
  }
};

export const getViews = async (page, make) => {
  const url = new URL('/users', axios.defaults.baseURL);
  // if (page) {
  //   url.searchParams.append('page', page);
  // }
  // url.searchParams.append('limit', 12);
  // if (make) {
  //   url.searchParams.append('make', make);
  // }

  try {
    const response = await axios.get(url.toString());
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

export const postViews = async userData => {
  // Принимаем объект userData с данными пользователя
  const { fullName, email, dateOfBirth, whereHeard, event } = userData; // Извлекаем данные из userData

  // Преобразуем registerId в массив, если он представлен строкой

  const url = new URL('/users', axios.defaults.baseURL);
  // if (page) {
  //   url.searchParams.append('page', page);
  // }
  // url.searchParams.append('limit', 12);
  // if (make) {
  //   url.searchParams.append('make', make);
  // }

  try {
    const response = await axios.post(url.toString(), {
      fullName: fullName,
      email: email,
      dateOfBirth: dateOfBirth,
      whereHeard: whereHeard,
      event: event,
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

export const getAllEvents = async () => {
  const url = new URL('/events', axios.defaults.baseURL);
  // if (page) {
  //   url.searchParams.append('page', page);
  // }
  // url.searchParams.append('limit', 12);
  // if (make) {
  //   url.searchParams.append('make', make);
  // }

  try {
    const response = await axios.get(url.toString());
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch events:', error.message);
    throw error;
  }
};
