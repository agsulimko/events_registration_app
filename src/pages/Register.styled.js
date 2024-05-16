import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 24px;
  margin: 40px 0 40px 0;
`;
const H2 = styled.h1`
  margin-top: 100px;

  text-align: center;
`;
const H3 = styled.h1`
  text-align: center;
  font-size: 22px;
  margin-bottom: 100px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  font-size: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
`;

const RadioInput = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 5px;
  }
`;

const Button = styled.button`
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
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

const DivButton = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;
`;
const DivLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
`;
const SuccessMessage = styled.div`
  color: green;
`;
const DivRadioInput = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
const DivForm = styled.div`
  width: 450px;
`;

export {
  H1,
  H2,
  H3,
  Section,
  Form,
  Label,
  Input,
  RadioInput,
  Button,
  SuccessMessage,
  DivRadioInput,
  DivForm,
  DivButton,
  DivLink,
};
