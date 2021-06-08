import React from 'react'

const MealsContext = React.createContext({
    meals: [],
    filteredMeals: [],
    addMeals: () => {},
})

export default MealsContext
