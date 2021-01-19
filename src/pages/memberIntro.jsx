import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../components/";
import { useFireStoreDoc } from "../hooks/useFirebase";

export const About = () => {
  const id = useLocation().pathname.split("/")[2];
  const member = useFireStoreDoc(`/members/${id}`).doc;
  return (
    <Layout>
      <div className="member">
        <div className="background-image">
          <div className="shadow"></div>
        </div>
        <p className="name">{member && member.name}</p>
        <div
          className="memberImage"
          style={{ backgroundImage: `url(${member && member.image})` }}
        ></div>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Layout>
  );
};
