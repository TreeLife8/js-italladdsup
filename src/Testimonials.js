import React from "react";
import quotation from "./images/IAAU - image - quotation marks.png";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="Testimonials container">
      <h2 className="sub-title">Testimonials</h2>
      <div className="row">
        <div className="col-sm-9 testimonal-carousel">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <p class="catch">
                  <em>
                    you supply a great service and have helped me out so much
                    Starting this business and am happy - Thank you!
                  </em>
                </p>
                <h4>Northern Beaches Fabrication</h4>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <p class="catch">
                  <em>
                    Jane, you are fantastic and Daz and I value you as a team
                    member at Hydrant. Thank you for your strategic outlook and
                    always looking out for us!!!!
                  </em>
                </p>
                <h4>Hydrant</h4>
              </div>
              <div className="carousel-item">
                <p class="catch">
                  <em>
                    ...you are someone I love working with given your friendly
                    nature, professionalism and most importantly the level of
                    care you provide for clients.
                  </em>
                </p>
                <h4>Strategic Accounting</h4>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <img className="qualtation" src={quotation} alt="quotation marks" />
        </div>
      </div>
    </div>
  );
}
