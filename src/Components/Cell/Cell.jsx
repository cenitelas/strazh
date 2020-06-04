import React from "react";
import style from "./Cell.module.scss";
import Player from "../Player/Player";
import {useRef} from "react"

export const Cell = (props)=>{
    const ref = useRef(React.createRef());
    const url = "http://85.29.136.125:8080/b3a41c7fa34bb2ee9d03d83690ba8042/flv/sb3r0Aa/JvI7M8nieC8X/s.flv"
    return(
        <div ref={ref} className={`${style.cell}`}>
            {/*<span onClick={(e)=>props.dropItem(e,props.id)}>x</span>*/}
            <button onClick={()=>props.onChange(props.id,true)}>+</button>
            <button style={{marginTop:'20px'}} onClick={()=>props.onChange(props.id,false)}>-</button>
            {/*<p className="a-mask">{props.id}</p>*/}
            <Player/>
        </div>
    )
}
