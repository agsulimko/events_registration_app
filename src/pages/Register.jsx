//  компонент Register.jsx

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { H1, Section } from "./Events.styled";
import { postViews } from "api/api";

const Register = () => {
  // const location = useLocation();
  const { registerId } = useParams(); // Получаем id из URL
  // const [userData, setUserData] = useState({}); // Создаем состояние для данных пользователя
  // console.log(registerId);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    whereHeard: "",
    // event: [],
    event: [...String(registerId)],
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Добавляем registerId в массив event перед отправкой данных
      const userData = {
        ...formData,
        event: [registerId], // Преобразуем registerId в число
      };

      await postViews(userData);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to submit registration:", error.message);
    }
  };

  if (success) {
    return (
      <Section>
        <H1>Registration Successful!</H1>
        <p>Thank you for registering.</p>
        <Link to="/">Return to Home</Link>
      </Section>
    );
  }

  return (
    <Section>
      <H1>Event registration</H1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Where did you hear about this event?
          <div>
            <input
              type="radio"
              name="whereHeard"
              value="Social media"
              checked={formData.whereHeard === "Social media"}
              onChange={handleChange}
            />
            <span>Social media</span>
          </div>
          <div>
            <input
              type="radio"
              name="whereHeard"
              value="Friends"
              checked={formData.whereHeard === "Friends"}
              onChange={handleChange}
            />
            <span>Friends</span>
          </div>
          <div>
            <input
              type="radio"
              name="whereHeard"
              value="Found myself"
              checked={formData.whereHeard === "Found myself"}
              onChange={handleChange}
            />
            <span>Found myself</span>
          </div>
        </label>

        <button type="submit">Register</button>
        <Link to="/">Cancel</Link>
      </form>
    </Section>
  );
};

export default Register;
