import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from "./store";
import {addItemAction, changeInputAction, deleteItemAction} from "./store/actionCreators";
import TodoListUi from "./TodoListUI";
import axios from "axios";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        // 订阅模式
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <TodoListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                deleteItem={this.deleteItem}
                clickBtn={this.clickBtn}
            />
        )
    }
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5eb567bb88c1e91c7d5e7833/example/getList').then((res) => {
        })
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        console.log(`%c store改变了`, 'font-size: 16px; font-weight: bold;color:green',);
        this.setState(store.getState())
    }

    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;
