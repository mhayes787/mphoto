import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Home from './Components/Home/home';
import About from './Components/About/about';
import Header from './Components/Header/header';



function App() {
  return (
    <div className="App">
      <div><Header /></div>
      <Router>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />


      </Router>
    </div>
  );
}

export default App;
