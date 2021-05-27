import React from 'react'

import './ResultCard.css'

function ResultCard(props) {
    return (
        <div>
            <div className='meal-card'>
                <p>{props.restaurant}
                    <br />
                    <br />{props.meal_name}
                    <br />{props.description}
                    <br />{props.location}
                    <br />{props.park}
                    <br />{props.price}
                    <br />
                    <br />Vegan: {props.vegan}
                    <br />Vegetarian: {props.vegetarian}
                    <br />Gluten Free: {props.gluten_free}
                </p>
            </div>
        </div>
    )
}


export default ResultCard