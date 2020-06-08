import React from "react";
import style from "./Taxonomy.module.scss"
import TaxonomyParent from "./TaxonomyParent/TaxonomyParent";
import TaxonomyChild from "./TaxonomyChild/TaxonomyChild";

export default class Taxonomy extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[
                {id:1,name:"ParentTest",parent:0},
                {id:23,name:"Cam2",parent: 1},
                {id:32,name:"Cam1",parent: 1},
                {id:13,name:"ParentTest2",parent:0},
                {id:11,name:"Cam2",parent: 13},
                {id:22,name:"Cam1",parent: 13},
                {id:33,name:"Cam3",parent: 13},
                {id:3,name:"ParentTest3",parent:0},
                {id:65,name:"Cam4",parent: 3},
                {id:43,name:"Cam5",parent: 3},
            ]
        }
    }

    render() {
        return(
            <div className={style.taxonomy}>
                <input/>
                <span>{this.state.data.length}</span>
                <div className={style.content}>
                {
                    this.state.data.map((item,i)=>{
                        if(this.state.data.find(e=>e.parent===item.id)){
                            return <TaxonomyParent name={item.name}/>
                        }else{
                            return <TaxonomyChild name={item.name}/>
                        }
                    })
                }
                </div>
            </div>
        )
    }
}
