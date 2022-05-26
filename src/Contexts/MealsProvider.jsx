import React, { createContext } from 'react'
import meals from '../fake-data/meal'

export const MealContext = createContext()
const MealsProvider = ({ children }) => {
  return <MealContext.Provider value={meals}>{children}</MealContext.Provider>
}

export default MealsProvider
