import React from 'react';
import { Link } from 'react-router-dom';
import { formConfigs } from '../utils/form_configs';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Multi-Form Booking</h1>
      <nav>
        <ul>
          {Object.entries(formConfigs).map(([key, config]) => (
            <li key={key}>
              <Link to={`/${key}`}>{config.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
