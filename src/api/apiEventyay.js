import axios from 'axios';

const baseURL = 'https://api.eventyay.com/v1';

const getAuthToken = async () => {
  try {
    const response = await axios.post(
      'https://api.eventyay.com/v1/auth/login',
      {
        email: 'a.g.sulimko@gmail.com',
        password: '',
      }
      //  {
      //  headers: {
      //    'Content-Type': 'application/json',
      //      Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY4MzUxNDYsIm5iZiI6MTcxNjgzNTE0NiwianRpIjoiZDEzNGQ4MmQtNTQzNy00OTUyLTk1MGUtZWE2MGI4NzFjYjc4IiwiZXhwIjoxNzE2OTIxNTQ2LCJpZGVudGl0eSI6MzcwMTQsImZyZXNoIjp0cnVlLCJ0eXBlIjoiYWNjZXNzIiwiY3NyZiI6ImJiNDhjM2M5LWI0MTEtNGNjMy05NTQwLTk1ZTgyN2RmYWY0YiJ9.6ymH3UIstiA-HjeHnBR_jBZWmvCfKgcUlgi-M4YE4xs',
      //   },
      //  }
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
        'page[size]': 50,
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

// import axios from 'axios';

// const baseURL = 'https://api.eventyay.com/v1';

// const accessToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY4MDE3MTUsIm5iZiI6MTcxNjgwMTcxNSwianRpIjoiMzgzMTYwMjUtMWM1ZS00MzExLTkzZGYtMjQyZDIyNTIyOWFiIiwiZXhwIjoxNzE2ODg4MTE1LCJpZGVudGl0eSI6MzcwMTQsImZyZXNoIjp0cnVlLCJ0eXBlIjoiYWNjZXNzIiwiY3NyZiI6ImE5Y2NjZWUzLTUzZGMtNDNmMy1iZDNiLWU3ZjQ4YjJlMGNkYyJ9.B678Sl9L683zg7vd_0Jq_dcnnaF0xBuokO4ioSByAlA';

// export const getAllEventyay = async page => {
//   // const today = new Date();
//   // const formattedDate = today.toISOString().split('T')[0]; // Преобразуем дату в формат YYYY-MM-DD

//   const url = `${baseURL}/events`;

//   // const searchParams = new URLSearchParams(); //
//   // searchParams.append('location-name', 'Vienna');
//   // searchParams.append('limit', 100);
//   // searchParams.append('filter[starts_at][gte]', formattedDate); // Добавляем фильтр по дате

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `JWT ${accessToken}`,
//       },
//       params: {
//         'location-name': 'Vienna',
//         'page[size]': 50,
//         'page[number]': page,
//       },
//     });
//     console.log(' events:', response.data.data);
//     return response.data.data;
//   } catch (error) {
//     if (error.response) {
//       console.error('Response error:', error.response.data);
//     } else if (error.request) {
//       console.error('Request error:', error.request);
//     } else {
//       console.error('Error', error.message);
//     }
//     throw error;
//   }
// };

// import axios from 'axios';

// const baseURL = 'https://api.eventyay.com/v1';

// const accessToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY4MDE3MTUsIm5iZiI6MTcxNjgwMTcxNSwianRpIjoiMzgzMTYwMjUtMWM1ZS00MzExLTkzZGYtMjQyZDIyNTIyOWFiIiwiZXhwIjoxNzE2ODg4MTE1LCJpZGVudGl0eSI6MzcwMTQsImZyZXNoIjp0cnVlLCJ0eXBlIjoiYWNjZXNzIiwiY3NyZiI6ImE5Y2NjZWUzLTUzZGMtNDNmMy1iZDNiLWU3ZjQ4YjJlMGNkYyJ9.B678Sl9L683zg7vd_0Jq_dcnnaF0xBuokO4ioSByAlA';

// export const getAllEventyay = async () => {
//   const url = `${baseURL}/events`;

//   const fetchEvents = async page => {
//     try {
//       const response = await axios.get(url, {
//         headers: {
//           Authorization: `JWT ${accessToken}`,
//         },
//         params: {
//           'location-name': 'Vienna',
//           'page[size]': 25,
//           'page[number]': page,
//         },
//       });
//       return response.data.data;
//     } catch (error) {
//       if (error.response) {
//         console.error('Response error:', error.response.data);
//       } else if (error.request) {
//         console.error('Request error:', error.request);
//       } else {
//         console.error('Error', error.message);
//       }
//       throw error;
//     }
//   };

//   try {
//     const [page1, page2] = await Promise.all([fetchEvents(1), fetchEvents(2)]);
//     const allEvents = [...page1, ...page2];
//     console.log('Fetched events:', allEvents);
//     return allEvents;
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     throw error;
//   }
// };
