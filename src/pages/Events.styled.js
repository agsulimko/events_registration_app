import styled from 'styled-components';

const Div = styled.div`
  padding-top: 55px;
  background-color: white;
`;
const DivEvents = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding-top: 90px;
`;
const DivEvent = styled.div`
  border: 1px solid black;
  width: 290px;
  padding: 16px;
`;

const DivRegisterView = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  left: 420px;
  top: 400px;
  font-size: 24px;
  margin: 0;
`;

const H2 = styled.h2``;
const P = styled.p`
  margin-bottom: 50px;
`;

const Section = styled.section``;
const DivPagination = styled.div`
  margin-top: 30px;
  text-align: center;
  padding-bottom: 80px;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 4px;

  background-color: #3470ff;
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0b44cd;
  }
`;

const SpanPagination = styled.span`
  margin: 0 10px;
`;
const ButtonSort = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  border-radius: 5px;

  width: 136px;
  height: 48px;
  background-color: #3470ff;
  color: #ffffff;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
const DivButton = styled.div`
  display: flex;
  padding-right: 460px;

  background-color: rgba(255, 255, 255, 0.9);
  gap: 200px;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
`;
const DivSortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: ${props => (props.visible ? 'block' : 'none')};
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

export {
  SpanPagination,
  DivEvents,
  DivEvent,
  DivRegisterView,
  H1,
  H2,
  P,
  Section,
  DivPagination,
  PaginationButton,
  ButtonSort,
  DivButton,
  DivSortButton,
  Div,
  BackToTopButton,
};
