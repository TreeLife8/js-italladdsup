import React from "react";
import DextScreen from "../../images/DEXT - laptop and phone.png";
import DextLogo from "../../images/DEXT - logo.png";
import "./Dext.css";

export default function Dext() {
  return (
    <div className="Dext">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <img
              data-aos="fade-zoom-up"
              className="img-fluid"
              src={DextScreen}
              alt="laptop and phone screen showing the dext app taking photos of recipts"
            />
          </div>
          <div className="col-sm-4">
            <img
              data-aos="fade-zoom-up"
              className="img-fluid dext-logo"
              src={DextLogo}
              alt="DEXT logo"
            />
          </div>
        </div>
      </div>
      <div className="quote">
        <h2 data-aos="fade-right" className="heading-title">
          Say <em>goodbye</em> to the shoeboxes as
          <br /> DEXT takes you to
        </h2>
        <h2
          data-aos="fade-right"
          data-aos-delay="200"
          className="service-quote"
        >
          a paperless 21st century
        </h2>
      </div>
    </div>
  );
}
