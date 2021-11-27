import React from "react";
import "./Packages.css";
import XERO from "../../images/IAAU - image - Xero on devices.png";
import AdvertiseBanner from "../homeDomains/AdvertiseBanner.js";
import Testimonials from "../Testimonials";
import desk from "../../images/IAAU - images - workdesk.png";
import ShapeDivider from "../ShapeDivider";

export default function Packages() {
  let packages = [
    {
      name: "Starter",
      price: "from $350",
      description:
        "Tailored for small business owners or sole traders who need a clear picture of their financial performance and basic bookkeeping services",
      services: [
        "Monthly bank reconciliation",
        "Dext App for purchases",
        "Monthly reporting pack",
        "BAS calculations & lodgement",
        "Payroll (up to 2 ppl)",
        "Jounal entry",
        "STP payroll Reporting directly to ATO",
      ],
    },
    {
      name: "Standard",
      price: "from $500",
      description:
        "Designed for micro to small businesses with a team up to 5. I'll look after your payrolls, workers comp and super whilst managing your accounts payable and receivable.",
      services: [
        "Weekly bank reconciliation",
        "Dext App for purchases",
        "Monthly reporting pack",
        "BAS calculations & lodgement",
        "Payroll (up to 5 ppl)",
        "Jounal entry",
        "STP payroll Reporting directly to ATO",
        "Superannuation calculations & lodgements",
        "Workers compensation calculations & lodgements",
        "Phone & email support (10 per week)",
        "Accounts receivable (up to 15 transacations)",
        "Accounts payable (up to 15 transacations)",
      ],
    },
    {
      name: "Growth",
      price: "from $1200",
      description:
        "Tailored for well established businesses giving peace of mind that your compliance and financial operations are managed.",
      services: [
        "Weekly bank reconciliation",
        "Dext App for purchases",
        "Monthly reporting pack",
        "BAS calculations & lodgement",
        "Payroll (up to 20 ppl)",
        "Jounal entry",
        "STP payroll Reporting directly to ATO",
        "Superannuation calculations & lodgements",
        "Workers compensation calculations & lodgements",
        "Unlimited phone & email support",
        "Unlimited accounts receivable",
        "Unlimited accounts payable",
        "PAYG installments calculations & lodgements",
        "Payroll tax calculations & lodgements",
        "Monthly IAS calculations & lodgements",
      ],
    },
  ];
  return (
    <div className="Packages">
      <div className="hero container-fluid">
        <h1 className="heading">Packages</h1>
        <ShapeDivider />
      </div>
      <div className="container">
        <div className="row" data-aos="fade-up">
          {packages.map(function (service, index) {
            return (
              <div key={index} className="col-sm">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <h6 className="card-price mb-2">
                      {service.price}
                      <small> / month</small>
                    </h6>
                    <h6 className="card-subtitle text-muted mb-2">
                      {service.description}
                    </h6>
                    <hr className="divider" />
                    <ul className="card-text">
                      {service.services.map(function (service, index) {
                        return <li key={index}>{service}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-sm-7">
            <img
              className="xero-img img-fluid"
              data-aos="fade-up"
              src={XERO}
              alt="a computer, phone and tablet all displaying the xero software"
            />
          </div>
          <div className="col-sm-5">
            <div data-aos="fade-up" className="quote">
              <h2 className="heading-title">
                Free software installation & setup upon request
              </h2>
              <ul className="d-flex softwares">
                <li className="software">XERO</li>
                <li className="software">DEXT</li>
                <li className="software">MYOB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-banner pb-3">
        <Testimonials img={desk} />
      </div>
      <div className="light-banner">
        <AdvertiseBanner
          catchphrase="Sick of feeling taxed?"
          title="Get a FREE consultation"
          catch="...with your LOCAL, trustworthy and friendly bookkeeper."
        />
      </div>
    </div>
  );
}
