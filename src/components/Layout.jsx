import React from "react";
import Center from "./Center";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <Center>
        <div className="bg-white">{children}</div>
      </Center>
      <Footer />
    </div>
  );
};

export default Layout;
