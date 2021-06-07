import React from 'react'

const MealsContext = React.createContext({
    meals: [],
    locations: [],
    addMeals: () => {}
})

export default MealsContext
