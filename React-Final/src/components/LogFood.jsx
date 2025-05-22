import Modal from "./Modal"
import { useState } from "react"

const LogFood = () => {
      const [showModal, setShowModal] = useState(false)

      return (

      <div className='grid grid-cols-9 grid-rows-10 flex-auto'>

        <h1 className="col-start-4 col-end-7 row-start-2 text-4xl font-bold mb-4 text-center">Dashboard</h1>
        <button
          className="col-start-3 col-end-5 row-start-3 row-end-8 h-full bg-blue-500 rounded text-white"
          onClick={() => setShowModal(true)}
        >
          Log Calories
        </button>
        <button className="col-start-6 col-end-8 row-start-3 row-end-8 h-full bg-blue-500 rounded text-white">
          Calorie History
        </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
            
      )
  }

export default LogFood