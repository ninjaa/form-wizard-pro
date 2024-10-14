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
          {formConfigs.map((config) => (
            <li key={config.slug}>
              <Link to={`/${config.slug}`}>{config.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
