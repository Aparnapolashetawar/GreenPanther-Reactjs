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
          <CommonCard
            imgsrc={flimg}
            link="https://en.wikipedia.org/wiki/Dahlia"
          />
          <CommonCard
            imgsrc={flimg2}
            link="https://en.wikipedia.org/wiki/Zinnia_elegans"
          />
          <CommonCard
            imgsrc={flimg3}
            link="https://en.wikipedia.org/wiki/Nelumbo_nucifera"
          />
          <CommonCard
            imgsrc={flimg7}
            link="https://en.wikipedia.org/wiki/Jasminum_sambac"
          />
        </div>
        <div className="row">
          <CommonCard
            imgsrc={flimg4}
            link="https://en.wikipedia.org/wiki/Rose"
          />
          <CommonCard
            imgsrc={flimg5}
            link="https://en.wikipedia.org/wiki/Peony"
          />
          <CommonCard
            imgsrc={flimg6}
            link="https://en.wikipedia.org/wiki/Hibiscus"
          />
          <CommonCard
            imgsrc={flimg8}
            link="https://en.wikipedia.org/wiki/Hydrangea"
          />
        </div>
      </div>
    </>
  );
};

export default Flower;
