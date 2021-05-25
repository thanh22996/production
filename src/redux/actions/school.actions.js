import * as types from "redux/types/school.types";

export function getListSchools(data, callback) {
  return {
    type: types.GET_LIST_SCHOOL,
    payload: data,
    callback,
  };
}
