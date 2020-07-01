import React from 'react';
import { useParams } from 'react-router-dom';




const IndividualPage = ()=>{

  const { id } = useParams();


  return(
    <div>
      <h1>Individual Page</h1>
      <h2>{id}</h2>
    </div>
  )
}



export default IndividualPage
