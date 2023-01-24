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
  background-color: #e4e4e4;
`;

export const cssDivPlaceholder = css`
  background-color: #e4e4e4;
  height: 1em;
`;

export const cssDescription = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;

export const cssTruncate = css`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const cssStats = css`
  display: flex;
  align-items: center;
  margin-top: auto;
`;
