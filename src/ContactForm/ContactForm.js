import React, { Component } from 'react'
import config from '../config'
import MealsContext from '../mealsContext'
import ValidationError from '../ValidationError'

import './ContactForm.css'

class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            meal_location: {
                value: ''
            },
            restaurant_name: {
                value: ''
            },
            meal_name: {
                value: ''
            },
            price: {
                value: ''
            },
            is_vegan: false,

            is_vegetarian: false,
            
            is_glutenfree: false

        }
    }

    static defaultProps = {
        history: {
            goBack: () => {}
        }
    }

    static contextType = MealsContext

    //onChange Functions

    updateMealLocation(meal_location){
        this.setState({
            meal_location: {
                value: meal_location
            }
        })
    }

    updateRestaurantName(restaurant_name){
        this.setState({
            restaurant_name: {
                value: restaurant_name
            }
        })
    }

    updateMealDescritpion(meal_description){
        this.setState({
            meal_description: {
                value: meal_description
            }
        })
    }

    updateMealName(meal_name) {
        this.setState({
            meal_name: {
                value: meal_name
            }
        })
    }

    updatePrice(price){
        this.setState({
            price: {
                value: price
            }
        })
    }

    updateIsVegan = () => {
        this.setState({
            is_vegan: !this.state.is_vegan
        })
    }

    updateIsVegetarian = () => {
        this.setState({
            is_vegetarian: !this.state.is_vegetarian
        })
    }

    updateIsGlutenfree = () => {
        this.setState({
            is_glutenfree: !this.state.is_glutenfree
        })
    }
    
    //FORM VALIDATORS
    validateParkSelection() {
        const parkSelection = this.state.meal_location.value.trim()
        if (parkSelection === 'null' ) {
            return '*Park Selection Is Required'
        }
    }
    validateInput() {
        const restaurantName = this.state.restaurant_name.value.trim() 
        if (restaurantName.length === 0) {
            return '*Field Is Required'
        }
    }

    validatePrice() {
        const price = this.state.price.value.trim()
        if (isNaN(price)) {
            return 'input must be a number'
        }
    }




    
    

    handleSubmit = event => {
        event.preventDefault()
        const { meal_location, restaurant_name, meal_name, meal_description, price, is_vegan, is_vegetarian, is_glutenfree } = this.state
        const newMeal = {
            meal_location: meal_location.value,
            restaurant_name: restaurant_name.value,
            meal_name: meal_name.value,
            meal_description: meal_description.value,
            price: price.value,
            is_vegan: is_vegan,
            is_vegetarian: is_vegetarian,
            is_glutenfree: is_glutenfree,
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMeal)
        }

        fetch(`${config.API_ENDPOINT}/meals`, requestOptions)
                .then(res => {
                if(!res.ok) {
                    throw new Error('Whoops!  Looks like something went wrong!  Try again later!')
                }
                return res.json()
            })
            .then(() => {
                this.props.history.goBack()
                this.context.fetchMeals()
            })
            .catch(error => {
                this.setState({error})
            })
    }


    render(){
        return (
            <div className="contact-form-container">
                <h1 className='page-heading'>Add A Meal</h1>
                <div >
                    <form onSubmit={e => this.handleSubmit(e)} className='contact-form'>
                        <fieldset className='contact-form-fieldset'>
                            <label htmlFor='meal-location' className='text-input-label'>Location:</label>
                                <select onChange={e => this.updateMealLocation(e.target.value)} className='meal-location-dropdown'>
                                    <option value='null' defaultValue>Select One</option>
                                    <option value='Magic Kingdom'>Magic Kindgom</option>
                                    <option value='Animal Kingdom'>Animal Kindgom</option>
                                    <option value='Hollywood Studios'>Hollywood Studios</option>
                                    <option value='Epcot'>Epcot</option>
                                </select> 
                                <ValidationError message={this.validateParkSelection()}/>                           
                                <label htmlFor='restaurant-name' className='text-input-label'>Restaurant Name:</label>
                                <input
                                    className='text-input' 
                                    type='text'
                                    id='restaurant-name' 
                                    name='restaurant-name'
                                    placeholder='Name of Restaurant'
                                    onChange={e => this.updateRestaurantName(e.target.value)}
                                    required
                                    >    
                                </input>     
                                <ValidationError message={this.validateInput()}/>                           
                                <label htmlFor='meal-name' className='text-input-label'>Meal Name:</label>
                                <input
                                    className='text-input' 
                                    type='text' 
                                    id='meal-name'
                                    name='meal-name'
                                    placeholder="Name of Meal/Snack"
                                    onChange={e => this.updateMealName(e.target.value)}
                                    required
                                    >    
                                </input>
                                <ValidationError message={this.validateInput()}/>
                                <label htmlFor='meal-descritpion' className='text-input-label'>Meal Description:</label>
                                <textarea
                                    className='description-text-input' 
                                    type='text' 
                                    id='meal-description'
                                    name='meal-description'
                                    placeholder="Meal Description"
                                    onChange={e => this.updateMealDescritpion(e.target.value)}
                                    required
                                    >    
                                </textarea>
                                <ValidationError message={this.validateInput()}/>
                                <label htmlFor='price' className='text-input-label'>Price:</label>
                                <div className='price-dollar-container'>
                                    <span className='dollar'>$</span>
                                    <input
                                        className='text-input' 
                                        type='number' 
                                        id='price'
                                        name='price'
                                        placeholder="0.00"
                                        onChange={e => this.updatePrice(e.target.value)}
                                        >
                                        
                                    </input> 
                                    <ValidationError message={this.validatePrice()}/>                                   
                                </div>


                                <div className='dietary-checkbox'>
                                    <label htmlFor='is_vegan'>Vegan</label>
                                    <input 
                                        className='checkbox'
                                        type='checkbox' 
                                        id='is_vegan'
                                        name='is_vegan'
                                        checked={this.state.is_vegan}
                                        onChange={this.updateIsVegan}
                                    >
                                    </input>
                                    <label htmlFor='vegetarian'>Vegetarian</label>
                                    <input
                                        className='checkbox' 
                                        type='checkbox' 
                                        id='vegetarian'
                                        name='vegetarian'
                                        checked={this.state.is_vegetarian}
                                        onChange={this.updateIsVegetarian}
                                    >
                                    </input>
                                    <label htmlFor='gluten-free'>Gluten Free</label>
                                    <input 
                                        className='checkbox'
                                        type='checkbox' 
                                        id='gluten-free'
                                        name='gluten-free'
                                        checked={this.state.is_glutenfree}
                                        onChange={this.updateIsGlutenfree}
                                    >
                                    </input>
                                </div>
                                <div className='submit-button-container'>
                                    <button type='submit' className='submit-button'>Submit</button>
                                </div>
                            
                        </fieldset>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactForm