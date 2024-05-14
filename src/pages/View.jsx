// View.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { H1, Section } from "./Events.styled";
import { getViews } from "api/api";
const View = () => {
  // const location = useLocation();
  const { viewId } = useParams(); // Получаем id из URL
  const [views, setViews] = useState([]);
  console.log(viewId);
  const fetchViews = async (page) => {
    try {
      const results = await getViews();

      console.log(results);

      // Фильтруем просмотры, чтобы отобразить только те, которые относятся к выбранному мероприятию
      const filteredViews = results.filter((view) =>
        view.event.includes(viewId)
      );
      setViews(filteredViews);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchViews();
    // eslint-disable-next-line
  }, [viewId]);

  return (
    <>
      <Section>
        <H1>"Awesome Event" participants</H1>
        <Link to="/">Вернуться назад на домашнюю страницу</Link>
      </Section>
      {views && views.length > 0 ? (
        views.map((view, index) => (
          <div key={index}>
            <p>Name: {view.fullName}</p>
            <p>Email: {view.email}</p>
            {/* Другие данные о пользователе */}
          </div>
        ))
      ) : (
        <p>No views found</p>
      )}
    </>
  );
};

export default View;
