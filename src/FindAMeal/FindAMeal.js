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
            filteredByDiet: [],
        }
    }

    static contextType = MealsContext

    handleLocationFilter = (e) => {
        let filteredMeals

        if (e.target.value === 'all') {
            filteredMeals = this.context.meals
        }
        else {
            filteredMeals = this.context.meals.filter(meal => meal.meal_location === e.target.value)
        }
        this.setState({
            filteredMeals: filteredMeals
        })
    }

    handleDietFilter = (e) => {
        let filteredByDiet
        let filteredMeals = this.state.filteredMeals
        console.log(filteredMeals, 'state')

        if (e.target.value === 'vegan') {
            filteredByDiet = filteredMeals.filter(meal => meal.is_vegan === true)
            console.log('vegan', filteredByDiet)

        }
        if (e.target.value === 'vegetarian') {
            filteredByDiet = filteredMeals.filter(meal => meal.is_vegetarian === true)
            console.log('vegetarian', filteredByDiet)

        }
        if (e.target.value === 'glutenfree') {
            filteredByDiet = filteredMeals.filter(meal => meal.is_glutenfree === true)
            console.log('glutenfree', filteredByDiet)
        }
        this.setState({
            filteredMeals: filteredByDiet
        })
    }





    render() {
        const { filteredMeals } = this.state
        const sortedMeals = [...filteredMeals].sort((a,b) => a.meal_location.localeCompare(b.meal_location))
        return (
            <div className='find-a-meal-container'>
                <div className='filter'>
                    <h1 className='page-heading'>Find Your Meal</h1>
                    <h2>Choose Your Location To Get Started</h2>
                    <div className='park-selection-container'>
                        {/* <label htmlFor='location'>Choose A Location</label> */}
                        <div className='park-btns'>

                            <button className='all-park-btn' value='all' onClick={this.handleLocationFilter}>All</button>
                            <button className='park-btn' value='Magic Kingdom' onClick={this.handleLocationFilter}>
                                <span><img src={MK} alt='animal kingdom logo' /></span>
                                Magic Kingdom
                            </button>
                            <button className='park-btn' value="Epcot" onClick={this.handleLocationFilter}>
                                <span><img src={Epcot} alt='animal kingdom logo' /></span>
                                Epcot
                            </button>
                            <button className='park-btn' value="Hollywood Studios" onClick={this.handleLocationFilter}>
                                <span><img src={HS} alt='animal kingdom logo' /></span>
                                Hollywood Studios
                            </button>
                            <button className='park-btn' value='Animal Kingdom' onClick={this.handleLocationFilter}>
                                <span><img className='ak-image' src={AK} alt='animal kingdom logo' /></span>
                                Animal Kingdom
                            </button>
                        </div>

                    </div>
                    <div className='diet-filter-container'>
                        <label htmlFor='diet-filter-label' className='diet-filter-label'>Filter By:</label>
                        <div className='diet-filter-btns'>
                            <button className='diet-filter-btn' value='vegan' onClick={this.handleDietFilter}>Vegan</button>
                            <button className='diet-filter-btn' value='vegetarian' onClick={this.handleDietFilter}>Vegetarian</button>
                            <button className='diet-filter-btn' value='glutenfree' onClick={this.handleDietFilter}>Gluten Free</button>
                        </div>
                    </div>
                </div>

                <div className='result-card-list'>
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