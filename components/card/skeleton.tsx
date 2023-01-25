import React from "react";
import {
  cssCard,
  cssDescription,
  cssDivPlaceholder,
  cssImageContainer,
} from "./styles";

const Skeleton = () => {
  return (
    <div css={cssCard}>
      <div css={cssImageContainer}></div>
      <div css={cssDescription}>
        <div css={cssDivPlaceholder}></div>
        <div css={cssDivPlaceholder}></div>
        <div css={cssDivPlaceholder}></div>
        <div css={cssDivPlaceholder}></div>
      </div>
    </div>
  );
};

export default Skeleton;
