import React from "react";
import { connect } from "dva";
import OneList from "../components/OneList";

const One = ({ dispatch, content }) => {
  this.componentWillMount = () => {
    dispatch({
      type: "onelist/getOneList"
    });
  };
  return (
    <div>
      <h2>List of one</h2>
      <OneList content={content} />
    </div>
  );
};

export default connect(({ content }) => ({
  content
}))(One);
