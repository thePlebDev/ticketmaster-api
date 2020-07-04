import React from 'react';
import { Switch,Route} from 'react-router-dom';

import NavBar from '../NavBar'
import Home from '../../Pages/Home';

import NotFound from '../../Pages/404';

const App = ()=>{

  const navLinks=[
    {
      path:'/',
      text:'Home',
      icon:"fas fa-home",
      key:1
    }
  ]

  return(
    <div style={{width:'100%'}}>
      <NavBar  navLinks={navLinks}/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
