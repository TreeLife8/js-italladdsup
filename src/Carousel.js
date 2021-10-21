import React from "react";

export default function Carousel() {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <p class="catch phrase">
              <em>
                You supply a great service and have helped me out so much
                starting this business and am happy - Thank you!
              </em>
            </p>
            <h4 className="referee">Northern Beaches Fabrication</h4>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <p class="catch phrase">
              <em>
                Jane, you are fantastic, Daz and I value you as a team member at
                Hydrant. Thank you for your strategic outlook and always looking
                out for us!!!!
              </em>
            </p>
            <h4 className="referee">Hydrant</h4>
          </div>
          <div className="carousel-item">
            <p class="catch phrase">
              <em>
                ...you are someone I love working with given your friendly
                nature, professionalism and most importantly the level of care
                you provide for clients.
              </em>
            </p>
            <h4 className="referee">Strategic Accounting</h4>
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
  );
}
