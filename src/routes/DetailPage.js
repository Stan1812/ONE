import React, { Component } from "react";
import { connect } from "dva";

class DetailPage extends Component {
  render() {
    return (
      <div>
         DetailPage
      </div>
    );
  }
}

export default connect(({ detail }) => ({
  detail
}))(DetailPage);
