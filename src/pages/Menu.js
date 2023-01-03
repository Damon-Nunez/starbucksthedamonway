import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import { Products } from "../components/products";
import contents from "../content"
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