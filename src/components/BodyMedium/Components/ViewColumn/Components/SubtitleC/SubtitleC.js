import { Typography } from "@mui/material"
import './SubtitleC.css'


const SubtitleC = props=> {
    return (
        <div className="subtitleC">
            <Typography variant="p">{props.subtitleC}</Typography>
        </div>
    )
}

export default SubtitleC;