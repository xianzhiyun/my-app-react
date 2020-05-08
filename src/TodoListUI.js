import React, {Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

function TodoListUi(props) {
    return (
        <Fragment>
            <div style={{padding: '10px'}}>
                <div>
                    <Input
                        style={{width: '300px', marginRight: '20px'}}
                        value={props.inputValue}
                        onChange={props.changeInputValue}/>
                    <Button
                        onClick={props.clickBtn}
                        type="primary"
                    >添加的</Button>
                </div>
                <div style={{marginTop: '10px'}}>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={() => {
                                    props.deleteItem(index)
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

export default TodoListUi;
