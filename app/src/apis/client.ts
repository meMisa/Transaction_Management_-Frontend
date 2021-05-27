import axios from 'axios';

export const BASE_URL = 'https://infra.devskills.app/api';

const requestConfig: any = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'text/plain',
  },
  maxRedirects: 0,
  timeout: 9000,
};

let instance = axios.create(requestConfig);

instance.interceptors.request.use(function (config) {
  config.headers['Platform'] = 'web';

  config.params = Object.assign({}, config.params || {});
  return config;
});

const getDispatch = (url, payload) => {
  return instance.get(url, payload);
};

const postDispatch = (url, payload) => {
  let payLoad;

  payLoad = payload;

  return instance.post(url, payLoad);
};

const putDispatch = (url, payload) => {
  return instance.put(url, payload);
};

const deleteDispatch = (url, payload) => {
  return instance.delete(url, payload);
};

function generateUrl(partialUrl, params = null) {
  let url = BASE_URL + partialUrl;
  let postFix = '';
  if (!params) return url;
  Object.keys(params).map((key) => {
    if (!params[key]) return;
    let searchKey = '{' + key + '}';
    if (url.indexOf(searchKey) !== -1) {
      url = url.replace(searchKey, params[key]);
    } else {
      if (!postFix) {
        postFix = '?';
      } else {
        postFix += '&';
      }
      postFix += key + '=' + params[key];
    }
  });
  return url + postFix;
}

const self = function dispatch(urlInfo, params = null, payload = null) {
  let body;
  const url = generateUrl(urlInfo.url, params);
  if (urlInfo.method === 'get') body = getDispatch;
  if (urlInfo.method === 'post') body = postDispatch;
  if (urlInfo.method === 'put') body = putDispatch;
  if (urlInfo.method === 'delete') body = deleteDispatch;

  return new Promise(function (resolve, reject) {
    body(url, payload)
      .then((data) => {
        return resolve(data.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          // call refresh token for getting new access token
        } else {
          reject(err.response);
        }
      });
  });
};

export default self;
