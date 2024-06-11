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

  // ++++++++++++++++++++++++++++++
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
  // ++++++++++++++++++++++++++++++++

  const postEventToResource = async (event) => {
    try {
      await axios.post(
        "https://66430a433c01a059ea213b70.mockapi.io/api/events",
        event
      );
    } catch (error) {
      console.error("Error adding event:", error);

      throw error;
    }
  };

  const fetchAllEventyay = async () => {
    await clearEventCollection();
    try {
      const eventyay = await getAllEventyay();
      console.log("Fetched events:", eventyay);

      // Получаем текущую дату и время
      // const currentDate = new Date().getTime();
      const currentDate = 1640000000000;

      // Собираем данные для всех событий и фильтруем только будущие события
      const eventDataList = eventyay
        .map((event) => ({
          title: event.attributes.name,
          description: event.attributes["location-name"],
          eventdate: new Date(event.attributes["starts-at"]).getTime(),
          organizer: event.attributes["owner-name"],
          id_event: event.id,
          image: event.attributes["thumbnail-image-url"],
          id: event.id,
        }))
        .filter((event) => event.eventdate >= currentDate); //

      console.log(eventDataList);

      // Создаем множество для отслеживания уникальных id_event
      const existingEvents = await getAllEvents();
      const existingEventIds = new Set(
        existingEvents.map((event) => event.id_event)
      );

      // Добавляем только уникальные события в коллекцию
      for (const eventData of eventDataList) {
        if (!existingEventIds.has(eventData.id_event)) {
          await postEventToResource(eventData);
          // Обновляем состояние events только после успешного добавления нового события
          setEvents((prevEvents) => [...prevEvents, eventData]);
          // Добавляем id_event в множество существующих id_event
          existingEventIds.add(eventData.id_event);
        } else {
          console.log(
            `Duplicate event found with id_event: ${eventData.id_event}`
          );
        }
      }

      await fetchEvents(1, sortBy, true);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const clearEventCollection = async () => {
    try {
      const events = await getAllEvents();

      // console.log("events=", events);
      for (const event of events) {
        //  console.log("event=", event);

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
    // fetchAllEventyay(); // Вызываем сразу при монтировании

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

    fetchAllEventyay(); // Вызываем сразу при монтировании
  };
  const handleUpdate = () => {
    fetchAllEventyay();
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // console.log(events);
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
            <ButtonSort onClick={handleUpdate}>Update events</ButtonSort>
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

                    <p>
                      {(() => {
                        const date = new Date(event.eventdate);
                        const hours = date
                          .getHours()
                          .toString()
                          .padStart(2, "0");
                        const minutes = date
                          .getMinutes()
                          .toString()
                          .padStart(2, "0");
                        const day = date.getDate().toString().padStart(2, "0");
                        const month = (date.getMonth() + 1)
                          .toString()
                          .padStart(2, "0");
                        const year = date.getFullYear();
                        return `${hours}:${minutes} ${day}-${month}-${year}`;
                      })()}
                    </p>

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
                          id_event: event.id_event,
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
