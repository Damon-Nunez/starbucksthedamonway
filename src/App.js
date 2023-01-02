import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
  Switch,
} from "react-router-dom";
import GiftCard from './components/GiftCard';
import Menu from './components/Menu';
import Home from './components/Home';
import Rewards from './components/Rewards';
function App() {
  return (
    <Router>
    <Routes>
      <Route  exact path='/' element= {<Home/>}/>
      <Route exact path='/menu' element = {<Menu/>}/>
      <Route exact path='/giftcard' element={<GiftCard/>}/>
      <Route exact path='/rewards' element = {<Rewards/>}/>
      </Routes>
  </Router>
  )
  
}

export default App;
