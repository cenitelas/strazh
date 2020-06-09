import React from "react";
import style from "./Taxonomy.module.scss"
import TaxonomyParent from "./TaxonomyParent/TaxonomyParent";
import TaxonomyChild from "./TaxonomyChild/TaxonomyChild";
import {withStyles,FormControl,InputLabel,TextField,InputAdornment,IconButton} from "@material-ui/core";


const SearchField = withStyles({
    root: {
        margin: "2rem",
        height: "3rem",
        '& label':{
            color: "#8C939B",
            marginTop:"-0.25rem"
        },
        '& label.Mui-focused': {
            color: "#EAEAEA",
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#EAEAEA',
        },
        '& .MuiOutlinedInput-root': {
            height: "3rem",
            backgroundColor:"#3C4347",
            borderRadius:0,
            color: "#EAEAEA",
            '& fieldset': {
                borderColor:"transparent",
                borderSize:"0.05rem"
            },
            '&:hover fieldset': {
                borderColor: '#EAEAEA',
            },
            '&.Mui-focused fieldset': {
                borderSize:"0.05rem",
                borderColor: '#EAEAEA',
            },
        },
    },
})(TextField);

export default class Taxonomy extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[
                {id:1,name:"ParentTestssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",parent:0},
                {id:23,name:"Cam2",parent: 1},
                {id:32,name:"Cam1",parent: 1},
                {id:13,name:"ParentTest2",parent:0},
                {id:11,name:"Cam2ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",parent: 13},
                {id:22,name:"Cam1ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",parent: 13},
                {id:33,name:"Cam3",parent: 13},
                {id:3,name:"ParentTest3",parent:0},
                {id:65,name:"Cam4",parent: 3},
                {id:43,name:"Cam5",parent: 3},
            ],
            hideElements: []
        }
    }

    hideShowElem = (id)=>{
        let hideElements = this.state.hideElements;
        if(hideElements.find(i=>i.id===id)){
            hideElements.splice(hideElements.indexOf(hideElements.find(i=>i.id===id)),1);
        }else {
            hideElements.push(this.state.data.find(i => i.id === id))
        }
        this.setState({hideElements: hideElements});
    }

    render() {
        return(
            <div className={style.taxonomy}>
                    <SearchField
                        type={'text'}
                        variant="outlined"
                        label={"Search"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <img/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                <span>{this.state.data.length}</span>
                <div className={style.content}>
                {
                    this.state.data.map((item,i)=>{
                        if(this.state.data.find(e=>e.parent===item.id)){
                            return <TaxonomyParent hideShow={this.hideShowElem} elem={item} name={item.name} countChildren = {this.state.hideElements.find(e=>e.id===item.id) ? 0 : this.state.data.filter(e=>e.parent===item.id).length}/>
                        }else{
                            return <TaxonomyChild elem={item} displayNone = {this.state.hideElements.find(e=>e.id===item.parent)} name={item.name}/>
                        }
                    })
                }
                </div>
            </div>
        )
    }
}
