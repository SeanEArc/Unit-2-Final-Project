
import { data, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import App from '../../App';

// Log In Page Component

const LoginPage = () => {

      const [userInfo, setUserInfo] = useState([]);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [error, setError] = useState(null);
      const [showNavBar, setShowNavBar] = useState(true);

      
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
                              setUserInfo(data[i]);
                              console.log(`Welcome ${data[i].name}`);
                              console.log(userInfo)

                              break;
                        } else {
                              setError('Invalid username or password');
                        }
                  }

                  console.log(`${data[0]} this is the username ${data[0].username} and this is the password ${data[0].password}`);

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

                  <form>
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
                        
                        <button type="submit" onClick={handleLogin} >Login</button>
                  </form>

                  <Link to="/register">Register</Link>
                  
            </div>

      );
}

export default LoginPage;