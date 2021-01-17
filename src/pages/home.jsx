import React from "react";
import { Layout, MemberCard } from "../components/";
import { useFireStoreCol } from "../hooks/useFirebase";

export const Home = () => {
  const members = useFireStoreCol("/members").collection;

  return (
    <Layout>
      <div className="title">
        <div className="background-image">
          <div className="shadow"></div>
        </div>
        <p className="text">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="content">
        <p>Members</p>
        <div className="members">
          {members.map((cur, index) => (
            <MemberCard
              imageUrl={cur.image}
              key={index}
              name={cur.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
