import React from "react";
import {
  cssCard,
  cssDescription,
  cssDivPlaceholder,
  cssImageContainer,
} from "./styles";

const Skeleton = () => {
  return (
    <div className={cssCard}>
      <div className={cssImageContainer}></div>
      <div className={cssDescription}>
        <div className={cssDivPlaceholder}></div>
        <div className={cssDivPlaceholder}></div>
        <div className={cssDivPlaceholder}></div>
        <div className={cssDivPlaceholder}></div>
      </div>
    </div>
  );
};

export default Skeleton;
