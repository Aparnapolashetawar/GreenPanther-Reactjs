import React from "react";

import slider1 from "../src/images/slider2.jpg";
import slider2 from "../src/images/slider3.jpg";
import slider3 from "../src/images/slider4.jpg";
import slider4 from "../src/images/s2new.jpg";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider1}
              className="d-block w-100"
              alt="slider 1"
              height="625px"
            />
            <div className="carousel-caption d-none d-md-block">
              <p style={{ fontSize: "large", fontFamily: "cursive" }}>
                Enjoy Natures Beauty
              </p>
              <p>Heaven is under our feet as well as over our heads...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider2}
              className="d-block w-100"
              alt="slider 2"
              height="625px"
            />
            <div className="carousel-caption d-none d-md-block">
              <p style={{ fontSize: "large", fontFamily: "cursive" }}>
                Enjoy Natures Beauty
              </p>
              <p>Heaven is under our feet as well as over our heads...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100"
              alt="slider 3"
              height="625px"
            />
            <div className="carousel-caption d-none d-md-block">
              <p style={{ fontSize: "large", fontFamily: "cursive" }}>
                Enjoy Natures Beauty
              </p>
              <p>Heaven is under our feet as well as over our heads...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider4}
              className="d-block w-100"
              alt="slider 4"
              height="625px"
            />
            <div className="carousel-caption d-none d-md-block">
              <p style={{ fontSize: "large", fontFamily: "cursive" }}>
                Enjoy Natures Beauty
              </p>
              <p>Heaven is under our feet as well as over our heads...</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
