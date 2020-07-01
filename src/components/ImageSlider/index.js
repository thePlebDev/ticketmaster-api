import React,{useState} from 'react';


const ImageSlider = ({images,titles,dates})=>{

  return(
      <div className="image-container" >
        <img src={images} alt='kitty'/>
        <div className="image-info">
          <div>{titles}</div>
          <div>{dates}</div>
        </div>
    </div>
  )
}

export default ImageSlider
