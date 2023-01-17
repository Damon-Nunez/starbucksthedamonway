import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Other = () => {
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
                <Link to= "/menu/HotDrinks"><li className="item"> Hot Drinks</li></Link>
               <Link to="/menu/Frappuccinos"> <li className="item"> Frappuccinos</li></Link>
              <Link to= "/menu/ColdCoffees"><li className="item"> Cold Coffees</li> </Link>
                <Link to = "/menu/IcedTeas"><li className="item"> Iced Teas</li> </Link>
                <Link to = "/menu/ColdDrinks"><li className="item"> Cold Drinks</li></Link>
                <h1 className="MenuSection"> Foods</h1>
                <Link to = "/menu/HotBreakfast"><li className="item"> Hot Breakfast</li></Link>
                <Link to = "/menu/Bakery"><li className="item"> Bakery</li></Link>
                <Link to="/menu/Lunch"><li className="item"> Lunch</li></Link>
                <Link to = "/menu/SnacksandSweets"><li className="item"> Snacks and Sweets</li></Link>
                <Link to= "/menu/OatmealandYogurt"><li className="item"> Oatmeal and Yogurt</li></Link>
                <h1 className="MenuSection"> At Home Coffee</h1>
                <Link to = "/menu/WholeBean"><li className="item"> Whole Bean</li></Link>
                <Link to="/menu/Ground"><li className="item"> Ground</li></Link>
                <Link to ="/menu/VIAInstant"><li className="item"> VIA Instant</li></Link>
                <h1 className="MenuSection"> Merchandise</h1>
                <Link to = "/menu/ColdCups"><li className="item"> Cold Cups</li></Link>
                <Link to = "/menu/Tumblers"><li className="item"> Tumblers</li></Link>
                <Link to ="/menu/Mugs"><li className="item">Mugs</li></Link>
                <Link to = "/menu/WaterBottles"><li className="item">Water Bottles</li></Link>
                <Link to = "/menu/Other"><li className="item"> Other </li></Link>
                </ul>
               </Col>
               <Col md = "9">
                <div>
                    <header className="MiniSectionName"> Other </header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123710/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/oMj6b1EbC-Kc0AGKD5p2S0-xExIlP3A91qLVChwr0Fw/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9tZWRp/YS5rYXJvdXNlbGwu/Y29tL21lZGlhL3Bo/b3Rvcy9wcm9kdWN0/cy8yMDE2LzA3LzI1/L3N0YXJidWNrc19i/b2R1bV9mcmVuY2hf/cHJlc3NfMTQ2OTQz/ODIxNl80MDNiZmZk/Yy5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> French Press </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123718/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/lA0MyeLC2m8r7J50A3Vg0aqIPldNWcGjoYD9O-omQEI/rs:fit:638:638:1/g:ce/aHR0cDovL2V6c2hv/cGV4LmNvbS9tZWRp/YS9jYXRhbG9nL3By/b2R1Y3QvY2FjaGUv/MS9zbWFsbF9pbWFn/ZS85ZGY3OGVhYjMz/NTI1ZDA4ZDZlNWZi/OGQyNzEzNmU5NS9z/L3Qvc3RhcmJ1Y2tz/X3BvdXItb3Zlcl9p/Y2VkX2NvZmZlZV9i/cmV3ZXJfMS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Pour Over  </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121746/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/0nvuijDSLBx0A88swAwsweuZpygoY1c3dFGiUFNge7w/rs:fit:680:680:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y2L2Yx/LzQ0L2Y2ZjE0NDY1/MmU2N2ZjOTc2NTdm/MmYyMzIwMjM3MWM4/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Small Shopping Bag </h1>
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

export default Other