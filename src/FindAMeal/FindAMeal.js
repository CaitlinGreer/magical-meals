import React, { Component } from 'react'
import MealsContext from '../mealsContext'
import './FindAMeal.css'

// import ResultsList from '../ResultsList/ResultsList'
import ResultCard from '../ResultCard/ResultCard'

class FindAMeal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            filteredMeals: []
        }
    }

    static contextType = MealsContext

    handleFilter = (e) => {
        // console.log('STATE', this.context.meals, 'LOCATION', e.target.value)
        let filteredMeals
        if (e.target.value === 'all') {
            filteredMeals = this.context.meals
        } else {
            filteredMeals = this.context.meals.filter(meal => meal.meal_location === e.target.value)
        }
        this.setState({
            filteredMeals: filteredMeals
        })
        console.log(filteredMeals)
    }

    render() {
        const { filteredMeals } = this.state
        return (
            <div className='find-a-meal-container'>
                <div className='filter'>
                    <h1 className='page-heading'>Find Your Meal</h1>
                    <h2>Choose Your Location To Get Started</h2>
                    <div className='park-selection-container'>
                        <label htmlFor='location'>Choose A Location</label>
                        <div className='park-btns'>
                            <button className='park-btn' value='all' onClick={this.handleFilter}>All</button>
                            <button className='park-btn' value='Magic Kingdom' onClick={this.handleFilter}>Magic Kingdom</button>
                            <button className='park-btn' value="Epcot" onClick={this.handleFilter}>Epcot</button>
                            <button className='park-btn' value="Hollywood Studios" onClick={this.handleFilter}>Hollywood Studios</button>
                            <button className='park-btn' value='Animal Kingdom' onClick={this.handleFilter}>Animal Kingdom</button>
                        </div>

                    </div>




                </div>

                <div className='result-card-list'>
                    <section >
                        <ul className='results-container' aria-live='polite'>
                            {filteredMeals.map(meal =>
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