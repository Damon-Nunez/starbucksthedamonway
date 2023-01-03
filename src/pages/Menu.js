import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import { Frappuccino } from "../components/FrappucinoCard";
import {Macchiato} from "../components/MacchiatoCard";
import contents from "../FrappucinoMenu"
import productData from "../components/MacchiatoMenu"
import "./Menu.css"
// This file is meant to render all the prop values through the reciever names(Line 13-20 names)
// and getting the values in the prop value bank(contents.whatever)
const Menu = () => {
    return (
        <div>
            <Navbar/>
                <h1 className= "CoffeeSectionName"> Frappuccinos!</h1>
            {contents.map(contents => (
                    <Frappuccino 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        link = {contents.link}
                    />
                ))}
                <h1 className="CoffeeSectionName"> Lattes!</h1>
                
               <h1 className="CoffeeSectionName"> Macchiato!</h1>
               {productData.map(productData => (
                    <Macchiato
                    key={productData.id}
                    image={productData.image}
                    name={productData.name}
                    price={productData.price}
                    link = {productData.link}
                    />
               ))}
            <TopFooter/>
        
        </div>
    )
}

export default Menu