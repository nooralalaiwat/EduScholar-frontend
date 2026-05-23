import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event){
    event.preventDefault()

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/sign-up`, formData);
      navigate('/sign-in');
    } catch (err) {
      setErrorMessage(err.response?.data?.err || 'An error occurred during sign up');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign Up</h1>
        
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
          
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        
        {errorMessage && <p style={{ color: 'red', marginTop: '15px' }} role="alert">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Signup;