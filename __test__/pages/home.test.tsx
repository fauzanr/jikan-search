import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";
import * as useSWR from "swr";
import { mockAnime } from "../data";
import { AnimesResponse } from "@/types";

const mockAnimeRes: AnimesResponse = {
  data: [mockAnime],
  pagination: {
    current_page: 1,
    last_visible_page: 10,
    has_next_page: false,
    items: { count: 1, per_page: 12, total: 100 },
  },
};

describe("Home Page", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render properly", () => {
    render(
      <useSWR.SWRConfig
        value={{
          fetcher: () => Promise.resolve(mockAnimeRes),
        }}
      >
        <Home />
      </useSWR.SWRConfig>
    );

    const searchEl = screen.getByText("Search Anime");

    expect(searchEl).toBeInTheDocument();
  });

  it("should search anime", () => {
    render(<Home />);

    const searchInput = screen.getByPlaceholderText("Type Here...");

    fireEvent.change(searchInput, { target: { value: "one piece" } });
    fireEvent.keyDown(searchInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    fireEvent.submit(searchInput);

    const resultText = screen.getByText('Result for "one piece"');

    expect(resultText).toBeInTheDocument();
  });
});
