/* 父子组件传值 */
import React, {useState, useEffect, createContext, useContext} from "react";

const CountContext = createContext()

function Counter() {
       let count = useContext(CountContext)
    return (
        <h1>子组件-{count}</h1>
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
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}


export default Example
