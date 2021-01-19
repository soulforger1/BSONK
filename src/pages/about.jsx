import React from "react";
import { Layout } from "../components/";
import background from "../assets/news.jpg";

export const About = () => {
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
          <p>Hundet iin gishuud /medeelel/</p>
          <p>Udirdahiin gishuud /medeelel</p>
          <p>Marketingiin heltes /teden huuhedtei teden er, em/</p>
          <p>Sudalgaani heltes/teden huuhedtei teden er, em/</p>
          <p>ZB –iin heltes /teden huuhedtei teden er, em/</p>
          <p>Bsonk hiisen uil ajillaggaa</p>
          <p>Zohiodog udurlug</p>
          <p>Burtguulgiin heseg</p>
        </div>
      </div>
    </Layout>
  );
};
