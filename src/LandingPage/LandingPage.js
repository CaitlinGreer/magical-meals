import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className='home-page-container'>
                    <Header />

                    <div className='main-page-container' id='main-page-container'>
                        <div className='welcome-info'>
                            <h3 className='info-heading'>Let Us Make Finding Meals At Disney World Easy</h3>
                            <p>Disney World is full of amazing food, but finding the right options for vegan, vegetarian or
                            gluten free diets can often times be difficult.
                            </p>

                            <p>The last thing anyone wants to spend time doing on their vacation
                            is figuring out where to eat.  Especially when you've got certain dietary restrictions.
                            </p>

                            <p>Magical Meals is here to help simplify that process and make it easy to find
                            the food you love without sacrificing any of the magic.  Get started by clicking <Link to='/find-meal' className='p-link'>here</Link>
                             or on Find A Meal in the menu above!
                            </p>
                        </div>


                        <div className='share-info-container'>
                            <div className='share-info'>
                                <h3 className='info-heading'>Help Us Help You!</h3>
                                <p>If you know of a meal we missed head on over to our <Link to='/contact' className='p-link'>contact</Link>
                                page and the meal you share will magically appear on our list!
                                </p>
                            </div>
                        </div>
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