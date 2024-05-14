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
    outline: none;
  }
`;

const Events = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lengthArray, setLengthArray] = useState(0);

  const fetchAllEvents = async (page) => {
    try {
      const results = await getAllEvents();

      // const { results, total_pages } = await getEvents(page);

      // const { results, total_pages } = await getEvents(page);
      // lengthArray / results.length;

      console.log(results.length);
      setLengthArray(results.length);
    } catch (err) {
      console.log(err.message);
    }
  };
  // useEffect(() => {
  //   fetchAllEvents();
  // }, []);
  const fetchEvents = async (page) => {
    try {
      const results = await getEvents(page);
      // const { total_pages } = await getEvents(page);
      // const { results, total_pages } = await getEvents(page);

      // const { results, total_pages } = await getEvents(page);
      // console.log(total_pages);
      //   console.log(results);
      setEvents(results);
      setTotalPages(Math.ceil(lengthArray / results.length));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllEvents();
    fetchEvents(currentPage);
    // eslint-disable-next-line
  }, [currentPage, totalPages]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  //   }
  // };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  //   }
  // };

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
        {/* <DivPagination className={css.pagination}>
          <PaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
          <SpanPagination className={css.span_pagination}>
            Page {currentPage} {currentPage + 1} {currentPage + 2} ...{" "}
            {totalPages - 1} {totalPages}
          </SpanPagination>
          <PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </DivPagination> */}
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
