
import { data, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Log In Page Component

const LoginPage = () => {

      const [userInfo, setUserInfo] = useState([]);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      

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
                  console.log('Fetched users:', data);
                  console.log(`${data[0]} this is the username ${data[0].username} and this is the password ${data[0].password}`);

            } catch (error) {
                  console.error('Error logging in:', error);
            }
      };

      return (
            <div className="login-page">
                  <h1>Login Page</h1>

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
                        
                        <button type="submit" onClick={handleLogin}>Login</button>
                  </form>
                  <Link to="/register">Register</Link>
            </div>
      );
}

export default LoginPage;