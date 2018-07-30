import React, { Component } from "react";
import { connect } from "dva";
import ProductList from "../components/ProductList";

class Products extends Component {

  UNSAFE_componentWillMount() {
    this.props.dispatch({
      type: "products/delete",
      payload: 1
    });
  }
  render() {
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}
export default connect(({ products }) => ({
  products
}))(Products);
