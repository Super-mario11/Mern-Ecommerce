import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleGoogleLogin = () => {
    // Simulate a successful Google login
    const dummyUser = {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    history.push('/account'); // Redirect to account page
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
          <div className="divider"><span>OR</span></div>
          <button type="button" className="btn btn-google" onClick={handleGoogleLogin}>Continue with Google</button>
        </form>
        <div className="extra-links">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
