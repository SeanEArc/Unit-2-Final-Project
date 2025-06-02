import { useState, useEffect } from "react"
import { getTrackedFood, subscribeToFoodUpdates, formatNumber, addedItems, deleteFood, updateEntry} from './foodStorage';
import ConfirmationModal from "./ConfirmationModal";
import {BalancedMeal, Protein, Carbs, Fats} from '../assets/foodIcons/foodIcons'
import EditingForm from "./EditingForm";
import "./CalorieHistoryStyling.css";


const CalorieHistory = () => {

	const [trackedFood, setTrackedFood] = useState([]);
	const [editingIndex, setEditingIndex] = useState(null);
	const [editForm, setEditForm] = useState({ foodName: '', calories: '', protein: '', carbs: '', fat: ''});
	const [showConfirmationModel, setShowConfirmationModel] = useState(false)
	const [deleteIndex, setDeleteIndex] = useState(null);


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

	
	// Handle's delete entry
	const handleConfirmDelete = () => {
		if (deleteIndex !== null) {
			deleteFood(deleteIndex);
			setDeleteIndex(null);
		}
		setShowConfirmationModel(false);
	};
	

	// Set's values of UseState's.
	const handleModify = (index) => {
		setEditingIndex(index)
		setEditForm(trackedFood[index])
	}	

	// Send's info to js file to complete updating form, then closes the form.
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

	// Get's an image dependant on the foods Macros. If 2 food items are equal or all are zero, then the balanced meal image will display.
	const getFoodImage = (food) => {
		const { protein, carbs, fat } = food;

		if (protein < 1 && carbs < 1 && fat < 1) 
			return BalancedMeal;

		const allEqual = protein === carbs && carbs === fat;
		const twoEqual =
			protein === carbs || protein === fat || carbs === fat;

		if (allEqual || twoEqual) return BalancedMeal;

		if (protein > carbs && protein > fat) return Protein;
		if (carbs > protein && carbs > fat) return Carbs;
		if (fat > protein && fat > carbs) return Fats;

		return BalancedMeal;
	};

	return(
		<div className="">
		
			<div className="history-container flex w-full max-w-[90%] justify-center items-center mx-auto mb-10">

				<div className="flex-auto grid md:grid-cols-[60%_40%] mt-10">
					
					{trackedFood.length > 0 ? (
					<div className="">
							<h2 className="text-center">Logged Foods:</h2>
							{trackedFood.map((food, index) => (
								<div key={index} className="food-entry border p-3 m-2 rounded col-span-1">
										
									<div className="grid grid-cols-[20%_50%_30%]">

										<div className="flex items-center justify-center">

											<img src={getFoodImage(food)}
											alt="Macro-Type"
											className="h-25 aspect-square mx-auto"/>

										</div>                                               
										
										<div className="grid grid-cols-2 flex-auto p-2">

											<div className="ml-5">
													
												<h2 className="">{food.foodName}</h2>
												<p>Calories: {food.calories}</p>

											</div>

											<div>

												<h2> Macros:</h2>
												{food.protein > 0 && <p> Protein: {food.protein}g</p>}
												{food.carbs > 0 && <p> Carbs: {food.carbs}g</p>}
												{food.fat > 0 && <p> Fats: {food.fat}g</p>}
												{food.protein < 1 && food.fat < 1 && food.carbs < 1 && (<p> Empty </p>)}

											</div>

										</div>


											<div className="food-buttons flex flex-col justify-center items-center gap-2">

												<button

													onClick={() =>handleModify(index)}

													className="w-full h-[40%] py-2 px-4 bg-gray-500 rounded text-lg font-semibold hover:bg-gray-400 hover:bg-gradient-to-b"> 
												
													Modify 
												</button>

												
												<button 
													onClick={() => {setDeleteIndex(index);
													setShowConfirmationModel(true);}}

													className="w-full h-[40%] py-2 px-4 text-lg rounded font-semibold bg-red-500 hover:bg-red-400">
													Delete
												</button>

													{showConfirmationModel && (
													<ConfirmationModal
													onClose={() => {
													setShowConfirmationModel(false);
													setDeleteIndex(null);}}
													onConfirm={handleConfirmDelete}/>)}

											</div>

									</div>
								
								</div>
							))}
					</div>
					) : (
					<div> 
						<h2 className="flex flex-auto text-center font-bold"> - Nothing has been logged yet - </h2>
					</div>
					)}

					<div className="flex flex-auto ml-4 col-2">

						<div className="col-start-1 mt-10">

							<div>
								<h1 className="text-center"> Total Calories Consumed: </h1>
							
								<h2 className="text-center m-2"> {formatNumber(totalCalories)} kcal </h2>

							</div>
							
							<div className="m-2 mt-10">
							
								<h1 className="text-center m-2">Total Macro's: </h1>

								<ul className="grid grid-cols-2 text-center">

									<li>
										<h2 className="p-1">Protein: {totalProtein}g </h2>
									</li>

									<li>
										<h2 className="p-1">Carbs: {totalCarbs}g </h2>
									</li>

									<li className="col-span-2">
										<h2 className="p-1">Fats: {totalFat}g </h2>
									</li>

								</ul>

							</div>

									{editingIndex !== null && (
									<EditingForm
										editForm={editForm}
										setEditForm={setEditForm}
										handleUpdate={handleUpdate}
										cancelEdit={() => setEditingIndex(null)}/>
									)}

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CalorieHistory