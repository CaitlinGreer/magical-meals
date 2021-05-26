import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './LandingPage.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'

class LandingPage extends Component {
    render() {
        return (
            <div className='home-page-container'>
                <Header />

                <div className='main-page-container'  id='main-page-container'>
                <div className='welcome-info'>
                     <h3>Make finding your meals at Disney World easy</h3>
                    <p>The last thing anyone wants to spend time doing on their vacation 
                        is figuring out where to eat.  Especially when you've got certain dietary restrictions.
                    </p>
                    <p>Disney World is full of amazing food, but finding the right options for vegan, vegetarian or 
                        gluten free diets can often times be difficult.
                    </p>  
                    <p>Magical Meals is here to help simplify that process and make it easy to find 
                        the food you love without sacrificing any of the magic.
                    </p>
                </div>
               
                </div>
                <footer>
                    <Footer /> 
                </footer>
               
            </div>
        )
    }
}

export default LandingPage