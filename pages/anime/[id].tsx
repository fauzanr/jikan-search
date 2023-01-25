import React from "react";
import Image from "next/image";
import { Text, Rating, Badge, Spacer } from "@geist-ui/core";
import {
  cssBanner,
  cssDescTitle,
  cssImageContainer,
  cssLayout,
  cssStats,
} from "@/styles/animeDetail";
import { defaultBannerUrl } from "@/utils/const";
import { GetServerSideProps } from "next";
import { GET_ANIME } from "@/endpoints";
import { AnimeRecordFull, AnimeResponse } from "@/types";
import Link from "next/link";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-expect-error Property 'id' does not exist
  const { id } = params;

  const res = await fetch(GET_ANIME(id));
  const animeRes: AnimeResponse = await res.json();

  if (!animeRes.data)
    return {
      notFound: true,
    };

  return {
    props: {
      anime: animeRes.data,
    },
  };
};

const AnimeDetail = ({ anime }: { anime: AnimeRecordFull }) => {
  const imgUrl =
    anime.images.webp.image_url ||
    anime.images.jpg.image_url ||
    defaultBannerUrl;

  return (
    <>
      <Head>
        <title>{anime.title}</title>
        <meta name="description" content={anime.background || anime.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div css={cssBanner}>
        <Image src={defaultBannerUrl} fill objectFit="cover" alt="banner" />
      </div>
      <div css={cssLayout}>
        <div>
          <div css={cssImageContainer}>
            <span>
              <Image src={imgUrl} fill alt="banner" priority />
            </span>
          </div>

          <Text h1 mb={1}>
            {anime.title} {anime.year && `(${anime.year})`}
          </Text>

          <Text font="18px" mb={2} style={{ color: "#b3b3b3" }}>
            {anime.background && <em>&quot;{anime.background}&quot;</em>}
          </Text>

          <div css={cssStats}>
            <Rating locked count={1} value={1} type="warning" />
            <Text mr={0.4}>{anime.score}</Text>
            <Text style={{ color: "#ccc" }}>
              ({anime.scored_by.toLocaleString()})
            </Text>
          </div>

          <Badge type="warning" mt={1} mr={0.4}>
            {anime.type}
          </Badge>
          {anime.genres.map((genre) => (
            <Badge key={genre.mal_id} type="success" mt={1} mr={0.4}>
              {genre.name}
            </Badge>
          ))}

          <div css={cssDescTitle}>Synopis</div>
          <Text>{anime.synopsis}</Text>

          {anime.episodes && (
            <>
              <div css={cssDescTitle}>Episodes</div>
              <Text>{anime.episodes}</Text>
            </>
          )}

          <div css={cssDescTitle}>Total Runtime</div>
          <Text>{anime.duration}</Text>

          <div css={cssDescTitle}>Studio</div>
          {anime.studios.length
            ? anime.studios.map((studio, i) => (
                <Text span key={studio.mal_id}>
                  {studio.name}
                  {i < anime.studios.length - 1 ? ", " : ""}
                </Text>
              ))
            : "-"}

          <div css={cssDescTitle}>Producer</div>
          {anime.producers.length
            ? anime.producers.map((producer, i) => (
                <Text span key={producer.mal_id}>
                  {producer.name}
                  {i < anime.producers.length - 1 ? ", " : ""}
                </Text>
              ))
            : "-"}

          <Spacer />
        </div>

        <div>
          <Text h2 mb={1}>
            Watch
          </Text>
          {anime.streaming.length
            ? anime.streaming.map((stream) => (
                <div key={stream.name + stream.url}>
                  <a href={stream.url} target="_blank" rel="noreferrer">
                    {stream.name}
                  </a>
                  <br />
                  <br />
                </div>
              ))
            : "-"}

          {anime.relations.map((rel) => (
            <div key={rel.relation}>
              <Text h2 mb={1}>
                {rel.relation}
              </Text>
              {rel.entry.map((ent) => (
                <Link key={ent.mal_id} href={`/anime/${ent.mal_id}`}>
                  {ent.name} <br /> <br />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;
