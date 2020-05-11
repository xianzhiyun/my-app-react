/* 声明周期 */

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";

function Index() {
    useEffect(() => {
        console.log('进入首页了,useEffect')
        return () => {
            console.log('离开首页了')
        }
    },[])
    return (
        <h1>首页</h1>
    )
}
function List() {
    return (
        <h1>列表页</h1>
    )
}

function Example() {
    const [count,setCount]  = useState(0)
    useEffect(() => {
        console.log('----------------')
        return () => {
            console.log('=============')
        }
    },[])
    return (
        <div>
            useEffect - {count} <br/>
            <button onClick={() => {
                setCount(count+1)
            }}>Click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route component={Index} exact path="/"></Route>
                <Route component={List} path="/list"></Route>
            </Router>
        </div>
    )
}


export default Example
