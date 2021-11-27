import React from "react";
import SubHeading from "./SubHeading.js";
import Reliable from "./images/symbols/IAAU - symbol - reliable.png";
import uptodate from "./images/symbols/IAAU - symbol - uptodate.png";
import integration from "./images/symbols/IAAU - symbol - integration.png";
import local from "./images/symbols/IAAU - symbol - local.png";
import accurate from "./images/symbols/IAAU - symbol - accurate.png";
import covidadvice from "./images/symbols/IAAU - symbol - covidadvice.png";
import efficient from "./images/symbols/IAAU - symbol - efficient.png";
import cloudbased from "./images/symbols/IAAU - symbol - cloudbased.png";
import "./Cards.css";
import "./QualityService.css";

export default function QualityService() {
  let qualities = [];
  function Qualities(name, description, icon, alt) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.alt = alt;
    qualities.push({
      name: this.name,
      description: this.description,
      icon: this.icon,
      alt: this.alt,
    });
  }
  new Qualities(
    "Reliable",
    "fully certified & insured over 15 years of experience",
    `${Reliable}`,
    "Certificate with badge"
  );
  new Qualities(
    "Up-to-date",
    "with new laws, regulations & technology",
    `${uptodate}`,
    "Calander with time tick"
  );
  new Qualities(
    "Integration",
    "with leading financial softwares such as MYOB and XERO",
    `${integration}`,
    "puzzles fitting together"
  );
  new Qualities(
    "Local",
    "Based in Sydney, Northern Beaches",
    `${local}`,
    "pin drop on map"
  );
  new Qualities(
    "Accurate",
    "reports & predictions for business growth",
    `${accurate}`,
    "target on-point"
  );
  new Qualities(
    "COVID advice",
    "on relevant government subsidies",
    `${covidadvice}`,
    "pulse image"
  );
  new Qualities(
    "Fast & efficient",
    "timely reporting & lodging to remain compliant",
    `${efficient}`,
    "stop watch"
  );
  new Qualities(
    "Cloud based",
    "live access to information and progress tracking",
    `${cloudbased}`,
    "cloud-based technology"
  );
  return (
    <div className="QualityService pt-4 pb-5">
      <div className="container">
        <SubHeading heading="Trusted services" />
        <div className="row">
          {qualities.map(function (quality, index) {
            return (
              <div
                key={index}
                className="col-sm d-flex justify-content-evenly  text-center"
              >
                <div className="card">
                  <img
                    src={quality.icon}
                    className="card-img-top"
                    alt={quality.alt}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{quality.name}</h5>
                    <p className="card-text">{quality.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
