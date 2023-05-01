import { Typography } from "@mui/material"
import './style.css'
const SubTitle = props =>{
    return <div className="sub-title">
        <Typography variant="p">{props.children}</Typography>

    </div>
}

export default SubTitle