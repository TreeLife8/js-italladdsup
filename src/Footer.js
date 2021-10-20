import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./images/Logos/IAAU - LOGO - full rectangle - 1024 - blue on transparent.png";
import logotype from "./images/Logos/IAAU - LOGO - type only - white on transparent.png";
import SCLogo from "./images/Logos/Logo no background CROPPED.png";
import Arrow from "./images/IAAU - image - ocean arrow.png";

export default function Footer() {
  return (
    <footer>
      <img
        src={Arrow}
        alt="arrow shape divider with ocean texture design element"
        className="img-fluid arrow"
      />
      <div className="row container-fluid pb-3">
        <div className="col-sm contact-details">
          <div className="details">
            <i className="fas fa-envelope-square"></i>
            <Link className="contact ms-2" to="mailto: jane@italladdsup.com.au">
              jane@italladdsup.com.au
            </Link>
          </div>
          <div className="details">
            <i className="fas fa-phone-square-alt"></i>
            <span className="contact ms-2">0407 235 772</span>
          </div>
          <div className="details">
            <i className="fas fa-address-card"></i>
            <span className="contact">PO. Box 494 Avalon Beach NSW 2107</span>
          </div>
        </div>
        <div className="col-sm d-flex social-links">
          <a href="https://www.facebook.com/italladdsupbookkeeping">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/company/it-all-adds-up-bookkeeping-&-secretarial-services/about/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="col-sm">
          <Link to="/">
            <img
              className="logo mobile-hidden"
              src={logo}
              alt="It all adds up logo"
            />
          </Link>
        </div>
      </div>
      <div className="band">
        <Link to="/">
          <img
            className="logotype img-fluid"
            src={logotype}
            alt="it all adds up logotype"
          />
        </Link>
      </div>
      <div className="squiggle-code-link">
        Crafted by
        <Link to="/">
          <img className="sclogo" src={SCLogo} alt="it all adds up logotype" />
        </Link>
      </div>
    </footer>
  );
}
