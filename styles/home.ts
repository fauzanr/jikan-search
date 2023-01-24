import { breakpoints } from "@/utils/const";
import { css } from "@emotion/css";

export const cssContainer = css`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 12px;
  padding-bottom: 30px;
`;

export const cssSearch = css`
  padding: 40px 0;
  max-width: 700px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 12px;
  }
`;

export const cssResultText = css`
  margin-bottom: 12px;
  color: var(--txt-primary);
`;

export const cssGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin: auto;

  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

export const cssCenter = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
