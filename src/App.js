import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import GiftCard from './components/GiftCard';
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  return (
      <Navbar/>
  );
}

export default App;
