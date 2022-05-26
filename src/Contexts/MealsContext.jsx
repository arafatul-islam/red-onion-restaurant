import React, { createContext } from 'react'

const MealContext = createContext()
const MealsContext = () => {
  return <MealContext.Provider>MealContext</MealContext.Provider>
}

export default MealsContext
