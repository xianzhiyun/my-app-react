import React, {useEffect, useRef, useState} from 'react';
function Example(){
    const inputEl = useRef(null)
    const onButtonClick=()=>{
        inputEl.current.value="Hello ,JSPang"
        console.log(inputEl) //输出获取到的DOM节点
    }
    //-----------关键代码--------start
    const [text, setText] = useState('jspang')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current:', textRef.current)
    })
    //----------关键代码--------------end

    return (
        <>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text"/>
            <button onClick = {onButtonClick}>在input上展示文字</button>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}
export default Example
