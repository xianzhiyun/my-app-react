import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM} from "./actionTypes";

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
