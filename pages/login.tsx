import React from "react";
import { getSession, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Button } from "@geist-ui/core";
import { cssContainer } from "@/styles/login";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

const Login = () => {
  return (
    <div css={cssContainer}>
      Welcome!
      <Button type="success" onClick={() => signIn("google")}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;
