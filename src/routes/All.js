import React, { Component } from "react";
import { connect } from "dva";
import AllItem from "../components/All/AllItem";

class All extends Component {

  UNSAFE_componentWillMount() {
    // this.props.dispatch({
    //   type: "alllist/delete",
    //   payload: 1
    // });
    console.log("all wil mounte")
  }
  render() {
    return (
      <div>
        <h2>List of Products</h2>
        <AllItem products={this.props.alllist} />
      </div>
    );
  }
}
export default connect(({ alllist }) => ({
  alllist
}))(All);
