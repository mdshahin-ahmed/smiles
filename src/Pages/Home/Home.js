import React from "react";
import Header from "../Shared/Header/Header";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div className="homeBannerWrap">
      <Header></Header>
      <HomeBanner></HomeBanner>
    </div>
  );
};

export default Home;
