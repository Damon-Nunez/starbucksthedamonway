import React from "react";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
 const HotTea = () => {
    return (
        <div>
            <Navbar/>
            <div className="BigContainer">
            <Container>
                <Row>
                    <Col md ="3">
               <ul className="SideMenu">
               <h1 className="MenuSection"> Drinks</h1>
                <Link to = "/menu"><li className="item"> Hot Coffees</li></Link>
                <Link to= "/menu/HotTea"><li className="item"> Hot Teas</li></Link>
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
               </Col>
               <Col md = "9">
                <div>
                    <header className="MiniSectionName"> Hot Tea</header>
                </div>
               <Row>
               <div className="box">
                            <a href="">
                                <img className="HCImage" src="">

                                </img>
                            </a>
                            <h1 className="caption"> </h1>
                        </div>
               </Row>
               </Col>
                </Row>
               </Container>
               </div>
               <TopFooter/>
               </div>
            
               

    )
}
export default HotTea;