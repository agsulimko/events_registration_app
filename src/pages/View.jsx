// View.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  /* position: relative;
  display: flex; */
  /* flex-direction: column;
  justify-content: center; */
  /* gap: 10px;
  padding-top: 10px; */
  padding-left: 0px;
`;
const View = () => {
  const { viewId } = useParams();
  const [views, setViews] = useState([]);

  const fetchViews = async (page) => {
    try {
      const results = await getViews();

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
    <Section>
      <div>
        <H1>Awesome Event participants</H1>
        <LinkGoBack to="/">
          <Span>
            <SvgGoBack className={"css.svgGoBack"}>
              <use href={`${sprite}#icon-arrow-left-white`}></use>
            </SvgGoBack>
            Go back
          </Span>
        </LinkGoBack>
      </div>
      <DivViews>
        {views && views.length > 0 ? (
          views.map((view, index) => (
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
