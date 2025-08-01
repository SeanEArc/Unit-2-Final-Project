
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import { UserContext } from '../UserContext';
import NotLoggedInNavBar from './NotLoggedInNavBar';
import { HealthyPlate  } from '../../assets/StockPhotos/stockPhotos'


// Log In Page Component

const LoginPage = () => {

      const [userInfo, setUserInfo] = useState([]);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);

      // Sets context as user and logged in for gloabl variables. 
      const { setUser, setIsLoggedIn, isLoggedIn } = useContext(UserContext);
      
      // useNavigate to redirect after login
      const navigate = useNavigate();

      const handleLogin = async (event) => {
            event.preventDefault();

            try {

                  const response = await fetch('http://localhost:8080/users/all', {
                        method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                  });

                  const data = await response.json();

                  for (let i = 0; i < data.length; i++) {
                        if (username === data[i].username && password === data[i].password) {
                              console.log(`User ${i} is logged in`);
                              setIsLoggedIn(true);
                              setUser(data[i]);
                              console.log(i)
                              console.log(foundUserIndex)
                              console.log(`Welcome ${data[i].name}`);
                              console.log(userInfo)
                              break;
                        } else {
                              setError('Invalid username or password');
                        }
                  }

            } catch (error) {
                  console.error('Error logging in:', error);
            }
      };

      useEffect(() => {

            if (isLoggedIn) {
                  navigate('/'); 
            }
      }, [isLoggedIn, navigate]);



      return (

            <div className="login-page">
                  <NotLoggedInNavBar/>

                  <div className='grid grid-cols-[60%_40%] max-w-[90%] items-center justify-center mx-auto border'>

                        <div className='mx-auto'>
                              <img src={HealthyPlate} alt='Healthy Plate'/>
                        </div>
                  
                        <div className=''>
                        <h1 class>User Login</h1>



                        <form onSubmit={handleLogin}>

                              <div>

                                    <label className='block'>
                                          Username:
                                          
                                    </label>

                                    <input type="text"
                                          value={username}
                                          placeholder='Required'
                                          onChange={(event) => setUsername(event.target.value)}
                                          required
                                          className='border px-2 py-1'> 
                                          </input>

                              </div>

                              <div>
                                    <label className='block'>
                                          
                                          Password:
                                          
                                          
                                    </label>
                                    <input type='password'
                                          value={password}
                                          placeholder='Required'
                                          onChange={(event) => setPassword(event.target.value)}
                                          required
                                          className='border px-2 py-1'>
                                          </input>
                              </div>
                              
                        {error && <p className="error text-red-300">{error}</p>}
                        
                                                      
                              <button type="submit">Login</button>
                        </form>

                        <Link to="/register">Register</Link>


                        </div>
                  </div>
                  
            </div>

      );
}

export default LoginPage;