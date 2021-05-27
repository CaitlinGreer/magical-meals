import React, { Component} from 'react';
import { Route, Switch } from 'react-router-dom'

import Nav from './Nav/Nav'
import LandingPage from './LandingPage/LandingPage'
import FindAMeal from './FindAMeal/FindAMeal'
import ContactPage from './ContactPage/ContactPage'
import ContactForm from './ContactForm/ContactForm'

class App extends Component  {
  
  renderRoutes(){
    return (
      <div className='App'>
        <Switch>       
          <Route
              exact
              path='/'
              component={LandingPage}
          />
          <Route
              path='/find-meal'
              component={FindAMeal}
          />
          <Route
              path='/contact'
              component={ContactPage}
          />
          <Route 
              path='/contact-form'
              component={ContactForm}
          />
        </Switch>
      </div>
    );
  }

  render(){
  return (
    <div>
      <Nav />
      <main className='main-container'>
        
        {this.renderRoutes()}
      </main>      

    </div>

  );
}}

export default App;
