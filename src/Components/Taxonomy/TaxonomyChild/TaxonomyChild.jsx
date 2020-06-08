import React from "react";
import style from "./TaxonomyChild.module.scss"

export default class TaxonomyChild extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.taxonomyChildren}>
                <div className={style.icon}></div>
            </div>
        )
    }
}
