import React from "react";
import "./SubHeading.css";

export default function SubHeading(props) {
  return (
    <div className="SubHeading">
      <div className="row">
        <div className="col-sm mobile-hidden padding">
          <hr className="title-divider" />
        </div>
        <div className="col-sm-6">
          <h2 className="sub-title">{props.heading}</h2>
        </div>
        <div className="col-sm mobile-hidden padding">
          <hr className="title-divider" />
        </div>
      </div>
    </div>
  );
}
