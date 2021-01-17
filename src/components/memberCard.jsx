import React from "react";
import { useHistory } from "react-router-dom";

export const MemberCard = ({ imageUrl, name, index }) => {
  const history = useHistory();

  const toAbout = () => {
    history.push(`/about/${index}`);
  };

  return (
    <div
      className="memberCard"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={toAbout}
    >
      <div>{name}</div>
    </div>
  );
};
