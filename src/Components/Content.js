import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../AllPages/Home";
import AboutUs from "../AllPages/AboutUs";
import Prices from "../AllPages/prices";
import Gallery from "../AllPages/gallery";
import Partners from "../AllPages/partners";
import Contacts from "../AllPages/contacts";

const Content = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/prices" element={<Prices />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/partners" element={<Partners />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>
);

export default Content;
