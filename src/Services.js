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
  let services = [];
  function Services(name, description, icon, alt) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.alt = alt;
    services.push({
      name: this.name,
      description: this.description,
      icon: this.icon,
      alt: this.alt,
    });
  }
  new Services(
    "Accounts Receivable",
    "management of your sales & revenue",
    `${accountsReceivable}`,
    "hand receiving coins"
  );
  new Services(
    "Accounts Payable",
    "management of your bills & expenses",
    `${accountsPayable}`,
    "icon of hand with credit card"
  );
  new Services(
    "Reconciliation",
    "bank, credit card transactions & petty cash",
    `${Reconciliation}`,
    "balancing scales"
  );
  new Services(
    "Business Activity Statement (BAS)",
    "inc. GST, PAYGW, PAYGI, FBT, WET and LCT",
    `${BAS}`,
    "clip board with financial symbols"
  );
  new Services(
    "Payroll & PAYG W",
    "processing of employee’s salaries, taxes, leave and STP reporting...",
    `${payroll}`,
    "person with dollars"
  );
  new Services(
    "Workers Compensation",
    "obligations compliance and insurance claims",
    `${workersCompensation}`,
    "person with broken arm"
  );
  new Services(
    "Superannuation",
    "calculations for your employees and yourself",
    `${superannuation}`,
    "piggy bank with coins"
  );
  return (
    <div className="Services">
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
