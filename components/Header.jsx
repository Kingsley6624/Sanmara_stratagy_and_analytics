import React from "react";
import NavBar from "./NavBar";
import PageHeader from "./pageHeader";

const Header = () => {
  return (
    <header className="relative">
      <NavBar />
      <PageHeader />
    </header>
  );
};

export default Header;
