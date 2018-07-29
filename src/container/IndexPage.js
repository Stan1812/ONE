import React from "react";
import { TabBar } from "antd-mobile";
import { connect } from "dva";
import styles from "./IndexPage.css";
import One from "../routes/One";
import Products from "../routes/Products";
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "ONE",
      hidden: false,
      fullScreen: true
    };
  }

  // 条件渲染one/all
  renderContent(page) {
    return (
      <div styleaname={styles.main}>
        {page === "ONE" ? <One  /> : <Products />}
      </div>
    );
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="ONE"
            key="ONE"
            icon={
              <i
                className="iconfont icon-message"
                style={{ fontSize: "22px" }}
              />
            }
            selectedIcon={
              <i
                className="iconfont icon-message-copy "
                style={{ fontSize: "22px" }}
              />
            }
            selected={this.state.selectedTab === "ONE"}
            onPress={() => {
              this.setState({
                selectedTab: "ONE"
              });
            }}
            data-seed="logId"
          >
            {this.renderContent("ONE")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i
                className="iconfont icon-dashboard"
                style={{ fontSize: "22px" }}
              />
            }
            selectedIcon={
              <i
                className="iconfont icon-dashboard-copy"
                style={{ fontSize: "22px" }}
              />
            }
            title="ALL"
            key="ALL"
            selected={this.state.selectedTab === "ALL"}
            onPress={() => {
              this.setState({
                selectedTab: "ALL"
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent("ALL")}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
