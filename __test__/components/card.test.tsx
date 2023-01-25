import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "@/components/card";
import { mockAnime } from "../data";
import { AnimeRecord } from "@/types";

describe("Card Component", () => {
  it("should render Card with data", () => {
    render(<Card anime={mockAnime} />);

    const cardTitle = screen.getByText(mockAnime.title);

    expect(cardTitle.textContent).toBe(mockAnime.title);
  });

  it("should render Card with least data", () => {
    let animeData: AnimeRecord = {
      ...mockAnime,
      background: "",
      synopsis: "",
      score: 0,
      episodes: 0,
    };
    render(<Card anime={animeData} />);

    const episodeEl = screen.getByText("- EP");

    expect(episodeEl).toBeInTheDocument();
  });

  it("should render Card with skeleton", () => {
    render(<Card />);

    const cardTitle = screen.queryByText(mockAnime.title);

    expect(cardTitle).toBe(null);
  });
});
