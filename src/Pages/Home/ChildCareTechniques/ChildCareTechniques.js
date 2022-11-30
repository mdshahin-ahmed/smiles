import React from "react";
import divider from "../../../images/divider.png";
import "./ChildCareTechniques.css";
import image1 from "../../../images/graphic-01.png";
import image2 from "../../../images/graphic-02.png";
import image3 from "../../../images/graphic-03.png";
import image4 from "../../../images/graphic-04.png";

const techniques = (src, heading, text, colors) => {
  return (
    <div className="techniquesWrap">
      <img src={src} alt="" />
      <h5 style={{ color: `${colors}` }}>{heading}</h5>
      <p>{text}</p>
    </div>
  );
};

const ChildCareTechniques = () => {
  return (
    <div className="mb-5">
      <div className="TechniquesHeaderWrap">
        <h4>BEST CHILDCARE TECHNIQUES</h4>
        <h1 className="my-4">Welcome to Smiles Kindergarten!</h1>
        <img className="divider" src={divider} alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            {techniques(
              image1,
              "Young Toddlers",
              "(12 months – 23 months)",
              "#ea3d84"
            )}
          </div>
          <div className="col-sm-6 col-md-3">
            {techniques(image2, "Toddlers", "(2 year old)", "#ffaf00")}
          </div>
          <div className="col-sm-6 col-md-3">
            {techniques(image3, "Preschoolers", "(3 year old)", "#0ced75")}
          </div>
          <div className="col-sm-6 col-md-3">
            {techniques(image4, "Pre-K", "(Pre-K For All)", "#19bdc5")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCareTechniques;
