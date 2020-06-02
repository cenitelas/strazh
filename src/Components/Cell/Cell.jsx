import React from "react";
import style from "./Cell.module.scss"

export const Cell = (props)=>{
    var cell = props.cell;
    return(
        <div onClick={()=>props.scaleUp(cell.id)} className={style.cell} style={{gridArea:`${cell.cs} / ${cell.rs} / ${cell.ce} / ${cell.re}`}}></div>
    )
}