import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './signin.css';

function SignIn({ setUser }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/sign-in`, formData);
      const token = response.data.token;

      const userInfo = JSON.parse(atob(token.split('.')[1])).payload;
      setUser(userInfo);
      localStorage.setItem('token', token);

      navigate('/dashboard');
    } catch (err) {
      setErrorMessage(err.response?.data?.err || 'An error occurred during sign in');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign In</h1>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
        
        {errorMessage && <p style={{ color: 'red', marginTop: '15px' }} role="alert">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignIn;