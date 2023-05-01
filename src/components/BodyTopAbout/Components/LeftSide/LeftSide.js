import "./LeftSide.css"
import Typography from '@mui/material/Typography';

function LeftSide({title}) {
    return (
        <div className="left">
      <Typography variant="h1" component="h2" className={"leftSide"}>{title}</Typography>
      <Typography  variant="body1" component="h2" className={"leftSidet1"} >
      Launced in 2015, Exclusive is South Asia’s premier
      online shopping<br/> 
      makterplace with an active presense in Bangladesh. Supported <br/>
      by wide range of tailored marketing, data and service solutions,<br/>
      Exclusive has 10,500 sallers and 300 brands and serves 3<br/>
      millioons customers across the region. <br/>
      </Typography>

      <Typography  variant="body1" component="h2" className={"leftSidet2"} >
      Exclusive has more than 1 Million products to offer, growing at a <br/> 
      very fast. Exclusive offers a diverse assotment <br/>
      in categories ranging  from consumer.
      </Typography>
      </div>
    )
  }
  export default LeftSide;