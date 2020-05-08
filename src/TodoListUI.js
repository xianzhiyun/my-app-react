import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

class TodoListUi extends Component {
    render() {
        return (
            <Fragment>
                <div style={{padding: '10px'}}>
                    <div>
                        <Input
                            style={{width: '300px', marginRight: '20px'}}
                            value={this.props.inputValue}
                            onChange={this.props.changeInputValue}/>
                        <Button
                            onClick={this.props.clickBtn}
                            type="primary"
                        >添加的</Button>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <List
                            bordered
                            dataSource={this.props.list}
                            renderItem={(item, index) => (
                                <List.Item
                                    onClick={() => {
                                        this.props.deleteItem(index)
                                    }}
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
}

export default TodoListUi;
