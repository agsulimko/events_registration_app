// infinite scroll pagination (бесконечная прокрутка страниц)

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import styled from "styled-components";
// import { getEvents } from "api/api";
// import {
//   H1,
//   Section,
//   DivEvents,
//   DivEvent,
//   DivRegisterView,
//   H2,
//   P,
//   DivButton,
//   ButtonSort,
//   DivSortButton,
// BackToTopButton
// } from "./Events.styled";

// const LinkRegisterView = styled(Link)`
//   color: #3470ff;
//   font-weight: 600;

//   &:hover {
//     color: #0b44cd;
//   }

//   &:focus {
//     color: #0b44cd;
//   }
// `;

// const Events = () => {
//   const location = useLocation();
//   const [events, setEvents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState("");
//   const [resetFilters, setResetFilters] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   const fetchEvents = async (page, sortBy) => {
//     setLoading(true);
//     try {
//       const results = await getEvents(page, sortBy);
//       if (results.length > 0) {
//         setEvents((prevEvents) => [...prevEvents, ...results]);
//       } else {
//         setHasMore(false); // No more events to load
//       }
//     } catch (err) {
//       console.log(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const initialFetch = async () => {
//       setEvents([]);
//       setCurrentPage(1);
//       setHasMore(true);
//       await fetchEvents(1, sortBy);
//     };
//     initialFetch();
//     // eslint-disable-next-line
//   }, [sortBy, resetFilters]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//           document.documentElement.offsetHeight - 100 &&
//         !loading &&
//         hasMore
//       ) {
//         setCurrentPage((prevPage) => prevPage + 1);
//       }
//       if (window.scrollY > 300) {
//         setShowBackToTop(true);
//       } else {
//         setShowBackToTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [loading, hasMore]);

//   useEffect(() => {
//     if (currentPage > 1) {
//       fetchEvents(currentPage, sortBy);
//     }
//     // eslint-disable-next-line
//   }, [currentPage]);

//   const handleSortByTitle = () => {
//     setSortBy("title");
//   };

//   const handleSortEventDate = () => {
//     setSortBy("eventdate");
//   };

//   const handleSortByOrganizer = () => {
//     setSortBy("organizer");
//   };

//   const handleResetFilters = () => {
//     setResetFilters((prevState) => !prevState);
//     setSortBy("");
//   };

//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <Section>
//       <H1>Events</H1>
//       <DivButton>
//         <DivSortButton>
//           <ButtonSort onClick={handleSortByTitle}>Sort by title</ButtonSort>
//           <ButtonSort onClick={handleSortEventDate}>
//             Sort by event date
//           </ButtonSort>
//           <ButtonSort onClick={handleSortByOrganizer}>
//             Sort by organizer
//           </ButtonSort>
//         </DivSortButton>
//         <ButtonSort onClick={handleResetFilters}>Reset Filters</ButtonSort>
//       </DivButton>

//       <DivEvents className={"css.events"}>
//         {events && events.length > 0 ? (
//           events.map((event, index) => (
//             <DivEvent key={index} className={"css.event_div"}>
//               <H2>{event.title}</H2>
//               <P>{event.description}</P>
//               <DivRegisterView>
//                 <LinkRegisterView
//                   to={`/register/${event.id}`}
//                   state={{
//                     from: location,
//                     title: event.title,
//                   }}
//                 >
//                   Register
//                 </LinkRegisterView>

//                 <LinkRegisterView
//                   to={`/view/${event.id}`}
//                   state={{
//                     from: location,
//                     title: event.title,
//                   }}
//                 >
//                   View
//                 </LinkRegisterView>
//               </DivRegisterView>
//             </DivEvent>
//           ))
//         ) : (
//           <p>No events found</p>
//         )}
//         {loading && <p>Loading more events...</p>}
//       </DivEvents>
//       <BackToTopButton visible={showBackToTop} onClick={handleBackToTop}>
//         ↑
//       </BackToTopButton>
//     </Section>
//   );
// };

// export default Events;

// ===============================
// pagination (c пагинацией)

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getEvents } from "api/api";
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
            events.map((event, index) => (
              <DivEvent key={index} className={"css.event_div"}>
                <H2>{event.title}</H2>
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
            ))
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
