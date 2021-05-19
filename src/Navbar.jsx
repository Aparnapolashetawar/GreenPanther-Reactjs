import React from "react";
import NatureIcon from "@material-ui/icons/Nature";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <NatureIcon />
          </div>
          {/* <div>
            <img src={NatureIcon} style={{ height: "100px" }} alt="logo" />
          </div> */}
          {/* <NavLink className="navbar-brand" to="/">
            GreenPanther
          </NavLink> */}
          <p
            style={{
              fontFamily: "cursive",
              fontSize: "bold",
              marginTop: "20px",
            }}
          >
            GreenPanther
          </p>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div style={{ marginLeft: "900px" }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Waterfall">
                    Waterfall
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Flower">
                    Flower
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Saven">
                    Saven
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
