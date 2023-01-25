import { css } from "@emotion/react";

export const cssNavbar = css`
  background-color: white;
  box-shadow: 0px 2px 8px 0px #00000040;
  height: var(--navbar-height);

  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const cssContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  max-width: 1100px;
  margin: 0 auto;
`;

export const cssNavItems = css`
  display: flex;

  a {
    height: var(--navbar-height);
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: var(--txt-primary);
    cursor: pointer;

    &:hover {
      color: var(--txt-black);
    }
  }
`;

export const cssTitle = css`
  display: flex;
  align-items: center;
  height: var(--navbar-height);
  padding: 0 12px;
  font-weight: bold;
`;

export const cssMargin = css`
  padding-top: var(--navbar-height);
`;
