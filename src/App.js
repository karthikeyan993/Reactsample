import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import List from "./components/Pages/List/List";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
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
      <Header />
      <Routes>
        <Route path="/" element={<Home items={product} />} />
        <Route path="/list" element={<List items={product} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
