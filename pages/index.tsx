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
import { Pagination, Input } from "@geist-ui/core";
import { GetServerSideProps } from "next";
import { FormEvent, useRef, useState } from "react";
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
  const url = `${GET_ANIMES}?limit=${LIST_LIMIT}&page=1`;
  const res = await fetch(url);
  const animes = await res.json();

  return {
    props: {
      fallback: {
        [url]: animes,
      },
      animes,
    },
  };
};

const Home = () => {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const [pagination, setPagination] = useState<{ page: number; total: number }>(
    { page: 1, total: 0 }
  );

  const { data: animes, isValidating } = useSWR<AnimeResponse>(
    `${GET_ANIMES}?limit=${LIST_LIMIT}&page=${pagination.page}&q=${query}`,
    {
      onSuccess(data) {
        setPagination({
          page: data.pagination.current_page,
          total: data.pagination.last_visible_page,
        });
      },
    }
  );

  const changeQuery = (value: string) => {
    setPagination((prev) => ({ ...prev, page: 1 }));
    setQuery(value);
  };

  const onFormSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    changeQuery(searchRef.current?.value || "");
  };

  return (
    <div className={cssContainer}>
      <div className={cssSearch}>
        <h1>Jikan App</h1>
        <form onSubmit={onFormSubmit}>
          <Input
            scale={4 / 3}
            width="100%"
            clearable
            placeholder="Search Anime..."
            ref={searchRef}
            onClearClick={() => changeQuery("")}
          />
        </form>
      </div>

      <h3 className={cssResultText}>
        {query ? `Result for "${query}"` : "All Anime"}
      </h3>

      {isValidating ? (
        <div className={cssGrid}>
          <CardSkeleton />
        </div>
      ) : animes?.data?.length ? (
        <div className={cssGrid}>
          {animes.data.map((anime) => (
            <Card key={anime.mal_id} anime={anime} />
          ))}
        </div>
      ) : (
        "No Data."
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
