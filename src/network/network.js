import {domain} from './api';

export function get(url, param) {
  // 格式化 URL
  let tempUrl = domain + url;
  const paramStr = stringifyParams(param);
  tempUrl = paramStr ? `${tempUrl}?${paramStr}` : tempUrl;

  return new Promise((resolve, reject) => {
    fetch(tempUrl, {
      method: 'GET',
      headers: httpHeader(),
    }).then(response => {
      return response.json();
    }).then(result => {
      console.log(result);
      
      resolve(result);
    }).catch(error => {
      console.log(error);

      reject(error);
    })
  })
}

export function post(url, param) {
  let tempUrl = domain + url;
  return new Promise((resolve, reject) => {
    fetch(tempUrl, {
      method: 'POST',
      headers: httpHeader(),
      body: JSON.stringify(param)
    }).then((response) => {
      return response.json();
    }).then((result) => {
      console.log(result);

      resolve(result);
    }).catch(error => {
      console.log(error);
      
      reject(error);
    })
  })
}

function httpHeader() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'api-agent': 'os/iOS;device_type/iOS;channel/haoku',
    'version': 'coolfood.ios.2.9.3',
  }
}

/**
 * 序列化get参数
 *
 * @param {Object}params 参数列表
 */
function stringifyParams(params) {
  // 值为null和undefined时，则过滤掉
  const encodeFn = encodeURIComponent;
  const paramsStr = params && Object.entries(dataCompile(params)).map(([name, value]) => {
    return `${name}=${encodeFn(value)}`;
  }).join('&');
  return paramsStr;
}

/**
 * 过滤数据中null和undefined
 * @param {object}data
 */
function dataCompile(data) {
  const validData = {};
  for (const prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      const value = data[prop];
      if (value !== null && typeof value !== 'undefined' && value !== '') {
        validData[prop] = value;
      }
    }
  }
  return validData;
}