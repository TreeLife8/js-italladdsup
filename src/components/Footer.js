import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../images/Logos/IAAU - LOGO - full rectangle - 1024 - blue on transparent.png";
import logotype from "../images/Logos/LOGOTypeWhiteTransparent.png";
import SCLogo from "../images/Logos/Logo no background CROPPED.png";
import Arrow from "../images/IAAU - image - ocean arrow.png";
import MailTo from "./MailTo";

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
            <span className="contact ms-2">
              <MailTo
                label="jane@italladdsup.com.au"
                mailto="mailto:jane@italladdsup.com.au"
              />
            </span>
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/italladdsupbookkeeping"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/it-all-adds-up-bookkeeping-&-secretarial-services/about/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="col-sm mobile-hidden">
          <Link to="/">
            <img className="logo " src={logo} alt="It all adds up logo" />
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
        Crafted by Regina Maher
        {/* <Link to="/">
          <img className="sclogo" src={SCLogo} alt="it all adds up logotype" />
        </Link> */}
      </div>
    </footer>
  );
}
