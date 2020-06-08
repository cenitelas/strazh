import React from "react";
import style from "./TaxonomyParrent.module.scss"

export default class TaxonomyParent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.taxonomyParent}>
                <div className={style.dots}></div>
                <div className={`${style.icon} ${style.iconOpen}`}></div>
                <span className={style.caption}>{this.props.name}</span>
            </div>
        )
    }
}
