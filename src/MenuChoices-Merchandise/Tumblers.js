import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Tumblers = () => {
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
                    <header className="MiniSectionName"> Tumblers </header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123708/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/uGKofyVQ7TTZ84IMpwUdJuiGdiRhvdJHEUKISdJ0CWk/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc2LzBj/L2FjLzc2MGNhYzY2/MDM0MzQxYjg2NzIy/ZGViZmIzOTBhNTQz/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Copper Band Stainless-Steel Tumbler - 16 fl oz </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123715/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/-V-qR_Ycg7V_l2hskkdJTHlW0DxdJOS-ygw-pI6AmNU/rs:fit:638:638:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkzL2Rl/LzdjLzkzZGU3YzU4/YTVkY2IzZDZjZWNh/ZjNmMzU4OGI1NGI2/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Copper Pin Stainless-Steel Tumbler - 20 fl oz </h1>
                        </div>
                        </Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123291/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/1nH4cuD_DYLIW5INZnHFu5hm9qxGg--6IIdIQobC7og/rs:fit:720:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QwLzkx/LzY1L2QwOTE2NTVl/ZWFkMTJhYzg3MjE3/MDNiMGRjYmMyNzli/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Plastic Hot Cup </h1>
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

export default Tumblers