import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnimeDetail, { getServerSideProps } from "@/pages/anime/[id]";
import { mockAnimeFull } from "../data";
import fetchMock from "jest-fetch-mock";
import { AnimeRecordFull } from "@/types";

describe("AnimeDetail Page", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    fetchMock.resetMocks();
  });

  it("should render properly", () => {
    render(<AnimeDetail anime={mockAnimeFull} />);

    const title = `${mockAnimeFull.title} (${mockAnimeFull.year})`;

    const searchEl = screen.getByText(title);

    expect(searchEl.textContent).toBe(title);
  });

  it("should render with least data", () => {
    let animeData: AnimeRecordFull = {
      ...mockAnimeFull,
      background: "",
      synopsis: "",
      score: 0,
      episodes: 0,
      studios: [],
      producers: [],
      streaming: [],
    };
    render(<AnimeDetail anime={animeData} />);

    const title = `${mockAnimeFull.title} (${mockAnimeFull.year})`;

    const searchEl = screen.getByText(title);

    expect(searchEl.textContent).toBe(title);
  });

  it("should run getServerSideProps without data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const result = await getServerSideProps({
      params: { id: mockAnimeFull.mal_id },
    } as any);

    expect(result).toEqual({ notFound: true });
  });

  it("should run getServerSideProps with data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: mockAnimeFull }));

    const result = await getServerSideProps({
      params: { id: mockAnimeFull.mal_id },
    } as any);

    expect(result).toEqual({ props: { anime: mockAnimeFull } });
  });
});
