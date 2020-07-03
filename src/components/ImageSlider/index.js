import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';


const ImageSlider = ({images,titles,dates,ids})=>{

  const history = useHistory();

  const handleClick =()=>{
    history.push(`event/${ids}`)
  }

  return(
      <div className="image-container" onClick={()=>handleClick()}>
        <img src={images} alt='kitty'/>
        <div className="image-info">
          <div>{titles}</div>
          <div>{dates}</div>
        </div>
    </div>
  )
}

export default ImageSlider
