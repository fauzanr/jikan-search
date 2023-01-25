import { css } from "@emotion/react";

export const cssContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  height: calc(100vh - var(--navbar-height));
`;
