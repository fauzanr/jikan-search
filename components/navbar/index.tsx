import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import {
  cssContainer,
  cssMargin,
  cssNavbar,
  cssNavItems,
  cssTitle,
} from "./styles";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div css={cssNavbar}>
        <div css={cssContainer}>
          <div css={cssTitle}>Jikan App</div>
          <div css={cssNavItems}>
            {session && (
              <>
                <Link href="/">Home</Link>
                <a onClick={() => signOut()}>Logout</a>
              </>
            )}
          </div>
        </div>
      </div>
      <div css={cssMargin}></div>
    </>
  );
};

export default Navbar;
