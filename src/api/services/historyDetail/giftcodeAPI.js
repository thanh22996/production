import makeRequest, { HTTP_METHOD } from 'core/apis/axios'
import { API_ENDPOINT } from 'core/apis/services/history/constants'

export const giftcodeAPI = {
  postGiftcodeBulk(args) {
    return makeRequest('/ISec/Bulk', API_ENDPOINT, HTTP_METHOD.POST, args)
  },

  postGiftcodeSave(args) {
    return makeRequest('/ISec/Save', API_ENDPOINT, HTTP_METHOD.POST, args) // tested new api v1
  },

  postGiftcodeScratch(args) {
    return makeRequest('/ISec/Redeem', API_ENDPOINT, HTTP_METHOD.POST, args) // tested new api v1
  },

  postGiftcodeSearch(args) {
    return makeRequest('/ISec/Search', API_ENDPOINT, HTTP_METHOD.POST, args) // tested new api v1
  },

  postGiftcodeTransfer(args) {
    return makeRequest('/ISec/Transfer', API_ENDPOINT, HTTP_METHOD.POST, args) // tested new api v1
  },

  postGiftcodeScratchInformation(args) {
    return makeRequest(
      '/ISec/Redeem/Information',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },

  postGiftcodeTransferInformation(args) {
    return makeRequest(
      '/ISec/Transfer/Information',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    ) // tested new api v1
  },

  /* API lấy CHI TIẾT GIAO DỊCH */
  postIsecDepositSearch(args) {
    return makeRequest(
      '/ISec/Deposit/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    ) // tested new api v1
  },

  postIsecBulkIdSearch(args) {
    return makeRequest(
      '/ISec/Bulk/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      args
    )
  },
}
