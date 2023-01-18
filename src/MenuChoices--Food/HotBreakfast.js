import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HotBreakfast = () => {
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
                    <header className="SectionName"> Hot Breakfast</header>
                </div>
                <div>
                  <header className='MiniSectionName'> Breakfast Sandwiches & Wraps</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123181/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/ccf1jusw7VkXZUW6LjEKbYy_uqmJv_mkoWjLzc_gu18/rs:fit:1000:562:1/g:ce/aHR0cHM6Ly93d3cu/bWFzaGVkLmNvbS9p/bWcvZ2FsbGVyeS9z/dGFyYnVja3MtYmFj/b24tc2F1c2FnZS1l/Z2ctd3JhcC1jb3B5/Y2F0LXJlY2lwZS9z/dGFyYnVja3MtYmFj/b24tc2F1c2FnZS1l/Z2ctd3JhcC1jb3B5/Y2F0LXJlY2lwZS0x/NjE3NzQyMTU4Lmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Bacon, Sausage & Egg Wrap </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123236/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/tAZJMzM0S78IQT0x7v6Y4QemLdWKyx7PNgy-lIBOocQ/rs:fit:768:768:1/g:ce/aHR0cHM6Ly9zdG9y/aWVzLnN0YXJidWNr/cy5jb20vdXBsb2Fk/cy8yMDIwLzA2L0lt/cG9zc2libGUtQnJl/YWtmYXN0LVNhbmR3/aWNoLTc2OHg3Njgu/anBn">

                                </img>
                            </a>
                            <h1 className="caption"> Impossible™ Breakfast Sandwich </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/369/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Y6iW7XhxSNt2EBPrt0sX34Oyt7k9-TQJY4mwvvG2nCQ/rs:fit:680:680:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlL2Fm/LzJlLzdlYWYyZTBm/YTMzYzAyOTI4NTQ2/OWE4OTc1NWFhOWQ0/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Bacon, Gouda & Egg Sandwich </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121219/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Wh3-sZLNp4euySYRM2dfJi3dAJ71SYx9FN9m0r6jtAA/rs:fit:363:305:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy8zMDFkZDM0/ZTE1MDc0Y2ZiOTc0/NjRiZTk0OWVmNzli/MC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Double-Smoked Bacon, Cheddar & Egg Sandwich </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/368/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/8hAcoX6ksX7E-0RI-7Qy99y-msiRaofk8Nuf7uRNeTQ/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvYTlkNWE5/NGJhY2FmNDczMGE4/NDdhYTQ3ZDdiMjhl/NWUuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Turkey Bacon, Cheddar & Egg White Sandwich </h1>
                        </div>
                        <div className="box">
                            <a href="">
                                <img className="HCImage" src="https://imgs.search.brave.com/nKM4mxsWRfJ6Vxt-2SSn7MbnPlobsJn-IXDmkbbmg54/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZWF0dGhpc211/Y2guY29tL3NpdGVf/bWVkaWEvaW1nLzQ0/MjUyMF9kaWxsb25j/MTE4XzJkMWJmYmZl/LTg0OGEtNGEwNi05/NDUyLTJmMDcwZGMy/Njg1MC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Sausage, Cheddar & Egg Sandwich </h1>
                        </div>
               </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/371/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Md7PqjqOoYkrEFezKbTLDKuIJoozj25tSqHMpitswbg/rs:fit:940:627:1/g:ce/aHR0cHM6Ly9jZG4u/d29ya2luZ2FnYWlu/c3RncmF2aXR5LmNv/bS9zdG9yYWdlL21l/ZGlhL213c2htZHJx/L3NwaW5hY2gtYW5k/LWZldGEtZWdnLXdo/aXRlLXdyYXBzLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Spinach, Feta & Egg White Wrap </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122257/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/hN4zkCxSQQmtsbJcFJujxQ67bDE7jUkIyZ8ANXaNq28/rs:fit:1200:1200:1/g:ce/aHR0cDovL3MyLnIy/OXN0YXRpYy5jb20v/YmluL2VudHJ5LzFm/Ni94LzE3NjUxMTkv/aW1hZ2UucG5n">

                                </img>
                            </a>
                            <h1 className="caption"> Avocado Spread </h1>
                        </div>
                </Row>
                <div>
                  <header className='MiniSectionName'> Sous Vide Egg Bites </header>
                  </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123401/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/3NVv_uA_z72t9TzSiu292KVVi--W1sbsLlBo6BZmD2E/rs:fit:600:600:1/g:ce/aHR0cHM6Ly93d3cu/bXVzaHJvb21jb3Vu/Y2lsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wOC9z/dGFyYnVja3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Kale & Mushroom Egg Bites </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122116/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/cpS6NeNfxR_710ueZYoR6KdZDAMj5xLrTE5FZ52O6bQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb3dj/YXJiZGVsaXNoLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wOS9iYWNvbi1l/Z2ctYml0ZXMuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Bacon & Gruyère Egg Bites
</h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122117/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/QEAuuTBDXt30NL4vCc9tuEWxwhu1BwmxXtUUcX-Rtag/rs:fit:640:480:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tcWprdndFcy0y/WjAvV0tfNHhLQll2/d0kvQUFBQUFBQUEw/MHcvdXpCLVFDUkRm/ZUlMV1dqa1JVVzFO/T2dLbHFIMXdQNEt3/Q0xjQi9zNjQwL3N0/YXJidWNrcy1lZ2ct/d2hpdGUtcm9hc3Rl/ZC1yZWQtcGVwcGVy/LXNvdXMtdmlkZS1l/Z2ctYml0ZXMtMDEu/SlBH">

                                </img>
                            </a>
                            <h1 className="caption"> Egg White & Roasted Red Pepper Egg Bites </h1>
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

export default HotBreakfast