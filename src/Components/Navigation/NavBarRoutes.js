import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from '../HomePage/Homepage'
import Signin from './Signin'

  
  export default function NavBarRoutes() {
    return (
      <div>
        <Router>
        <NavBar/>
        <div className="NavBarRoutes-container">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signin' component={Signin}/>
        </Switch>
        </div>
      </Router>
      </div>
    )
  }
  