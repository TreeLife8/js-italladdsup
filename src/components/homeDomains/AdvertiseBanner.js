import React from "react";
import Button from "../Button";
import "./AdvertiseBanner.css";

export default function AdvertiseBanner(props) {
  return (
    <div className="AdvertiseBanner">
      <div className="advertise-banner" data-aos="fade-zoom-up">
        <hr className="title-divider divider-top" />
        <p className="catchphrase catch">{props.catchphrase}</p>
        <h2 className="sub-title">{props.title}</h2>
        <p className="catch">{props.catch}</p>
        <div className="mt-5">
          <Button type="book a consultation" link="/Contact" />
        </div>
      </div>
    </div>
  );
}
