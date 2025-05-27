import React, { useRef } from "react";
import { useState } from 'react'
import { addFood } from './foodStorage'

const Modal = ({ onClose }) => {

  const modalRef = useRef();

  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("")
  const [protein, setProtein] = useState("")
  const [carbs, setCarbs] = useState("")
  const [fat, setFat] = useState("")

  const closeModal = (event) => {
    if(modalRef.current === event.target)
      onClose()
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const newItemLogged = {
      foodName: foodName,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat),
    };

    addFood(newItemLogged);
    
    // Clear form after submit
    setFoodName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");
    
    onClose();
    console.log(newItemLogged);
  };
      
  return (
    <div ref={modalRef} 
      onClick={closeModal}
      className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
      <div className="grid grid-row-6 bg-zinc-50 p-6 rounded-lg shadow-xl w-2/5 border">

       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Log Food </h2>

          <label className=""> Name of food:
            <input type="text"
            value={foodName}
            placeholder="Food item"
            onChange={(event) => setFoodName(event.target.value)}
            required
            className="underline nderline-offset-4 px-1"/>
          </label> 
          
          <label> Calories:  
            <input type="number"
            value={calories} 
            placeholder="Enter Calories"
            onChange={(event) => setCalories(event.target.value)}
            required/>
          </label>
          <h3 className="text-center font-bold"> Macro's </h3>

          <label> Protein
            <input type="number"
            value={protein}
            placeholder="Optional"
            onChange={(event) => setProtein(event.target.value)} />
          </label>
          
          <label> Carbs
            <input type="number"
            value={carbs}
            placeholder="Optional"
            onChange={(event) => setCarbs(event.target.value)} />
          </label>

          <label> Fats
            <input type="number"
            value={fat}
            placeholder="Optional"
            onChange={(event) => setFat(event.target.value)} />
          </label>

          <input type="submit" value="Submit" className="mx-4 px-4 py-1 bg-blue-500 text-white rounded"/>

        </form>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
        
      </div>
    </div>
  )
}

export default Modal;