import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;
  const history = useHistory();

  const to = (path) => {
    history.push(path);
  };

  return (
    <div className="header">
      <div
        className="name"
        style={{ cursor: "pointer" }}
        onClick={() => to("/")}
      >
        БС-БСОНК
      </div>
      {/* <div className="menu">
        <div
          style={{
            cursor: "pointer",
            fontSize: "18px",
            color: location === "/" ? "#00d6b4" : "white",
          }}
          onClick={() => to("/")}
        >
          Home
        </div>
        <div
          style={{
            cursor: "pointer",
            fontSize: "18px",
            color: location === "/about" ? "#00d6b4" : "white",
          }}
          onClick={() => to("/about")}
        >
          About
        </div>
        <div
          style={{
            cursor: "pointer",
            fontSize: "18px",
            color: location === "/contact" ? "#00d6b4" : "white",
          }}
          onClick={() => to("/contact")}
        >
          Contact
        </div>
      </div> */}
    </div>
  );
};
