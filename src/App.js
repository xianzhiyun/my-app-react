import React, {Component, Fragment} from 'react';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
    //在某一个时间自动自行函数
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '张乐',
            list: ['h', 'e']
        }
    }

    componentWillMount() {
        // console.log(`%c componentWillMount-----组件将要挂载页面时刻`, 'font-size: 16px; font-weight: bold;color:green');
    }

    componentDidMount() {
        // console.log(`%c componentDidMount-----组件将要挂载页面时刻`, 'font-size: 16px; font-weight: bold;color:green');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
    }

    render() {
        // console.log(`%c render`, 'font-size: 16px; font-weight: bold;color:green',);
        return (
            <Fragment>
                {/*<div>
                    <label htmlFor="addi-input">增加服务</label>
                    <input
                        id="addi-input"
                        className="add-input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => {
                            this.input = input
                        }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>*/}
                {/*<ul ref={(url) => {
                    this.url = url
                }}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                // <li
                                //     onClick={this.deleteItem.bind(this, index)}
                                //     key={item + index}
                                //     dangerouslySetInnerHTML={{__html: item}}
                                // >
                                // </li>
                                <AddItem
                                    key={item+index}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}/>
                            )
                        })
                    }
                </ul>*/}
                <TodoList/>
            </Fragment>
        )
    }

    inputChange(e) {
        // console.log(e.target.value)
        // this.state.inputValue = e.target.value
        // this.setState({
        //     inputValue: e.target.value
        // })
        this.setState({
            inputValue: this.input.value
        })

    }

    addList() {
        console.log(this)
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.url.querySelectorAll('li').length)
        })
    }

    // 删除某一项
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default App;
