import React from "react";
import { Button, Input, Layout } from "../components";
import background from "../assets/review.jpg";

export const Review = () => {
  return (
    <Layout>
      <div className="mainContainer">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="shadow"></div>
        </div>
        <p className="title">Reach out! Let's start something together.</p>
        <div className="inputContainer">
          <Input label="Message" type="textArea" placeholder="Example text" />
          <Button value="SUBMIT" />
        </div>
      </div>
    </Layout>
  );
};
