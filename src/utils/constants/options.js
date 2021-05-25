import dayjs from "dayjs";

export const TRANSACTION_TIME = [
  { value: "week", label: "7 ngày gần nhất" },
  { value: "one_month", label: "1 tháng gần đây nhất" },
  { value: "three_month", label: "3 tháng gần đây nhất" },
  { value: "custom", label: "Tùy chọn" },
];

export const DATE_OPTION = {
  week: {
    from: dayjs(new Date().setDate(new Date().getDate() - 7)).toJSON(),
    to: dayjs(new Date()).toJSON(),
  },
  one_month: {
    from: dayjs(new Date().setDate(new Date().getDate() - 30)).toJSON(),
    to: dayjs(new Date()).toJSON(),
  },
  three_month: {
    from: dayjs(new Date().setMonth(new Date().getMonth() - 3)).toJSON(),
    to: dayjs(new Date()).toJSON(),
  },
  custom: 0,
};

export const TRANSACTION_TYPE = [
  { value: "deposit", label: "Nạp" },
  { value: "withdraw", label: "Rút" },
  { value: "paymen_send", label: "Chuyển ngân hàng" },
  { value: "transfer", label: "Chuyển ví" },
  { value: "bill", label: "TT Dịch Vụ" },
  { value: "refund", label: "Hoàn Tiền" },
];
