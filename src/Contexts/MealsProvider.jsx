import React, { createContext } from 'react'
import meals from '../fake-data/meal'

export const MealContext = createContext()
const MealsProvider = ({ children }) => {
  const breakfast = meals.breakfast
  const launch = meals.launch
  const dinner = meals.dinner
  const allMealItems = [...breakfast, ...launch, ...dinner]
  console.log(allMealItems)
  return (
    <MealContext.Provider value={allMealItems}>{children}</MealContext.Provider>
  )
}

export default MealsProvider
