// Events.jsx
import { getEvents } from "api/api";
import { H1, H2, Section } from "./Events.styled";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Events.module.css";
const Events = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchEvents(currentPage);
  }, [currentPage]);

  const fetchEvents = async (page) => {
    try {
      const results = await getEvents(page);
      const { total_pages } = await getEvents(page);
      //   const { results, total_pages } = await getEvents(page);
      console.log(results);
      setEvents(results);
      setTotalPages(total_pages);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchEvents(currentPage);
    // eslint-disable-next-line
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Section>
        <H1>Welcome to Rent a Car</H1>
        <H2>
          The Rent a Car app is an easy to use app that created for a company
          that provides car rental services in Ukraine. Try today!
        </H2>
        <div className={"css.home"}>
          {/* {events.map((event, index) => {
            return (
              <Link key={index} to={`${event.id}`} state={{ from: location }}>
                <div className={"css.home_div"}>
                  <h1>{event.title}</h1>
                  <p>{event.description}</p>
                </div>
              </Link>
            );
          })} */}

          {events && events.length > 0 ? (
            events.map((event, index) => {
              return (
                <Link key={index} to={`${event.id}`} state={{ from: location }}>
                  <div className={"css.home_div"}>
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>No events found</p>
          )}
        </div>
        <div className={css.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className={css.span_pagination}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </Section>
    </>
  );
};
export default Events;
