import "./ViewColumn.css"

import Img from "./Components/Img/Img";
import Titlec from "./Components/Titlec/Titlec";
import SubtitleC from "./Components/SubtitleC/SubtitleC";
import Icons from "./Components/Icons/Icons";

const ViewColumn = props=> {
    return (
        <div className="viewcolumn">
        <Img img ={props.img}/>
        <Titlec titlec ={props.titlec}/>
        <SubtitleC subtitleC ={props.subtitlec} />
        <Icons />
        </div>
    )
}

export default ViewColumn;