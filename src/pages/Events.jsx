// Events.jsx
import { getAllEvents, getEvents } from "api/api";
import {
  H1,
  Section,
  DivEvents,
  DivEvent,
  DivRegisterView,
  H2,
  P,
  DivPagination,
  SpanPagination,
  PaginationButton,
} from "./Events.styled";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Events.module.css";
import styled from "styled-components";
const LinkRegisterView = styled(Link)`
  color: #3470ff;
  font-weight: 600;

  &:hover {
    color: #0b44cd;
  }

  &:focus {
    color: #0b44cd;
  }
`;

const Events = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);

  const [totalPages, setTotalPages] = useState(1);
  const [lengthArray, setLengthArray] = useState(0);

  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage"), 10) || 1
  );

  const fetchAllEvents = async (page) => {
    try {
      const results = await getAllEvents();

      setLengthArray(results.length);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchEvents = async (page) => {
    try {
      const results = await getEvents(page);

      setEvents(results);
      setTotalPages(Math.ceil(lengthArray / results.length));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // Сначала получаем значение из localStorage, если оно есть
    const currentPageFromStorage = parseInt(
      localStorage.getItem("currentPage"),
      10
    );

    // Если значение есть в localStorage и оно отличается от текущего значения, обновляем currentPage
    if (currentPageFromStorage && currentPageFromStorage !== currentPage) {
      setCurrentPage(currentPageFromStorage);
    }
    fetchAllEvents();
    fetchEvents(currentPage);
    // eslint-disable-next-line
  }, [currentPage, totalPages]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1; // Увеличиваем currentPage
    setCurrentPage(nextPage); // Обновляем текущую страницу
    localStorage.setItem("currentPage", nextPage); // Сохраняем новое значение в localStorage
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1; // Уменьшаем currentPage
    setCurrentPage(prevPage); // Обновляем текущую страницу
    localStorage.setItem("currentPage", prevPage); // Сохраняем новое значение в
  };

  return (
    <>
      <Section>
        <H1>Events</H1>

        <DivEvents className={css.events}>
          {events && events.length > 0 ? (
            events.map((event, index) => {
              return (
                <DivEvent key={index} className={css.event_div}>
                  <H2>{event.title}</H2>
                  <P>{event.description}</P>
                  <DivRegisterView>
                    <LinkRegisterView
                      to={`/register/${event.id}`}
                      state={{ from: location }}
                    >
                      Register
                    </LinkRegisterView>
                    <LinkRegisterView
                      to={`/view/${event.id}`}
                      state={{ from: location }}
                    >
                      View
                    </LinkRegisterView>
                  </DivRegisterView>
                </DivEvent>
              );
            })
          ) : (
            <p>No events found</p>
          )}
        </DivEvents>

        <DivPagination className={css.pagination}>
          <PaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
          <SpanPagination className={css.span_pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                style={{
                  color: currentPage === index + 1 ? "#3470ff" : "inherit",
                }}
              >
                {index + 1}
                {index !== totalPages - 1 ? " " : ""}
              </span>
            ))}
          </SpanPagination>
          <PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </DivPagination>
      </Section>
    </>
  );
};
export default Events;
