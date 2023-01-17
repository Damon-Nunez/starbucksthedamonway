import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const OatmealandYogurt = () => {
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
                    <header className="MiniSectionName"> Oatmeal and Yogurt</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/301/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/2w3l-OF1AmnBAnl1yipPea5NgKRZHliKkyqEOAnjKvM/rs:fit:305:325:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy9kMjcxMmJh/ZmMxM2U0MjljODQy/NTIxZTI0OTE4MzU4/MC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Rolled & Steel- Cut Oatmeal </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122192/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/TVWnG_Lz29d28LfisHhP3EQTH4yiXuPxd3a-Dp_S0aY/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvNDAweDQw/MC85MTg0X3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Berry Trio Parfait </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123149/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/tYZXMhc-F1uGGSv2I2csAE3thNWV1R6_Wn2HYKZCf3Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvMTI0Mngx/MjQyLzkxODNfcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Strawberry Overnight Grains </h1>
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

export default OatmealandYogurt