import Modal from "./Modal"
import { useState } from "react"
import { Link } from "react-router-dom"

const TopOfPage = () => {

      const [showModal, setShowModal] = useState(false)
      
      return (
            <div>
                  <div className="grid grid-cols-11 flex-auto text-center bg-cyan-100 font-bold ">
                        <Link to='/' className="flex-auto col-start-4 col-end-9 text-3xl text-center font-bold p-2 bg-cyan-100"> Calorie Calculator </Link> 
                  </div>
                  
                  <div className="grid grid-cols-5 flex-auto text-center bg-cyan-100 font-bold ">
                        <button className="flex-auto col-start-2 hover:bg-cyan-200 p-0.5"
                        onClick={() => setShowModal(true)}> Quick Log </button>

                        <Link to='/HowItWorks' className="flex-auto col-start-3 hover:bg-cyan-200 p-0.5"> How it works </Link>

                        <Link to='CalorieHistory' className="flex-auto col-start-4 hover:bg-cyan-200 p-0.5"> Food History </Link>

                        {showModal && <Modal onClose={() => setShowModal(false)} />}
                  </div>
            </div>
      )
}

export default TopOfPage