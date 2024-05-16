// api.js
import axios from 'axios';
axios.defaults.baseURL = 'https://66430a433c01a059ea213b70.mockapi.io/api';

export const getAllEvents = async () => {
  const url = new URL('/events', axios.defaults.baseURL);

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
  url.searchParams.append('limit', 12);
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

export const getViews = async page => {
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

// // / Функция для проверки уникальности email
//  const [emailError, setEmailError] = useSta;
//   const checkEmailExists = async (email) => {
//     try {
//       // Отправляем запрос к серверу для проверки email
//       const response = await fetch(
//         `/api/check-email?email=${encodeURIComponent(email)}`
//       );
//       const data = await response.json();
//       if (data.exists) {
//         setEmailError("Email already exists"); // Если email уже существует, устанавливаем ошибку
//       } else {
//         setEmailError(""); // Если email уникален, очищаем ошибку
//       }
//     } catch (error) {
//       console.error("Error checking email:", error);
//       setEmailError("Error checking email");
//     }
//   };

//   // Обработчик изменений в поле email
//   const handleEmailChange = (e) => {
//     const { value } = e.target;
//     setFormData({
//       ...formData,
//       email: value,
//     });
//     setEmailError(""); // При изменении email очищаем ошибку
//   };
