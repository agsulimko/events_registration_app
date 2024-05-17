// // Register.jsx

import React, { useEffect, useState } from "react";
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
import { getViews, postViews } from "api/api";
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

const LinkReturn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
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
  const [errors, setErrors] = useState({});
  const [views, setViews] = useState([]);
  const [futureDate, setFutureDate] = useState(false);
  // const [email, setEmail] = useState("");

  const fetchViews = async () => {
    try {
      const results = await getViews();
      setViews(results.filter((view) => view.event.includes(registerId)));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchViews();
    // eslint-disable-next-line
  }, [registerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, [name]: "Invalid email address" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }

    if (name === "dateOfBirth") {
      const currentDate = new Date().toISOString().split("T")[0];
      const selectedDate = value;
      const currentDateObj = new Date(currentDate);
      const selectedDateObj = new Date(selectedDate);
      const differenceInMs =
        selectedDateObj.getTime() - currentDateObj.getTime();
      if (differenceInMs > 0) {
        setErrors({
          ...errors,
          [name]: "Date of birth cannot be in the future",
        });
        setFutureDate(true);
      } else {
        setErrors({
          ...errors,
          [name]: "   ",
        });
        setFutureDate(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split("T")[0];
    const selectedDate = formData.dateOfBirth;

    const currentDateObj = new Date(currentDate);
    const selectedDateObj = new Date(selectedDate);
    const differenceInMs = selectedDateObj.getTime() - currentDateObj.getTime();
    console.log("differenceInDays=", differenceInMs);
    console.log("currentDate:", currentDate);
    console.log("selectedDate:", selectedDate);

    if (differenceInMs > 0) {
      toast.error("Date of birth cannot be in the future.", {
        duration: 5000,
      });
      return;
    }

    const filteredEmail = views.filter((view) => view.email === formData.email);

    if (filteredEmail.length > 0) {
      toast.error("User with this email is already registered.", {
        duration: 5000,
      });
      return;
    }

    const validationErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        validationErrors[key] = `${key} is required`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const userData = { ...formData, event: [registerId] };
      await postViews(userData);
      setSuccess(true);
      toast.success("Successfully adding a user!", {
        duration: 4000,
        position: "center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      toast.success("Thank you for registering.", {
        duration: 4000,
        // position: "top-right",
        position: "center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error(`Failed to submit registration: ${error.message}`, {
        duration: 1500,
        position: "top-right",
        autoClose: 5000,
      });
      console.error("Failed to submit registration:", error.message);
    }
  };

  if (success) {
    return (
      <SuccessMessage>
        <H2>Registration Successful!</H2>
        <H3>Thank you for registering.</H3>
        <DivLink>
          <LinkReturn to="/">Return to events</LinkReturn>
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
              pattern="/^[a-zA-ZÀ-ÿ'-]+( [a-zA-ZÀ-ÿ'-]+)*$/"
              placeholder="Anna Perfler"
              required
            />
            {errors.fullName && <span>{errors.fullName}</span>}
          </Label>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ivanov@gmail.com"
              required
            />
            {errors.email && <span>{errors.email}</span>}
          </Label>
          <Label>
            Date of Birth
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              style={{ color: futureDate ? "red" : "inherit" }}
            />
            <div style={{ height: 20 }}>
              {errors.dateOfBirth && (
                <span style={{ color: "red" }}>{errors.dateOfBirth}</span>
              )}
              {!errors.dateOfBirth && <span>&nbsp;</span>}
            </div>
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
