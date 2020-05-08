import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./mySaga";


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga)
export default store




// redux-thunk
/*
import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, enhancer);
export default store
*/
