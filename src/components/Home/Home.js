import React from "react";
import "./Home.css";
import Product from "../product/product";
import { Link } from "react-router-dom";
const Home = (props) => {
  console.log(props.items[0].title);
  console.log(props.items[0].images);

  return (
    <div class="home">
      <h3>This is Home page </h3>
      <div class="featured">
        <Product title={props.items[0].title} images={props.items[0].images} />
        <Product title={props.items[1].title} images={props.items[1].images} />
        <Product title={props.items[2].title} images={props.items[2].images} />
        <Product title={props.items[3].title} images={props.items[3].images} />
      </div>
      <Link to="/list">
        <button>Click here for more </button>
      </Link>
    </div>
  );
};

export default Home;
