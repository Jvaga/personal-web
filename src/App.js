import React from 'react';
import './App.css';
import {HashRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Home from './pages';


function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact element={<Home/>}  />
       
      </Switch>
    </Router>
  );
}

export default App;
