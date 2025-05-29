import { useState, useEffect } from "react"
import { getTrackedFood, subscribeToFoodUpdates, formatNumber, addedItems, deleteFood, updateEntry} from './foodStorage';



const CalorieHistory = () => {

      const [trackedFood, setTrackedFood] = useState([]);
      const [editingIndex, setEditingIndex] = useState(null);
      const [editForm, setEditForm] = useState({ foodName: '', calories: '', protein: '', carbs: '', fat: ''});

      
      const totalCalories = addedItems(trackedFood, 'calories')
      const totalProtein = addedItems(trackedFood, 'protein')
      const totalCarbs = addedItems(trackedFood, 'carbs')
      const totalFat = addedItems(trackedFood, 'fat')


      // Updates trackedFood whenever addFood is used in Modal.jsx.
      useEffect(() => {
            setTrackedFood(getTrackedFood());
      
            const unsubscribe = subscribeToFoodUpdates((updatedFood) => {
                  setTrackedFood(updatedFood);
            });
            
            //Stops tracking of the item added to the array. 
            return unsubscribe;
      }, []);
      

      const handleDelete = (index) => {
            deleteFood(index);
      };

      const handleModify = (index) => {
            setEditingIndex(index)
            setEditForm(trackedFood[index])
      }
      
      const handleUpdate = () => {
      updateEntry(editingIndex, {
      ...editForm,
      calories: Number(editForm.calories),
      protein: Number(editForm.protein),
      carbs: Number(editForm.carbs),
      fat: Number(editForm.fat),
      });
      setEditingIndex(null);
      };


      return(
            
            <div className="flex w-full max-w-[90%] justify-center items-center mx-auto">
 
                  <div className="flex-auto grid grid-cols-[60%_40%] mt-10 ">

                        
                        
                        {trackedFood.length > 0 ? (
                        <div>
                              <h2 className="text-center">Logged Foods:</h2>
                              {trackedFood.map((food, index) => (
                                    <div key={index} className="border p-3 m-1 rounded col-span-1">

                                          <div className="grid grid-cols-2">

                                                <div className="flex-auto">
                                                      <h3 className="font-bold">{food.foodName}</h3>
                                                      <p>Calories: {food.calories}</p>
                                                      <h3> Macros:</h3>
                                                      {food.protein > 0 && <p>Protein: {food.protein}g</p>}
                                                      {food.carbs > 0 && <p>Carbs: {food.carbs}g</p>}
                                                      {food.fat > 0 && <p>Fat: {food.fat}g</p>}
                                                </div>


                                                <div className="grid grid-rows-2 items-center justify-center">

                                                      <button
                                                      onClick={() =>handleModify(index)}
                                                      className=" h-15 w-60 bg-gray-500 rounded hover:bg-gray-400"> Modify </button>
                                                

                                                      <div className="flex-auto content-center justify-center">

                                                      
                                                      <button                                        onClick={() => {
                                                      if(confirm("Are you sure you want to delete this food entry?")) {
                                                      handleDelete(index)}
                                                      }}

                                                      className="flex-auto h-15 w-60 bg-red-500 rounded hover:bg-red-400">
                                                      Delete
                                                      </button>
                                                      </div>
                                                </div>


                                                
                                          </div>
                                    
                                    
                                    
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
                                    <h2 className="text-center "> {formatNumber(totalCalories)} </h2>
                                    
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

                                    {editingIndex !== null && (
                        <div className="p-4 border rounded bg-gray-100 mt-4 col-span-2">
                        <h2 className="font-bold mb-2">Edit Food Entry</h2>
                        <input className="block mb-2 p-2 w-full" placeholder="Food Name" value={editForm.foodName} onChange={e => setEditForm({...editForm, foodName: e.target.value})} />
                        <input className="block mb-2 p-2 w-full" placeholder="Calories" type="number" value={editForm.calories} onChange={e => setEditForm({...editForm, calories: e.target.value})} />
                        <input className="block mb-2 p-2 w-full" placeholder="Protein" type="number" value={editForm.protein} onChange={e => setEditForm({...editForm, protein: e.target.value})} />
                        <input className="block mb-2 p-2 w-full" placeholder="Carbs" type="number" value={editForm.carbs} onChange={e => setEditForm({...editForm, carbs: e.target.value})} />
                        <input className="block mb-2 p-2 w-full" placeholder="Fat" type="number" value={editForm.fat} onChange={e => setEditForm({...editForm, fat: e.target.value})} />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleUpdate}>Save</button>
                        <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setEditingIndex(null)}>Cancel</button>
                        </div>
                        )}


                              </div>
                        </div>
                  </div>

            </div>
      )
}

export default CalorieHistory