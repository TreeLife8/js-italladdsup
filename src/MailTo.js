import React from "react";
import { Link } from "react-router-dom";
import "./MailTo.css";

const Mailto = ({ mailto, label }) => {
  return (
    <div className="MailTo">
      <Link
        to="#"
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    </div>
  );
};

export default Mailto;
