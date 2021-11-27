import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div className="Button container-fluid">
      <Link to={props.link} className="btn-link">
        <button className="btn btn-control">{props.type}</button>
      </Link>
    </div>
  );
}
