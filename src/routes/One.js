import React, { Component } from "react";
import { connect } from "dva";
import OneItem from "../components/One/OneItem";
import Weather from "../components/One/Weather";
// import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import QueueAnim from "rc-queue-anim";

class One extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
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
      console.log(postdata);
      this.props.dispatch({
        type: "onelist/sendOneId",
        payload: { data: postdata }
      });
    }
    return (
      <div>
        {/* <MusicPlayer /> */}
        <Weather {...this.props.onelist.weather} />
        <QueueAnim delay={500} className="queue-simple">
          {this.props.onelist.content.map((ele, index) => {
            return (
              <OneItem onClick={handleClick.bind(this)} key={index} {...ele} />
            );
          })}
        </QueueAnim>
      </div>
    );
  }
}

export default connect(({ onelist }) => ({
  onelist
}))(One);
