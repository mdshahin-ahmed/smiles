import React from "react";
import Header from "../Shared/Header/Header";
import HomeBanner from "./HomeBanner/HomeBanner";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="HeaderBannerWrap">
        <div className="headerBannerBg">
          <Header></Header>
          <HomeBanner></HomeBanner>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="white "
              fill-opacity="1"
              d="M0,224L48,229.3C96,235,192,245,288,224C384,203,480,149,576,128C672,107,768,117,864,149.3C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
