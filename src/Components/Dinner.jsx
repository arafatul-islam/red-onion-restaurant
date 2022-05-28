import React, { useContext } from 'react'
import { MealContext } from '../Contexts/MealsProvider'
import ShowFoods from './ShowFoods'

const Dinner = () => {
  const allMealItems = useContext(MealContext)
  const dinnerItems = allMealItems.filter((meal) => meal.type === 'dinner')
  return <ShowFoods key={Math.random()} food={dinnerItems} />
}
// ;
export default Dinner
