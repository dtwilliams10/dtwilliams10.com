import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ProjectPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/projects" component={ProjectPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
        <Footer/>
      </Router>
    );
}

export default App;