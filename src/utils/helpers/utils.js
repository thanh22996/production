import * as Images from "assets";
import { get, has, size } from "lodash";

import { SERVICE_CODE, errorCode, CARD_SERVICES } from "utils/constants";

const _ = { get, size, has };

export function checkError(status, message) {
  for (const key in errorCode) {
    const errors = errorCode[key];
    errors.forEach((error) => {
      if (status === error) {
        // eslint-disable-next-line
        throw {
          code: error,
          message,
        };
      }
    });
  }
}

export function showPassword() {
  const iconLock = document.querySelector("img.icon-lock");
  const iconUnLock = document.querySelector("img.icon-unlock");

  const password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
    iconLock.style.display = "none";
    iconUnLock.style.display = "block";
  } else {
    password.type = "password";
    iconLock.style.display = "block";
    iconUnLock.style.display = "none";
  }
}

export function formatPhone(phone, country = "84") {
  if (typeof country === "undefined") {
    country = "84";
  }
  let newPhone = phone
    ?.replace(/[^+0-9]/g, "")
    ?.replace(/^00/, "+")
    ?.replace(/^0/, "84");

  if (country === "84") {
    return newPhone?.replace(/^84/, "0");
  }
  return newPhone;
}

export function formatNumber(number) {
  if (!number) {
    number = 0;
  }
  number = parseInt(number)?.toFixed(0);
  return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function generateTag(state) {
  if (state === "PENDING" || state === "PROCESSING") {
    return "Đang xử lý";
  }
  if (state === "SUCCEEDED") {
    return "Thành Công";
  }
  if (state === "CANCELED") {
    return "Đã hủy";
  }
  if (state === "FAILED") {
    return "Thất bại";
  }
  if (state === "APPROVED") {
    return "Thành công";
  }
  if (state === "REJECTED") {
    return "Thất bại";
  }
}

export function getRequestPagination(queryString) {
  let limit = parseInt(queryString.limit || 0);
  limit = !isNaN(limit) && limit > 0 ? limit : null;

  let start = parseInt(queryString.start || 0);
  start = !isNaN(start) && start > 0 ? start : null;

  let page = 1 + start / limit;

  const totalPage = Math.ceil(queryString.amount / queryString.limit);

  return { totalPage, page };
}

export function getPayReceiveText(method) {
  if (method === "PAYME") {
    return "Ví PayME";
  }
  if (
    method === "LINKED_BANK" ||
    method === "LINKED_GATEWAY" ||
    method === "LINKED_BANK_GATEWAY" ||
    method === "LINKED_BANK_PVCBANK"
  ) {
    return "Tài khoản liên kết";
  }
  if (method === "GATEWAY" || method === "NAPAS_BANK") {
    return "Thẻ ATM nội địa";
  }
  return "Tài khoản ngân hàng";
}

export function getSupplier(supplierName) {
  for (const key in CARD_SERVICES) {
    if (CARD_SERVICES.hasOwnProperty(key)) {
      if (key === supplierName) {
        return CARD_SERVICES[key];
      }
    }
  }
}

export function getBankName(swiftCode, bankItems) {
  let bankName = "";
  bankItems?.forEach((bankItem) => {
    if (swiftCode === bankItem.swiftCode) {
      bankName = bankItem.shortName;
    }
  });
  return bankName;
}

export function getIcon(data, type) {
  let serviceCode = "";
  let changed = "";
  let isSalaryType = false;
  if (type === "Notification") {
    serviceCode =
      _.get(data, "extracodeData.service.", "") !== ""
        ? _.get(data, "extraData.service.code", "")
        : _.get(data, "extraData.service", "");
    changed = _.get(data, "extraData.changed", "");
  }

  if (type === "History") {
    serviceCode = data.serviceCode;
    changed = _.get(data, "changed", "");
    const tags = _.get(data, "tags", "");
    isSalaryType = Array.isArray(tags)
      ? tags.filter((tag) => tag === "SALARY").length > 0
      : false;
  }

  if (
    serviceCode === SERVICE_CODE.DEPOSIT_PVCBANK ||
    serviceCode === SERVICE_CODE.DEPOSIT
  ) {
    return Images.rechargeIcon;
  }

  if (serviceCode === SERVICE_CODE.ADD_MONEY) {
    if (isSalaryType) {
      return Images.receiveMoneyIcon;
    }
    return Images.rechargeIcon;
  }

  if (serviceCode === SERVICE_CODE.SALARY) {
    // notify only
    return Images.receiveMoneyIcon;
  }

  if (
    serviceCode === SERVICE_CODE.SOCIAL_PAYME_RECEIVE_MONEY ||
    serviceCode === SERVICE_CODE.SOCIAL_SEND_MONEY_LINK_RECIPIANT ||
    serviceCode === SERVICE_CODE.SOCIAL_NAPAS_RECEIVE_MONEY ||
    serviceCode === SERVICE_CODE.SOCIAL_PAYMENT_PAYME_RECEIVE_MONEY
  ) {
    return Images.receiveMoneyIcon;
  }

  if (serviceCode === SERVICE_CODE.ISEC_REDEEM) {
    if (changed === "+") {
      // Nạp iSec
      return Images.receiveMoneyIcon;
    }
    return Images.billIsecIcon; // Người khác nạp iSec của mình
  }

  if (
    serviceCode === SERVICE_CODE.SOCIAL_DONATE_MONEY_LINK ||
    serviceCode === SERVICE_CODE.SOCIAL_PAYMENT_DONATE_MONEY_LINK ||
    serviceCode === SERVICE_CODE.SOCIAL_REQUEST_MONEY_LINK_EXPIRED
  ) {
    return Images.receiveMoneyIcon;
  }

  if (serviceCode === SERVICE_CODE.SOCIAL_REQUEST_MONEY_LINK) {
    if (changed === "+") {
      return Images.receiveMoneyIcon;
    }
    return Images.errIcon;
  }

  if (serviceCode === SERVICE_CODE.SOCIAL_PAYMENT_REQUEST_MONEY_LINK) {
    return Images.receiveMoneyIcon;
  }

  if (
    serviceCode === SERVICE_CODE.SOCIAL_SEND_MONEY_LINK ||
    serviceCode === SERVICE_CODE.SOCIAL_PAYMENT_SEND_MONEY_LINK ||
    serviceCode === SERVICE_CODE.SOCIAL_PAYMENT_SEND_MONEY
  ) {
    return Images.sendPaymentIcon;
  }

  if (
    serviceCode === SERVICE_CODE.SOCIAL_SEND_MONEY ||
    serviceCode === SERVICE_CODE.SOCIAL_DONATE_MONEY ||
    serviceCode === SERVICE_CODE.SOCIAL_PAYMENT_DONATE_MONEY
  ) {
    return Images.sendPaymentIcon;
  }

  if (
    serviceCode === SERVICE_CODE.WITHDRAW_BANK_GATEWAY ||
    serviceCode === SERVICE_CODE.WITHDRAW_BANK_LINKED_PVCBANK ||
    serviceCode === SERVICE_CODE.WITHDRAW_BANK_LINKED_GATEWAY
  ) {
    if (
      data?.transactionType === "TRANSFER" ||
      data?.extraData?.transactionType === "TRANSFER"
    ) {
      return Images.paymeSendMoneyIcon;
    }
    return Images.withdrawalIcon;
  }

  if (serviceCode === SERVICE_CODE.MOBILE_CARD) {
    return Images.buyCodeCardIcon;
  }
  if (serviceCode === SERVICE_CODE.MOBILE_TOPUP) {
    return Images.depositIcon;
  }

  if (
    serviceCode === SERVICE_CODE.ISEC ||
    serviceCode === SERVICE_CODE.ISEC_BULK ||
    serviceCode === SERVICE_CODE.ISEC_SAVE ||
    serviceCode === SERVICE_CODE.ISEC_SCRATCH ||
    serviceCode === SERVICE_CODE.ISEC_SEND ||
    serviceCode === SERVICE_CODE.ISEC_RECEIVED ||
    serviceCode === SERVICE_CODE.ISEC_DONATED
  ) {
    return Images.billIsecIcon;
  }

  // if (serviceCode === SERVICE_CODE.REFUND_MONEY) {
  //   return Images.refundIcon;
  // }

  if (
    serviceCode === SERVICE_CODE.CASHBACK ||
    serviceCode === SERVICE_CODE.CASHBACK_BUYCARD ||
    serviceCode === SERVICE_CODE.CASHBACK_TOPUP ||
    serviceCode === SERVICE_CODE.REFUND_MONEY ||
    serviceCode === SERVICE_CODE.CANCEL_ISEC
  ) {
    return Images.refundIcon;
  }

  if (serviceCode === SERVICE_CODE.DEPOSIT_BANK_MANUAL) {
    return Images.depositIcon;
  }

  if (serviceCode === SERVICE_CODE.WITHDRAW_BANK_MANUAL) {
    return Images.withdrawalIcon;
  }

  if (serviceCode === SERVICE_CODE.BILL) {
    return Images.billIcon;
  }

  if (
    serviceCode === SERVICE_CODE.KYC_APPROVED ||
    serviceCode === SERVICE_CODE.KYC_REJECTED
  ) {
    return Images.errIcon;
  }

  if (serviceCode === SERVICE_CODE.TRANSFER_PAYME) {
    if (changed === "+") {
      return Images.receiveMoneyIcon;
    }
    return Images.paymeSendMoneyIcon;
  }

  if (serviceCode === SERVICE_CODE.LOGIN_TRUST_DEVICE) {
    // System icon
    return Images.errIcon;
  }

  return Images.errIcon;
}
