import React from 'react'
import RestrictionsIcons from '../RestrictionsIcons/RestrictionsIcons'

import './ResultCard.css'

function ResultCard(props) {
    return (
        <div>
            <div className='meal-card'>
                <p>{props.restaurant_name}
                    <br />
                    <br />{props.meal_name}
                    <br />{props.meal_description}
                    <br />{props.meal_location}
                    <br />${props.price}
                    <br />
                    
                </p>
                <RestrictionsIcons 
                    is_vegan={props.is_vegan}
                    is_vegetarian={props.is_vegetarian}
                    is_glutenfree={props.is_glutenfree}
                />
            </div>
        </div>
    )
}


export default ResultCard