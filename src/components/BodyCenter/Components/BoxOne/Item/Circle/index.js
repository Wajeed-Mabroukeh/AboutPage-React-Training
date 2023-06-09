import './style.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Circle = props => {
    return (
    <ImageList  className ={'circle-container'} >
        <ImageListItem  className={'circle'}>
          <img   
            src={props.icon}
          />
        </ImageListItem>
    </ImageList>
    )
    
}

export default Circle