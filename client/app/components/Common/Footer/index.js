/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: '/' },
    { id: 1, name: 'Sell With Us', to: '/' },
    { id: 2, name: 'Shipping', to: '/' }
  ];

  const footerLinks = infoLinks.map(item => (
    <li key={item.id}>
      <Link to={item.to}>{item.name}</Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <h3>Customer Service</h3>
            <ul>{footerLinks}</ul>
          </div>
          <div className='footer-block'>
            <h3>Links</h3>
            <ul>{footerLinks}</ul>
          </div>
          <div className='footer-block'>
            <h3>Newsletter</h3>
            <Newsletter />
          </div>
          <div className='footer-block'>
            <h3>Follow Us</h3>
            <div className='footer-social'>
              <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
                <i className='fa fa-facebook'></i>
              </a>
              <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='/#pinterest' rel='noreferrer noopener' target='_blank'>
                <i className='fa fa-pinterest'></i>
              </a>
              <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          © {new Date().getFullYear()} MERN Store. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
