import React from "react";
import style from "./LeftMenu.module.scss"
import {emitter} from "../../Utils/globalEmitter";
import Taxonomy from "../Taxonomy/Taxonomy";

export default class LeftMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            windowStyle: `${style.leftMenu}`,
            controlButtonStyle : `${style.control}`,
            show:true
        }
    }

    showCloseLeftMenu = ()=>{
        if(this.state.show){
            this.setState({
                windowStyle:`${style.leftMenu} ${style.leftMenuClose}`,
                show:false
            })
            emitter.emit('resize',true);
        }else{
            this.setState({
                windowStyle:`${style.leftMenu}`,
                show:true
            })
            emitter.emit('resize',false);
        }

    }

    render() {
        return(
        <div className={this.state.windowStyle}>
           <div onClick={()=>this.showCloseLeftMenu()} className={this.state.controlButtonStyle}></div>
            <Taxonomy/>
        </div>
        )
    }
}
