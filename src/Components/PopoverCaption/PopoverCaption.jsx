import React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        backgroundColor:"#2A2F32",
        fontFamily:"Inter",
        fontSize:"0.9rem",
        color:"#EAEAEA",
        borderRadius:"0.1rem",
        border:"0.05rem solid #3C4347",
        padding:"1rem",
        marginTop:"-0.5rem"
    },
}));

export default function PopoverCaption(props) {
    const classes = useStyles();
    return (
        <Popover
            open={props.open}
            anchorEl={props.anchor}
            className={classes.popover}
            classes={{
                paper: classes.paper,
            }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: props.position,
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: props.position,
            }}
            disableRestoreFocus
        >
            <div>{props.caption}</div>
        </Popover>


    );
}
