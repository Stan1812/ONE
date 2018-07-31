import React from "react";
import { Link } from "dva/router";
import { Card, WhiteSpace } from "antd-mobile";
import PropTypes from "prop-types";
import styles from "./OneItem.css";
// const category = ["摄影", "one story", "连载", "问答", "音乐", "影视", "广告"];

const OneItem = (postData) => (
  <div>
    <WhiteSpace size="md" />

    <Card full>
      <Card.Header
        title={postData.title}
        extra={<span>{postData.author.user_name}</span>}
      />
      <Card.Body onClick={() =>postData.onClick(postData.item_id,postData.category)}>
        <div className={styles.picContent}>
          <img
            className={styles.pic}
            alt={postData.pic_info}
            src={postData.img_url}
          />
        </div>
        <WhiteSpace size="xs" />
        <Link to={"/detail"}>
          <div className={styles.forward}>{postData.forward}</div>
        </Link>
      </Card.Body>
      <WhiteSpace size="sm" />
      <Card.Footer
        content={postData.last_update_date}
        extra={
          <div>
            {" "}
            <i
              className="iconfont icon-xin1"
              style={{ color: "#60c3ff" }}
            />{" "}
            {postData.like_count}
          </div>
        }
      />
    </Card>
  </div>

  // <div className={styles.item}>
  //   <span className={styles.type}>{category[postData.category]}</span>
  //   <div>
  //     <div className={styles.title}>{postData.title}</div>
  //     <div className={styles.author}>{postData.author.user_name}</div>
  //   </div>
  //   <div className={styles.picContent}>
  //     <img
  //       className={styles.pic}
  //       alt={postData.pic_info}
  //       src={postData.img_url}
  //     />
  //   </div>
  //   <div className={styles.forward}>{postData.forward}</div>
  //   <div className={styles.footer}>
  //     <span>{postData.last_update_date}</span>
  //     <span>{postData.like_count}</span>
  //   </div>
  // </div>
);

// OneItem.propTypes = {
//   content: PropTypes.object,
  
// };

export default OneItem;

// {
//   "id": "9261",
//   "category": "1",
//   "display_category": 6,
//   "item_id": "1713",
//   "title": "一周语文丨怀着极恐的心情细思下去",
//   "forward": "本周单字“撸”。新年伊始，“撸起袖子加油干”成为本周流行热句。",
//   "img_url": "http://image.wufazhuce.com/Fm8RsSyXPm4f1dpPTxDDaAp1R0ry",
//   "like_count": 88,
//   "post_date": "2017-01-08 06:00:00",
//   "last_update_date": "2017-01-06 21:19:49",
//   "author": {
//       "user_id": "7654034",
//       "user_name": "黄集伟",
//       "desc": "黄集伟，专栏作者，曾有“阅读笔记”系列、“语词笔记”系列、《孤岛访谈录》等闲书出版。",
//       "wb_name": "",
//       "is_settled": "0",
//       "settled_type": "0",
//       "summary": "黄集伟，专栏作者。",
//       "fans_total": "9",
//       "web_url": "http://image.wufazhuce.com/FvVmWbqlle7jlUCTeozoval9NyBH"
//   },
//   "video_url": "",
//   "audio_url": "",
//   "audio_platform": 2,
//   "start_video": "",
//   "volume": 0,
//   "pic_info": "",
//   "words_info": "",
//   "subtitle": "",
//   "number": 0,
//   "serial_id": 0,
//   "serial_list": [ ],
//   "movie_story_id": 0,
//   "ad_id": 0,
//   "ad_type": 0,
//   "ad_pvurl": "",
//   "ad_linkurl": "",
//   "ad_makettime": "",
//   "ad_closetime": "",
//   "ad_share_cnt": "",
//   "ad_pvurl_vendor": "",
//   "content_id": "1713",
//   "content_type": "1",
//   "content_bgcolor": "#FFFFFF",
//   "share_url": "http://m.wufazhuce.com/article/1713",
//   "share_info": {
//       "url": "http://m.wufazhuce.com/article/1713",
//       "image": "http://image.wufazhuce.com/Fm8RsSyXPm4f1dpPTxDDaAp1R0ry",
//       "title": "一周语文丨怀着极恐的心情细思下去 作者/黄集伟",
//       "content": "怀着极恐的心情细思下去"
//   }
