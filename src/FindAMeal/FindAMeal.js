import React, { Component } from 'react'
import MealsContext from '../mealsContext'
import './FindAMeal.css'

import AK from '../images/ak.png'
import MK from '../images/mk.png'
import HS from '../images/hs.png'
import Epcot from '../images/epcot.png'

// import ResultsList from '../ResultsList/ResultsList'
import ResultCard from '../ResultCard/ResultCard'

class FindAMeal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            filteredMeals: [],
            filteredByLocation: [],
            filteredByDiet: [],
        }
    }

    static contextType = MealsContext

    handleLocationFilter = (e) => {
        let filteredByLocation
               
        if (e.target.value === 'all') {
            filteredByLocation = this.context.meals
        }
        else {
            filteredByLocation = this.context.meals.filter(meal => meal.meal_location === e.target.value)
        }
        this.setState({
            filteredByLocation: filteredByLocation,
            filteredMeals: filteredByLocation,
            
        })
    }

    render() {
        const { filteredMeals } = this.state
        const sortedMeals = [...filteredMeals].sort((a, b) => a.meal_location.localeCompare(b.meal_location))
        return (
            <div className='find-a-meal-container'>
                <div className='filter'>
                    <h1 className='page-heading'>Find Your Meal</h1>
                    <h2 className='find-meal-subheading'>Choose Your Location To Get Started</h2>
                    <div className='park-selection-container'>
                        <div className='park-btns'>

                            <button 
                                className='all-park-btn' 
                                value='all' 
                                onClick={this.handleLocationFilter}>
                                    Show All
                            </button>

                            <button 
                                className='park-btn' 
                                value='Magic Kingdom' 
                                onClick={this.handleLocationFilter}>
                                    <img src={MK} alt='magic kingdom logo' className='mk-image' />
                                    Magic Kingdom
                            </button>
                            <button 
                                className='park-btn' 
                                value="Epcot" 
                                onClick={this.handleLocationFilter}>
                                    <img src={Epcot} alt='animal kingdom logo' />
                                    Epcot
                            </button>
                            <button 
                                className='park-btn' 
                                value="Hollywood Studios" 
                                onClick={this.handleLocationFilter}>
                                    <img src={HS} alt='animal kingdom logo' />
                                    Hollywood Studios
                            </button>
                            <button 
                                className='park-btn' 
                                value='Animal Kingdom' 
                                onClick={this.handleLocationFilter}>
                                    <img className='ak-image' src={AK} alt='animal kingdom logo' />
                                    Animal Kingdom
                            </button>
                        </div>

                    </div>

                </div>

                <div className='result-card-list' >
                    <section >
                        <ul className='results-container' aria-live='polite'>
                            {sortedMeals.map(meal =>
                                <ResultCard
                                    key={meal.id}
                                    {...meal}
                                />
                            )}
                        </ul>

                    </section>
                </div>
            </div>
        )
    }
}


export default FindAMeal