import { breakpoints } from "@/utils/const";
import { css } from "@emotion/react";

export const cssContainer = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 12px;
  padding-bottom: 30px;
`;

export const cssSearch = css`
  padding: 40px 0;
  max-width: 700px;
  margin: 0 auto;

  p {
    text-align: center;
    margin-bottom: 8px;
  }

  form {
    box-shadow: 0px 0px 20px -5px #00000040;
    border-radius: 8px;
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
