
import "./RightSide.css"
import img from "./img/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function RightSide() {
    return (  
    <ImageList  className ={'RightSide-container'}>
        <ImageListItem  className={'rightSide'}>
          <img
            src={img}
          />
        </ImageListItem>
    </ImageList>
    );
  }
  export default RightSide;