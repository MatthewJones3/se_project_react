import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__name">Developed by Matthew Jones</p>{" "}
      {/* Replace with your name */}
      <p className="footer__year">{currentYear}</p>
    </footer>
  );
}

export default Footer;
