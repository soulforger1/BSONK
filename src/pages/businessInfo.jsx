import React from "react";
import { Layout } from "../components";
import background from "../assets/about.jpg";

export const BusinessInfo = () => {
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
          <p className="title">БС – ийн талаарх мэдээлэл </p>
          <p>
            Angi tanhim hed bdg surgaltiin alb geh zuils bdg /surgaltiin alb n
            teden toot geh/
          </p>
          <p>Mergejluud / bank, nybo, marketing</p>
          <p>Heden ond baiguulagdsan zahiral talaar</p>
          <p>Boluul bagsh nariin medeelel</p>
        </div>
      </div>
    </Layout>
  );
};
