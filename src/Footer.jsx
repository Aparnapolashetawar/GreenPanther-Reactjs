import React from "react";

const d = new Date();
const year = d.getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <span className="text-muted">
            <p className="fclass">copyright © {year}</p>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
