import React from "react";
import style from "./Screens.module.scss"
import {Cell} from "../../Components/Cell/Cell";
export default class Screens extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            styles: [style.screens4x4,style.screens1x4x5x6,style.screens2x6x6,style.screens1x6x4x5, style.screen2x2, style.screen2x3],
            style:5,
            changeScreenAnim:null,
            count:1,
            cells : [{id:1,cs:1,rs:1,ce:19,re:36}]
        }
    }

    componentDidMount() {

    }

    addElement = ()=>{
        let cells = this.state.cells;
        cells.push(this.generateElem());
        this.setState({cells:cells});
        this.setState({count:this.state.count+1})
    }

    generateElem = ()=>{
        let lastCell = this.state.cells.find(i=>i.id===this.state.count);
        let id = this.state.count+1;
        let rs = lastCell.re <144 ? lastCell.re : 1;
        let re = lastCell.re <144 ? lastCell.re +36 : 36;
        let cs = lastCell.re <144 ? lastCell.cs : lastCell.ce;
        let ce = lastCell.re <144 ? lastCell.ce : lastCell.ce+19;
        console.log(lastCell.re,"-------",lastCell.ce);
        return {id,cs,rs,ce,re};
    }

    changeGrid = ()=>{
        this.setState({changeScreenAnim:null})
        this.setState({changeScreenAnim:style.change_screen})
    }

    cellScaleUp = (id)=>{
        let cells = this.state.cells;
        let cell = cells.find(i=>i.id===id);
        cell.ce*=2;
        cell.re*=2;
        this.setState({cells:cells})
    }

    render() {
        return(
            <>
                <button onClick={()=>this.addElement()}>add elem</button>
                <div onAnimationEnd={()=>this.setState({changeScreenAnim:null})} onClick={()=>this.changeGrid()} className={`${style.screen} ${this.state.styles[this.state.style]} ${this.state.changeScreenAnim}`}>
                    {this.state.cells.map((item,i)=>{
                        return <Cell scaleUp={this.cellScaleUp} cell={item} key={i}/>
                    })}
                </div>
            </>
        )
    }

}