import React from "react";

import styles from '../Style/Style.module.css';

const Product = (props) => {
  return (
    <div className={styles.ProductCard}>
      <h2 className={styles.title}>{props.title}</h2>
      <img src={props.images} alt="painting"></img>
    </div>
  );
};

export default Product;