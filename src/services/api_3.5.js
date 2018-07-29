import request from "../utils/request";
const baseUrl = url => {
  `http://v3.wufazhuce.com:8000${url}&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=web`;
};

export function getDate() {
  return request(baseUrl("/api/onelist/idlist/?channel=wdj"));
}

export function getOneList(date) {
  return request(baseUrl(`/api/onelist/${date}/0?channel=wdj`));
}

// export function