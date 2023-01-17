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
                <header className="SectionName">Hot Teas </header>
                <div>
                    <header className="MiniSectionName"> Chai Tea</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/466/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/MByQX9KLiZ5tOfWxACkGJRjiKzaFFMuact_-3mQBmN0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9maXRm/b29kaWVmaW5kcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDkvQ2hhaS1U/ZWEtTGF0dGUtMDVz/cS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Chai Tea Latte </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122273/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/At8HLKaLCeLtqNciq-E7Q1GQcd7bsFojdRNuqKCULiM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuZmFucGFnZS5p/dC93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvMjIvMjAxOS8w/OS9jaGFpdGVhMi5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Chai Tea </h1>
                        </div>
               </Row>
               <div>
                <header className="MiniSectionName"> Black Teas</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/450/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/IiCQAWShe9B7WmvQ0IQW-niUNblHjTe5yX7oCn8_iUU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvZDZmNjI1/NDgwNjU5NDBhZDk2/MjQ1MDJjNDViNWVm/ZjguanBn">

                                </img>
                            </a>
                            <h1 className="caption">Earl Grey Tea </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/477/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/wDBt1NziUdKhvEZ-C1hJwJqQmnY19YnRB2dha1SzCG8/rs:fit:680:1024:1/g:ce/aHR0cHM6Ly93d3cu/YWJlcmRlZW5za2l0/Y2hlbi5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDEv/TG9uZG9uLUZvZy1U/ZWEtTGF0dGUtOC02/ODB4MTAyNC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">London Fog Tea Latte </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/446/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/WISzBgGAPKii4yPfZwqCZONfUgHvFaDfsUuRLmFFwHU/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9iYXJi/YWRvcy5sYXRpbm9z/bWFya2V0aW5nLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMC9Sb3lhbEVu/Z2xpc2hCcmVha2Zh/c3RCbGFja1RlYS1v/bldoaXRlX0NvcmVM/aWJfRzdPUC0zMDB4/MzAwLnBuZw">

                                </img>
                            </a>
                            <h1 className="caption">Royal English Breakfast Teas </h1>
                        </div>
               </Row>
               <Row>

               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/465/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/wJMqLfo2ZmxRV8upn8A6WMEdAv4WzU7ZaedkXyhfC4A/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9wYW5h/bWEubGF0aW5vc21h/cmtldGluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvUm95YWxFbmds/aXNoQnJlYWtmYXN0/VGVhTGF0dGUtb25X/aGl0ZV9Db3JlTGli/X3NSR0ItMzAweDMw/MC5wbmc">

                                </img>
                            </a>
                            <h1 className="caption">Royal English Breakfast tea Latte </h1>
                        </div>

               </Row>
               <div>
                <header className="MiniSectionName"> Green Teas </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068751/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/6f9cub53w3oh_FN01H_dfM1llEpJffo0ezbe3QvioEE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvZnVsbC85/MTUxX3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Emperor's Cloud and Mist </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/468/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/Nv_Z3izhvUmFwfo66zYBREZxzJovNcYxSIC71rkD_gU/rs:fit:600:550:1/g:ce/aHR0cHM6Ly9qYXBh/bmNlbnRyZS1pbWFn/ZXMuZ2xvYmFsLnNz/bC5mYXN0bHkubmV0/L3JlY2lwZXMvcGlj/cy8xNi9tYWluL21h/dGNoYS1sYXR0ZS5q/cGc_MTQ2OTU3Mjgy/Mg">

                                </img>
                            </a>
                            <h1 className="caption">Matcha Tea Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122274/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/AnkNjYnt4pKEXVUHU48EyWkARea-HDUMdrxibUxsN-g/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9jZG4u/dG90YWxseXRoZWJv/bWIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzAzL3No/dXR0ZXJzdG9ja180/NTQwMTI2NzUtc2Nh/bGVkLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Honey Citrus Mint Tea </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122574/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/T-GYgjkkvwgPwFh1mVpdxdeQMSMWOphjy_OI2lDrxSE/rs:fit:316:316:1/g:ce/aHR0cHM6Ly9qYW1h/aWNhLmxhdGlub3Nt/YXJrZXRpbmcuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEwL0phZGVDaXRy/dXNNaW50VGVhLW9u/V2hpdGVfQ29yZUxp/Yl9zUkdCLnBuZw">

                                </img>
                            </a>
                            <h1 className="caption">Jade Citrus Mint Brewed Tea </h1>
                        </div>
               </Row>
                <div> 
                    <header className="MiniSectionName"> Herbal Teas </header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068754/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/PEQFQmwJpJNteyw7tKl4K4fzaYtsEW8__CjEYnhHySA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvMTI0Mngx/MjQyLzkxNTVfcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption">Mint Majesty </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068757/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/lSFCG-SLdIPHBEE_vBnUFc964WfB7z8ZqNeoCr5bBuQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvMTI0Mngx/MjQyLzkxNTZfcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Peach Tranquility </h1>
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