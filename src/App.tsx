import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/contact" />
        <Route path="/about" component={AboutPage}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  );
}