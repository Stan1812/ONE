import request from "../utils/request";
const baseUrl = url =>
  `http://v3.wufazhuce.com:8000${url}&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=web`;

export async function getDate() {
  return await request(baseUrl("/api/onelist/idlist/?channel=wdj"));
}

//  category:0:摄影, 1:one story ,2: 连载 3: 广告 4:问答 ,5:音乐,6:影视
export async function getOneList(date) {
  return request(baseUrl(`/api/onelist/${date}/0?channel=wdj`));
}

export async function getArticleDetail(itemId, sourceId) {
  return request(
    baseUrl(
      `/api/essay/${itemId}?channel=wdj&source=summary&source_id=${sourceId}`
    )
  );
}
export async function getMusicDetail(itemId) {
  return request(baseUrl(`/api/music/detail/ + ${itemId} + ?channel=wdj`));
}
export async function getMovieDetail(itemId) {
  return request(baseUrl(`/api/movie/ ${itemId} /story/1/0?channel=wdj`));
}
// export function
