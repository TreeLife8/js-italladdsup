import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/homeDomains/Home";
import Packages from "./components/packagesDomains/Packages";
import Contact from "./components/otherDomains/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/Packages" component={Packages} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
    </div>
  );
}
