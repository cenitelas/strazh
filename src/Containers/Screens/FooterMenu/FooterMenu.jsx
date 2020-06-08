import React from "react";
import style from "./FooterMenu.module.scss"

export default class FooterMenu extends React.Component{

    render() {
        return(
            <div className={style.footerMenu}>
                <button onClick={() => this.props.addItem()}>ADD</button>
            </div>
        )
    }
}
