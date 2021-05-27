import React, { Component } from 'react'

import './ContactForm.css'

class ContactForm extends Component {
    render(){
        return (
            <div className="contact-form-container">
                <h1 className='page-heading'>Contact Us</h1>
                <div >
                    <form className='contact-form'>
                        <fieldset className='contact-form-fieldset'>
                            <legend>Share A Meal</legend>
                            <label htmlFor='meal' className='text-input-label'>Meal Name:</label>
                                <input
                                    className='text-input' 
                                    type='text' 
                                    name='meal'
                                    placeholder="What's the name of the meal?"
                                    >    
                                </input>
                                <label htmlFor='meal' className='text-input-label'>Restaurant Name:</label>
                                <input
                                    className='text-input' 
                                    type='text' 
                                    name='Restaurant Name'
                                    placeholder='What restaurant is it at?'
                                    >    
                                </input>
                                <label htmlFor='meal' className='text-input-label'>Location:</label>
                                <input
                                    className='text-input' 
                                    type='text' 
                                    name='meal'
                                    placeholder='What park is it at?'
                                    >    
                                </input>
                                <div className='dietary-checkbox'>
                                    <label htmlFor='meal'>Vegan</label>
                                    <input 
                                        type='checkbox' 
                                        name='vegan'
                                    >
                                    </input>
                                    <label htmlFor='meal'>Vegetarian</label>
                                    <input 
                                        type='checkbox' 
                                        name='vegetarian'
                                    >
                                    </input>
                                    <label htmlFor='meal'>Gluten Free</label>
                                    <input 
                                        type='checkbox' 
                                        name='gluten-free'
                                    >
                                    </input>
                                </div>
                            <button type='submit' className='submit-button'>Submit</button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactForm