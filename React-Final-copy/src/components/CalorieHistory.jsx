import { useState, useEffect } from "react"
import { getTrackedFood, subscribeToFoodUpdates } from './foodStorage';

const CalorieHistory = () => {

      const [trackedFood, setTrackedFood] = useState([])

      const totalCalories = trackedFood.reduce((acc, curr) => acc + curr.calories, 0)
      const totalProtein = trackedFood.reduce((acc, curr) => acc + curr.protein, 0)
      const totalCarbs = trackedFood.reduce((acc, curr) => acc + curr.carbs, 0)
      const totalFat = trackedFood.reduce((acc, curr) => acc + curr.carbs, 0)


      // Updates trackedFood whenever addFood is used in Modal.jsx.
      useEffect(() => {
            setTrackedFood(getTrackedFood());
      
            const unsubscribe = subscribeToFoodUpdates((updatedFood) => {
                  setTrackedFood(updatedFood);
            });
            
            //Stops tracking of the item added to the array. 
            return unsubscribe;
      }, []);

      return(
            <div>
                  {trackedFood.length > 0 ? (
                  <div>
                  <h3>Logged Foods:</h3>
                  {trackedFood.map((food, index) => (
                        <div key={index} className="border p-3 m-2 rounded">
                        <h4 className="font-bold">{food.foodName}</h4>
                        <p>Calories: {food.calories}</p>
                        {food.protein > 0 && <p>Protein: {food.protein}g</p>}
                        {food.carbs > 0 && <p>Carbs: {food.carbs}g</p>}
                        {food.fat > 0 && <p>Fat: {food.fat}g</p>}
                        </div>
                  ))}
                  </div>
                  ) : (
                  <div> 
                  <h2 className="flex-auto text-center font-bold">Log a food item to get started!</h2>
                  </div>
                  )}

                  <div>

                       <h1>Total Calories Consumed: {totalCalories} </h1> 
                       <h1>Total Macro's: </h1>
                       <ul>
                        <li>
                              Protein: {totalProtein}
                        </li>
                        <li>
                              Carbs: {totalCarbs}
                        </li>
                        <li>
                              Fats: {totalFat}
                        </li>
                       </ul>
                       
                       



                  </div>
                  
            </div>
      )
}

export default CalorieHistory