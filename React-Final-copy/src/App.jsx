
import './index.css'
import HomePage from './components/HomePage'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';

import CalorieHistory from './components/CalorieHistory'
import TopOfPage from './components/TopOfPage'
import HowItWorks from './components/HowItWorks'

const App = () => {

  const handleAddEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
    console.log("Entry added:", newEntry); 
  };

  return (

      <div className='App'>
        <BrowserRouter>


            <TopOfPage onSubmitEntry={handleAddEntry}/>
            
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/CalorieHistory'element={<CalorieHistory/>}/>
            <Route path='/HowItWorks' element={<HowItWorks/>}/>
          </Routes>


          <Footer/>
          
        </BrowserRouter>
        </div>


  )
}

export default App
