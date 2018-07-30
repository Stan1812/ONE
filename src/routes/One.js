import React, { Component } from "react";
import { connect } from "dva";
import OneItem from "../components/One/OneItem";
import Weather from "../components/One/Weather";

class One extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch({
      type: "onelist/getDate"
    });
  }
  render() {
    return (
      <div>
        <Weather {...this.props.onelist.weather} />
        {this.props.onelist.content.map((ele, index) => {
          return <OneItem key={index} {...ele} />;
        })}
      </div>
    );
  }
}

export default connect(({ onelist }) => ({
  onelist
}))(One);
