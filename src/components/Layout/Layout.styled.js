import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

const StyledLink = styled(NavLink)`
  background-color: ${theme.color.white_full};
`;

const Header = styled.header`
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;

  gap: 280px;
  padding: 8px 0;
  justify-content: flex-start;
`;
const UlListLayout = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  gap: 40px;
`;

export { NavLink, Header, StyledLink, UlListLayout };
