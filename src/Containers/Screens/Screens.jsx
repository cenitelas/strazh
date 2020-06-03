import React from 'react';
import ReactDOM from 'react-dom';
import AutoResponsive from 'autoresponsive-react';
import style from './Screens.module.scss'
import {Cell} from "../../Components/Cell/Cell";
export default class Screens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount() {
        this.setState({
            containerWidth: document.body.clientWidth,
            containerHeight:document.body.clientHeight,
        });
        window.addEventListener('resize', () => {
            this.setState({
                containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth,
                containerHeight:ReactDOM.findDOMNode(this.refs.container).clientHeight,
            });
        }, false);

    }

    addItem = ()=>{
        let data = JSON.parse(JSON.stringify(this.state.data));
        let newItem = {id:data.length+1, size:1,width:this.state.containerWidth/4,height:this.state.containerHeight/4};
        data.push(newItem);
        let sElems = data.reduce((a, b)=>a + (b.height*b.width), 0);
        let sScreen = this.state.containerHeight*this.state.containerWidth;
        if(sElems>sScreen){
            return;
        }
        this.setState({data:data})
    }

    dropItem = (el,id)=>{
        let data = [].concat(this.state.data);
        let item = data.find(i=>i.id===id);
        data.splice(data.indexOf(item),1);
        this.setState({data:data})
        el.preventDefault();
        el.stopPropagation();
    }
    getAutoResponsiveProps() {
        return {
            itemMargin: 0,
            containerWidth: this.state.containerWidth ,
            containerHeight:this.state.containerHeight -21 ,
            itemClassName: 'item',
            gridWidth: 8,
            transitionDuration: '.5'
        };
    }

    onChange=(id,size)=>{
        let data = JSON.parse(JSON.stringify(this.state.data));
        let item = data.find(i=>i.id===id);
        if(data.length===16 && data.filter(i=>i.size===2).length===3 && size){
            return;
        }
        data.splice(data.indexOf(item), 1);
        if(size){
            if(data.find(i=>i.size===3)){
                return;
            }
            switch (item.size) {
                case 1:
                    item.width *= 2;
                    item.height *= 2;
                    item.size = item.size+1
                    break;
                case 2:
                    item.width *= 1.5;
                    item.height *= 1.5;
                    item.size = item.size+1
                    break;
                case 3:
                    return;
            }
            let fullSizeItem = data.find(i=>i.size>=item.size);
            if(fullSizeItem) {
                data.splice(data.indexOf(fullSizeItem)+1, 0, item);
            }else{
                data.unshift(item);
            }
        }else{
            switch (item.size) {
                case 2:
                    item.width /= 2;
                    item.height /= 2;
                    item.size = item.size-1
                    break;
                case 3:
                    item.width /= 1.5;
                    item.height /= 1.5;
                    item.size = item.size-1
                    break;
                case 1:
                    return;
            }
            let smallSizeItem = data.find(i=>i.size<=item.size);
            if(smallSizeItem) {
                data.splice(data.indexOf(smallSizeItem), 0, item);
            }else{
                data.push(item);
            }
        }

        let sElems = data.reduce((a, b)=>a + (b.height*b.width), 0);
        let sScreen = this.state.containerHeight*this.state.containerWidth;
        if(data.length===16){
            let start = data.length - (4 * data.filter(i => i.size === 2).length);
            if(!start){
                return;
            }
            for (let i = start; i < start + 4; i++) {
                data[i].width = size ? data[i].width /2 : data[i].width *2;
                data[i].height = size ? data[i].height /2 : data[i].height *2;
            }
            this.setState({data:data})
        }
        if(sElems>sScreen){
            return;
        }
        this.setState({data:data})
    }


    render() {
        return (
            <div className={style.screen}>
                <button onClick={()=>this.addItem()}>ADD</button>
                <AutoResponsive  ref="container" {...this.getAutoResponsiveProps()}>
                    {
                        this.state.data.map((i, index) => {
                            let styleSize = {
                                width: i.width,
                                height: i.height
                            };
                            return (
                                <div id={i.id} ref={this.styleInRef} key={index}  className={`item`} style={{...styleSize}} >
                                    <Cell id={i.id} dropItem={this.dropItem} onChange={this.onChange}/>
                                </div>
                            );
                        })
                    }
                </AutoResponsive>
            </div>
        );
    }
}