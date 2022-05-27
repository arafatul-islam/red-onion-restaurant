import React, { useContext } from 'react'
import { MealContext } from '../Contexts/MealsProvider'
import ShowFoods from './ShowFoods'
const Launch = () => {
  const mealItems = useContext(MealContext)
  const launchItems = mealItems.launch

  return <ShowFoods key={Math.random()} food={launchItems} />
}

export default Launch
