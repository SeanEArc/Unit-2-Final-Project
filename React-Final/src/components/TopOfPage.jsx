import Modal from "./Modal"
import { useState } from "react"

const TopOfPage = () => {

      const [showModal, setShowModal] = useState(false)
      
      return (
            <div className="grid grid-cols-5 flex-auto text-center bg-cyan-100 font-bold ">
                  <h1 className="flex-auto col-span-5 text-3xl text-center font-bold p-2  bg-cyan-200 "> Calorie Calculator </h1>
                  
                  <button className="col-start-2 hover:bg-cyan-200 p-0.5"
                  onClick={() => setShowModal(true)}> Log Calories </button>
                  


                  <button className="col-start-3 hover:bg-cyan-200 p-0.5"> How it works </button>
                  <button className="col-start-4 hover:bg-cyan-200 p-0.5"> Food History </button>
                  {showModal && <Modal onClose={() => setShowModal(false)} />}
            </div>
      )
}

export default TopOfPage