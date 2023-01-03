import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import { Products } from "../components/products";
import contents from "../content"
// This file is meant to render all the prop values through the reciever names(Line 13-20 names)
// and getting the values in the prop value bank(contents.whatever)
const Menu = () => {
    return (
        <div>
            <Navbar/>
            {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        link = {contents.link}
                    />
                ))}
            
            <TopFooter/>
        
        </div>
    )
}

export default Menu