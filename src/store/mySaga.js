import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from "./actionTypes";
import axios from "axios";
import {getListAction} from "./actionCreators";

// generator 函数
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    const res=  yield axios.get('https://www.easy-mock.com/mock/5eb567bb88c1e91c7d5e7833/example/getList')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga
