import React, { Component } from "react";
import styles from "./player.css";
const TrackInfo = track => {
  return (
    <div>
      <img className={styles.albumPic} alt="img" src={track.data.picUrl} />
      <div className={styles.trackInfo}>
        {track.data.name}
        {track.data.artist}
      </div>
    </div>
  );
};
const Progress = progressData => {
  return (
    <div className={styles.progress} style={{ width: progressData.progress }} />
  );
};
const Controls = data => {
  return (
    <div className={styles.controls}>
      <div className={styles.play} onClick={data.onPlay}>
        <i className={data.isPlaying ? "playing" : "paused"} />
      </div>
    </div>
  );
};
const Timer = time => {
  this.timeConvert = function(timestamp) {
    var minutes = Math.floor(timestamp / 60);
    var seconds = Math.floor(timestamp - minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    timestamp = minutes + ":" + seconds;
    return timestamp;
  };
  return (
    <div className={styles.time}>
      <div className={styles.current}>{this.timeConvert(time.currentTime)}</div>
      <div className={styles.total}>
        {this.timeConvert(time.currentTotalTime)}
      </div>
    </div>
  );
};

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    // test data
    this.state = {
      track: {
        name: "青龙",
        artist: "五",
        picUrl: "",
        duration: 10000,
        mp3Url: "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
      },
      currentTime: 0,
      currentTotalTime: 0,
      playStatus: false
    };
  }
  componentDidMount() {
    this.updatePlayStatus();
    setInterval(() => {
      let audio = document.getElementById("audio");
      this.setState({ currentTime: audio.currentTime });
    }, 300);
  }
  updatePlayStatus() {
    let audio = document.getElementById("audio");
    if (this.state.playStatus) {
      audio.play();
    } else {
      audio.pause();
    }
    //更新当前歌曲总时间
    this.setState({
      currentTotalTime: this.state.track.duration / 1000
    });
  }
  play() {
    this.setState({ playStatus: !this.state.playStatus }, () => {
      this.updatePlayStatus();
    });
  }
  render() {
    return (
      <div className={styles.player}>
        <TrackInfo data={this.state.track} />
        <Progress
          progress={
            (this.state.currentTime / this.state.currentTotalTime) * 100 + "%"
          }
        />
        <Controls
          isPlay={this.state.playStatus}
          onPlay={this.play.bind(this)}
        />
        <Timer
          currentTime={this.state.currentTime}
          currentTotalTime={this.state.currentTotalTime}
        />
        <audio id="audio" autoPlay="false" src={this.state.track.mp3Url} />
      </div>
    );
  }
}

export default MusicPlayer;
