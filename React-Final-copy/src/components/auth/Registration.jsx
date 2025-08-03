
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUserData, fetchGetData } from '../fetchUtils';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);


  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {

      const getAllUsers = await fetchGetData('http://localhost:8080/users/all');

      if (username.length >= 5 && password.length > 5) {
        setIsValid(true);
      } else {
        setError("Username or Password is not valid")
      }

      for (let i = 0; i < getAllUsers.length; i++) {
        if (username == getAllUsers[i].username) {
        console.log(`User ${i} is has the same name as this account ${getAllUsers[i]}`);
        console.log(getAllUsers[i])
        
        console.log(`This username is already taken, please try another one`);
        
        setError('This username is already taken, please try another one');
        setIsValid(false);
        return;
        }
      }

      if (isValid) {
  
      const postingUserData = await postUserData('http://localhost:8080/users/add', name, username, password)

      console.log ("User was created.")
      navigate('/login')
      }
            
    } catch (error) {
      setError(error.message);
    }
  };


  
  return (
    <div>
      
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>

        <label>
          Name:
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </label>

        <label>
          Username:
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </label>

        <label>
          Password:
            <input type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required />
        </label>

        <label>
          Confirm Password:
            <input type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" className='border'>Register</button>

      </form>

    </div>
  );
}

export default Registration;