import React from "react";
import style from "./TaxonomyParrent.module.scss"
import PopoverCaption from "../../PopoverCaption/PopoverCaption";

export default class TaxonomyParent extends React.Component{
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
            <div onClick={()=>this.props.hideShow(this.props.elem.id)} className={style.taxonomyParent}>
                <div style={{height:this.props.countChildren ? (3*this.props.countChildren)-0.5+"rem" : 0}} className={style.dots}></div>
                <div className={`${style.icon} ${style.iconOpen}`}></div>
                <div onMouseEnter={this.enterCaption} onMouseLeave={this.leaveCaption} className={style.caption}>{this.props.name}</div>
                <PopoverCaption position="left" open={this.state.fullName.open} anchor={this.state.fullName.anchor} caption={this.props.name}/>
            </div>
        )
    }
}
