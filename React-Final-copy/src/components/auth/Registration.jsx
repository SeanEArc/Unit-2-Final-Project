
import { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {

      const getAllUsers = await fetch('http://localhost:8080/users/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const allUserData = await getAllUsers.json();

      if (username.length > 5 && password.length > 5) {
        setIsValid(true);
      }

      for (let i = 0; i < allUserData.length; i++) {
        if (username == allUserData[i].username) {
        console.log(`User ${i} is has the same name as this account ${allUserData[i]}`);
        console.log(allUserData[i])
        
        console.log(`This username is already taken, please try another one`);
        
        setError('This username is already taken, please try another one');
        setIsValid(false);
        return;
        }
      }

      if (isValid) {
        const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, password }),
      });
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