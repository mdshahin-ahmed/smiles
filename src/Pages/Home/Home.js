import React from "react";
import Header from "../Shared/Header/Header";
import HomeBanner from "./HomeBanner/HomeBanner";
import "./Home.css";
import ChildCareTechniques from "./ChildCareTechniques/ChildCareTechniques";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeClasses from "./HomeClasses/HomeClasses";

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
              fillOpacity="1"
              d="M0,224L48,229.3C96,235,192,245,288,224C384,203,480,149,576,128C672,107,768,117,864,149.3C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <ChildCareTechniques></ChildCareTechniques>
      <div className="homeAboutBgWrap">
        <div className="homeAboutWrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,133.3C672,139,768,213,864,245.3C960,277,1056,267,1152,245.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <HomeAbout></HomeAbout>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="white "
              fillOpacity="1"
              d="M0,224L48,229.3C96,235,192,245,288,224C384,203,480,149,576,128C672,107,768,117,864,149.3C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <HomeClasses></HomeClasses>
    </>
  );
};

export default Home;
