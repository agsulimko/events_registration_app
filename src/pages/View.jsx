// View.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  H1,
  Section,
  DivViews,
  DivView,
  FullName,
  Email,
  SvgGoBack,
  Span,
  PView,
  SearchBar,
  DivSearchBar,
  Label,
} from "./View.styled";
import { getViews } from "api/api";
import sprite from "../image/sprite.svg";
import styled from "styled-components";
import Chart from "../components/Chart/Chart";

const LinkGoBack = styled(Link)`
  color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  border-radius: 5px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  color: #ffffff;
  margin-left: 10px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  padding-left: 0px;
`;
const View = () => {
  const location = useLocation();
  // const { viewId } = useParams();
  const [views, setViews] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [filteredViews, setFilteredViews] = useState([]);
  const { title, id_event } = location.state;
  // const [lengthArrayEvent, setLengthArrayEvent] = useState([]);

  const fetchViews = async () => {
    try {
      const results = await getViews();
      console.log(results);
      console.log(id_event);

      const filteredViews = results.filter((view) =>
        view.event.includes(id_event)
      );

      setViews(filteredViews);
      // setLengthArrayEvent(filteredViews.length);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchViews();
    // eslint-disable-next-line
  }, [id_event]);

  useEffect(() => {
    const filtered = views.filter(
      (view) =>
        view.fullName.toLowerCase().includes(searchName.toLowerCase()) &&
        view.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    setFilteredViews(filtered);
  }, [searchName, searchEmail, views]);

  return (
    <Section>
      <div>
        <H1>
          Awesome Event participants
          <span style={{ color: "#3470ff" }}> {title}</span>
        </H1>
        <LinkGoBack to="/">
          <Span>
            <SvgGoBack className={"css.svgGoBack"}>
              <use href={`${sprite}#icon-arrow-left-white`}></use>
            </SvgGoBack>
            Go back
          </Span>
        </LinkGoBack>
      </div>
      <DivSearchBar>
        <Label>
          Search by name
          <SearchBar
            type="text"
            placeholder="Artem Sulimko"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Label>
        <Label>
          Search by email
          <SearchBar
            type="text"
            placeholder="ivanov@gmail.com"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
        </Label>
      </DivSearchBar>

      <DivViews>
        {filteredViews.length > 0 ? (
          filteredViews.map((view, index) => (
            <DivView key={index}>
              <Email>{view.email}</Email>
              <FullName>{view.fullName}</FullName>
            </DivView>
          ))
        ) : (
          <PView>No views found!!!</PView>
        )}
      </DivViews>
      <div style={{ width: 500 }}>
        <H1>Chart the amount of registrations per day for the given event.</H1>
        <Chart data={filteredViews.length} />
        {/* Other participant details */}
      </div>
    </Section>
  );
};

export default View;
