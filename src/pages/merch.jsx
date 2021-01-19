import React from "react";
import { Layout } from "../components";
import background from "../assets/market.jpg";

export const Merch = () => {
  return (
    <Layout>
      <div className="mainContainer">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="shadow"></div>
        </div>
        <div className="list">
          <p className="title">MERCH Хувцас худалдааны хэсэг </p>
          <p>Une / hedees heden togrogiin hoorond yaj zaragdhuu</p>
          <p>Horongo oruulalt avah shaardlg bga yu bhgyu</p>
          <p>Hedees hed hongiin dotor garah bolomjtoin</p>
          <p>Design huvid ymr shiideltei baihuu / uzuulen heregtei bh </p>
          <p>
            Tgd 1 tsamts dutmiin 10% iig bsonk d horongo oruulalt hiiy gj bodson
            todorhoi uil ajilgaa zohion baiguulhad
          </p>
        </div>
      </div>
    </Layout>
  );
};
