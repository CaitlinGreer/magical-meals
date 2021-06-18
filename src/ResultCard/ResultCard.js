import React, { useEffect } from 'react'
import RestrictionsIcons from '../RestrictionsIcons/RestrictionsIcons'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './ResultCard.css'

function ResultCard(props) {
    useEffect(() => {
        Aos.init({});
    })

    return (
        <div>
            <div className='individual-card' data-aos='slide-right'>
                <div className='location-restaurant-name'>
                    <div className='location'>{props.meal_location}</div>
                    <div className='restaurant-name'>{props.restaurant_name}</div>
                </div>
                <div className='mealname-price'>
                    <div className='meal-name'>{props.meal_name}</div>
                    <div className='price'>${props.price}</div>

                   
                </div>
                <div className='meal-description'>
                    <div className='description'>{props.meal_description}</div>
                </div>
                    

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