import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';

// components import
import Home from './components/Home'
import Checkout from './components/Checkout';
import Login from './components/Login';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/checkout' element = {<Checkout/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/' element = {<Home/>} />
      </Routes>
    </div>
  );
}

export default App;