// apiEventyay.js
// import axios from 'axios';

// // axios.defaults.baseURL = 'https://api.eventyay.com/v1';

// axios.defaults.baseURL = '/v1';
// const accessToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY2NjMxNDksIm5iZiI6MTcxNjY2MzE0OSwianRpIjoiNzRjMGRkYTgtNjE0My00ODAyLTg0ZWItYjQyY2IzODcxZTM3IiwiZXhwIjoxNzE2NzQ5NTQ5LCJpZGVudGl0eSI6MzcwMTQsImZyZXNoIjp0cnVlLCJ0eXBlIjoiYWNjZXNzIiwiY3NyZiI6ImVhNGVkNzgyLWFlY2EtNDEwZi1iMDY1LWI2YmJhNmMzYzk3OCJ9.eogha1Da36F_5zA7BfAvUTD1kxxljGSU7m_qLva0Fco';

// export const getAllEventyay = async () => {
//   const url = 'https://api.eventyay.com/v1/events';
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `JWT ${accessToken}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data.data; // Возвращаем массив данных
//   } catch (error) {
//     console.error('Failed to fetch events:', error.message);
//     throw error;
//   }
// };

import axios from 'axios';

const baseURL = 'https://api.eventyay.com/v1';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY2NjMxNDksIm5iZiI6MTcxNjY2MzE0OSwianRpIjoiNzRjMGRkYTgtNjE0My00ODAyLTg0ZWItYjQyY2IzODcxZTM3IiwiZXhwIjoxNzE2NzQ5NTQ5LCJpZGVudGl0eSI6MzcwMTQsImZyZXNoIjp0cnVlLCJ0eXBlIjoiYWNjZXNzIiwiY3NyZiI6ImVhNGVkNzgyLWFlY2EtNDEwZi1iMDY1LWI2YmJhNmMzYzk3OCJ9.eogha1Da36F_5zA7BfAvUTD1kxxljGSU7m_qLva0Fco';

export const getAllEventyay = async () => {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0]; // Преобразуем дату в формат YYYY-MM-DD

  const url = `${baseURL}/events`;

  const searchParams = new URLSearchParams(); // Create URLSearchParams object
  searchParams.append('location-name', 'Vienna'); // Укажите нужный часовой пояс, если требуется

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
      params: {
        'filter[starts_at][gte]': formattedDate,
        // Получаем только события, начинающиеся сегодня или позже
      },
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Request error:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error', error.message);
    }
    throw error;
  }
};
