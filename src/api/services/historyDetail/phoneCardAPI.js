import makeRequest, { HTTP_METHOD } from 'core/apis/axios'
import { API_ENDPOINT } from 'core/apis/services/history/constants'

export const phoneCardAPI = {
  postCardTopup(args) {
    return makeRequest(
      '/Mobile/Topup/Request',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postCardTransactionSearch(args) {
    return makeRequest(
      '/Mobile/Card/Transaction/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
  postRefundMoneyTransactionSearch(args) {
    return makeRequest('/History/Search', API_ENDPOINT, HTTP_METHOD.POST, args)
  },
  putCardState(args) {
    const param = {
      accessToken: args.accessToken,
      env: args.env,
      state: args.state,
    }

    return makeRequest(`/Card/${args.serial}`, HTTP_METHOD.PUT, param)
  },
  postMobileTopupSearch(args) {
    return makeRequest(
      '/Mobile/Topup/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
}
