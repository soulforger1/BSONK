import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
