import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutPage from './pages/About';
import HomePage from './pages/Home'
import ProjectPage from './pages/Projects';
import ContactPage from './pages/Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('home page loads', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage/>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('about page loads', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('projects page loads', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('contact page loads', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
})
