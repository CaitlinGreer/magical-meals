import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import config from './config'
import MealsContext from './mealsContext';
import './App.css'

import Nav from './Nav/Nav' //NavBar
import LandingPage from './LandingPage/LandingPage' //Home page containing header and footer
import FindAMeal from './FindAMeal/FindAMeal' //meal search
// import ResultsList from './ResultsList/ResultsList'
import ContactPage from './ContactPage/ContactPage' //contact landing page
import ContactForm from './ContactForm/ContactForm' //contact form


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: [],
      filteredMeals: []
    }
  }

  componentDidMount() {
    this.fetchAllData()
  }

  fetchAllData = () => {
    Promise.all([
      this.fetchMeals(),
    ])
      .then(([meals]) => {
        this.setState({
          meals
        })
      })
      .catch(error => {
        this.setState({ error })
         
      })
  }

  fetchMeals = () => {
    return fetch(`${config.API_ENDPOINT}/meals`)
      .then(res => res.json())
  }

  addMeals = meal => {
    this.setState({
      meals: [...this.state.meals, meal]
    })
  }




  renderRoutes() {
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

  render() {
    const value = {
      meals: this.state.meals,
      fetchMeals: this.fetchAllData,
    }
    return (
      <MealsContext.Provider value={value}>
        <div>
          <Nav />
          <main className='main-container'>
            {this.renderRoutes()}
          </main>
        </div>
      </MealsContext.Provider>
    );
  }
}

export default App;
