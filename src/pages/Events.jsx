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
// import { getAllEvents, getEvents } from "api/api";
// import {
//   H1,
//   Section,
//   DivEvents,
//   DivEvent,
//   DivRegisterView,
//   H2,
//   P,
//   DivPagination,
//   SpanPagination,
//   PaginationButton,
//   ButtonSort,
//   DivSortButton,
//   DivButton,
// } from "./Events.styled";
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// import styled from "styled-components";

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
//   const [totalPages, setTotalPages] = useState(1);
//   const [lengthArray, setLengthArray] = useState(0);
//   const [currentPage, setCurrentPage] = useState(
//     parseInt(localStorage.getItem("currentPage"), 10) || 1
//   );
//   const [sortBy, setSortBy] = useState("");
//   const [resetFilters, setResetFilters] = useState(false);

//   const fetchAllEvents = async (page) => {
//     try {
//       const results = await getAllEvents();

//       setLengthArray(results.length);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   const fetchEvents = async (page, sortBy) => {
//     try {
//       const results = await getEvents(page, sortBy);
//       setEvents(results);
//       // console.log(results);

//       setTotalPages(Math.ceil(lengthArray / results.length));
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     const currentPageFromStorage = parseInt(
//       localStorage.getItem("currentPage"),
//       10
//     );

//     if (currentPageFromStorage && currentPageFromStorage !== currentPage) {
//       setCurrentPage(currentPageFromStorage);
//     }
//     fetchAllEvents();

//     fetchEvents(currentPage, sortBy);
//     // eslint-disable-next-line
//   }, [currentPage, totalPages, sortBy, resetFilters]);

//   const handleNextPage = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     localStorage.setItem("currentPage", nextPage);
//   };

//   const handlePrevPage = () => {
//     const prevPage = currentPage - 1;
//     setCurrentPage(prevPage);
//     localStorage.setItem("currentPage", prevPage);
//   };

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

//   return (
//     <>
//       <Section>
//         <H1>Events</H1>
//         <DivButton>
//           <DivSortButton>
//             <ButtonSort onClick={handleSortByTitle}>Sort by title</ButtonSort>
//             <ButtonSort onClick={handleSortEventDate}>
//               Sort by event date
//             </ButtonSort>
//             <ButtonSort onClick={handleSortByOrganizer}>
//               Sort by organizer
//             </ButtonSort>
//           </DivSortButton>
//           <ButtonSort onClick={handleResetFilters}>Reset Filters</ButtonSort>
//         </DivButton>

//         <DivEvents className={"css.events"}>
//           {events && events.length > 0 ? (
//             events.map((event, index) => {
//               return (
//                 <DivEvent key={index} className={"css.event_div"}>
//                   <H2>{event.title}</H2>
//                   <P>{event.description}</P>
//                   <DivRegisterView>
//                     <LinkRegisterView
//                       to={`/register/${event.id}`}
//                       state={{
//                         from: location,
//                         title: event.title,
//                       }}
//                     >
//                       Register
//                     </LinkRegisterView>

//                     <LinkRegisterView
//                       to={`/view/${event.id}`}
//                       state={{
//                         from: location,
//                         title: event.title,
//                       }}
//                     >
//                       View
//                     </LinkRegisterView>
//                   </DivRegisterView>
//                 </DivEvent>
//               );
//             })
//           ) : (
//             <p>No events found</p>
//           )}
//         </DivEvents>

//         <DivPagination className={"css.pagination"}>
//           <PaginationButton
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </PaginationButton>
//           <SpanPagination className={"css.span_pagination"}>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <span
//                 key={index}
//                 style={{
//                   color: currentPage === index + 1 ? "#3470ff" : "inherit",
//                   fontWeight: 600,
//                 }}
//               >
//                 {index + 1}
//                 {index !== totalPages - 1 ? " " : ""}
//               </span>
//             ))}
//           </SpanPagination>
//           <PaginationButton
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </PaginationButton>
//         </DivPagination>
//       </Section>
//     </>
//   );
// };
// export default Events;
// ============================================

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
  BackToTopButton,
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

  const fetchEvents = async (page, sortBy) => {
    setLoading(true);
    try {
      const results = await getEvents(page, sortBy);
      if (results.length > 0) {
        setEvents((prevEvents) => [...prevEvents, ...results]);
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
      await fetchEvents(1, sortBy);
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
    <Section>
      <div
      // style={{ position: "fixed" }}
      >
        <DivButton className={scrolled ? "scrolled" : ""}>
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
      </div>

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
      <BackToTopButton visible={showBackToTop} onClick={handleBackToTop}>
        ↑
      </BackToTopButton>
    </Section>
  );
};

export default Events;
