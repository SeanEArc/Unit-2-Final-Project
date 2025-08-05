import './index.css'
import Dashboard from './components/Dashboard'
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import CalorieHistory from './components/CalorieHistory'
import TopOfPage from './components/TopOfPage'
import HowItWorks from './components/HowItWorks'
import LoginPage from './components/auth/LoginPage'
import Registration from './components/auth/Registration'
import UserDetails from './components/AccountDetails.jsx';
import AccountDetails from './components/AccountDetails.jsx';


  // WE NEED TO FIND A WAY TO GET NAVBAR TO DISPLAY IF USER IS LOGGED IN


const App = () => {

  // Handles Quick Log
  const handleAddEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
  };


  return (

    <div className='App'>

        {<TopOfPage onSubmitEntry={handleAddEntry}/>}

          
          <Routes>
            
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/calorieHistory'element={<CalorieHistory/>}/>
            <Route path='/howItWorks' element={<HowItWorks/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/accountDetails' element={<AccountDetails/>}/>
          </Routes>

        <Footer/> 

      
    </div>

  )
}

export default App
