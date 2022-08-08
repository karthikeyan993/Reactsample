import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import List from "./components/List/List";

const RouteSwitch = () => {
  const product = [
    {
      title: "AJ",
      images: "/images/aj.jpg",
    },
    { title: "Blue Sea", images: "/images/bluesea.jpg" },
    {
      title: "Elephant",
      images: "/images/elephant.jpg",
    },
    {
      title: "Flower Girl",
      images: "/images/flowergirl.jpg",
    },
    {
      title: "Green Forest",
      images: "/images/greenforest.jpg",
    },
    {
      title: "Hope",
      images: "/images/hope.jpg",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home items={product} />} />
        <Route path="/list" element={<List items={product} />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
