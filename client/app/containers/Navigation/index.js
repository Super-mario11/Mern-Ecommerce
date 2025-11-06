import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import categories from '../../data/categories.json';

import { WEBSITE_NAME } from '../../constants';
import CartIcon from '../../components/Common/Icon/CartIcon';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand" to="/">
            {WEBSITE_NAME}
          </NavLink>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories.map(category => (
                    <NavLink
                      key={category.id}
                      className="dropdown-item"
                      to={`/category/${category.name}`}
                    >
                      {category.name}
                    </NavLink>
                  ))}
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <div className="search-box">
                  <input type="text" placeholder="Search..." />
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                  Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link cart-icon">
                  <CartIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
