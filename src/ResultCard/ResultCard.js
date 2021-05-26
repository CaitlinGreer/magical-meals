import React from 'react'

import './ResultCard.css'

function ResultCard(props){
        return (
            <div>
                <ul className='meal-card'>
                    <li key={props.id}>
                        <p>{props.restaurant}
                        <br />
                        <br />{props.meal_name}
                        <br />{props.description}
                        <br />{props.location}
                        <br />{props.park}
                        <br />{props.price}
                        </p>
                        
                    </li>
                </ul>
                

                
            </div>  
        )
    }


export default ResultCard