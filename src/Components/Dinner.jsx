import React, { useContext } from 'react'
import { MealContext } from '../Contexts/MealsProvider'
import ShowFoods from './ShowFoods'

const Dinner = () => {
  const mealItems = useContext(MealContext)
  const dinnerItems = mealItems.dinner
  return <ShowFoods key={Math.random()} food={dinnerItems} />
}
// ;
export default Dinner
