import React from "react";
import style from "./ButtonCamControl.module.scss"

export default class ButtonCamControl extends React.Component{

    render() {
        return(
            <div onClick={this.props.click} className={style.buttonCamControl}>
                <div className={style.icon} style={{backgroundImage:`url(${this.props.icon})`}}></div>
                <div className={style.caption}>{this.props.caption}</div>
            </div>
        )
    }
}
