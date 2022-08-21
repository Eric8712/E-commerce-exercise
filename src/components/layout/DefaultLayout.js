import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/container";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
