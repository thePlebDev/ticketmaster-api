import React,{useState} from 'react';


const ImageSlider = ({images,index})=>{



  return(
    <div className="image-container" id={`card-${index}`}>
      <img src={images} alt='kitty'/>
    </div>
  )
}

export default ImageSlider
