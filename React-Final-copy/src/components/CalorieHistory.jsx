import { useState, useEffect } from "react"
import { getTrackedFood, subscribeToFoodUpdates, formatNumber } from './foodStorage';


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
            
            <div className="flex w-full max-w-[90%] justify-center items-center mx-auto">
 
                  <div className="flex-auto grid grid-cols-[60%_40%] mt-10 ">
                        
                        {trackedFood.length > 0 ? (
                        <div>
                              <h2 className="text-center">Logged Foods:</h2>
                              {trackedFood.map((food, index) => (
                                    <div key={index} className="border p-3 m-1 rounded col-span-1">
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
                              <h2 className="flex flex-auto text-center font-bold"> Nothing has been logged yet </h2>
                        </div>
                        )}

                        <div className="flex-auto col-2 ml-4">

                              <h2 className="text-center "> Calculations </h2>

                              <div>
                                    <h2> Total Calories Consumed: </h2>
                                    <h2 className="text-center"> {formatNumber(totalCalories)} </h2>
                                    
                                    <h1>Total Macro's: </h1>
                                    <ul>
                                          <li>
                                                <h3>Protein: {totalProtein}</h3>
                                          </li>
                                          <li>
                                                <h3>Carbs: {totalCarbs} </h3>
                                          </li>
                                          <li>
                                                <h3>Fats: {totalFat}</h3>
                                          </li>
                                    </ul>


                              </div>
                        </div>
                  </div>

            </div>
      )
}

export default CalorieHistory