const _isDev = window.location.port.indexOf('4200') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  console.log('Host : ', host);
  return `${protocol}//${host}`;
};

const apiURI = _isDev ? 'http//localhost:8083/api/' : '/api/';
// const apiURI = 'http//localhost:8083/api/';
console.log('getHost : ', getHost());
export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI,
};
