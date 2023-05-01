import "./BodyMedium.css"

import ViewColumn from "./Components/ViewColumn/ViewColumn";
import img1 from "./Image/Frame 874.png"
import img2 from "./Image/Frame 875.png"
import img3 from "./Image/Frame 876.png"


const BodyMedium = props=> {
    return (
        <div className="bodymedium">
        <ViewColumn img={img1} titlec={"Tom Cruise"} subtitlec={"Founder & Chairman"}/>
        <ViewColumn img={img2} titlec={"Emma Watson"} subtitlec={"Managing Director"}/>
        <ViewColumn img={img3} titlec={"Will Smith"} subtitlec={"Product Designer"}/>
        </div>
    )
}

export default BodyMedium;