import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Your Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" className="form-control" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" placeholder="••••••••" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-control" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        <div className="extra-links">
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
