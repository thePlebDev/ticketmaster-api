import React,{useState,useEffect} from 'react';

import axios from 'axios'

import APIKEY from '../../APIKEY';
import IndividualPage from '../../Pages/IndividualPage';


const Form = ()=>{
  const [values,setValues] = useState('Music');
  const [events,setEvents] = useState([]);
  const [isLoading,setIsLoading]= useState(true);

  const handleChange = (event)=>{
    setValues(event.target.value)
  }

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${values}&size=10&dmaId=527&apikey=${APIKEY}`)
      .then(doc=>setEvents(doc.data._embedded.events))
      .then()
      .catch(err=>console.log(err))
  },[values])


  return(
    <div className="form-container">
      <div className="toronto"> Near Toronto, ON</div>
      <form >
      <select id="events" name="event" value={values} onChange={(event)=>handleChange(event)}>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Arts and Theatre">Arts and Theatre</option>
          <option value="Family">Family</option>
          <option value="Film">Film</option>
          <option value="Misc">Misc</option>
      </select>
      </form>
      <IndividualPage />
    </div>
  )
}


export default Form;
