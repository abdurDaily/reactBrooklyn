import React from "react";
import Navbar from "./components/navBar/Navbar";
import Banner from "./components/banner/Banner";
import { Outlet } from "react-router-dom";
import AboutContaint from "./components/about/AboutContaint";
import Work from "./components/work/work";


const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Banner />
      <AboutContaint />
      <Work />
    </div>
  );
};

export default App;
