import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST} from "./actionTypes";
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = (value) => ({
    type: ADD_ITEM
})
export const deleteItemAction = (value) => ({
    type: DELETE_ITEM,
    index:value
})
export const getListAction = (value) => ({
    type: GET_LIST,
    data:value
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5eb567bb88c1e91c7d5e7833/example/getList').then((res) => {
            const data=res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}
