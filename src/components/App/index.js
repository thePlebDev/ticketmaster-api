import React from 'react';
import { Switch,Route} from 'react-router-dom';

import NavBar from '../NavBar'
import Home from '../../Pages/Home';
import Meetings from '../../Pages/Meetings';
import Music from '../../Pages/Music';
import NotFound from '../../Pages/404';

const App = ()=>{

  const navLinks=[
    {
      path:'/',
      text:'Home',
      icon:"fas fa-home",
      key:1
    },
    {
      path:'/music',
      text:'Music',
      icon:"fas fa-music",
      key:2
    },
    {
      path:'/meetings',
      text:'Meetings',
      icon:"fas fa-handshake",
      key:3
    },
  ]

  return(
    <div style={{width:'100%'}}>
      <NavBar  navLinks={navLinks}/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/music' component={Music}/>
        <Route path='/meetings' component={Meetings}/>
        <Route component={NotFound} />
      </Switch>
        <h1>App</h1>
    </div>
  )
}

export default App
