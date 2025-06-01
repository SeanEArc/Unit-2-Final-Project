
import './index.css'
import Dashboard from './components/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import CalorieHistory from './components/CalorieHistory'
import TopOfPage from './components/TopOfPage'
import HowItWorks from './components/HowItWorks'

const App = () => {

  // Handles Quick Log
  const handleAddEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
    console.log("Entry added:", newEntry); 
  };

  return (

    <div className='App'>
      <BrowserRouter>


        <TopOfPage onSubmitEntry={handleAddEntry}/>
          
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/CalorieHistory'element={<CalorieHistory/>}/>
            <Route path='/HowItWorks' element={<HowItWorks/>}/>
            <Route path='/About' element={<AboutPage/>}/>
          </Routes>

        <Footer/> 

      </BrowserRouter>
    </div>

  )
}

export default App
