import React from "react";
import "./Services.css";
import accountsReceivable from "./images/symbols/IAAU - symbol - accounts receivable.png";
import accountsPayable from "./images/symbols/IAAU - symbol - accounts payable.png";
import Reconciliation from "./images/symbols/IAAU - symbol - reconciliation.png";
import BAS from "./images/symbols/IAAU - symbol - BAS.png";
import payroll from "./images/symbols/IAAU - symbol - payroll.png";
import workersCompensation from "./images/symbols/IAAU - symbol - workers-compensation.png";
import superannuation from "./images/symbols/IAAU - symbol - superannuation.png";
import Button from "./Button.js";
import SubHeading from "./SubHeading.js";
import "./Cards.css";

export default function Services() {
  let services = [
    {
      name: "Accounts Receivable",
      description: "management of your sales & revenue",
      icon: `${accountsReceivable}`,
      alt: "hand receiving coins",
    },
    {
      name: "Accounts Payable",
      description: "management of your bills & expenses",
      icon: `${accountsPayable}`,
      alt: "icon of hand with credit card",
    },
    {
      name: "Reconciliation",
      description: "bank, credit card transactions & petty cash",
      icon: `${Reconciliation}`,
      alt: "balancing scales",
    },
    {
      name: "Business Activity Statement (BAS)",
      description: "inc. GST, PAYGW, PAYGI, FBT, WET and LCT",
      icon: `${BAS}`,
      alt: "clip board with financial symbols",
    },
    {
      name: "Payroll & PAYG W",
      description:
        "processing of employee’s salaries, taxes, leave and STP reporting...",
      icon: `${payroll}`,
      alt: "person with dollars",
    },
    {
      name: "Workers Compensation",
      description: "obligations compliance and insurance claims",
      icon: `${workersCompensation}`,
      alt: "person with broken arm",
    },
    {
      name: "Superannuation",
      description: "calculations for your employees and yourself",
      icon: `${superannuation}`,
      alt: "piggy bank with coins",
    },
  ];
  return (
    <div className="Services pt-5 pb-5">
      <SubHeading heading="Here for you..." />
      <div className="row">
        {services.map(function (service, index) {
          return (
            <div
              key={index}
              className="col-sm d-flex justify-content-evenly text-center"
            >
              <div className="card quality">
                <img
                  src={service.icon}
                  className="card-img-top"
                  alt={service.alt}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="m-5">
        <Button type="view packages" link="/Packages" />
      </div>
    </div>
  );
}
