import React from "react";
import { Layout, Card } from "../components/";
import market from "../assets/market.jpg";
import news from "../assets/news.jpg";
import about from "../assets/about.jpg";
import review from "../assets/review.jpg";
import vlog from "../assets/vlog.jpg";

export const Home = () => {
  return (
    <Layout>
      <div className="title">
        <div className="background-image">
          <div className="shadow"></div>
        </div>
        <div className="members">
          <Card imageUrl={about} name="Business info" index="bussInfo" />
          <Card imageUrl={market} name="Merch" index="merch" />
          <Card imageUrl={news} name="About us" index="about" />
          <Card imageUrl={review} name="Review" index="review" />
          <Card imageUrl={vlog} name="Vlog" index="vlog" />
        </div>
      </div>
    </Layout>
  );
};
