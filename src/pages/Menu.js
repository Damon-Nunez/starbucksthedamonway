import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "./Menu.css"

// This file is meant to render all the prop values through the reciever names(Line 13-20 names)
// and getting the values in the prop value bank(contents.whatever)
const Menu = () => {
    return (
        <div>
            <Navbar/>
            <div id="TheSideSection">
            <header className="SectionName"> Drinks</header>
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
                <li className="item"> </li>
                <li className="item"></li>
                <li className="item"></li>
                <li className="item"></li>
                <li className="item"></li>
               </ul>
               </div>
               <div>
                <header className="SectionName"> Food</header>
               </div>
               <div>
                <header className="SectionName"> At Home Coffees</header>
               </div>
               <div>
                <header className="SectionName"> Merchandise</header>
               </div>
               <div>
                <header className="SectionName"> Gift Cards</header>
               </div>
            <TopFooter/>
        
        </div>
    )
}

export default Menu