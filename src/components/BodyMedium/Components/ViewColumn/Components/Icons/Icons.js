import "./Icons.css"
import img from "./image/Frame 877.png";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Icons = props=> {
    return (
        <ImageList  className ={'icon-container'} >
        <ImageListItem  className={'iconc'}>
          <img   
            src={img}
          />
        </ImageListItem>
    </ImageList>
    )
}

export default Icons;