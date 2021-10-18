import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Packages from "./Packages";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Packages" component={Packages} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
    </div>
  );
}
