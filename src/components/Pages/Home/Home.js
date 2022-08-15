import React from "react";
import Product from "../../Product/Product";
import { Link } from "react-router-dom";
import styles from '../../Style/Style.module.css';



const Home = (props) => {
  console.log(props.items[0].title);
  console.log(props.items[0].images);

  return (
    <div>

      <h3>Featured Paintings</h3>
      <div className={styles.featured}>
        <Product title={props.items[0].title} images={props.items[0].images} />
        <Product title={props.items[1].title} images={props.items[1].images} />
        <Product title={props.items[2].title} images={props.items[2].images} />
        <Product title={props.items[3].title} images={props.items[3].images} />
      </div>
      <Link to="/list">
        <button className={styles.seemore}>Click here for more </button>
      </Link>
    </div>
  );
};

export default Home;
