// apiEventyay.js
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.eventyay.com/v1';

axios.defaults.baseURL = '/v1';
const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTY2NjMxNDksIm5iZiI6MTcxNjY2MzE0OSwianRpIjoiNzRjMGRkYTgtNjE0My00ODAyLTg0ZWItYjQyY2IzODcxZTM3IiwiZXhwIjoxNzE2NzQ5NTQ5LCJpZGVudGl0eSI6MzcwMTQsImZyZXNoIjp0cnVlLCJ0eXBlIjoiYWNjZXNzIiwiY3NyZiI6ImVhNGVkNzgyLWFlY2EtNDEwZi1iMDY1LWI2YmJhNmMzYzk3OCJ9.eogha1Da36F_5zA7BfAvUTD1kxxljGSU7m_qLva0Fco';

export const getAllEventyay = async () => {
  // const url = new URL('/events', axios.defaults.baseURL);

  const url = `${axios.defaults.baseURL}/events`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    });
    // try {
    //   const response = await axios.get(url.toString(), {
    //     headers: {
    //       Authorization: `JWT ${accessToken}`,
    //     },
    //     // params: {
    //     //   // city: 'Vienna',
    //     //   // country: 'AT',
    //     // },
    //   });
    return response;
  } catch (error) {
    console.error('Failed to fetch events:', error.message);
    throw error;
  }
};

// const fetchAllEventyay = async () => {
//   try {
//     const rezults = await getAllEventyay();

//     console.log(rezults);
//   } catch (err) {
//     console.log(err.message);
//   } finally {
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   fetchAllEventyay();
//   // eslint-disable-next-line
// }, []);
