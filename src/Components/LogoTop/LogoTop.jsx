import React from "react";
import style from "./LogoTop.module.scss"
import Logo from "../../Assets/logo.svg"

export default class LogoTop extends React.Component{

    render() {
        return(
            <div className={style.logoTop}>
                <img src={Logo}/>
            </div>
        )
    }

}
