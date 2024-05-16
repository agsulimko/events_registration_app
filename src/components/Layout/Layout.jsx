import React, { Suspense } from "react";
import styled from "styled-components";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UlListLayout } from "./Layout.styled";
import { Container as BaseContainer } from "styles/Container/Container";
import { Header as BaseHeader } from "./Layout.styled";

import icon from "../../image/icon-event.png";
import Loader from "components/Loader/Loader";
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  padding-left: 10px;
  gap: 20px;
`;
const StyledLink = styled(NavLink)`
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 600;

  &.active {
    color: white;

    background-color: #3470ff;
  }
`;

const StyledEventsLink = styled(StyledLink)`
  &.active {
    color: white;

    background-color: #3470ff;
  }
`;

const Container = styled(BaseContainer)`
  &.active-events {
    border-bottom: 3px solid gray;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #bfd1f7;
    background-repeat: no-repeat;
    background-position: top;
    background-color: dimgray;
    background-repeat: no-repeat;

    background-size: cover;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.1),
        rgba(46, 47, 66, 0.7)
      ),
      url("https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg");
  }
`;

const Header = styled(BaseHeader)`
  border-bottom: 3px solid gray;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #bfd1f7;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: url("https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg");

  margin-bottom: 10px;
`;

const Layout = () => {
  return (
    <Container className={""}>
      <Header>
        <LogoLink to="/">
          <img src={icon} alt="events" width={40} />
          <p>Events Registration App</p>
        </LogoLink>
        <UlListLayout>
          <Link to="/"></Link>
          <UlListLayout></UlListLayout>

          <li>
            <StyledEventsLink to="/">Events</StyledEventsLink>
          </li>
        </UlListLayout>
      </Header>

      <main>
        <Suspense fallback={<div>{Loader()}</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
