import { BusAlert, Headphones, SafetyCheck } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"
import FeatureItem from "./FeatureItem"


import './style.css'
const Feature = props => {
    return <Box  className ={'feature-container'}>
        
        <div className="features-items">
            <FeatureItem icon={<BusAlert /> } title={'FREE AND FAST DELIVERY'} desc={'Free delivery for all orders over $140'} />
            <FeatureItem icon={<Headphones /> } title={'24/7 CUSTOMER SERVICE'} desc={'Friendly 24/7 customer support'} />
            <FeatureItem icon={<SafetyCheck /> } title={'MONEY BACK GUARANTEE'} desc={'We reurn money within 30 days'} />

        </div>
    </Box>
}

export default Feature