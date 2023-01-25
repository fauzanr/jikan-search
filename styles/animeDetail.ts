import { breakpoints } from "@/utils/const";
import { css } from "@emotion/react";

export const cssBanner = css`
  position: relative;
  height: 180px;
  width: 100%;
  background: #2f51a3;
`;

export const cssLayout = css`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 12px;

  @media (min-width: ${breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 1rem;
  }
`;

export const cssImageContainer = css`
  position: relative;
  height: 90px;
  margin-bottom: 1rem;

  span {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    height: 220px;
    width: 220px;
    border: 4px solid #fff;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;

    @media (min-width: ${breakpoints.sm}) {
      left: 0;
      right: auto;
    }
  }

  img {
    border-radius: 8px;
  }
`;

export const cssStats = css`
  display: flex;
  align-items: center;
`;

export const cssDescTitle = css`
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 28px;
  margin-bottom: 4px;
  color: var(--txt-primary);
`;
