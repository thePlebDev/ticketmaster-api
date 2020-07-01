import React,{useState} from 'react';


const useData =(data)=>{
  const [images,setImages] = useState()

  data.map(item=>{
    setImages(item.images[0])
  })

  return images
}

export default useData
