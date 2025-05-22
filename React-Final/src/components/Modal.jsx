import React from "react";
import { useState } from 'react'


const Modal = ({ onClose }) => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState(0)
  const [protien, setProtien] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [fat, setFat] = useState(0)
      
  return (
    <div className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
      <div className="grid grid-row-6 bg-zinc-50 p-6 rounded-lg shadow-xl w-2/5 border">
       <form>
        <h2 className="text-xl font-semibold mb-4 text-center">Log Food </h2>
        <label className=""> Name of food:
          <input type="text" value={foodName} placeholder="Food item" className="underline nderline-offset-4 px-1"/> 
          
        </label>
 
        <p> USER INPUT WILL BE PLACED HERE </p>

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
