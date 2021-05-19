import React from "react";
import CommonCard from "./CommonCard";
import flimg from "../src/images/dared.jpeg";
import flimg2 from "../src/images/flwr.jpg";
import flimg3 from "../src/images/lotus.jpg";
import flimg4 from "../src/images/rose.jpg";
import flimg5 from "../src/images/fl.jpg";
import flimg6 from "../src/images/fl2.jpg";
import flimg7 from "../src/images/fl3.jpg";
import flimg8 from "../src/images/fl4.jpg";

const Flower = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <CommonCard imgsrc={flimg} />
          <CommonCard imgsrc={flimg2} />
          <CommonCard imgsrc={flimg3} />
          <CommonCard imgsrc={flimg7} />
        </div>
        <div className="row">
          <CommonCard imgsrc={flimg4} />
          <CommonCard imgsrc={flimg5} />
          <CommonCard imgsrc={flimg6} />
          <CommonCard imgsrc={flimg8} />
        </div>
      </div>
    </>
  );
};

export default Flower;
