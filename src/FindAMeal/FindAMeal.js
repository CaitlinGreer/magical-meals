import React, { Component } from 'react'
import './FindAMeal.css'

import ResultsList from '../ResultsList/ResultsList'

class FindAMeal extends Component {

    render() {
        return (
            <div className='find-a-meal-container'>
                <div className='filter'>
                    <h1 className='page-heading'>Find Your Meal</h1>
                    <h2>Choose Your Location To Get Started</h2>
                       <form className='search-form'>
                            <label htmlFor='location'>What park are you in?</label>
                            <div className='options-button'>
                                <select className='options'>
                                    <option value='select-one' defaultValue>Select One</option>
                                    <option value='MagicKingdom'>Magic Kindgom</option>
                                    <option value='AnimalKingdom'>Animal Kindgom</option>
                                    <option value='HollywoodStudios'>Hollywood Studios</option>
                                    <option value='Epcot'>Epcot</option>
                                </select>
                                <button type='submit'>Find My Meals</button>
                            </div>
                        </form>
                </div>

                <div>
                    <ResultsList />
                </div>
            </div>
        )
    }
}


export default FindAMeal