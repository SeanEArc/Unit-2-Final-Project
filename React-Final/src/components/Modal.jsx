import React, { useEffect, useRef } from "react";
import { useState } from 'react'


const Modal = ({ onClose }) => {

  const modalRef = useRef();

  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState()
  const [protien, setProtien] = useState()
  const [carbs, setCarbs] = useState()
  const [fat, setFat] = useState()

  const closeModal = (event) => {
    if(modalRef.current === event.target)
      onClose()
  }


      
  return (
    
    <div ref={modalRef} 
      onClick={closeModal}
      className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
      <div className="grid grid-row-6 bg-zinc-50 p-6 rounded-lg shadow-xl w-2/5 border">
       <form className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Log Food </h2>

          <label className=""> Name of food:
            <input type="text"
            value={foodName}
            placeholder="Food item"
            onChange={(event) => setFoodName(event.target.value)}
            className="underline nderline-offset-4 px-1"/>
          </label> 
          
          <label> Calories:  
            <input type="number"
            value={calories} 
            placeholder="Enter Calories"
            onChange={(event) => setCalories(event.target.value)}/>
          </label>
          <h3 className="text-center font-bold"> Macro's </h3>

          <label> Protien
            <input type="number"
            value={protien}
            placeholder="Optional"
            onChange={(event) => setProtien(event.target.value)} />
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
