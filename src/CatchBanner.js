import React, { useEffect } from "react";
import Books from "./images/IAAU - images - bookstack.png";
import "./CatchBanner.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CatchBanner() {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-sine", delay: 100 });
  });
  return (
    <div className="CatchBanner container-fluid pt-5 pb-5">
      <div className="row">
        <div data-aos="fade-zoom-in" className="col-sm-8 catch-phrase">
          <h2 className="sub-title">...so you can focus.</h2>
          <p className="catch">
            Get peace of with clear reports and reliable advice, so you can
            focus on what really matters!
          </p>
        </div>
        <div className="col-sm-4">
          <img
            data-aos="fade-left"
            className="img-fluid books"
            src={Books}
            alt="a pile of accounting books that have blue and white covers"
          />
        </div>
      </div>
    </div>
  );
}
