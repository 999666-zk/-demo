import request from "./request";
/* 
    关于频道的
*/
// 获取所有频道
export const allChannelListAPI = () => {
  return request({
    url: "/v1_0/channels",
    method: "GET",
  });
};
// 不同频道的文章
export const allPinDaoItemList = (params) => {
  return request({
    url: "/v1_0/articles",
    params,
  });
};
// 文章的详细内容
export const getInnerText = (article_id) => {
  return request({
    url: `/v1_0/articles/${article_id}`,
    method: "GET",
  });
};

// 请求手机验证码
export const sendSSM = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`,
    method: "GET",
  });
};

// 关于用户登录
export const userLogin = () => {
  return request({
    url: ``,
  });
};
