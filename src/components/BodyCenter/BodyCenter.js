import "./BodyCenter.css"

import BoxOne from "./Components/BoxOne/BoxOne"
import img1 from "./Components/BoxOne/Item/Circle/img/Services.png"
import img2 from "./Components/BoxOne/Item/Circle/img/Services2.png"
import img3 from "./Components/BoxOne/Item/Circle/img/Services1.png"
import img4 from "./Components/BoxOne/Item/Circle/img/Services4.png"

function BodyCenter () {
    return (
    <div className="bodycenter">
    <BoxOne icon={img1}  title={"10.5K"}  desc={'Sallers active our site'} />
    <BoxOne icon={img2}  title={"33k"}  desc={'Mopnthly Produduct Sale'} color={"#DB4444"}/>
    <BoxOne  icon={img3}  title={"45.5k"}  desc={'Customer active in our site'}/>
    <BoxOne  icon={img4}  title={"25k"}  desc={'Anual gross sale in our site'}/>
    </div>
    )
 
}

export default BodyCenter;