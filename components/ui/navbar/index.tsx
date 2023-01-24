import Link from "next/link";
import React from "react";
import css from "./styles.module.css";

const Navbar = () => {
  return (
    <>
      <div className={css.navbar}>
        <div className={css.container}>
          <div className={css.title}>Jikan</div>
          <div className={css.navItems}>
            <Link href="/" className={css.navItem}>
              Home
            </Link>
            <Link href="/" className={css.navItem}>
              Logout
            </Link>
          </div>
        </div>
      </div>
      <div className={css.margin}></div>
    </>
  );
};

export default Navbar;
