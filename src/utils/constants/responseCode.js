export const httpResponseCode = {
  SYSTEM_ERROR: 500,
  INVALID_PARAMS: 400,
  INVALID_TOKEN: 401,
  REQUIRED_UPDATE: 402,
  REQUEST_SUCCESS: 1000,
  REQUEST_FAIL: 1001,
  REQUEST_REFUSED: 1002,
  USER_BALANCE_NOT_ENOUGH: 1003,
  WAITING_SECURITY_CODE: 1004,
  RETRY_TIMES_OVER: 1005,
  USER_NOT_KYC: 1006,
  OVER_LIMIT_AMOUNT: 1007,
  INVALID_OTP: 1008,
  LINKED_GATEWAY_RECALLIPN: 1009,
  LOGIN_REQUIRE_VERIFY_OTP: 1011,
  ISEC: {
    USED: 2001,
    NOT_EXISTS: 2002,
    LOCKED: 2003,
    USER_BLOCKED_SCRATCH: 2004,
    NONE_SCOPE_SCRATCH: 2005,
  },
  SOCIAL_LINK: {
    USER_NOT_KYC: 3001,
    LINK_HAD_RECEPIENT: 3002,
    LINK_EXPIRED: 3003,
    PASSWORD_REQUIRED: 3004,
    PASSWORD_INVALID: 3005,
    PASSWORD_RETRY_TIMES_OVER: 3006,
    USER_NOT_FOUND: 3007,
  },
  MANUAL_BANK: {
    WAITING_TRANSACTION: 4001, // chờ ghi nhận GD chuyển tiền
  },
  PROFILE: {
    ALIAS: {
      INVALID_REQUIRED_DAY: 5001,
      HAS_EXISTED: 5002,
      OVER_CREATE_LIMIT: 5003,
    },
  },
}
