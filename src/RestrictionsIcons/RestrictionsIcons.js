import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

class RestrictionsIcons extends Component {
    render() {
        let isVeganImage = ''
        let isVegetarianImage = ''
        let isGlutenfreeImage = ''

        if (this.props.is_vegan === true) {
            isVeganImage = <FontAwesomeIcon icon={faCheckSquare} alt='true' />
        } 
        if (!this.props.is_vegan) {
            isVeganImage = <FontAwesomeIcon icon={faTimesCircle} alt='false' />
        }

        if (this.props.is_vegetarian === true) {
            isVegetarianImage = <FontAwesomeIcon icon={faCheckSquare} alt='true' />
        } 
        if (!this.props.is_vegetarian) {
            isVegetarianImage = <FontAwesomeIcon icon={faTimesCircle} alt='false' />
        }

        if (this.props.is_glutenfree === true) {
            isGlutenfreeImage = <FontAwesomeIcon icon={faCheckSquare} alt='true' />
        } 
        if (!this.props.is_glutenfree) {
            isGlutenfreeImage = <FontAwesomeIcon icon={faTimesCircle} alt='false' />
        }

        return (
            <div>
                <div>
                    <br />Vegan: {isVeganImage}
                </div>
                <div>
                    <br />Vegetarian: {isVegetarianImage}
                </div>
                <div>
                    <br />Gluten Free: {isGlutenfreeImage}
                </div>

            </div>
        )
    }
}

export default RestrictionsIcons