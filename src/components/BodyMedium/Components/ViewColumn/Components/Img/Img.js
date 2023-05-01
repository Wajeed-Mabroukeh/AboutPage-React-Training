import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./Img.css"

const Img = props=> {
    return (
        <ImageList  className ={'img-container'} >
        <ImageListItem  className={'img'}>
          <img   
            src={props.img}
          />
        </ImageListItem>
    </ImageList>
    )
}

export default Img;