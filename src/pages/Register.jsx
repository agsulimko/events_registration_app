import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
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
} from "./Register.styled";
import { postViews } from "api/api";
import styled from "styled-components";
import { toast } from "react-hot-toast";

const LinkCancel = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  border-radius: 5px;
  /* padding: 14px 44px; */
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
// const LinkRegister = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #3470ff;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 1.43;
//   /* line-height: 143%; */
//   border-radius: 5px;
//   /* padding: 14px 44px; */
//   width: 136px;
//   height: 48px;
//   background-color: #3470ff;
//   color: #ffffff;

//   &:hover,
//   &:focus {
//     background-color: #0b44cd;
//   }
// `;
const LinkReturn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  border-radius: 5px;
  /* padding: 14px 44px; */
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
const Register = () => {
  const { registerId } = useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    whereHeard: "",
    event: [registerId],
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        ...formData,
        event: [registerId],
      };

      await postViews(userData);
      setSuccess(true);
      // toast.success("Successfully adding a  user!", {
      //   duration: 4000,
      // });
      toast.success("Successfully adding a  user!", {
        duration: 4000,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // toast.success("Successfully adding a  user!", toastifyOptions);

      toast.success("Thank you for registering.", {
        duration: 4000,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Failed to submit registration:", error.message, {
        duration: 1500,
        position: "top-right",
        autoClose: 5000,
      });
      console.error("Failed to submit registration:", error.message);
    }
  };

  // };
  if (success) {
    return (
      <SuccessMessage>
        <H2>Registration Successful!</H2>
        <H3>Thank you for registering.</H3>
        <DivLink>
          <LinkReturn to="/">Return to events</LinkReturn>
          {/* <LinkRegister to={`/events_registration_app/register/${registerId}`}>
            Register more
          </LinkRegister> */}
        </DivLink>
      </SuccessMessage>
    );
  }

  return (
    <Section>
      <H1>Event registration</H1>
      <Form onSubmit={handleSubmit}>
        <DivForm>
          <Label>
            Full Name
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            Date of Birth
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </Label>
        </DivForm>

        <Label>
          Where did you hear about this event?
          <DivRadioInput>
            <RadioInput>
              <input
                type="radio"
                name="whereHeard"
                value="Social media"
                checked={formData.whereHeard === "Social media"}
                onChange={handleChange}
                required
              />
              <span>Social media</span>
            </RadioInput>
            <RadioInput>
              <input
                type="radio"
                name="whereHeard"
                value="Friends"
                checked={formData.whereHeard === "Friends"}
                onChange={handleChange}
                required
              />
              <span>Friends</span>
            </RadioInput>
            <RadioInput>
              <input
                type="radio"
                name="whereHeard"
                value="Found myself"
                checked={formData.whereHeard === "Found myself"}
                onChange={handleChange}
                required
              />
              <span>Found myself</span>
            </RadioInput>
          </DivRadioInput>
        </Label>
        <DivButton>
          <Button type="submit">Ok</Button>
          <LinkCancel to="/">
            <p>Cancel</p>
          </LinkCancel>
        </DivButton>
      </Form>
    </Section>
  );
};

export default Register;
