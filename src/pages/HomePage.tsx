import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Multi-Form Booking</h1>
      <nav>
        <ul>
          <li><Link to="/flight-booking-form">Flight Booking</Link></li>
          <li><Link to="/real-estate-8989-hacienda-ln">Real Estate Viewing</Link></li>
          <li><Link to="/book-haircut">Haircut Booking</Link></li>
        </ul>
      </nav>
    </div>
  );
};
