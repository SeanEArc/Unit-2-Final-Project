
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import { UserContext } from '../UserContext';


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

                  foundUser = null;
                  foundUserIndex = null;
                  for (let i = 0; i < data.length; i++) {
                        if (username === data[i].username && password === data[i].password) {
                              console.log(`User ${i} is logged in`);
                              setIsLoggedIn(true);
                              setUser(data[i]);
                              foundUserIndex = i
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
                  <h1>Login Page</h1>

                  {error && <p className="error text-red-300">{error}</p>}

                  <form onSubmit={handleLogin}>
                        <div>

                              <label>
                                    Username:
                                    <input type="text"
                                    value={username}
                                    placeholder='Required'
                                    onChange={(event) => setUsername(event.target.value)}
                                    required
                                    className='border'> 
                                    </input>
                              </label>

                        </div>

                        <div>
                              <label>
                                    
                                    Password:
                                    <input type='password'
                                    value={password}
                                    placeholder='Required'
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                    className='border'>
                                    </input>
                                    
                              </label>
                        </div>
                        
                        <button type="submit">Login</button>
                  </form>

                  <Link to="/register">Register</Link>
                  
            </div>

      );
}

export default LoginPage;