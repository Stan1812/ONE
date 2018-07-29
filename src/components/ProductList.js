import React from "react";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  this.ComponentWillMount = () => {
    console.log("fuck");
  };
  this.ComponentWillMount()
  return products.map((product,index) => {
    return <div key={index}>{product.name}</div>;
  });
};


ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
