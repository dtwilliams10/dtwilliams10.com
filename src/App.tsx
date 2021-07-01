import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

export default function App() {
  return (
    <Router>
      <Link to="/" component={HomePage}>Home</Link>
      <Link to="/about" component={AboutPage}>About</Link>
    </Router>
  );
}