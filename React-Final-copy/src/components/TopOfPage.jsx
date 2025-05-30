import Modal from "./Modal"
import { useState } from "react"
import { Link } from "react-router-dom"

const TopOfPage = ( ) => {

      const [showModal, setShowModal] = useState(false)
      
      return (
            <div>
                  
                  <div className="grid grid-cols-11 flex-auto text-center bg-cyan-100 font-bold min-w-[590px]">

                        <Link to='/' className="flex-auto col-start-4 col-end-9 text-4xl text-center font-bold pt-2 pb-2 bg-cyan-100"> Calorie Counter </Link> 

                  </div>
                        
                  <div className="grid grid-cols-5 flex-auto text-center bg-cyan-100 font-bold text-base border-b-2 border-gray-400 drop-shadow-md pb-0.5 min-w-[590px]">

                        <button className="flex-auto col-start-2 hover:bg-cyan-200 p-0.5 rounded"
                        onClick={() => setShowModal(true)}> Quick Log </button>

                        <Link to='/HowItWorks' className="flex-auto col-start-3 hover:bg-cyan-200 p-0.5 rounded"> How it works </Link>

                        <Link to='/CalorieHistory' className="flex-auto col-start-4 hover:bg-cyan-200 p-0.5 rounded"> Food History </Link>

                  </div>

                  {showModal && (<Modal onClose={() => setShowModal(false)}/>)}

            </div>
      )
}

export default TopOfPage