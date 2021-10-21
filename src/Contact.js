import React from "react";
import "./Contact.css";
import workdesk from "./images/IAAU - images - workdesk w computer.png";
import MailTo from "./MailTo";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="container-fluid">
        <h2 className="sub-title m-5">Get in touch</h2>
      </div>
      <div className="container">
        <div className="row pb-5 m-5">
          <div className="col-sm banner">
            <h5 className="script">Contact Jane</h5>
            <h4 className="contact">0407 235 772</h4>
            <div className="contact mt-3">
              <MailTo
                label="Send me an e-mail"
                mailto="mailto:jane@italladdsup.com.au"
              />
            </div>
            <h4 className="contact">jane@italladdsup.com.au</h4>
          </div>
          <div className="col-sm">
            <img
              className="img-fluid"
              src={workdesk}
              alt="work desk with computer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
