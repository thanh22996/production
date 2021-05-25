import * as types from "redux/actions";

const initialState = {
    bankName: {},
    listBankDeWd: []
}

export default function (state = initialState, action) {
    // console.log('action reducerrrrrrrrrr', action.type);
    switch (action.type) {
        case types.GET_DETECT_CARD_NUMBER_SUCCESS:
            // console.log('bankName', action.payload.bankInfoUser);
            return { ...state, bankName: action.payload.bankInfoUser }
        case types.GET_DETECT_CARD_NUMBER_FAIL:
            return { ...state }
        case types.GET_LIST_BANKS_SUCCESS:
            return { ...state, listBankDeWd: [...action.payload] }
        case types.GET_LIST_BANKS_FAIL:
            return { ...state }
        default:
            return state;
    }
}
