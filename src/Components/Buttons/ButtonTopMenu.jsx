import React from "react";
import style from "./ButtonTopMenu.module.scss"

export default class ButtonTopMenu extends React.Component{
    constructor(props) {
        super(props);
    }

    onClick = ()=>{

    }
    render() {
        return(
            <div onClick={()=>this.onClick()} className={style.button}>
                <span>{this.props.caption}</span>
            </div>
        )
    }
}
