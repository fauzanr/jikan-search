import { css } from "@emotion/css";

export const cssNavbar = css`
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
  width: var(--max-width);
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

    &:hover {
      color: var(--txt-black);
    }
  }
`;

export const cssTitle = css`
  padding: 0 12px;
  font-weight: bold;
`;

export const cssMargin = css`
  padding-top: var(--navbar-height);
`;
