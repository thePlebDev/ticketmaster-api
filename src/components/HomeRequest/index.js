import React,{useState} from 'react';

import ImageSlider from '../ImageSlider';

const HomeRequest = ()=>{
  // https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=1&dmaId=527&apikey=z8pipqaTCCTQc1R0OGDLl4bnygjdiXH3
  // this is a full api request to one event that is inside of toronto.
  const fakeInfo =[
    {
      index:0,
      picture:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
    },
    {
      index:1,
      picture:'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'
    },
    {
      index:2,
      picture:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
    },
    {
      index:3,
      picture:'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'
    },{
      index:0,
      picture:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
    },
    {
      index:1,
      picture:'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'
    },
    {
      index:2,
      picture:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
    },
    {
      index:3,
      picture:'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'
    },{
      index:3,
      picture:'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'
    },{
      index:0,
      picture:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
    },
    {
      index:1,
      picture:'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'
    },
    {
      index:2,
      picture:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
    },
    {
      index:3,
      picture:'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'
    }
  ]

  const [index,setIndex] = useState(0)

  const next =()=>{
    console.log('clicked')
    if(index < fakeInfo.length-1){
      setIndex(index + 1)
    }else{
      setIndex(0)
    }
  }

  const previous =()=>{
    console.log('clicked')
    if(index > 0){
      setIndex(index - 1)
    }else{
      setIndex(fakeInfo.length - 1)
    }
  }

  return(
    <div className="item-container">
       <div className="item-container-wrapper"
        style={{transform:`translateX(-${index*(100/fakeInfo.length)}%)`}}
       >
           {
             fakeInfo.map((item,index)=>{
               return <ImageSlider images={item.picture} key={index} />
             })
           }
       </div>
       <button type='button' className='button-1' onClick={()=>next()}>
            <i class="fas fa-arrow-right"></i>
       </button>
       <button type='button' className='button-2' onClick={()=>previous()}>
            <i class="fas fa-arrow-left"></i>
       </button>

    </div>
  )
}

export default HomeRequest
