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
                    <label htmlFor='location'>What park are you in?</label>
                    <br />
                    <button value='all' onClick={this.handleFilter}>All</button>
                    <button value='Magic Kingdom' onClick={this.handleFilter}>Magic Kingdom</button>
                    <button value="Epcot" onClick={this.handleFilter}>Epcot</button>
                    <button value="Hollywood Studios" onClick={this.handleFilter}>Hollywood Studios</button>
                    <button value='Animal Kingdom' onClick={this.handleFilter}>Animal Kingdom</button>



                </div>

                <div>
                    <section className='result-card-list'>
                        <ul className='jokes-container' aria-live='polite'>
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