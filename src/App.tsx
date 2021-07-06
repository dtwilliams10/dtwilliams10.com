import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

export default function App() {
  return (
    <Router>
      <Route path="/" component={HomePage}>Home</Route>
      <Route path="/about" component={AboutPage}>About</Route>
    </Router>
  );
}