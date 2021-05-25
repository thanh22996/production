import Request from "../middleware/request";

const url = "https://devapi.sscc.vn";
const isSecurity = true;
// const keySecurity = {
//   publicKey:
//     "-----BEGIN PUBLIC KEY-----\n" +
//     "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKi\n" +
//     "wIhTJpAi1XnbfOSrW/Ebw6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQ==\n" +
//     "-----END PUBLIC KEY-----",
//   privateKey:
//     "-----BEGIN RSA PRIVATE KEY-----\n" +
//     "MIIBPAIBAAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKiwIhTJpAi1XnbfOSrW/Eb\n" +
//     "w6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQJBAJSfTrSCqAzyAo59Ox+m\n" +
//     "Q1ZdsYWBhxc2084DwTHM8QN/TZiyF4fbVYtjvyhG8ydJ37CiG7d9FY1smvNG3iDC\n" +
//     "dwECIQDygv2UOuR1ifLTDo4YxOs2cK3+dAUy6s54mSuGwUeo4QIhAK7SiYDyGwGo\n" +
//     "CwqjOdgOsQkJTGoUkDs8MST0MtmPAAs9AiEAjLT1/nBhJ9V/X3f9eF+g/bhJK+8T\n" +
//     "KSTV4WE1wP0Z3+ECIA9E3DWi77DpWG2JbBfu0I+VfFMXkLFbxH8RxQ8zajGRAiEA\n" +
//     "8Ly1xJ7UW3up25h9aa9SILBpGqWtJlNQgfVKBoabzsU=\n" +
//     "-----END RSA PRIVATE KEY-----",
// };
const callAPI = {
  // getDataRequest({ ...arg }) {
  //   return callAPI.callTravelookAPI("GET", "/Demo", { ...arg });
  // },
  getListSchool(args) {
    return callAPI.callTravelookAPI("POST", `/v1/Order/School/Search`, {
      ...args,
    });
  },

  callTravelookAPI(method, pathUrl, body = {}, headers = {}) {
    return Request.callAPI(
      method,
      url,
      pathUrl,
      body,
      headers,
      (isSecurity = false)
      // keySecurity.publicKey,
      // keySecurity.privateKey
    );
  },
};
export default callAPI;
