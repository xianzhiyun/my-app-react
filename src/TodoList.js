import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from "./store";
import {addItemAction, changeInputAction, deleteItemAction} from "./store/actionCreators";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        // 订阅模式
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <Fragment>
                <div style={{padding: '10px'}}>
                    <div>
                        <Input
                            style={{width: '300px', marginRight: '20px'}}
                            value={this.state.inputValue}
                            onChange={this.changeInputValue}/>
                        <Button
                            onClick={this.clickBtn}
                            type="primary"
                        >Primary</Button>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item, index) => (
                                <List.Item
                                    onClick={this.deleteItem.bind(this, index)}
                                >
                                    {item}
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </Fragment>
        )
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
