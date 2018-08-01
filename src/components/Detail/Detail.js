import React from "react";
import PropTypes from "prop-types";
import { WingBlank, WhiteSpace } from "antd-mobile";
import styles from "./detail.css";

const Detail = content => {
  return (
    <div>
      <WhiteSpace />
      <WingBlank size="md">
        <WhiteSpace size="lg" />

        {content.hp_title}
        <WhiteSpace size="lg" />
        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{
            __html: content.hp_content
          }}
        />
      </WingBlank>
    </div>
  );
};
Detail.propTypes = {
  content: PropTypes.object
};

export default Detail;
