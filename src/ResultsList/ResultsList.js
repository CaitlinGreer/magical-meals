import React, { Component } from 'react'
import ResultCard from '../ResultCard/ResultCard'
import './ResultsList.css'
import MealsContext from '../mealsContext'


class ResultsList extends Component {
    static defaultProps = {
        meals: []
    }

    static contextType = MealsContext

    render() {
        const { meals } = this.context
        const sortedMeals = [...meals].sort((a,b) => a.park_location > b.park_location)
            return (
                <section className = 'result-card-list'>
                    <ul className='jokes-container' aria-live='polite'>
                        {sortedMeals.map(meal =>
                            <ResultCard 
                                key={meal.id} 
                                {...meal}
                            />
                        )}
                    </ul>
                    
                </section>
                  
            )
        }
}

export default ResultsList