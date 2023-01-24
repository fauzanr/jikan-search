import { css } from "@emotion/css";

export const cssContainer = css`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 16px 12px;
`;

export const cssGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin: auto;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;
