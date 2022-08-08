import React from "react";
import { Link } from "react-router-dom";
import Product from "../product/product";
import "./List.css";
const List = (props) => {
  return (
    <div>
      <h3>This is List page</h3>

      <Link to="/">
        <button>Go back</button>
      </Link>
      <div class="plp">
        <Product title={props.items[0].title} images={props.items[0].images} />
        <Product title={props.items[1].title} images={props.items[1].images} />
        <Product title={props.items[2].title} images={props.items[2].images} />
        <Product title={props.items[3].title} images={props.items[3].images} />
        <Product title={props.items[4].title} images={props.items[4].images} />
        <Product title={props.items[5].title} images={props.items[5].images} />
      </div>
    </div>
  );
};

export default List;
