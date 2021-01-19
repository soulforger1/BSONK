import React from "react";
import { useHistory } from "react-router-dom";

export const Card = ({ imageUrl, name, index }) => {
  const history = useHistory();

  const toAbout = () => {
    history.push(`/${index}`);
  };

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={toAbout}
    >
      <div>{name}</div>
    </div>
  );
};
