import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login, { getServerSideProps } from "@/pages/login";
import * as NextAuth from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

describe("Login Page", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render Login properly", () => {
    render(<Login />);

    const signInButton = screen.getByText("Sign in with Google");

    expect(signInButton).toBeInTheDocument();
  });

  it("should run getServerSideProps without session", async () => {
    jest
      .spyOn(NextAuth, "getSession")
      .mockImplementation(() => Promise.resolve(null));

    const result = await getServerSideProps({} as GetServerSidePropsContext);

    expect(result).toEqual({ props: {} });
  });

  it("should run getServerSideProps with session", async () => {
    jest
      .spyOn(NextAuth, "getSession")
      .mockImplementation(() => Promise.resolve({} as Session));

    const result = await getServerSideProps({} as GetServerSidePropsContext);

    expect(result).toEqual({
      redirect: {
        destination: "/",
        permanent: false,
      },
    });
  });
});
