import Link from "next/link";
import React from "react";
import {
  cssContainer,
  cssMargin,
  cssNavbar,
  cssNavItems,
  cssTitle,
} from "./styles";

const Navbar = () => {
  return (
    <>
      <div css={cssNavbar}>
        <div css={cssContainer}>
          <div css={cssTitle}></div>
          <div css={cssNavItems}>
            <Link href="/">Home</Link>
            <Link href="/">Logout</Link>
          </div>
        </div>
      </div>
      <div css={cssMargin}></div>
    </>
  );
};

export default Navbar;
