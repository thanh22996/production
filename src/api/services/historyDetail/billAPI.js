import makeRequest, { HTTP_METHOD } from 'core/apis/axios'
import { API_ENDPOINT } from 'core/apis/services/history/constants'

export const billAPI = {
  // General
  postBillCustomerSearch(args) {
    return makeRequest(
      '/Bill/Customer/Search',
      API_ENDPOINT,
      HTTP_METHOD.POST,
      {
        ...args,
      }
    )
  },

  postBillTypeSearch(args) {
    return makeRequest('/Bill/Type/Search', API_ENDPOINT, HTTP_METHOD.POST, {
      ...args,
    })
  },

  // Service
  postBillInformation(args) {
    return makeRequest('/Bill/Information', API_ENDPOINT, HTTP_METHOD.POST, {
      ...args,
    })
  },

  postBillTuitionSearch(args) {
    return makeRequest('/Tuition/Search', API_ENDPOINT, HTTP_METHOD.POST, {
      ...args,
    })
  },

  postBillSearch(args) {
    return makeRequest('/Bill/Search', API_ENDPOINT, HTTP_METHOD.POST, {
      ...args,
    })
  },

  deleteBill(args) {
    return makeRequest('/Bill', API_ENDPOINT, HTTP_METHOD.DELETE, { ...args })
  },

  // Recent contact
  postRecentContacts(args) {
    return makeRequest('/Mobile/Contacts', API_ENDPOINT, HTTP_METHOD.POST, {
      ...args,
    })
  },

  getRecentContacts(args) {
    return makeRequest('/Mobile/Contacts', API_ENDPOINT, HTTP_METHOD.GET, {
      ...args,
    })
  },

  deleteRecentContacts(args) {
    return makeRequest('/Mobile/Contacts', API_ENDPOINT, HTTP_METHOD.DELETE, {
      ...args,
    })
  },
}
