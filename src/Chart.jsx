import React from "react"
import './chart.css'
import { useEffect, useRef, useState } from "react"

export default function Chart({ info, setComplated, selectNew }){
    const inputRef = useRef();
    const buttonRef = useRef();
    const [chart, setChart] = useState(info);
    const [text, setText] = useState("");
    const [fault, setFault] = useState(0);

    
    const handleKeyDown = (e)=>{
        if(e.key === 'Enter'){
            buttonRef.current?.click();
        }
    }
    
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            inputRef.current?.focus();
        }, 10);
          return () => clearTimeout(timeoutId);
    },[])

    const handleClick = ()=>{
        if(chart.meaning === text){
            setChart((c) => ({...c, status: !c.status}))
            setComplated();
            selectNew();
        }
        else if(text !== '')
        {
            setFault(fault + 1);
            inputRef.current?.focus();
        }
        setText('');
    }
    
    const handleChange = (evt)=>{
        setText(evt.target.value);
    }

    return(
        <>
            <div className="chart">
                <div className="chartCenter"></div>
                <h2>Group: {chart.group}</h2>
                <h2 style={{left: '70%'}}>fault: {fault}</h2>
                <h1>{chart.word}</h1>
                <input ref={inputRef} type="text" value={text} onChange={handleChange} className="chartInput"/>
                <button ref={buttonRef} className="chartButton" onClick={handleClick} onKeyDown={handleKeyDown}>confirm</button>
                </div>
        </>
    )
}