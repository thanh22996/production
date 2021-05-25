import axios from "axios";
import ShortId from "shortid";
import NodeRSA from "node-rsa";
import CryptoJS from "crypto-js";
import md5 from "md5";
import _ from "lodash";
// import store from '../../configs/store.config'

const app = {
  publicKey:
    "-----BEGIN PUBLIC KEY-----\n" +
    "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKi\n" +
    "wIhTJpAi1XnbfOSrW/Ebw6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQ==\n" +
    "-----END PUBLIC KEY-----",
  privateKey:
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIBPAIBAAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKiwIhTJpAi1XnbfOSrW/Eb\n" +
    "w6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQJBAJSfTrSCqAzyAo59Ox+m\n" +
    "Q1ZdsYWBhxc2084DwTHM8QN/TZiyF4fbVYtjvyhG8ydJ37CiG7d9FY1smvNG3iDC\n" +
    "dwECIQDygv2UOuR1ifLTDo4YxOs2cK3+dAUy6s54mSuGwUeo4QIhAK7SiYDyGwGo\n" +
    "CwqjOdgOsQkJTGoUkDs8MST0MtmPAAs9AiEAjLT1/nBhJ9V/X3f9eF+g/bhJK+8T\n" +
    "KSTV4WE1wP0Z3+ECIA9E3DWi77DpWG2JbBfu0I+VfFMXkLFbxH8RxQ8zajGRAiEA\n" +
    "8Ly1xJ7UW3up25h9aa9SILBpGqWtJlNQgfVKBoabzsU=\n" +
    "-----END RSA PRIVATE KEY-----",
};

const Request = {
  callAPI(
    method,
    url,
    pathUrl,
    args,
    headers,
    isSecurity,
    publicKey,
    priviteKey
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        let accessToken = localStorage.getItem("token");
        let lang = localStorage.getItem("lang");
        if (args && args.accessToken) {
          accessToken = `${args.accessToken}`;
          delete args.accessToken;
        }
        if (args && args.lang) {
          lang = `${args.lang}`;
          delete args.lang;
        }
        let apiUrl = `${url}${pathUrl}`;
        console.log("accessToken", accessToken);
        let apiHeader = {
          Authorization: accessToken,
          ...headers,
          Language: lang,
          "Content-Type": "application/json; charset=utf-8",
        };
        console.log("apiHeader", apiHeader);
        let apiBody = args;
        if (isSecurity) {
          apiUrl = url;
          const encrypt = Request.RequestEncrypt(
            pathUrl,
            method.toUpperCase(),
            method.toUpperCase() === "GET" ? "" : apiBody,
            apiHeader.Authorization || "",
            publicKey
          );
          apiHeader = { ...encrypt.headers, ...apiHeader };
          apiBody = encrypt.body;
          // console.log('\x1b[33m', '======BEGIN POST========', '\x1b[0m'); console.log({ uri: `${uri}${pathUrl}`, apiHeader, apiBody }); console.log({ apiUrl, apiHeader, apiBody });
        }
        const option = {
          method,
          url: apiUrl,
          headers: apiHeader,
        };
        console.log("option", option);
        if (method.toUpperCase() !== "GET") {
          option.data = apiBody;
        } else {
          option.params = apiBody;
        }
        const response = await axios(option);
        // console.log('response', response);
        // console.log('private key', priviteKey);
        if (isSecurity) {
          const httpResponse = response.headers;
          // console.log("httpResponse", httpResponse);
          const ketqua = Request.ResponseDecrypt(
            httpResponse["x-api-action"],
            method.toUpperCase(),
            httpResponse["x-api-client"],
            httpResponse["x-api-key"],
            response.data["x-api-message"],
            httpResponse["x-api-validate"],
            headers.Authorization || "",
            priviteKey
          );

          console.log("ketqua", ketqua);
          // console.log({ method, url, pathUrl, args, headers });
          // console.log("\x1b[32m", ketqua, "\x1b[0m");
          // console.log(
          //   "\x1b[33m",
          //   "============END decrypt==========",
          //   "\x1b[0m"
          // );
          // console.log("ketqua", ketqua);
          return resolve(ketqua);
        }
        resolve(response);
      } catch (error) {
        // if (error) console.log(error);
        console.log("error", error);
        resolve({
          code: -1001,
          data: { message: "Lỗi kết nối server, Vui lòng quay lại sau" },
        });
      }
    });
  },

  callAPIDownload(
    method,
    url,
    pathUrl,
    args,
    headers,
    isSecurity = false,
    publicKey = null,
    priviteKey = null,
    filedownload
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        let accessToken = "";
        let lang = "en";
        if (args && args.accessToken) {
          accessToken = `${args.accessToken}`;
          delete args.accessToken;
        }
        if (args && args.lang) {
          lang = `${args.lang}`;
          delete args.lang;
        }
        let apiUrl = `${url}${pathUrl}`;
        let apiHeader = {
          Authorization: accessToken,
          Language: lang,
          "Content-Type": "application/json; charset=utf-8",
        };
        let apiBody = args;
        if (isSecurity) {
          apiUrl = url;
          const encrypt = Request.RequestEncrypt(
            pathUrl,
            method.toUpperCase(),
            method.toUpperCase() === "GET" ? "" : apiBody,
            apiHeader.Authorization || "",
            publicKey
          );
          apiHeader = { ...encrypt.headers, ...apiHeader };
          apiBody = encrypt.body;
          // console.log('\x1b[33m', '======BEGIN POST========', '\x1b[0m'); console.log({ uri: `${uri}${pathUrl}`, apiHeader, apiBody }); console.log({ apiUrl, apiHeader, apiBody });
        }
        const option = {
          method,
          url: apiUrl,
          headers: apiHeader,
          responseType: "blob",
        };
        if (method.toUpperCase() !== "GET") {
          option.data = apiBody;
        }

        // const response =
        await axios(option).then((response) => {
          // console.log("response download file", response);
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", filedownload);
          document.body.appendChild(link);
          link.click();
        });

        return false;
      } catch (error) {
        console.log("error", error);
        resolve({
          code: -1001,
          data: { message: "Lỗi kết nối server, Vui lòng quay lại sau" },
        });
      }
    });
  },

  RequestEncrypt(pathUrl, method, payload, accessToken, publicKey) {
    const encryptKey = ShortId.generate();
    const key = new NodeRSA(publicKey);
    const xAPIKey = key.encrypt(encryptKey, "base64");
    let body = "";
    const xApiAction = CryptoJS.AES.encrypt(pathUrl, encryptKey).toString();
    let xApiMessage = "";
    if (payload) {
      xApiMessage = CryptoJS.AES.encrypt(
        JSON.stringify(payload),
        encryptKey
      ).toString();
    }
    const objValidate = {
      xApiAction,
      method,
      accessToken,
      "x-api-message": xApiMessage,
    };
    const xAPIValidate = md5(_.values(objValidate).join("") + encryptKey);
    body = {
      "x-api-message": xApiMessage,
    };
    const meAPIHeader = {
      "x-api-client": "app",
      "x-api-key": xAPIKey,
      "x-api-action": xApiAction,
      "x-api-validate": xAPIValidate,
    };
    console.log("meAPIHeader", meAPIHeader);
    if (accessToken !== "") {
      meAPIHeader.Authorization = accessToken;
    }
    return {
      body,
      headers: meAPIHeader,
    };
  },

  ResponseDecrypt(
    xAPIAction,
    method,
    xAPIClient,
    xAPIKey,
    xAPIMessage,
    xAPIValidate,
    accessToken
  ) {
    console.log(
      "🚀 ~ file: request.js ~ line 247 ~ ",
      // method,
      // xAPIClient
      // xAPIKey
      xAPIMessage
      // xAPIValidate,
      // accessToken
    );

    let encryptKey;
    try {
      const key = new NodeRSA(app.privateKey);
      encryptKey = key.decrypt(xAPIKey, "utf8");
    } catch (error) {
      throw new Error('Thông tin "x-api-key" không chính xác');
    }
    const objValidate = {
      "x-api-action": xAPIAction,
      method,
      accessToken,
      "x-api-message": xAPIMessage,
    };
    const validate = md5(_.values(objValidate).join("") + encryptKey);
    if (validate !== xAPIValidate) {
      throw new Error('Thông tin "x-api-validate" không chính xác');
    }
    let result = null;
    try {
      result = JSON.parse(
        CryptoJS.AES.decrypt(xAPIMessage, encryptKey).toString(
          CryptoJS.enc.Utf8
        )
      );
    } catch (error) {
      throw new Error('Thông tin "x-api-message" không chính xác');
    }
    return result;
  },
};

export default Request;
