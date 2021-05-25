import makeRequest, { HTTP_METHOD } from 'core/apis/axios'
import { API_ENDPOINT } from 'core/apis/services/history/constants'

export const paymentAPI = {
  /* Request phát hành iSec */
  iSecRequest(args) {
    return makeRequest('/ISec/Request', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  /* Request Nạp tiền vào ví */
  depositRequest(args) {
    return makeRequest('/Deposit/Request', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  depositSearch(args) {
    return makeRequest('/Deposit/Search', API_ENDPOINT, HTTP_METHOD.POST, args)
  },
  // Withdraw search
  transferSearch(args) {
    return makeRequest('/Transfer/Search', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  /* Request Mua thẻ điện thoại */
  mobileCardRequest(args) {
    return makeRequest(
      '/Mobile/Card/Request',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* Request Nạp tiền điện thoại */
  mobileTopupRequest(args) {
    return makeRequest(
      '/Mobile/Topup/Request',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* Request Thanh toán hoa đơn */
  billRequest(args) {
    return makeRequest('/Bill/Request', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  /* Request Thanh toán request link */
  requestLinkRequest(args) {
    return makeRequest(
      '/Social/SocialLink/RequestMoney/RequestPay',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  requestLinkRequest_v1(args) {
    return makeRequest(
      '/Social/RequestMoney/RequestPay',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* Donate Request Link */
  postSocialDonateMoneyRequestPay(args) {
    return makeRequest(
      '/Social/SocialLink/DonateMoney/RequestPay',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  /* Request Thanh toán request link */
  withdrawRequest(args) {
    return makeRequest(
      '/Transfer/Request/Payme',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  // Lấy thông tin các phương thức thanh toán - Từ key của phương thức thanh toán
  postPaymentMethod(args) {
    return makeRequest('/Payment/Method', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  postTransferMethod(args) {
    return makeRequest('/Transfer/Method', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  // API động thanh toán
  postPaymentRun(args) {
    const url = args.apiUrl

    if (args && args.apiUrl) {
      delete args.apiUrl
    }
    return makeRequest(url || '--', args)
  },

  postRecentCardSearch(args) {
    return makeRequest(
      '/RecentCard/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  deleteRecentCard(args) {
    return makeRequest(
      'delete',
      '/RecentCard',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postPaymentPayme(args) {
    return makeRequest('/Payment/Payme', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  /* Request Thanh toán học phí */
  postTuitionRequest(args) {
    return makeRequest('/Tuition/Request', API_ENDPOINT, HTTP_METHOD.POST, args)
  },
}
