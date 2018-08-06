import React, { Component } from "react";
import { Toast } from "antd-mobile";
import { all } from "rsvp";
class PlaceHolderImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  handleImageLoaded() {
    this.setState({ loaded: true });
  }
  handleImageErrored() {
    Toast.fail("图片加载失败", 1);
  }
  render() {
    let props = this.props;
    return (
      <div>
        <img
          style={{
            display: !this.state.loaded ? "none" : "block"
          }}
          alt="img"
          src={props.imgSrc}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
        <img
          style={{
            display: this.state.loaded ? "none" : "block"
          }}
          alt="placeholder"
          src={require("../../assets/yay.jpg")}
        />
      </div>
    );
  }
}

export default PlaceHolderImg;
