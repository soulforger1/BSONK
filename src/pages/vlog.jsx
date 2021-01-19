import React from "react";
import { Layout } from "../components";
import background from "../assets/vlog.jpg";

export const Vlog = () => {
  return (
    <Layout>
      <div className="mainContainer">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="shadow"></div>
        </div>
        <p className="title">Vlog</p>
      </div>
    </Layout>
  );
};
