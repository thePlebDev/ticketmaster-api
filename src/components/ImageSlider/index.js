import React,{useState} from 'react';


const ImageSlider = ({images})=>{

  return(
    <div className="image-container" >
      <img src={images} alt='kitty'/>
    </div>
  )
}

export default ImageSlider
