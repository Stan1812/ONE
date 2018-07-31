import React from "react";
import PropTypes from "prop-types";
import { Card, WhiteSpace } from "antd-mobile";

const Comment = comment => {
  return (
    <div>
      <Card full>
        <Card.Body>
          <WhiteSpace size="xs" />
        </Card.Body>
        <WhiteSpace size="sm" />
        <Card.Footer />
      </Card>
      <WhiteSpace size="sm" />
    </div>
  );
};
Comment.PropTypes = {
  comment: PropTypes.object
};
export default Comment;
