/// apiEventbrite.js
import axios from 'axios';

// const EVENTBRITE_API_KEY = 'PTBAU5EWH7ZXSO2UXODO';

// export const getEventbriteCategories = async () => {
//   //   const url = 'https://www.eventbriteapi.com/v3/categories/';
//   const url = 'https://www.eventbriteapi.com/v3/events/search/';
//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${EVENTBRITE_API_KEY}`,
//       },
//       params: {
//         'location.address': 'Vienna',
//         'location.within': '10km', // Define the radius
//         // price: 'free', // You can specify 'free', 'paid', or leave this parameter out
//         // categories: '103', // You can specify a category, 103 is for Music
//       },
//     });
//     // console.log('Categories:', response.data.categories);
//     // return response.data.categories;
//     console.log('Events in Vienna:', response.data.events);
//     return response.data.events;
//   } catch (error) {
//     console.error(
//       'Failed to fetch categories from Eventbrite:',
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// };

const OPEN_EVENT_API_URL = 'https://open-event-api.herokuapp.com/events';

export const getEventbriteCategories = async () => {
  try {
    const response = await axios.get(OPEN_EVENT_API_URL, {
      params: {
        city: 'Vienna',
        country: 'AT',
      },
    });
    return response.data.events;
  } catch (error) {
    console.error(
      'Failed to fetch events from Open Event API:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
