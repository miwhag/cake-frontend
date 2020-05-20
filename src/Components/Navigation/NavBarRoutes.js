import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from '../HomePage/Homepage'
import Signup from '../Signup/Signup'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PrivateDashboard from '../PrivateRoute/PrivateDashboard'

  
  export default class NavBarRoutes extends Component{

    state = {
      user: {},

    }


    login = (user) => {
      return fetch('https://build-cake.herokuapp.com/login', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({user})
          }).then(response => response.json())
          .then(result => {
            if(result.token){
              localStorage.setItem('user', JSON.stringify(result.user))
              localStorage.setItem('token', result.token)
              this.setState({user: result.user})
            } else{
              console.log("Did not work")
            }
            
          })
    }

    render(){
      return (

        <Router>
        <NavBar login={this.login}/>
      
        <Switch>
          <PrivateRoute exact path='/build_your_cake'/>
          <PrivateDashboard exact path='/dashboard'/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/signup' render={(props) => <Signup {...props} login={this.login}/>}/>
            <Route render={() => <Redirect to='/' />}/>
        </Switch>
     
      </Router>

    )
    }

  } 
  