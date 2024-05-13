import { css } from "@emotion/react";
import { theme } from "styles/theme";
import "@fontsource/inter";
import "@fontsource/manrope";
import "@fontsource/montserrat";

// import "@fontsource/manrope/400.css"; // Regular
// import "@fontsource/manrope/500.css"; // Medium
// import "@fontsource/manrope/600.css"; // Semi-Bold
// import "@fontsource/manrope/700.css"; // Bold
export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 400;

    background: ${theme.color.white_full};
    min-height: 100vh;

    font-style: normal;
    color: ${theme.color.black_full};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: "Manrope", "Montserrat", "Inter", sans-serif;
  }

  .container {
  }
`;

/* a:hover {
    color: #ff7f7f;
  } */

/* font-family: "Inter", sans-serif;
    font-weight: ${theme.fontWeight.regular}; // Regular */

/* Example if using a CSS file */

/* Add more @font-face rules for different styles and weights if needed */

// // <---------------------- Colors ---------------------->
// $light-theme-colors: (
//   //   Black
//   'black-high': rgba(5, 5, 5, 0.8),
//   'black-semi': rgba(5, 5, 5, 0.5),
//   'black-low': rgba(5, 5, 5, 0.3),
//   'black-very-low': rgba(5, 5, 5, 0.2),
//   'black-max-opacity': rgba(5, 5, 5, 0.18),
//   //   White
//   'white-full': rgba(248, 248, 248, 1),
//   'white-semi-dark': rgba(248, 248, 248, 0.6),
//   'white-semi-medium': rgba(248, 248, 248, 0.5),
//   'white-semi-faint': rgba(248, 248, 248, 0.2),
//   'white-semi-light': rgba(248, 248, 248, 0.1)
// );

// $dark-theme-colors: (
//   // Black
//   'dark-black': rgba(22, 22, 22, 1),
//   // White
//   'white-full': rgba(255, 255, 255, 1),
//   'white-semi-medium': rgba(255, 255, 255, 0.8),
//   'white-semi-high': rgba(255, 255, 255, 0.6),
//   'white-semi-light': rgba(255, 255, 255, 0.5),
//   'white-semi-low': rgba(255, 255, 255, 0.3),
//   'white-semi-very-very-low': rgba(255, 255, 255, 0.2),
//   'white-semi-max-opacity': rgba(255, 255, 255, 0.18),
//   'white-semi-very-low': rgba(255, 255, 255, 0.1)
// );

// // Black
// $black-full: rgba(5, 5, 5, 1);
// //   Gray
// $gray-full: rgba(206, 205, 205, 1);
// //   Green
// $green-full: rgba(155, 181, 55, 1);
// $green-low: rgba(155, 181, 55, 0.3);
// // Orange
// $orange-full: rgba(238, 161, 12, 1);

// // <---------------------- Fonts ---------------------->
// $fontPrimary: 'Inter', sans-serif;

// // <---------------------- Transition ---------------------->
// $transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

// // <---------------------- Breakpoints ---------------------->
// $mobile: 320px;
// $tablet: 768px;
// $desktop: 1280px;

//  @media (min-width: 768px) and (max-width: 992px)
