import React from "react";
import "./HomeClasses.css";
import sign from "../../../images/divider.png";
import class1 from "../../../images/classes-01.jpg";
import class2 from "../../../images/classes-02.jpg";
import class3 from "../../../images/classes-03.jpg";
import class4 from "../../../images/classes-04.jpg";
import class5 from "../../../images/classes-05.jpg";
import class6 from "../../../images/classes-06.jpg";

const datas = [
  {
    id: 1,
    image: class1,
    ageLimit: "2-3 years",
    title: "Summer Science Class",
    discription:
      "psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#ea3d84",
  },
  {
    id: 2,
    image: class2,
    ageLimit: "3-4 YEARS",
    title: "Basic Sports Classes",
    discription:
      "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#19bdc5",
  },
  {
    id: 3,
    image: class3,
    ageLimit: "1-2 YEARS",
    title: "Tumbling Classes",
    discription:
      "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#ffaf00",
  },
  {
    id: 4,
    image: class4,
    ageLimit: "3-5 YEARS",
    title: "Music Lessons & Classes",
    discription:
      "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#0ced75",
  },
  {
    id: 5,
    image: class5,
    ageLimit: "2-3 YEARS",
    title: "Storytelling Groups",
    discription:
      "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#ffaf00",
  },
  {
    id: 6,
    image: class6,
    ageLimit: "1-4 YEARS",
    title: "Art Lessons & Classes",
    discription:
      "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#19bdc5",
  },
];

const HomeClasses = () => {
  return (
    <div className="homwClassesWrap pb-5">
      <div className="container">
        <h5 className="pb-">our classes</h5>
        <h1>Chose a Class for Your Child</h1>
        <img
          className="img-fluid mb-5"
          style={{ opacity: ".5" }}
          src={sign}
          alt=""
        />
        <div className="classes">
          <div className="row">
            {datas.map((data) => {
              const { id, image, title, ageLimit, discription, color } = data;
              return (
                <div
                  key={id}
                  className="col-sm-6 col-md-4 mb-5  singleClassWrap text-md-start"
                >
                  <div className="card">
                    <img src={image} class="card-img-top" alt="..." />
                    <div className="card-body p-md-4">
                      <h5 className="card-title">{title}</h5>
                      <h4 style={{ color: color }}> AGE: {ageLimit}</h4>
                      <p className="card-text">{discription}</p>
                      <button
                        style={{ backgroundColor: color }}
                        className="buttonStyle mb-4"
                      >
                        learn more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeClasses;
