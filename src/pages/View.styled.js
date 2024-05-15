import styled from 'styled-components';
const H1 = styled.h1`
  /* position: absolute; */
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

// const H2 = styled.h2``;
const FullName = styled.p`
  margin-bottom: 14px;
  font-size: 18px;
  //
`;
const Email = styled.p`
  margin-bottom: 14px;
  //
`;

const Section = styled.section`
  /* position: relative; */
`;
// const ButtonGoBack = styled.button`
//   /* background-color: #3470ff;
//   /* border: 0.5px solid #110850;
//   border-radius: 5px;
//   padding: 12px 13px 9px 0px;
//   color: white; */
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 1.43;
//   /* line-height: 143%; */
//   padding: 12px 13px 9px 0px;
//   border-radius: 5px;

//   width: 136px;
//   height: 48px;
//   background-color: #3470ff;
//   color: #ffffff;
//   &:hover,
//   &:focus {
//     background-color: #0b44cd;
//   }
// `;
const SvgGoBack = styled.svg`
  /* width: 18px;
  height: 18px; */
  margin-right: 0px;
  width: 41px;
  height: 10px;
`;
const Span = styled.span`
  /* padding: 0px 10px; */
`;
const PView = styled.p`
  font-size: 24px;
`;
const SearchBar = styled.input`
  height: 30px;
  width: 400px;
`;
const DivSearchBar = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50px;
  margin-left: 10px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-left: 5px;
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
