import LeftSide from "../BodyTopAbout/Components/LeftSide/LeftSide"
import RightSide from "../BodyTopAbout/Components/RightSide/RightSide"
import "./BodyTop.css"

function BodyTop() {
    return (
        <div className="BodyTop">
      <LeftSide title="Our Story" className={"LeftSide"}/>
      <RightSide className={"RightSide"}/>
        </div>
    );
  }
  export default BodyTop;