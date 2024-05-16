import styled from 'styled-components';
const H1 = styled.h1`
  left: 420px;
  top: 400px;
  font-size: 24px;
  margin: 40px 0 40px 0;
  padding-left: 12px;
`;
const DivViews = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-start;
  padding: 0 10px;
  margin-top: 40px;
`;
const DivView = styled.div`
  border: 1px solid black;
  width: 290px;
  padding: 16px;
`;

const FullName = styled.p`
  margin-bottom: 14px;
  font-size: 18px;
`;
const Email = styled.p`
  margin-bottom: 14px;
`;

const Section = styled.section``;
const SvgGoBack = styled.svg`
  margin-right: 0px;
  width: 41px;
  height: 10px;
`;
const Span = styled.span``;
const PView = styled.p`
  font-size: 24px;
`;
const SearchBar = styled.input`
  height: 30px;
  width: 400px;
  margin-top: 6px;
`;
const DivSearchBar = styled.div`
  display: flex;

  gap: 20px;
  margin-top: 50px;
  margin-left: 10px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export {
  H1,
  Email,
  FullName,
  Section,
  DivViews,
  DivView,
  PView,
  SvgGoBack,
  Span,
  SearchBar,
  DivSearchBar,
  Label,
};
