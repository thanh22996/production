import * as types from './index'

export const getUserInfoAction = (users) => {
  return {
    type: types.GET_USER_INFORMATION,
    users,
  }
}
