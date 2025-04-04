import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assest/css/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://54.251.220.228:8080/trainingSouls/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.code === 0 && data.result.success) {
        // Lưu token vào localStorage
        localStorage.setItem('token', data.result.token);
        // Chuyển hướng đến trang Home
        navigate('/');
      } else {
        // Xử lý lỗi đăng nhập
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-prompt">
          Don't have an account?{' '}
          <button className="signup-link" onClick={handleSignup}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;