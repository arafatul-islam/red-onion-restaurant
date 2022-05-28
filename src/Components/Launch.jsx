import React, { useContext } from 'react'
import { MealContext } from '../Contexts/MealsProvider'
import ShowFoods from './ShowFoods'
const Launch = () => {
  const allMealItems = useContext(MealContext)
  const launchItems = allMealItems.filter((meal) => meal.type === 'launch')

  return <ShowFoods key={Math.random()} food={launchItems} />
}

export default Launch
