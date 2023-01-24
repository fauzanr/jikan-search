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
      <div className={cssNavbar}>
        <div className={cssContainer}>
          <div className={cssTitle}></div>
          <div className={cssNavItems}>
            <Link href="/">Home</Link>
            <Link href="/">Logout</Link>
          </div>
        </div>
      </div>
      <div className={cssMargin}></div>
    </>
  );
};

export default Navbar;
