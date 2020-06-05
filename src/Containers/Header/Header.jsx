import React from "react";
import style from "./Header.module.scss"
import TopMenu from "../../Components/TopMenu/TopMenu";
import LogoTop from "../../Components/LogoTop/LogoTop";

export default class Header extends React.Component{

    render() {
        return(
            <div className={style.header}>
                <LogoTop/>
                <TopMenu/>
            </div>
        )
    }

}
