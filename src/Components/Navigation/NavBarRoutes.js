import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from '../HomePage/Homepage'
import Login from './Login'
import Signup from './Signup'

  
  export default function NavBarRoutes() {
    return (

        <Router>
        <NavBar/>
      
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signin' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
     
      </Router>

    )
  }
  