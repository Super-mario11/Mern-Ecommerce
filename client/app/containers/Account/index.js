import React from 'react';
import { useHistory } from 'react-router-dom';

const Account = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div className="account-page">
      <div className="account-container">
        <h2>My Account</h2>
        <div className="account-details">
          <h3>User Information</h3>
          <div className="user-info">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
          </div>
        </div>
        <div className="order-history">
          <h3>Order History</h3>
          <ul className="order-list">
            <li>
              <span className="order-id">Order #12345</span>
              <span className="order-product">Gaming PC</span>
              <span className="order-price">$1500</span>
            </li>
            <li>
              <span className="order-id">Order #12346</span>
              <span className="order-product">Mechanical Keyboard</span>
              <span className="order-price">$120</span>
            </li>
          </ul>
        </div>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
