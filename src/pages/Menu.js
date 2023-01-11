import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "./Menu.css"
import { Row, Col, Grid } from 'react-bootstrap';
// This file is meant to render all the prop values through the reciever names(Line 13-20 names)
// and getting the values in the prop value bank(contents.whatever)
const Menu = () => {
    return (
        <div>
            <Navbar/>
            <header className="SectionName"> Drinks</header>
            <h1 className="MiniSectionName"> Hot Coffee</h1>
               <ul className="SideMenu">
                <h1 className="MenuSection"> Drinks</h1>
                <li className="item"> Hot Coffees</li>
                <li className="item"> Hot Teas</li>
                <li className="item"> Hot Drinks</li>
                <li className="item"> Frappuccinos</li>
                <li className="item"> Cold Coffees</li>
                <li className="item"> Iced Teas</li>
                <li className="item"> Cold Drinks</li>
                <h1 className="MenuSection"> Foods</h1>
                <li className="item"> Hot Breakfast</li>
                <li className="item"> Bakery</li>
                <li className="item"> Lunch</li>
                <li className="item"> Snacks and Sweets</li>
                <li className="item"> Oatmeal and Yogurt</li>
                <h1 className="MenuSection"> At Home Coffee</h1>
                <li className="item"> Whole Bean</li>
                <li className="item"> Ground</li>
                <li className="item"> VIA Instant</li>
                <h1 className="MenuSection"> Merchandise</h1>
                <li className="item"> Cold Cups</li>
                <li className="item"> Tumblers</li>
                <li className="item">Mugs</li>
                <li className="item">Water Bottles</li>
                <li className="item"> Other </li>
               </ul>
               <div>
                <header className="SectionName"> Foods</header>
               </div>
               <div>
                <header className="SectionName"> At Home Coffees</header>
               </div>
               <div>
                <header className="SectionName"> Merchandise</header>
               </div>
            <TopFooter/>
        
        </div>
    )
}

export default Menu