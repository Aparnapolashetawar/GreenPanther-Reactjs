import React from "react";

const s = {
  width: "18rem",
  display: "flex",
  marginTop: "15px",
};
const CommonCard = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-3">
        {/* <div className="row"> */}
        {/* <div className="col-md-4 col-10"> */}
        {/* <div className="row-cols-4"> */}
        <div className="card" style={s}>
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt="flower"
            height="200px"
          />
          <div className="card-body">
            <p className="card-title">Beautyful Flowers</p>
            <button to="/" className="btn btn-primary">
              Explore!!!!
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default CommonCard;
