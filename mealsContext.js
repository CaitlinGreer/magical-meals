import React from 'react'

const MealsContext = React.createContext({
    meals: [],
    addMeals: () => {}
})

export default MealsContext
