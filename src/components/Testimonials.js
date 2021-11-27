import React from "react";
import "./Testimonials.css";
import Carousel from "./Carousel";

export default function Testimonials(props) {
  return (
    <div className="Testimonials container">
      <div className="row">
        <div className="col-sm-9 testimonal-carousel">
          <h2 className="sub-title title">Testimonials</h2>
          <Carousel />
        </div>
        <div className="col-sm-3">
          <img className="image" src={props.img} alt="quotation marks" />
        </div>
      </div>
    </div>
  );
}
