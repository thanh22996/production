import { combineReducers } from "redux";
import schoolReducer from "redux/reducers/school.reducers";
import auth from "redux/reducers/authReducer";
import clientInfo from "redux/reducers/clientInforReducer";
import history from "redux/reducers/historyReducer";
import users from "redux/reducers/userInfoReducer";
import bankName from "redux/reducers/bankNameReducer";
import getBankName from "redux/reducers/getBankNameReducer";
import register from "redux/reducers/registerReducer";

// import student
const rootReducer = combineReducers({
  schoolReducer,
  auth,
  clientInfo,
  history,
  users,
  bankName,
  getBankName,
  register
});

export default rootReducer;