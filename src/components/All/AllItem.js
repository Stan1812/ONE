import React from "react";
import PropTypes from "prop-types";

const AllItem = ({ products }) => {
  this.ComponentWillMount = () => {
    console.log("fuck");
  };
  return products.map((product,index) => {
    return <div key={index}>{product.name}</div>;
  });
};


AllItem.propTypes = {
  products: PropTypes.array.isRequired
};

export default AllItem;
