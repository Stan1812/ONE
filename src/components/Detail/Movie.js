import React from "react";
import PropTypes from "prop-types";
import { WingBlank, WhiteSpace, Card } from "antd-mobile";
import styles from "./detail.css";

const Movie = movie => {
  const imgs = movie.photo;
  return (
    <div>
      <WhiteSpace />
      <Card full>
        <Card.Header
          title={movie.title}
          extra={<span>导演:{movie.directors}</span>}
        />
        <Card.Body>
          <WhiteSpace size="xs" />
          {movie.info}
        </Card.Body>
        <WhiteSpace size="sm" />
        <Card.Footer
          content={movie.maketime}
          extra={<span>阅读数:{movie.read_num}</span>}
        />
      </Card>
      <WingBlank size="md">
        <WhiteSpace size="lg" />

        <div>
          {imgs.map(ele => {
            return <img style={{ width: "100%" }} alt={ele} src={ele} />;
            // return <span> {ele}</span>
          })}
        </div>
        <WhiteSpace size="lg" />

        <div
          className={styles.articlemovie}
          dangerouslySetInnerHTML={{
            __html: movie.officialstory
          }}
        />
      </WingBlank>
    </div>
  );
};
Movie.propTypes = {
  movie: PropTypes.object
};
export default Movie;
