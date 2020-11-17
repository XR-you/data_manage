import {postData} from "./request";

//注册
export const postRegUserInfo = (userMail, userName, userPassword) => {
  return postData({
    url: 'user/create',
    params: {
      userMail,
      userName,
      userPassword
    }
  })
}
//登录
export const postLoginUserInfo = (userMail, userPassword) => {
  return postData({
    url: 'user/login',
    params: {
      userMail,
      userPassword
    }
  })
}

//销售
export const postSaleInfo = (salefile) => {
  return postData({
    url: 'user/',
    data: salefile
  })
}
//开发
export const postDevInfo = (devfile) => {
  return postData({
    url: 'data/insert/develop',
    data: devfile
  })
}
//运营
export const postOperaInfo = (operafile) => {
  return postData({
    url: 'user/login',
    data: operafile
  })
}
//财务
export const postAccountInfo = (accountfile) => {
  return postData({
    url: 'user/login',
    data: accountfile
  })
}
//人力资源
export const postHrInfo = (hrfile) => {
  return postData({
    url: 'user/login',
    data: hrfile
  })
}
//市场营销
export const postMarketInfo = (marketfile) => {
  return postData({
    url: 'user/login',
    data: marketfile
  })
}
//保卫部
export const postSecuInfo = (securityfile) => {
  return postData({
    url: 'user/login',
    data: securityfile
  })
}

//提交setting表单
export const postSettingForm = (form) => {
  return postData({
    url: 'api/',
    params: {},
    data: form
  })
}

//提交智能预警参数
export const postParamForm = (form) => {
  return postData({
    url: 'api/',
    params: {},
    data: form
  })
}