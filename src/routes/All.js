import React, { Component } from "react";
import { connect } from "dva";
import OneItem from "../components/One/OneItem";
import AllItem from "../components/All/AllItem";
import { Popover, NavBar, Icon } from "antd-mobile";

const Item = Popover.Item;

class All extends Component {
  constructor(props) {
    super();
    this.state = {
      visible: false,
      selected: "reading"
    };
  }

  componentDidMount() {
    console.log("all did mounted");
    this.getMes();
  }
  onSelect = opt => {
    this.setState(
      {
        visible: false,
        selected: opt.props.value
      },
      this.getMes
    );
  };
  getMes = () => {
    this.props.dispatch({
      type: "alllist/getList",
      payload: this.state.selected
    });
  };
  handleVisibleChange = visible => {
    this.setState({
      visible
    });
  };
  handleClick(id, type) {
    let postdata = {
      id: id,
      type: type
    };
    console.log(postdata);
    this.props.dispatch({
      type: "onelist/sendOneId",
      payload: { data: postdata }
    });
  }
  render() {
    const list = this.props.alllist.list;
    return (
      <div>
        <NavBar
          mode="light"
          rightContent={
            <Popover
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: "#60c3ff" }}
              visible={this.state.visible}
              overlay={[
                <Item
                  key="4"
                  value="reading"
                  icon={<i className="iconfont icon-yuedu" />}
                >
                  阅读
                </Item>,
                <Item
                  key="5"
                  value="music"
                  icon={<i className="iconfont icon-music" />}
                >
                  音乐
                </Item>,
                <Item
                  key="6"
                  value="movie"
                  icon={<i className="iconfont icon-dianying" />}
                >
                  电影
                </Item>
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0]
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div
                style={{
                  height: "100%",
                  padding: "0 15px",
                  marginRight: "-15px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >
          <span style={{ color: "#60c3ff" }}>ONE IS ALL</span>
        </NavBar>
        <div>
          {list.map((ele, index) => {
            return (
              <OneItem
                onClick={this.handleClick.bind(this)}
                key={index}
                {...ele}
              />
              // <div> fuck</div>
            );
          })}
          {/* <AllItem products={this.props.alllist.list} /> */}
        </div>
      </div>
    );
  }
}
export default connect(({ alllist }) => ({
  alllist
}))(All);
