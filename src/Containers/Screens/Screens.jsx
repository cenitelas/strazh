import React from 'react';
import ReactDOM from 'react-dom';
import AutoResponsive from 'autoresponsive-react';
import style from './Screens.module.scss'
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
        let data = this.state.data;
        let newItem = {id:data.length+1,size:1,width:this.state.containerWidth/4,height:this.state.containerHeight/4};
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

    onChange=(id)=>{
        let data = JSON.parse(JSON.stringify(this.state.data));

        let item = data.find(i=>i.id===id);
        data.splice(data.indexOf(item),1);
        if(item.size===1) {
            item.width *= 2;
            item.height *= 2;
            item.size = 2;
            data.unshift(item);
        }else{
            item.width /= 2;
            item.height /= 2;
            item.size = 1;
            data.push(item);
        }
        let sElems = data.reduce((a, b)=>a + (b.height*b.width), 0);
        let sScreen = this.state.containerHeight*this.state.containerWidth;
        if(sElems>sScreen){
            data=null;
            return;
        }

        this.setState({data:data})
    }

    render() {
        return (
            <div className={style.screen}>
                <button onClick={()=>this.addItem()}>ADD</button>
                <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                    {
                        this.state.data.map((i, index) => {
                            let styleSize = {
                                width: i.width,
                                height: i.height
                            };
                            return (
                                <div onClick={()=>this.onChange(i.id)} key={index} href="#" className={`item ${style.cell}`} style={{...styleSize}}>
                                    <span onClick={(e)=>this.dropItem(e,i.id)}>x</span>
                                    <p className="a-mask">{i.id}</p>
                                </div>
                            );
                        })
                    }
                </AutoResponsive>
            </div>
        );
    }
}