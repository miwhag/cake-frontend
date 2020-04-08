import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from '../HomePage/Homepage'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

  
  export default class NavBarRoutes extends Component{

    state = {
      user: {}
    }

    login = (user) => {
      return fetch('http://localhost:3030/login', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({user})
          }).then(response => response.json())
          .then(result => {
            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('token', result.token)
            this.setState({user: result.user})
          })
    }


    render(){
      return (

        <Router>
        <NavBar/>
      
        <Switch>
          <PrivateRoute exact path='/build_your_cake'/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/signin' component={Login}/>
            <Route exact path='/signup' render={(props) => <Signup {...props} login={this.login}/>}/>
            <Route render={() => <Redirect to='/' />}/>
        </Switch>
     
      </Router>

    )
    }

  } 
  