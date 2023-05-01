import LeftSide from "./Components/LeftSide/LeftSide"
import RightSide from "./Components/RightSide/RightSide"
import NavLinks from "./Components/NavLinks/NavLinks"
import "./BodyTop.css"

function BodyTop() {
    return (
      <div className="c">
      < NavLinks className={"link"}/>
     <div className="BodyTop">  
      <LeftSide title="Our Story" className={"LeftSide"}/>
      <RightSide className={"RightSide"}/>
        </div>
        </div>
    );
  }
  export default BodyTop;