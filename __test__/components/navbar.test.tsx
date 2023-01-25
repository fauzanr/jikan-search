import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import { mockSession } from "../data";

describe("Navbar Component", () => {
  it("should render Navbar with data", () => {
    render(
      <SessionProvider session={null}>
        <Navbar />
      </SessionProvider>
    );

    const title = screen.getByText("Jikan App");

    expect(title).toBeInTheDocument();
  });

  it("should render Navbar with data", () => {
    render(
      <SessionProvider session={mockSession}>
        <Navbar />
      </SessionProvider>
    );

    const title = screen.getByText("Jikan App");

    expect(title).toBeInTheDocument();
  });
});
