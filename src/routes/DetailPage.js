import React, { Component } from "react";
import { ActivityIndicator, NavBar, Icon, WhiteSpace } from "antd-mobile";
import { connect } from "dva";
import Detail from "../components/Detail/Detail";
import Music from "../components/Detail/Music";
import Movie from "../components/Detail/Movie";
import { routerRedux } from "dva/router";
import Comment from "../components/Detail/Comment";
class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isloading: true };
  }
  judgeType(typeId) {
    const category = [
      "摄影",
      "one story",
      "连载",
      "问答",
      "music",
      "movie",
      "广告"
    ];
    return category[typeId];
  }
  UNSAFE_componentWillMount() {
    let serialInfo = this.props.detail.currentArticle;
    let type = serialInfo.type;
    serialInfo.type = this.judgeType(type);
    this.props.dispatch({
      type: "detail/getDetail",
      payload: { typeInfo: serialInfo }
    });
    console.log(serialInfo);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isloading: nextProps.loading.global
    });
  }
  judgeRenderType(content, serialInfo) {
    switch (serialInfo.type) {
      case "movie":
        return <Movie {...content} />;
      case "music":
        return <Music {...content} />;
      default:
        return <Detail {...content} />;
    }
  }
  render() {
    let comments = this.props.detail.comments;
    let categoryInfo = this.props.detail.currentArticle;
    let article = this.props.detail.article;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            console.log("onLeftClick");
            this.props.history.go(-1);
          }}
        >
          {" "}
          <ActivityIndicator animating={this.state.isloading} />
          ONE
        </NavBar>
        {this.judgeRenderType(article, categoryInfo)}
        {/* <Detail {...article} category={categoryInfo} /> */}
        <WhiteSpace />
        {/* <div>
          {comments.map((ele, index) => {
            return <Comment {...ele} />;
          })}
        </div> */}
      </div>
    );
  }
}

export default connect(({ detail, loading }) => ({
  detail,
  loading
}))(DetailPage);
