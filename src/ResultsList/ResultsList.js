import React, { Component } from 'react'

import ResultCard from '../ResultCard/ResultCard'
import DummyMeals from '../DummyMeals'

class ResultsList extends Component {
    render() {
        const meals = DummyMeals.map(meal => {
            return (
               <ResultCard 
                    key={meal.id} 
                    meal_name={meal.meal_name}
                    description={meal.meal_description}
                    restaurant={meal.restaurant_name}
                    park={meal.park_location}
                    price={meal.price}
                    vegan={meal.vegan}
                    vegetarian={meal.vegetarian}
                    gluten_free={meal.gluten_free}
                />     
            )
        })
        return (
            <div>
                {meals}
            </div>
        )
    }
}

export default ResultsList