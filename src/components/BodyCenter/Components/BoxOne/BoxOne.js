import "./BoxOne.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Item from "./Item/index"
import { BusAlert, Headphones, SafetyCheck } from "@mui/icons-material"

const  BoxOne  = props=> {
    return (
    <div className="boxone" style={{backgroundColor: `${props.color}`}} >
    <Box >
    <Item circle={props.icon} title={props.title} desc={props.desc} />
    </Box>
    </div>
    )
 
}

export default BoxOne;