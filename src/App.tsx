import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import './App.css';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about" component={AboutPage}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  );
}