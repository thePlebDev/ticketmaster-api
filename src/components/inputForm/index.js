import React,{useState,useEffect} from 'react';

import axios from 'axios'

import APIKEY from '../../APIKEY';
import IndividualPage from '../../Pages/IndividualPage';
import Paginate from '../Paginate';



const Form = ()=>{
  const [values,setValues] = useState('Music');
  const [events,setEvents] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(20)


  const handleChange = (event)=>{
    setValues(event.target.value)
  }

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${values}&size=100&dmaId=527&apikey=${APIKEY}`)
      .then(doc=>setEvents(doc.data._embedded.events))
      .then(setIsLoading(false))
      .catch(err=>console.log(err))
  },[values])

  const handleClick=()=>{
    console.log(events)
  }
  //get curent posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentEvents = events.slice(indexOfFirstPost, indexOfLastPost)

  //Change page
  const paginate = (pageNumber)=> {
    setCurrentPage(pageNumber)

  }

  return(
    <div className="form-container" >
      <div className="toronto" onClick={()=>handleClick()}> Near Toronto, ON</div>
      <form >
      <select id="events" name="event" value={values} onChange={(event)=>handleChange(event)}>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Arts and Theatre">Arts and Theatre</option>
          <option value="Family">Family</option>
          <option value="Film">Film</option>
      </select>
      </form>

      {
          isLoading ? ''
          :
          <div>
              <IndividualPage event={currentEvents} />
              <Paginate postsPerPage={postsPerPage} totalPosts={events.length} paginate={paginate} page={currentPage}/>
          </div>
      }

    </div>
  )
}


export default Form;
