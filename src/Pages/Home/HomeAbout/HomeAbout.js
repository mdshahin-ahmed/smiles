import React from "react";
import "./HomeAbout.css";
import homeAbout from "../../../images/homeAbout.png";

const HomeAbout = () => {
  return (
    <div className="aboutWrap">
      <div className="container pt-4 ">
        <div className="row">
          <div className="col-md-7 homeAboutText order-last order-md-first">
            <h1>A Little About Us</h1>
            <p className="p1">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
            <p className="p2">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
              velit.
            </p>
            <button className="buttonStyle">read more</button>
          </div>
          <div className=" align-self-center col-md-5 mb-4 mb-md-0 order-first order-md-last">
            <img className="aboutImage img-fluid" src={homeAbout} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
