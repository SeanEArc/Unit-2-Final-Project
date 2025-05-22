
import './index.css'
import HomePage from './components/HomePage'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CalorieHistory from './components/CalorieHistory'
import TopOfPage from './components/TopOfPage'
import HowItWorks from './components/HowItWorks'

const App = () => {

  return (
        <BrowserRouter>
          <div>
            <TopOfPage/>
            
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/CalorieHistory'element={<CalorieHistory/>}/>
            <Route path='/HowItWorks' element={<HowItWorks/>}/>
          </Routes>
          </div>
        
        </BrowserRouter>

  )
}

export default App
