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
  let qualities = [
    {
      name: "Reliable",
      description: "fully certified & insured over 15 years of experience",
      icon: `${Reliable}`,
      alt: "Certificate with badge",
    },
    {
      name: "Up-to-date",
      description: "with new laws, regulations & technology",
      icon: `${uptodate}`,
      alt: "Calander with time tick",
    },
    {
      name: "Integration",
      description: "with leading financial softwares such as MYOB and XERO",
      icon: `${integration}`,
      alt: "puzzles fitting together",
    },
    {
      name: "Local",
      description: "Based in Sydney, Northern Beaches",
      icon: `${local}`,
      alt: "pin drop on map",
    },
    {
      name: "Accurate",
      description: "reports & predictions for business growth",
      icon: `${accurate}`,
      alt: "target on-point",
    },
    {
      name: "COVID advice",
      description: "on relevant government subsidies",
      icon: `${covidadvice}`,
      alt: "pulse image",
    },
    {
      name: "Fast & efficient",
      description: "timely reporting & lodging to remain compliant",
      icon: `${efficient}`,
      alt: "stop watch",
    },
    {
      name: "Cloud based",
      description: "live access to information and progress tracking",
      icon: `${cloudbased}`,
      alt: "cloud-based technology",
    },
  ];
  return (
    <div className="QualityService container-fluid pt-4 pb-5">
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
  );
}
