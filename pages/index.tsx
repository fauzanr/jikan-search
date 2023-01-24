import Card from "@/components/card";
import { GET_ANIMES } from "@/endpoints";
import {
  cssCenter,
  cssContainer,
  cssGrid,
  cssResultText,
  cssSearch,
} from "@/styles/home";
import { AnimeResponse } from "@/types";
import { Pagination, Input, Loading } from "@geist-ui/core";
import { GetServerSideProps } from "next";
import { useState } from "react";
import useSWR, { SWRConfig } from "swr";

const LIST_LIMIT = 12;

const CardSkeleton = () => (
  <>
    {Array.from({ length: LIST_LIMIT }).map((_, idx) => (
      <Card key={idx} />
    ))}
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${GET_ANIMES}?limit=${LIST_LIMIT}&page=1`);
  const animes = await res.json();

  return {
    props: {
      fallback: {
        [`${GET_ANIMES}?limit=${LIST_LIMIT}&page=1`]: animes,
      },
      animes,
    },
  };
};

const Home = () => {
  const [pagination, setPagination] = useState<{ page: number; total: number }>(
    { page: 1, total: 0 }
  );

  const { data: animes, isValidating } = useSWR<AnimeResponse>(
    `${GET_ANIMES}?limit=${LIST_LIMIT}&page=${pagination.page}`,
    {
      onSuccess(data) {
        setPagination({
          page: data.pagination.current_page,
          total: data.pagination.last_visible_page,
        });
      },
    }
  );

  return (
    <div className={cssContainer}>
      <div className={cssSearch}>
        <h1>Jikan App</h1>
        <Input
          scale={4 / 3}
          width="100%"
          clearable
          placeholder="Search Anime..."
        />
      </div>

      <h3 className={cssResultText}>All Anime</h3>
      {isValidating ? (
        <div className={cssGrid}>
          <CardSkeleton />
        </div>
      ) : !animes ? (
        "No Data"
      ) : (
        <div className={cssGrid}>
          {animes.data.map((anime) => (
            <Card key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}

      <div className={cssCenter}>
        <Pagination
          limit={5}
          page={pagination.page}
          initialPage={pagination.page}
          count={pagination.total}
          onChange={(newPage) =>
            newPage !== pagination.page &&
            setPagination((prev) => ({ ...prev, page: newPage }))
          }
        />
      </div>
    </div>
  );
};

const Page = ({ fallback }: { fallback: { [key: string]: any } }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
};

export default Page;
