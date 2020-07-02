import React,{useState,useEffect} from 'react';
import axios from 'axios';

import ImageSlider from '../ImageSlider';
import APIKEY from '../../APIKEY';

const HomeRequest = ()=>{
  // https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=1&dmaId=527&apikey=z8pipqaTCCTQc1R0OGDLl4bnygjdiXH3
  // this is a full api request to one event that is inside of toronto.


  const [index,setIndex] = useState(0)
  const [data,setData] = useState('')
  const[isLoading,setIsLoading] = useState(true)
  const [images,setImages] = useState([])
  const [titles,setTitles] = useState([])
  const [dates,setDates] = useState([])
  const [id,setID] = useState([])


  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=10&dmaId=527&apikey=${APIKEY}`)
      .then(doc=>{
        const asyncData = doc.data._embedded.events

        const imageData = asyncData.map(item=>{
          return item.images[0].url
        })
        const nameData = asyncData.map(item=>{
          return item.name
        })
        const dateData = asyncData.map(item=>{
          return item.dates.start.localDate
        })
        const idDate = asyncData.map(item=>{
          return item.id
        })

        return [imageData,nameData,dateData,idDate]
      })
      .then(result=>{
        setImages(result[0])
        setTitles(result[1])
        setDates(result[2])
        setID(result[3])
        setIsLoading(false)
      })
      .catch(err=>console.log(err))

  },[])

  const next =()=>{
    if(index < images.length-1){
      setIndex(index + 1)
    }else{
      setIndex(0)
    }
  }

  const previous =()=>{
    if(index > 0){
      setIndex(index - 1)
    }else{
      setIndex(images.length - 1)
    }
  }

  return(
    <div className="item-container">
       <div className="item-container-wrapper"
        style={{transform:`translateX(-${index*(100/images.length)}%)`}}
       >
           { isLoading? (
                <h1>Loading...</h1>
              ):(
              images.map((item,index)=>{
               return <ImageSlider
                        images={item}
                        titles={titles[index]}
                        dates={dates[index]}
                        ids={id[index]}
                        key={index} />

             })
           )
           }
       </div>
       <button type='button' className='button-1' onClick={()=>next()}>
            <i className="fas fa-arrow-right"></i>
       </button>
       <button type='button' className='button-2' onClick={()=>previous()}>
            <i className="fas fa-arrow-left"></i>
       </button>

    </div>
  )
}

export default HomeRequest
