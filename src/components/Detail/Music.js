import React from "react";
import PropTypes from "prop-types";
import { WingBlank, WhiteSpace, Card } from "antd-mobile";
import styles from "./detail.css";

const Music = music => {
  return (
    <div>
      <WhiteSpace />
      <Card full>
        <Card.Header
          title={music.title}
          // extra={<span>{music.author}</span>}
        />
        <Card.Body>
          <WhiteSpace size="xs" />
          <img style={{width:"100%"}} alt={music.cover} src={music.cover} />
          <WhiteSpace size="sm" />
          {music.info}
        </Card.Body>
      </Card>
      <WingBlank size="md">
        <WhiteSpace size="lg" />
        <div>{music.story_title}</div>
        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{
            __html: music.story
          }}
        />
      </WingBlank>
    </div>
  );
};
Music.propTypes = {
  music: PropTypes.object
};
export default Music