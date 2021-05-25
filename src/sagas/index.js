import { all, fork, call, delay, put, take, takeLatest } from "redux-saga/effects";
import * as school from './Register-Busniess/index'
const arrFork = [];
for (let key in school) {
    arrFork.push(fork(school[key]))
}


function* rootSaga() {
    yield all(arrFork);
}
export default rootSaga;