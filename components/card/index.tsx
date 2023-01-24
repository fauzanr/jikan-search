import { defaultBannerUrl } from "@/utils/const";
import { Rating } from "@geist-ui/core";
import Image from "next/image";
import React from "react";
import { cssCard, cssDescription, cssImageContainer, cssStats } from "./styles";

const Card = () => {
  return (
    <div className={cssCard}>
      <div className={cssImageContainer}>
        <Image src={defaultBannerUrl} fill alt="banner" />
      </div>
      <div className={cssDescription}>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
          perferendis? Nobis cupiditate fugit ea. Ratione quam, delectus
          architecto vel blanditiis placeat nobis, maxime inventore non
          perspiciatis nisi eligendi, nam reprehenderit?
        </p>
        <div className={cssStats}>
          <Rating locked value={5} type="warning" style={{ minWidth: 0 }} />
          <div style={{ whiteSpace: "nowrap" }}>10 EP</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
