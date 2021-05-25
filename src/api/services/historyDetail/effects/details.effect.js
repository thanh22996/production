import {
  billAPI,
  giftcodeAPI,
  moneyTransferAPI,
  paymentAPI,
  moneyTransferAPI_v1,
  phoneCardAPI,
} from '../../historyDetail'

import { historyDetailConstants } from 'utils/constants'

class DetailsEffect {
  async getDetailTransaction(history) {
    try {
      if (history) {
        const transaction = history?.transaction ?? ''
        const id = history?.serviceId ?? ''
        const type = (history?.changed ?? '') === '-' ? 'SEND' : 'RECEIVE'
        const serviceCode = history?.serviceCode
        const tags = history?.tags ?? ''

        const responseExtraDetail = await (async () => {
          if (historyDetailConstants.DEPOSIT.includes(serviceCode)) {
            return await this.getDepositDetailTransaction(transaction)
          }

          if (historyDetailConstants.WITHDRAW.includes(serviceCode)) {
            return await this.getWithdrawDetailTransaction(transaction)
          }

          if (
            historyDetailConstants.SOCIAL_PAYMENT_SEND_MONEY_LINK.includes(
              serviceCode
            )
          ) {
            return await this.getSocialSendMoneyLinkDetailTransaction(
              transaction
            )
          }

          if (
            historyDetailConstants.SOCIAL_SEND_MONEY_LINK_V1.includes(
              serviceCode
            )
          ) {
            return await this.getSocialSendMoneyLinkDetailTransactionV1(
              transaction
            )
          }

          if (
            historyDetailConstants.SOCIAL_RECEIVE_MONEY.includes(serviceCode)
          ) {
            return await this.getSocialReceiveMoneyDetailTransaction(
              id,
              transaction
            )
          }

          if (
            historyDetailConstants.SOCIAL_RECEIVE_MONEY_V1.includes(serviceCode)
          ) {
            return await this.getSocialReceiveMoneyDetailTransactionV1(
              id,
              transaction
            )
          }

          if (
            historyDetailConstants.SOCIAL_PAYMENT_REQUEST_MONEY_LINK.includes(
              serviceCode
            )
          ) {
            return await this.getSocialRequestMoneyLinkDetailTransaction(id)
          }

          if (
            historyDetailConstants.SOCIAL_REQUEST_MONEY_LINK_V1.includes(
              serviceCode
            )
          ) {
            return await this.getSocialRequestMoneyLinkDetailTransactionV1(id)
          }

          if (historyDetailConstants.ISEC.includes(serviceCode)) {
            return await this.getIsecDetailTransaction(id)
          }

          if (historyDetailConstants.ISEC_REDEEM.includes(serviceCode)) {
            return await this.getIsecRedeemDetailTransaction(id)
          }

          if (historyDetailConstants.ISEC_BULK.includes(serviceCode)) {
            return await this.getIsecBulkDetailTransaction(transaction)
          }

          if (historyDetailConstants.BILL.includes(serviceCode)) {
            if (tags.includes('BILL_TUITION')) {
              return await this.getTuitionSearch(transaction)
            }
            return await this.getBillDetailTransaction(transaction)
          }

          if (historyDetailConstants.MOBILE_TOPUP.includes(serviceCode)) {
            return await this.getMobileTopupDetailTransaction(id)
          }

          if (historyDetailConstants.MOBILE_CARD.includes(serviceCode)) {
            return await this.getMobileCardDetailTransaction(id)
          }

          if (historyDetailConstants.REFUND_MONEY.includes(serviceCode)) {
            return await this.getMobileRefundMoneyDetailTransaction(
              id,
              serviceCode
            )
          }

          if (historyDetailConstants.CASHBACK.includes(serviceCode)) {
            return await this.getMobileRefundMoneyDetailTransaction(
              id,
              serviceCode
            );
          }

          if (historyDetailConstants.SOCIAL_DONATE.includes(serviceCode)) {
            return await this.getSocialDonateDetailTransaction(transaction)
          }

          if (historyDetailConstants.SOCIAL_DONATE_V1.includes(serviceCode)) {
            return await this.getSocialDonateDetailTransaction_V1(transaction)
          }

          if (historyDetailConstants.TRANSFER_PAYME.includes(serviceCode)) {
            return await this.getTransferPaymeDetailTransaction(
              transaction,
              type
            )
          }

          if (historyDetailConstants.ADD_MONEY.includes(serviceCode)) {
            return await this.getAddMoneyDetailTransaction(transaction)
          }
        })()
        return responseExtraDetail
      }
    } catch (e) {
      console.log('Error at getDetailTransaction', e.message)
    }
  }

  async getDepositDetailTransaction(transaction) {
    try {
      const responseDetail = await paymentAPI.depositSearch({
        filter: {
          transaction: transaction,
        },
        paging: {
          start: 0,
          limit: 100,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getDepositDetailTransaction', e.message)
    }
  }

  async getWithdrawDetailTransaction(transaction) {
    try {
      const responseDetail = await paymentAPI.transferSearch({
        filter: {
          transaction: transaction,
        },
        paging: {
          start: 0,
          limit: 1,
        },
        sort: {},
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getWithdrawDetailTransaction', e.message)
    }
  }

  async getSocialSendMoneyLinkDetailTransaction(transaction) {
    try {
      const responseDetail = await moneyTransferAPI.postSocialReceiveMoneyLinkInformation(
        { transaction }
      )
      return responseDetail
    } catch (e) {
      console.log('Error at getSocialSendMoneyLinkDetailTransaction', e.message)
    }
  }

  async getSocialSendMoneyLinkDetailTransactionV1(transaction) {
    try {
      const responseDetail = await moneyTransferAPI_v1.postSocialReceiveMoneyLinkInformation(
        { transaction }
      )
      return responseDetail
    } catch (e) {
      console.log(
        'Error at getSocialSendMoneyLinkDetailTransactionV1',
        e.message
      )
    }
  }

  async getSocialReceiveMoneyDetailTransaction(id, transaction) {
    try {
      const responseOptions = await moneyTransferAPI.postSocialTransactionSearch(
        {
          filter: {
            transaction: transaction,
            id: id,
          },
          paging: {
            start: 0,
            limit: 1,
          },
        }
      )
      return responseOptions
    } catch (e) {
      console.log('Error at getSocialReceiveMoneyDetailTransaction', e.message)
    }
  }

  async getSocialReceiveMoneyDetailTransactionV1(id, transaction) {
    try {
      const responseOptions = await moneyTransferAPI.postSocialTransaction({
        filter: {
          transaction: transaction,
          id: id,
        },
        paging: {
          start: 0,
          limit: 1,
        },
      })
      // }
      return responseOptions
    } catch (e) {
      console.log('Error at getSocialReceiveMoneyDetailTransaction', e.message)
    }
  }

  async getSocialRequestMoneyLinkDetailTransaction(id) {
    try {
      const responseDetail = await moneyTransferAPI.postSocialTransactionSearch(
        {
          filter: {
            id: id,
          },
          paging: {
            start: 0,
            limit: 1,
          },
        }
      )
      return responseDetail
    } catch (e) {
      console.log('Error at getIsecDetailTransaction', e.message)
    }
  }

  async getSocialRequestMoneyLinkDetailTransactionV1(id) {
    try {
      const responseDetail = await moneyTransferAPI_v1.postSocialLinkSearch({
        id,
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getIsecDetailTransaction', e.message)
    }
  }

  async getIsecDetailTransaction(iSecId) {
    try {
      const responseDetail = await giftcodeAPI.postGiftcodeSearch({
        filter: {
          iSecId: iSecId,
        },
        paging: {
          start: 0,
          limit: 1,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getIsecDetailTransaction', e.message)
    }
  }

  async getIsecRedeemDetailTransaction(id) {
    try {
      const responseDetail = await giftcodeAPI.postIsecDepositSearch({
        filter: {
          id: id,
        },
        paging: {
          start: 0,
          limit: 1,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getIsecRedeemDetailTransaction', e.message)
    }
  }

  async getIsecBulkDetailTransaction(bulkId) {
    try {
      const responseDetail = await giftcodeAPI.postIsecBulkIdSearch({ bulkId })
      return responseDetail
    } catch (e) {
      console.log('Error at getIsecBulkDetailTransaction', e.message)
    }
  }
  async getTuitionSearch(transaction) {
    try {
      const responseDetail = await billAPI.postBillTuitionSearch({
        filter: {
          transaction: transaction,
        },
        paging: {
          start: 0,
          limit: 1,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getBillDetailTransaction', e.message)
    }
  }

  async getBillDetailTransaction(transaction) {
    try {
      const responseDetail = await billAPI.postBillSearch({
        filter: {
          transaction: transaction,
        },
        paging: {
          start: 0,
          limit: 1,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getBillDetailTransaction', e.message)
    }
  }

  async getMobileTopupDetailTransaction(id) {
    try {
      const responseDetail = await phoneCardAPI.postMobileTopupSearch({
        filter: {
          id: id,
        },
        paging: {
          start: 0,
          limit: 10,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getBillDetailTransaction', e.message)
    }
  }

  async getMobileCardDetailTransaction(id) {
    try {
      const responseDetail = await phoneCardAPI.postCardTransactionSearch({
        filter: {
          id: id,
        },
        paging: {
          start: 0,
          limit: 1,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getMobileCardDetailTransaction', e.message)
    }
  }

  async getMobileRefundMoneyDetailTransaction(id, serviceCode) {
    try {
      const responseDetail = await phoneCardAPI.postRefundMoneyTransactionSearch(
        {
          filter: {
            serviceId: id,
            serviceCode: serviceCode,
          },
          paging: {
            start: 0,
            limit: 1,
          },
        }
      )

      return responseDetail
    } catch (e) {
      console.log('Error at getMobileCardDetailTransaction', e.message)
    }
  }

  async getSocialDonateDetailTransaction(transaction) {
    try {
      const responseDetail = await moneyTransferAPI.postSocialDonateMoneyLinkInformation(
        { transaction }
      )
      return responseDetail
    } catch (e) {
      console.log('Error at getSocialDonateDetailTransaction', e.message)
    }
  }

  async getSocialDonateDetailTransaction_V1(transaction) {
    try {
      const responseDetail = await moneyTransferAPI_v1.postSocialDonateMoneyLinkInformation(
        { transaction }
      )
      return responseDetail
    } catch (e) {
      console.log('Error at getSocialDonateDetailTransaction', e.message)
    }
  }

  async getTransferPaymeDetailTransaction(transaction, type) {
    try {
      const responseDetail = await moneyTransferAPI.postTransferPaymeSearch({
        filter: {
          transaction: transaction,
          type: type,
        },
        paging: {
          start: 0,
          limit: 100,
        },
        sort: {},
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getTransferPaymeDetailTransaction', e.message)
    }
  }

  async getAddMoneyDetailTransaction(transaction) {
    try {
      const responseDetail = await moneyTransferAPI.postAddMoneySearch({
        filter: {
          transaction,
        },
        paging: {
          start: 0,
          limit: 1,
        },
      })
      return responseDetail
    } catch (e) {
      console.log('Error at getTransferPaymeDetailTransaction', e.message)
    }
  }
}

export const detailsEffect = new DetailsEffect()
