import React from "react";
import style from "./TaxonomyChild.module.scss"
import MenuCamTree from "../../MenuCamTree/MenuCamTree";
import PopoverCaption from "../../PopoverCaption/PopoverCaption";

export default class TaxonomyChild extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fullName:{open:false, anchor:null}
        }
    }

    enterCaption = (el)=>{
        let fullName = this.state.fullName;
        if(fullName.open){
            return
        }
        fullName.open = true;
        fullName.anchor = el.currentTarget;
        this.setState({fullName:fullName})
    }

    leaveCaption = ()=>{
        let fullName = this.state.fullName;
        if(!fullName.open){
            return
        }
        fullName.open = false;
        fullName.anchor = null;
        this.setState({fullName:fullName})
    }

    render() {
        return(
            <div className={`${style.taxonomyChildren} ${this.props.displayNone ? style.displayHide : style.displayShow}`}>
                <div className={style.dots}></div>
                <div className={`${style.icon}`}></div>
                <div onMouseEnter={this.enterCaption} onMouseLeave={this.leaveCaption} className={style.caption}>{this.props.name}</div>
                <MenuCamTree/>
                <PopoverCaption position="left" open={this.state.fullName.open} anchor={this.state.fullName.anchor} caption={this.props.name}/>
            </div>
        )
    }
}
