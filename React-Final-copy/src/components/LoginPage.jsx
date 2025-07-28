
import { data, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Log In Page Component

const LoginPage = () => {

      const [user, setUser] = useState([]);
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
                  console.log(data[3])

            } catch (error) {
                  console.error('Error logging in:', error);
            }
      };


      return (
            <div className="login-page">
                  <h1>Login Page</h1>

                  <form>
                  <div>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" required />
                  </div>
                  <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" required />
                  </div>
                  <button type="submit" onClick={handleLogin}>Login</button>
                  </form>
                  <Link to="/register">Register</Link>
            </div>
      );
}

export default LoginPage;