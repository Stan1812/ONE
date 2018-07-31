import React, { Component } from "react";
import { ActivityIndicator, NavBar, Icon } from "antd-mobile";
import Detail from "../components/Detail/Detail";
// import Comment from "../components/Detail/Comment";
import { connect } from "dva";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isloading: true };
  }
  UNSAFE_componentWillMount() {
    console.log(this.props.detail);
    this.props.dispatch({
      type: "detail/getDetail",
      payload: { id: this.props.detail.currentArticle.id }
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isloading: nextProps.loading.global
    });
  }
  render() {
    // let currentItem = this.props.detail.currentArticle;
    let article = this.props.detail.article;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
        >
          {" "}
          <ActivityIndicator animating={this.state.isloading} />
          ONE
        </NavBar>
        <Detail {...article} />
      </div>
    );
  }
}

export default connect(({ detail, loading }) => ({
  detail,
  loading
}))(DetailPage);
