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
import HotTea from './MenuChoices-Coffee/HotTea'
import { ColdCoffees } from './MenuChoices-Coffee/ColdCoffees';
import { ColdDrinks } from './MenuChoices-Coffee/ColdDrinks';
import Frappuccinos from './MenuChoices-Coffee/Frappuccinos';
import HotDrinks from './MenuChoices-Coffee/HotDrinks';
import { IcedTeas } from './MenuChoices-Coffee/Iced Teas';
import Bakery from './MenuChoices--Food/Bakery';
import HotBreakfast from './MenuChoices--Food/HotBreakfast';
import Lunch from './MenuChoices--Food/Lunch';
import OatmealandYogurt from './MenuChoices--Food/OatmealandYogurt';
import SnacksandSweets from './MenuChoices--Food/SnacksandSweets';
import Ground from './MenuChoices-AtHomeCoffee/Ground';
import VIAInstant from './MenuChoices-AtHomeCoffee/VIAInstant';
import WholeBean from './MenuChoices-AtHomeCoffee/WholeBean';
import ColdCups from './MenuChoices-Merchandise/ColdCups';
import Mugs from './MenuChoices-Merchandise/Mugs';
import Other from './MenuChoices-Merchandise/Other';
import Tumblers from './MenuChoices-Merchandise/Tumblers';
import WaterBottles from './MenuChoices-Merchandise/WaterBottles';

function App() {
  return (
    <Router>
    <Routes>
      <Route  exact path='/' element= {<Home/>}/>
      <Route exact path='/menu' element = {<Menu/>}/>
      <Route exact path='/giftcard' element={<GiftCard/>}/>
      <Route exact path='/rewards' element = {<Rewards/>}/>
      //Hot Coffee Section
      <Route exact path='/menu/HotTea' element = {<HotTea/>}/>
      <Route exact path='/menu/IcedTeas' element = {<IcedTeas/>}/>
      <Route exact path='/menu/HotDrinks' element = {<HotDrinks/>}/>
      <Route exact path='/menu/Frappucinos' element = {<Frappuccinos/>}/>
      <Route exact path='/menu/ColdDrinks' element = {<ColdDrinks/>}/>
      <Route exact path='/menu/ColdCoffees' element = {<ColdCoffees/>}/>
      //Food Section
      <Route exact path='/menu/Bakery' element = {<Bakery/>}/>
      <Route exact path='/menu/HotBreakfast' element = {<HotBreakfast/>}/>
      <Route exact path='/menu/Lunch' element = {<Lunch/>}/>
      <Route exact path='/menu/OatmealandYogurt' element = {<OatmealandYogurt/>}/>
      <Route exact path='/menu/SnacksandSweets' element = {<SnacksandSweets/>}/>
      //AtHomeCoffee
      <Route exact path='/menu/Ground' element = {<Ground/>}/>
      <Route exact path='/menu/VIAInstant' element = {<VIAInstant/>}/>
      <Route exact path='/menu/WholeBean' element = {<WholeBean/>}/>
      //Merchandise
      <Route exact path='/menu/ColdCups' element = {<ColdCups/>}/>
      <Route exact path='/menu/Mugs' element = {<Mugs/>}/>
      <Route exact path='/menu/Other' element = {<Other/>}/>
      <Route exact path='/menu/Tumblers' element = {<Tumblers/>}/>
      <Route exact path='/menu/WaterBottles' element = {<WaterBottles/>}/>
      </Routes>
  </Router>
  )
  
}

export default App;
