import React, { useState }  from 'react';
import axios from 'axios';
import './style.css';


const Index = ( {setToken} ) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hiring-test-task.vercel.app/api/login', {
        username: username,
        password: password,
      });
      const token = response.data.token;
      setToken(token);
      console.log(token);
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  return (
    <div className='login-screen'>
      <form onSubmit={handleLogin}>
      <h1><span>c</span><span className='c-to-o'>c</span>ript</h1>
        <div className="input">
        <label htmlFor="name">Username</label>
        <input id='name' type="text" placeholder='Enter Username' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className="input">
        <label htmlFor="password">Password</label>
        <input id='password' type="text" placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button>Sign In</button>
      </form>
    </div>
    
  )
}


export default Index
