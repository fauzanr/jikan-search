import { css } from "@emotion/react";

export default css`
  :root {
    --border-radius: 12px;
    --navbar-height: 48px;
    --txt-black: #04111d;
    --txt-primary: #04111dbf;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--txt-black);
    margin: 0;
  }

  p,
  span,
  label {
    color: var(--txt-primary);
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background: white !important;
    }
  }
`;
