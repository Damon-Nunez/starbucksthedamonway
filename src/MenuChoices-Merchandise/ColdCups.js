import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ColdCups = () => {
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
            <header className="MiniSectionName"> Cold Cups </header>
        </div>
       <Row>
       <div className="box">
                    <a href="https://www.starbucks.com/menu/product/2123716/single">
                        <img className="HCImage" src="https://imgs.search.brave.com/AcIyk8xucdF1Y1DVJ31oUboN3b2S6PXrmT1ja6iMcjw/rs:fit:800:600:1/g:ce/aHR0cDovL2Zhcm04/LnN0YXRpY2ZsaWNr/ci5jb20vNzM1OS84/NzI1MDUzMTQxXzNi/ZDZiMDVjODJfYy5q/cGc">

                        </img>
                    </a>
                    <h1 className="caption"> Drink-Thru Band Stainless-Steel Cold Cup - 16 fl oz </h1>
                </div>

                <div className="box">
                    <a href="https://www.starbucks.com/menu/product/2123336/single">
                        <img className="HCImage" src="https://imgs.search.brave.com/9o2h8YLnmS8B9AaFgcz3yZG7Z2RLHGcapYYdhmIiH7E/rs:fit:813:860:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzEz/OTYvMjc3MS9wcm9k/dWN0cy9pbWFnZV9h/YjA2MjJhMC0zOTE3/LTQ3NmMtYTg1Mi03/MmIyMDdlMDk0ZjBf/MTAyNHgxMDI0Lmpw/Zz92PTE2MTc5MDM3/NjA">

                        </img>
                    </a>
                    <h1 className="caption">Cold To-Go Cup - 24 fl oz  </h1>
                </div>

                <div className="box">
                    <a href="https://www.starbucks.com/menu/product/2123607/single">
                        <img className="HCImage" src="https://imgs.search.brave.com/rlpQAw8FPCnSdsHj_MRw5Q5yIWDAdMQCtyJ2kGMUN4k/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMmM2MWY2/YzI5MjBjNGI0OTk3/M2ExNjBmOWM3MmEy/M2MuanBnP2ltcG9s/aWN5PTFieTFfbWVk/aXVtXzYzMA">

                        </img>
                    </a>
                    <h1 className="caption">Siren Logo Plastic Cold Cup - 24 fl oz </h1>
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

export default ColdCups