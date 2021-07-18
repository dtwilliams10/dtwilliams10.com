import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ProjectPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="body">
      <Header/>
      <HomePage/>
      <AboutPage/>
      <ProjectPage/>
      <ContactPage/>
      <Footer/>
    </div>
    );
}

export default App;