import request from "../utils/request";
const baseUrl = url =>
  `http://v3.wufazhuce.com:8000${url}&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=web`;

export async function getDate() {
  return await request(baseUrl("/api/onelist/idlist/?channel=wdj"));
}

//  category:0:摄影, 1:one story ,2: 连载 3: 广告 4:问答 ,5:音乐,6:影视
export async function getOneList(date) {
  return await request(baseUrl(`/api/onelist/${date}/0?channel=wdj`));
}

export async function getArticleDetail({ id, type }) {
  if (type === "movie" || type === "music") {
    return await request(
      baseUrl(`/api/${type}/detail/${id}?channel=wdj`)
    );
  } else {
    return await request(
      baseUrl(`/api/essay/${id}?channel=wdj&source=summary`)
    );
  }
}
export async function getDetailPlus(type, itemId) {
  return await request(
    baseUrl(`/api/${type}/detail/ + ${itemId} + ?channel=wdj`)
  );
}
export async function getTypeList(type, page) {
  return await request(
    baseUrl(`/api/channel/${type}/more/${page}?
  channel=wdj`)
  );
}
