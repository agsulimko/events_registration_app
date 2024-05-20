// api.js
import axios from 'axios';
axios.defaults.baseURL = 'https://66430a433c01a059ea213b70.mockapi.io/api';

export const getAllEvents = async sortBy => {
  const url = new URL('/events', axios.defaults.baseURL);
  if (sortBy) {
    url.searchParams.append('sortBy', sortBy);
  }
  try {
    const response = await axios.get(url.toString());
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch events:', error.message);
    throw error;
  }
};

export const getEvents = async (page, sortBy) => {
  const url = new URL('/events', axios.defaults.baseURL);
  if (page) {
    url.searchParams.append('page', page);
  }
  url.searchParams.append('limit', 40);
  if (sortBy) {
    url.searchParams.append('sortBy', sortBy);
  }

  try {
    const response = await axios.get(url.toString());
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch events:', error.message);
    throw error;
  }
};

export const getViews = async () => {
  const url = new URL('/users', axios.defaults.baseURL);

  try {
    const response = await axios.get(url.toString());

    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

export const postViews = async userData => {
  const { fullName, email, dateOfBirth, whereHeard, event } = userData;
  const url = new URL('/users', axios.defaults.baseURL);

  try {
    const response = await axios.post(url.toString(), {
      fullName: fullName,
      email: email,
      dateOfBirth: dateOfBirth,
      whereHeard: whereHeard,
      event: event,
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

export const patchViews = async (id, event) => {
  const url = new URL(`/users/${id}`, axios.defaults.baseURL);

  try {
    const response = await axios.patch(url.toString(), {
      event: event,
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

// export const getRegistrations = async () => {
//   const url = new URL('/users', axios.defaults.baseURL);

//   try {
//     const response = await axios.get(url.toString());
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch users:', error.message);
//     throw error;
//   }
// };
