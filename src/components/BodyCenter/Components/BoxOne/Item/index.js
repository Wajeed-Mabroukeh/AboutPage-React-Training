import { Typography } from '@mui/material'
import Circle from './Circle'
import './style.css'

const Item = props => {
    return <div className="item" >
        <Circle icon={props.circle} />
        <Typography variant='h4' className={'title-item'} >{props.title}</Typography>
        <Typography color='gray' className={'desc-item'} >{props.desc}</Typography>
    </div>
}

export default Item