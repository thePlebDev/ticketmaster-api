import React,{useState} from 'react';
import {Link} from 'react-router-dom';


import Modal from '../../components/Modal';



const IndividualPage =({event})=>{



  const handleClick = ()=>{

    console.log(event)

  }



  return(
    <div className="indiv-page-container">{
      event?
        event.map((item,index)=>{
        return  <div className='info-container' key={item.id}>
                  <div className='info-date' >{item.dates.start.localDate}</div>
                  <div className='info-title'>{item.name}</div>
                  <div className='info-info'>{item._embedded.venues[0].name}</div>
                  <div className='info-icon' onClick={()=>handleClick()}>{item.dates.status.code}</div>
                  <button type="button" className="ticket-button">
                    <a href={`${item._embedded.venues[0].url}`} rel='noreferrer' target="_blank" >See Ticket Info</a>
                  </button>
                  <div className='bottom-border'></div>
                </div>
        })
      :''
    }
    </div>
  )
}

export default IndividualPage
