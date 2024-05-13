import styled from 'styled-components';

const H1 = styled.h1`
  /* position: absolute; */
  left: 420px;
  top: 400px;
  font-size: 56px;

  text-align: center;
  /* color: white; */
  margin: 0;
  &:hover {
    font-size: 86px;
    color: #3470ff;
    left: 280px;
    top: 380px;
  }
`;

const H2 = styled.h2`
  /* position: absolute; */
  /* color: rgb(200, 233, 235);
  color: #9da0b1; */
  text-align: center;
  width: 800px;
  margin: 0 auto;
  left: 0px;
  bottom: 70px;
`;

const Img1 = styled.img`
  position: absolute;
  left: 0px;
  top: 50px;
  width: 400px;
  border-radius: 20px;
  /* transform: rotate(-20deg); */
  border: 1px solid gray;
  &:hover {
    width: 500px;
    left: -50px;
    top: 0px;
  }
`;
const Img2 = styled.img`
  position: absolute;

  width: 400px;
  right: 0px;
  bottom: 125px;
  border-radius: 20px;
  border: 1px solid gray;

  /* transform: rotate(-20deg); */
  &:hover {
    width: 500px;
    right: -25px;
    bottom: 100px;
  }
`;

const Section = styled.main`
  position: relative;
  /* height: 1000px; */
  /* background-color: dimgray; */

  /* background-repeat: no-repeat;
  max-width: 1440px; */
  /* border: 2px solid gray;
  border-radius: 15px; */
  /* background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.1),
      rgba(46, 47, 66, 0.7)
    ),
    url('https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg'); */
`;

export { H1, H2, Section, Img1, Img2 };
