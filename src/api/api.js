// api.js
import axios from 'axios';
axios.defaults.baseURL = 'https://66430a433c01a059ea213b70.mockapi.io/api';

// export const postEventToResource = async event => {
//   try {
//     const response = await axios.post('/events', event);

//     console.log('Event added:', response.data);
//   } catch (error) {
//     console.error('Error adding event:', error);
//     throw error;
//   }
// };

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

    return response.data;
  } catch (error) {
    console.error('Failed to fetch events:', error.message);
    throw error;
  }
};
export const postEvents = async userData => {
  const { title, description, eventdate, organizer } = userData;
  const url = new URL('/users', axios.defaults.baseURL);

  try {
    const response = await axios.post(url.toString(), {
      title: title,
      description: description,
      eventdate: eventdate,
      organizer: organizer,
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
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

export const putViews = async (id, event) => {
  const url = new URL(`/users/${id}`, axios.defaults.baseURL);

  try {
    const response = await axios.put(url.toString(), {
      event: event,
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
    throw error;
  }
};

export const deleteEvent = async (id, event) => {
  const url = new URL(`/events/${id}`, axios.defaults.baseURL);

  try {
    await axios.delete(url.toString());

    // console.log('Event deleted:', response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(`Event with id ${id} not found, skipping deletion`);
    } else {
      console.error('Error deleting event:', error);

      throw error;
    }
  }
};

// export const deleteEvent = async id => {
//   try {
//     await axios.delete(`/events/${id}`);
//     console.log(`Event with id ${id} deleted`);
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.warn(`Event with id ${id} not found, skipping deletion`);
//     } else {
//       console.error('Error deleting event:', error);
//       throw error;
//     }
//   }
// };
