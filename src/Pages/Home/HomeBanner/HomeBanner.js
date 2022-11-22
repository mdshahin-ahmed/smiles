import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="homeBannerWrap">
      <div className="bannerText">
        <div>
          <h3>Welcome to smiles kindergarten</h3>
          <h1 className="mt-5">the perfect place for</h1>
          <h1> every child</h1>
          <button className="buttonStyle my-4 ">learn more</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
