import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {addItemAction, changeInputAction, deleteItemAction} from "./store/actionCreators";
import TodoListUi from "./TodoListUI";
import {connect} from "react-redux";

class TodoList extends Component {
    render() {
        let {list, inputValue, changeInputValue, deleteItem, clickBtn} = this.props
        return (
            <TodoListUi
                inputValue={inputValue}
                list={list}
                changeInputValue={changeInputValue}
                deleteItem={deleteItem}
                clickBtn={clickBtn}
            />
        )
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeInputAction(e.target.value)
            dispatch(action)
        },
        clickBtn() {
            const action = addItemAction()
            dispatch(action)
        },
        deleteItem(index) {
            const action = deleteItemAction(index)
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);
