import { Typography } from "@mui/material"
import './Titlec.css'

const Titlec = props=> {
    return (
        <div className="titlec">
            <Typography variant="p">{props.titlec}</Typography>
        </div>
    )
}

export default Titlec;