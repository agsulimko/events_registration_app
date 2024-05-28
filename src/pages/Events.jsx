// infinite scroll pagination (бесконечная прокрутка страниц)

// Events.jsx
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  deleteEvent,
  getAllEvents,
  getEvents,
  // postEventToResource,
} from "api/api";
import {
  H1,
  Section,
  DivEvents,
  DivEvent,
  DivRegisterView,
  H2,
  P,
  DivButton,
  ButtonSort,
  DivSortButton,
  Div,
} from "./Events.styled";
import { getAllEventyay } from "api/apiEventyay";

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

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: ${(props) => (props.$visible ? "block" : "none")};
  background-color: #3470ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
  z-index: 1000;
`;

const Events = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [resetFilters, setResetFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [eventyay, setEventyay] = useState([]);

  const fetchEvents = async (page, sortBy, reset = false) => {
    setLoading(true);
    try {
      const results = await getEvents(page, sortBy);
      if (results.length > 0) {
        setEvents((prevEvents) =>
          reset ? results : [...prevEvents, ...results]
        );
      } else {
        setHasMore(false); // No more events to load
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // const postEventToResource = async (event) => {
  //   try {
  //     const response = await axios.post(
  //       "https://66430a433c01a059ea213b70.mockapi.io/api/events",
  //       event
  //     );

  //     console.log("Event added:", response.data);
  //     //     setEvents((prevEvents) => [response.data, ...prevEvents]);
  //     //   } catch (error) {
  //     //     console.error("Error adding event:", error);
  //     //     throw error;
  //     //   }
  //     // };
  //     //   Проверка на дублирование событий

  //     setEvents((prevEvents) => {
  //       const isDuplicate = prevEvents.some(
  //         (e) => e.id_event === event.id_event
  //       );
  //       if (isDuplicate) {
  //         return prevEvents;
  //       }

  //       return [response.data, ...prevEvents];
  //     });
  //   } catch (error) {
  //     console.error("Error adding event:", error);

  //     throw error;
  //   }
  // };

  const postEventToResource = async (event) => {
    try {
      const existingEvents = await getAllEvents();

      const isDuplicate = existingEvents.some(
        (e) => e.id_event === event.id_event
      );

      if (isDuplicate) {
        console.log("Duplicate event found, skipping:", event.id_event);

        return;
      }
      const response = await axios.post(
        "https://66430a433c01a059ea213b70.mockapi.io/api/events",
        event
      );

      console.log("Event=:", event);

      console.log("Event added:", response.data);

      setEvents((prevEvents) => {
        // Check if the event already exists in prevEvents

        const isAlreadyAdded = prevEvents.some(
          (e) => e.id_event === response.data.id_event
        );

        if (isAlreadyAdded) {
          console.log(
            "Event already added to state, skipping:",
            response.data.id_event
          );

          return prevEvents;
        }

        return [response.data, ...prevEvents];
      });
    } catch (error) {
      console.error("Error adding event:", error);

      throw error;
    }
  };

  const fetchAllEventyay = async () => {
    try {
      const events = await getAllEventyay();
      await clearEventCollection();
      console.log("Fetched events:", events);
      for (const event of events) {
        const eventData = {
          title: event.attributes.name,
          description: event.attributes["location-name"],
          eventdate: new Date(event.attributes["starts-at"]).getTime(),
          organizer: event.attributes["owner-name"],
          id_event: event.id,
          image: event.attributes["thumbnail-image-url"],
          // image: event.attributes["large-image-url"],
          id: event.id,
        };

        await postEventToResource(eventData);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const clearEventCollection = async () => {
    try {
      const events = await getAllEvents();

      // console.log("events=", events);
      for (const event of events) {
        // console.log("event=", event);

        await deleteEvent(event.id);
      }

      console.log("Event collection cleared.");

      setEvents([]);
    } catch (error) {
      console.error("Error clearing event collection:", error.message);

      throw error;
    }
  };

  useEffect(() => {
    fetchAllEventyay(); // Вызываем сразу при монтировании

    const interval = setInterval(() => {
      fetchAllEventyay(); // Затем вызываем каждые 10 дней

      // Если требуется обновление именно раз в 10 дней,
      // то можно установить интервал в миллисекундах как 10 * 24 * 60 * 60 * 1000
    }, 10 * 24 * 60 * 60 * 1000); // 10 дней в миллисекундах

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    // eslint-disable-next-line
  }, []); // Пустой массив зависимостей, чтобы выполнить эффект только один раз при монтировании

  useEffect(() => {
    const initialFetch = async () => {
      setEvents([]);
      setCurrentPage(1);
      setHasMore(true);
      await fetchEvents(1, sortBy, true);
    };
    initialFetch();
    // eslint-disable-next-line
  }, [sortBy, resetFilters]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchEvents(currentPage, sortBy);
    }
    // eslint-disable-next-line
  }, [currentPage]);

  const handleSortByTitle = () => {
    setSortBy("title");
  };

  const handleSortEventDate = () => {
    setSortBy("eventdate");
  };

  const handleSortByOrganizer = () => {
    setSortBy("organizer");
  };

  const handleResetFilters = () => {
    setResetFilters((prevState) => !prevState);
    setSortBy("");
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  console.log(events);
  return (
    <>
      <Section>
        <Div>
          <DivButton
            style={{ position: "fixed" }}
            className={scrolled ? "scrolled" : ""}
          >
            <DivSortButton>
              <H1>Events</H1>
              <ButtonSort onClick={handleSortByTitle}>Sort by title</ButtonSort>
              <ButtonSort onClick={handleSortEventDate}>
                Sort by event date
              </ButtonSort>
              <ButtonSort onClick={handleSortByOrganizer}>
                Sort by organizer
              </ButtonSort>
            </DivSortButton>
            <ButtonSort onClick={handleResetFilters}>Reset Filters</ButtonSort>
          </DivButton>
        </Div>

        <DivEvents className={"css.events"}>
          {events && events.length > 0 ? (
            Array.from(new Set(events.map((event) => event.id))).map(
              (id, index) => {
                const event = events.find((event) => event.id === id);
                return (
                  <DivEvent key={index} className={"css.event_div"}>
                    <H2>{event.title}</H2>
                    <div
                      style={{
                        height: 120,
                        backgroundImage: `url(${event.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <P>{event.description}</P>

                    <DivRegisterView>
                      <LinkRegisterView
                        to={`/register/${event.id}`}
                        state={{
                          from: location,
                          title: event.title,
                        }}
                      >
                        Register
                      </LinkRegisterView>

                      <LinkRegisterView
                        to={`/view/${event.id}`}
                        state={{
                          from: location,
                          title: event.title,
                        }}
                      >
                        View
                      </LinkRegisterView>
                    </DivRegisterView>
                  </DivEvent>
                );
              }
            )
          ) : (
            <p>No events found</p>
          )}
          {loading && <p>Loading more events...</p>}
        </DivEvents>
        <BackToTopButton $visible={showBackToTop} onClick={handleBackToTop}>
          ↑
        </BackToTopButton>
      </Section>
    </>
  );
};

export default Events;
