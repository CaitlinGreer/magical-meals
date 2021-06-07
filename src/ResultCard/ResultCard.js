import React from 'react'

import './ResultCard.css'

function ResultCard(props) {
    return (
        <div>
            <div className='meal-card'>
                <p>{props.restaurant}
                    <br />
                    <br />{props.meal_name}
                    <br />{props.meal_description}
                    <br />{props.restaurant_name}
                    <br />{props.meal_location}
                    <br />${props.price}
                    <br />
                    <br />Vegan: {props.is_vegan}
                    <br />Vegetarian: {props.is_vegetarian}
                    <br />Gluten Free: {props.is_gluten_free}
                </p>
            </div>
        </div>
    )
}


export default ResultCard