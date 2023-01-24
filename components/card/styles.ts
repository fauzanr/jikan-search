import { css } from "@emotion/css";

export const cssCard = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 0.5px solid #dbdbdb;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 1px #00000040;
  }
`;

export const cssImageContainer = css`
  position: relative;
  aspect-ratio: 1 / 1;
`;

export const cssDescription = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;

  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    max-height: 4em;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const cssStats = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
