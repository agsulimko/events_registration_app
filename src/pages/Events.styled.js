import styled from 'styled-components';
const DivEvents = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
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

  margin: 40px 0 40px 0;
  padding-left: 12px;
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
  background-color: transparent;
  color: black;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #f0f0f0;
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
  margin-left: 11px;

  width: 136px;
  height: 48px;
  background-color: #3470ff;
  color: #ffffff;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
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
};
