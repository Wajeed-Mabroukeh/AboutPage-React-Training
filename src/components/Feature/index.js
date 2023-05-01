import { Box, Grid } from "@mui/material"
import FeatureItem from "./FeatureItem"
import './style.css'

import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"


const Feature = props => {
    return <Box  className ={'feature-container'}>
        
        <div className="features-items">
            <FeatureItem icon={img1 } title={'FREE AND FAST DELIVERY'} desc={'Free delivery for all orders over $140'} />
            <FeatureItem icon={img2} title={'24/7 CUSTOMER SERVICE'} desc={'Friendly 24/7 customer support'} />
            <FeatureItem icon={img3 } title={'MONEY BACK GUARANTEE'} desc={'We reurn money within 30 days'} />

        </div>
    </Box>
}

export default Feature