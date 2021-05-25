import makeRequest, { HTTP_METHOD } from 'core/apis/axios'
import { API_ENDPOINT } from 'core/apis/services/history/constants'

export const moneyTransferAPI = {
  /* API tạo link */
  postSocialSendMoneyLinkGenerate(args) {
    return makeRequest(
      '/Social/SendMoney/Link/Generate',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postSocialRequestMoneyLinkGenerate(args) {
    return makeRequest(
      '/Social/RequestMoney/Link/Generate',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* API hứng link */
  postSocialReceiveMoneyEwalletPayMeApp(args) {
    return makeRequest(
      '/Social/SendMoney/ReceiceMoney/Payme',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postSocialSendMoneyEWalletPaymeApp(args) {
    return makeRequest(
      '/Social/SendMoney/Ewallet/Payme',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* API lấy DS PTTT hỗ trợ Request Link */
  postSocialRequestMoneyRequestPay(args) {
    return makeRequest(
      '/Social/SocialLink/RequestMoney/RequestPay',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* Donate Money */
  postSocialDonateMoneyLinkInformation(args) {
    return makeRequest(
      '/Social/SocialLink/DonateMoney/Information',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* API chi tiết giao dịch */

  // search theo token
  postSocialRequestMoneyLinkInformation(args) {
    return makeRequest(
      '/Social/SocialLink/RequestMoney/Information',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postSocialReceiveMoneyLinkInformation(args) {
    return makeRequest(
      '/Social/SocialLink/SendMoney/Information',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  // search theo id
  postSocialLinkSearch(args) {
    return makeRequest(
      '/Social/Link/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  postSocialTransactionSearch(args) {
    return makeRequest(
      '/Social/SocialTransaction/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postSocialTransaction(args) {
    return makeRequest(
      '/Social/Transaction/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  deleteSocialRequestMoneyLink(args) {
    return makeRequest(
      '/Social/RequestMoney/Link',
      API_ENDPOINT,
      HTTP_METHOD.DELETE,
      args
    )
  },
  deleteSocialSendMoneyLink(args) {
    return makeRequest(
      '/Social/SendMoney/Link',
      API_ENDPOINT,
      HTTP_METHOD.DELETE,
      args
    )
  },

  /* API Lấy danh sách setting cho các chức năng */

  // nhận link nhận tiền nhưng chưa login
  postAccountSendActiveCode(args) {
    return makeRequest(
      '/Account/Login/SendActiveCode',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  postAccountLoginByOTP(args) {
    return makeRequest(
      '/Account/LoginByOTP',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  postWithdrawRequestSocialSendMoney(args) {
    return makeRequest(
      '/Transfer/Request/SocialPayment/SendMoney',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  postWithdrawPayme(args) {
    return makeRequest('/Transfer/Payme', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  /* API chuyển tiền đến ví payme */

  postTransferPaymeRequest(args) {
    return makeRequest(
      '/TransferPayme/Request',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postTransferPaymeSearch(args) {
    return makeRequest(
      '/TransferPayme/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  // nạp tiền, chuyển lương
  postAddMoneySearch(args) {
    return makeRequest('/AddMoney/Search', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  /* API detectLink */
  // API detect linkType
  postDetectLink(args) {
    return makeRequest(
      '/Social/Link/DetectLink',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
}
