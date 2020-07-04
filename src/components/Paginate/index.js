import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = ({postsPerPage,totalPosts,paginate,page})=>{
  console.log(page)
  const pageNumbers = [];

  for(let i =1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i)
  }

  return(
    <nav>
      <ul className="paginate-container">
        {pageNumbers.map(number=>{
          return <li key={number} className="page-item">
            <div className={page===number?'active':''} onClick={()=>paginate(number)}>{number}</div>
          </li>
        })
      }
      </ul>
    </nav>
  )

}

export default Paginate;
