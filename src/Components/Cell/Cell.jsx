import React from "react";
import style from "./Cell.module.scss"

export const Cell = (props)=>{
    const ref = React.createRef();
    return(
        <div ref={ref} className={`${style.cell}`}>
            <span onClick={(e)=>props.dropItem(e,props.id)}>x</span>
            <button onClick={()=>props.onChange(props.id,true)}>+</button>
            <button onClick={()=>props.onChange(props.id,false)}>-</button>
            <p className="a-mask">{props.id}</p>

        </div>
    )
}