import React, { Component } from "react";
import { connect } from "dva";
import OneItem from "../components/One/OneItem";
import Weather from "../components/One/Weather";

class One extends Component {
  constructor(props) {
    super();
  }
  UNSAFE_componentWillMount() {
    this.props.dispatch({
      type: "onelist/getDate"
    });
  }
  render() {
    function handleClick(id, type) {
      let postdata = {
        id: id,
        type: type
      };
      console.log(postdata)
      this.props.dispatch({
        type: "onelist/sendOneId",
        payload: {data:postdata}
      });
    }
    return (
      <div>
        <Weather {...this.props.onelist.weather} />
        {this.props.onelist.content.map((ele, index) => {
          return (
            <OneItem onClick={handleClick.bind(this)} key={index} {...ele} />
          );
        })}
      </div>
    );
  }
}

export default connect(({ onelist }) => ({
  onelist
}))(One);
