import Modal from "./Modal"
import { useState } from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-zinc-50">

    <div className="flex w-full max-w-[90%] justify-center items-center mx-auto"> 

      <div className='grid grid-cols-9 grid-rows-10 flex-auto '>

        <h1 className="flex-auto col-start-4 col-end-7 row-start-2 text-6xl font-bold mb-4 text-center "> Dashboard</h1>

        <button
          className="flex-auto col-start-3 col-end-5 row-start-3 row-end-8 h-full bg-blue-400 rounded text-white font-bold shadow-2xl text-2xl p-1
          hover:bg-blue-500 hover:cursor-pointer hover:scale-105"
          onClick={() => setShowModal(true)}>
          Log Calories
        </button>

        <Link to="/CalorieHistory"
          className="flex flex-auto col-start-6 col-end-8 row-start-3 row-end-8 h-full bg-blue-400 rounded text-white font-bold shadow-2xl text-2xl p-1
         hover:bg-blue-500 hover:cursor-pointer hover:scale-105 items-center justify-center">
          Calorie History
        </Link>

        {showModal && <Modal onClose={() => setShowModal(false)} />}

      </div>
    </div>  
    </div>
  )
}

export default HomePage