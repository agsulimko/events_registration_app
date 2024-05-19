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
      // fullName: fullName,
      // email: email,
      // dateOfBirth: dateOfBirth,
      // whereHeard: whereHeard,
      event: event,
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

// // Fetch registrations for a specific event
// export const getRegistrations = async eventId => {
//   const url = new URL(
//     `/events/${eventId}/registrations`,
//     axios.defaults.baseURL
//   );

//   try {
//     const response = await axios.get(url.toString());
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch registrations:', error.message);

//     throw error;
//   }
// };

// Fetch registrations for a specific event

export const getRegistrations = async () => {
  const url = new URL('/users', axios.defaults.baseURL);

  try {
    const response = await axios.get(url.toString());
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

// export const getRegistrations = async eventId => {
//   const url = new URL(`/users/${eventId}`, axios.defaults.baseURL);

//   try {
//     const response = await axios.get(url.toString());
//     const data = response.data;

//     // Check if data is an array
//     if (Array.isArray(data)) {
//       console.log(data);
//       return data;
//     } else if (typeof data === 'object') {
//       // If data is an object, convert it to an array
//       console.warn(
//         'Received a single object instead of an array. Converting to array:',
//         data
//       );
//       const dataArray = [data];
//       console.log(dataArray);
//       return dataArray;
//     } else {
//       // If data is neither an array nor an object, handle the error
//       console.error(
//         'Invalid data format - expected an array or an object:',
//         data
//       );
//       throw new Error('Invalid data format');
//     }
//   } catch (error) {
//     console.error('Failed to fetch registrations:', error.message);
//     throw error;
//   }
// };
