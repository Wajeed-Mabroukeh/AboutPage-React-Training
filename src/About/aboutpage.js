import { Container } from "@mui/system"
import { Box } from "@mui/system"
import Feature from "../components/Feature/index"
import "./aboutpage.css"
import BodyTop from "../components/BodyTopAbout/BodyTop"
import BodyCenter from "../components/BodyCenter/BodyCenter"
import BodyMedium from "../components/BodyMedium/BodyMedium"

function AboutPage () {
    return <Container maxWidth={'xl'}  >
        <Box classNam="body">  
           <BodyTop/>
           <BodyCenter/>
           <BodyMedium/>
           <Feature />
        </Box>
    </Container>
}

export default AboutPage;