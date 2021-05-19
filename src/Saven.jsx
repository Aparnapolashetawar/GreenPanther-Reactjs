import React from "react";
import bgi from "../src/images/snature.jpg";

const Saven = () => {
  return (
    <>
      <div>
        <img
          src={bgi}
          style={{ backgroundSize: "cover", width: "100%" }}
          alt="bgimg"
        />
      </div>
      <div
        className="igclass"
        style={{
          backgroundColor: "black",
          opacity: "0.5",
          borderRadius: "15px",
          bottom: "125px",
        }}
      >
        <p style={{ textAlign: "center" }}>
          The environment is where we all meet; where we all have a mutual
          interest; it is the one thing all of us share
        </p>

        <p>
          Nature is painting for us, day after day, pictures of infinite beauty
        </p>
      </div>
    </>
  );
};

export default Saven;
