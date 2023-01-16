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
import GiftCard from './pages/GiftCard';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import { HotTea } from './pages/HotTea';
function App() {
  return (
    <Router>
    <Routes>
      <Route  exact path='/' element= {<Home/>}/>
      <Route exact path='/menu' element = {<Menu/>}/>
      <Route exact path='/giftcard' element={<GiftCard/>}/>
      <Route exact path='/rewards' element = {<Rewards/>}/>
      <Route exact path='/menu/HotTea' element = {<HotTea/>}/>
      </Routes>
  </Router>
  )
  
}

export default App;
