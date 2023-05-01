import { Container } from "@mui/system"
// import FlashSaleComponent from "../components/FlashSaleComponent"
// import ExploreProducts from "../components/ExploreProducts"
import { Box } from "@mui/system"
// import BrowseByCategory from "../components/BrowseByCategory"
import Feature from "../components/Feature/index"
import Header from "../components/Header/index"

import "./aboutpage.css"
import BodyTop from "../components/BodyTopAbout/BodyTop"


const AboutPage = props => {
    return <Container maxWidth={'xl'}  >
        <Box classNam="body">  
           <BodyTop/>
           <Feature />
        </Box>
    </Container>
}

export default AboutPage;