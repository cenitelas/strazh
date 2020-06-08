import React from "react";
import style from "./Cell.module.scss";
import Player from "../Player/Player";
import {useRef} from "react"

export const Cell = (props)=>{
    const ref = useRef(React.createRef());
    const configPlayer = {enableWorker:false,stashInitialSize:128,enableStashBuffer:false,lazyLoad:false,autoCleanupSourceBuffer:true};
    const url = "http://85.29.136.125:8080/b3a41c7fa34bb2ee9d03d83690ba8042/flv/sb3r0Aa/JvI7M8nieC8X/s.flv"
    return(
        <div ref={ref} className={`${style.cell}`}>
            <button onClick={()=>props.onChange(props.id,true)}>asd</button>
            <Player config = {configPlayer}/>
        </div>
    )
}
