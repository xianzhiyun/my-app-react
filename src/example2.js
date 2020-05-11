import React, { useState } from "react";

function Example() {
    const [count, setCount] = useState(0)
    const [sex] = useState('男')
    return (
        <div>
            <p>You clicked {count} times</p>
            <p>You clicked {sex} times</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}>click me
            </button>
        </div>
    )
}

export default Example
