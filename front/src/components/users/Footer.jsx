// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li>Contact Tunisian</li>
            <li>Receipts and refunds</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Tunisian Airlines</h3>
          <ul>
            <li>Bag and optional fees</li>
            <li>Customer service and contingency plans</li>
            <li>Conditions of carriage</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Tunisia</h3>
          <ul>
            <li>About us</li>
            <li>We're hiring! Join our team</li>
            <li>Investor relations</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal, privacy, copyright</h3>
          <ul>
            <li>Environmental, social and governance</li>
            <li>Combating human trafficking</li>
            <li>Browser compatibility</li>
            <li>Web accessibility</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Extras</h3>
          <ul>
            <li>Business programs</li>
            <li>Gift cards</li>
            <li>American Airlines credit card</li>
            <li>Trip insurance</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
