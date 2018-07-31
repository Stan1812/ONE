import React, { Component } from "react";
import Detail from "../components/Detail/Detail"
import { connect } from "dva";

class DetailPage extends Component {

  UNSAFE_componentWillMount() {
    console.log(this.props.detail);
    this.props.dispatch({
      type: "detail/getDetail",
      payload: { id: this.props.detail.currentArticle.id }
    });
  }

  render() {
    // let currentItem = this.props.detail.currentArticle;
    let article = this.props.detail.article;
    return (
      <div>
        {/* <div>{currentItem.id}</div>
        <div>{currentItem.type}</div> */}
        {/* {article} */}
        <Detail {...article}></Detail>
      </div>
    );
  }
}

export default connect(({ detail }) => ({
  detail
}))(DetailPage);
