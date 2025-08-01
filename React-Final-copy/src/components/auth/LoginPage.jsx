
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import { UserContext } from '../UserContext';
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

            <div className="login-page mt-25">

                  <div className='grid grid-cols-[60%_40%] max-w-[80%] items-center justify-center mx-auto border'>

                        <div className='mx-auto'>
                              <img src={HealthyPlate} alt='Healthy Plate'/>
                        </div>
                  
                        <div className='border md:min-w-[80%] mx-auto'>

                              <h1 className='pb-5'>User Login</h1>



                              <form onSubmit={handleLogin}>

                                    <div className='pt-2 pb-2 mb-1'>

                                          <label className='block text-lg'>
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

                                    <div className='pt-1 pb-1'>
                                          <label className='block text-lg'>
                                                
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

                                    <div className='font-semibold'>
                                          {error && <p className="error text-red-500">{error}</p>}
                                    </div>

                                    <div className='mt-4'>
                                          <button 
                                          type="submit"
                                          className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-[25%] text-center shadow-lg'>Login</button>
                                    </div>

                                    <div>
                                    
                                    <p className='font-medium'> Don't have an account? </p>

                                    <Link to="/register"
                                    className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-[25%] text-center inline-block shadow-lg'> Create an account </Link>

                                    </div>
                              </form>




                        </div>
                  </div>
                  
            </div>

      );
}

export default LoginPage;