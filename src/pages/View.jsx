// View.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

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
  const { viewId } = useParams();
  const [views, setViews] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [filteredViews, setFilteredViews] = useState([]);
  const { title } = location.state;
  const fetchViews = async (page) => {
    try {
      const results = await getViews();

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
          Awesome Event participants{" "}
          <span style={{ color: "#3470ff" }}>{title}</span>{" "}
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
              <FullName>{view.fullName}</FullName>
              <Email>{view.email}</Email>
            </DivView>
          ))
        ) : (
          <PView>No views found!!!</PView>
        )}
      </DivViews>
    </Section>
  );
};

export default View;
