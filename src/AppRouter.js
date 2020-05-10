import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './page/Index'
import List from './page/List'

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/123">列表页</Link></li>
            </ul>
            <Route path="/" exact component={Index}></Route>
            <Route path="/list/:id" component={List}></Route>
            <Route path="/list/home" component={List}></Route>

        </Router>
    )
}

export default AppRouter
