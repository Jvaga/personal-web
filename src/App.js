import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Home from './pages';


function App() {
  return (
    <Router =/test_repo">
      <Switch>
        <Route path='/' element={<Home/>} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
