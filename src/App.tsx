import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <HomePage/>
    </Router>
  );
}