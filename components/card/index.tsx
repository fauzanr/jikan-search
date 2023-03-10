import { AnimeRecord } from "@/types";
import { defaultBannerUrl } from "@/utils/const";
import { Rating } from "@geist-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "./skeleton";
import {
  cssCard,
  cssDescription,
  cssImageContainer,
  cssStats,
  cssTruncate,
} from "./styles";

const Card = ({ anime }: { anime?: AnimeRecord }) => {
  if (!anime) return <Skeleton />;

  const imgUrl =
    anime.images.webp.image_url ||
    anime.images.jpg.image_url ||
    defaultBannerUrl;

  return (
    <Link href={`/anime/${anime.mal_id}`} css={cssCard}>
      <div css={cssImageContainer}>
        <Image src={imgUrl} objectFit="cover" fill alt={anime.title} />
      </div>
      <div css={cssDescription}>
        <h3 css={cssTruncate}>{anime.title}</h3>
        <p css={cssTruncate}>{anime.background || anime.synopsis || "-"}</p>
        <div css={cssStats}>
          <Rating locked value={1} count={1} type="warning" />
          <div>{anime.score || "-"}</div>
          <span style={{ margin: "0 10px" }}>•</span>
          <div style={{ whiteSpace: "nowrap" }}>{anime.episodes || "-"} EP</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
