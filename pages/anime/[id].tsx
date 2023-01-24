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

const AnimeDetail = () => {
  return (
    <>
      <div className={cssBanner}>
        <Image src={defaultBannerUrl} fill objectFit="cover" alt="banner" />
      </div>
      <div className={cssLayout}>
        <div>
          <div className={cssImageContainer}>
            <span>
              <Image src={defaultBannerUrl} fill alt="banner" />
            </span>
          </div>

          <Text h1 mb={1}>
            Title (2022)
          </Text>
          <Text font="18px" mb={2} style={{ color: "#b3b3b3" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea
            quasi magnam
          </Text>
          <div className={cssStats}>
            <Rating locked count={1} value={1} type="warning" />
            <Text mr={0.4}>7.1</Text>
            <Text style={{ color: "#ccc" }}>(98)</Text>
          </div>

          <Badge type="success" mt={1} mr={0.4}>
            Genre
          </Badge>
          <Badge type="success" mt={1} mr={0.4}>
            Genre
          </Badge>
          <Badge type="success" mt={1} mr={0.4}>
            Genre
          </Badge>

          <div className={cssDescTitle}>Overview</div>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo a
            sequi modi, autem dolorem nam recusandae rem voluptatum optio,
            corporis molestiae culpa ex pariatur error explicabo minima unde
            quam!
          </Text>

          <div className={cssDescTitle}>Total Runtime</div>
          <Text>100 Minutes</Text>

          <div className={cssDescTitle}>Production</div>
          <Text>P1, P2, P3, P4</Text>

          <Spacer />
        </div>

        <div>
          <Text h2 mb={1}>
            Watch
          </Text>
          <a href="https://youtube.com" target="_blank">
            https://youtube.com
          </a>

          <br />
          <br />

          <a href="https://youtube.com" target="_blank">
            https://youtube.com
          </a>
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;
