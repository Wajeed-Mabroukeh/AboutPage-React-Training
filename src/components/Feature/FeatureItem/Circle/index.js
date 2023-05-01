import './style.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

    const Circle = props => {
        return (
        <ImageList  className ={'circlef-container'} >
            <ImageListItem  className={'circlef'}>
              <img   
                src={props.icon}
              />
            </ImageListItem>
        </ImageList>
        )
        
    }

export default Circle