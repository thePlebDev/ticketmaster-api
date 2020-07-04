import React from 'react';
import {Link} from 'react-router-dom';


const notFound = ()=>{

  return(
    <div className="not-found-container">
      <div className="top"></div>
      <div className="middle">
        <div><i className="fas fa-search"></i></div>
        <div className="sorry">Sorry!</div>
        <div className="text">Something went wrong, lets Start over</div>
        <button><Link to='/'>Head back to the Home page</Link></button>

      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default notFound
