import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Mugs = () => {
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
                    <header className="MiniSectionName"> Mugs </header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123706/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/2On4hVTYFlxaKi0sY78sYdJgOdy-yQRui2V1nx9xMJk/rs:fit:225:300:1/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nLzh3Y0FB/T1N3dH54ZlBvV3Uv/cy1sMzAwLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Pleat Desktop Ceramic Mug - 14 fl oz </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123713/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/BCe8LEAjgsteEW1XKUAJKvgTNQ07H6z4tZnWpptSTVc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYm9uYW56YXN0/YXRpYy5jb20vYWZ1/L2ltYWdlcy8xODMz/LzQzOTQvOTUvSU1H/XzMwMTFfMV8uSlBH">

                                </img>
                            </a>
                            <h1 className="caption"> Glass Mug 16 fl.oz </h1>
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

export default Mugs