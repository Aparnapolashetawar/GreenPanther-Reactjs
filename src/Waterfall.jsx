import { grey } from "@material-ui/core/colors";
import React from "react";
import imgw from "../src/images/waleft.jpg";

const Waterfall = () => {
  return (
    <>
      <div className="row" style={{ backgroundColor: "grey" }}>
        <div className="col-lg-6">
          <img
            src={imgw}
            style={{ marginLeft: "100px" }}
            height="670px"
            alt="img"
          />
        </div>
        <div className="col-md-6">
          <div className="igclass" style={{ borderRadius: "15px" }}>
            <p style={{ textAlign: "center" }}>
              There’s no Wi-Fi in the forest, but I promise you’ll find a better
              connection.
            </p>
            <p
              style={{
                fontWeight: "normal",
                fontFamily: "monospace",
                textAlign: "center",
              }}
            >
              Progress is impossible without change, and those who cannot change
              their minds cannot change anything.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Waterfall;
