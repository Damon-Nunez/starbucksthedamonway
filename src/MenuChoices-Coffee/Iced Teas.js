import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const IcedTeas = () => {
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
                    <header className="SectionName"> Iced Teas</header>
                </div>
                <div>
                  <header className='MiniSectionName'> Bottled Teas </header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123465/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/2nigdQbalMWvQOxvxdgkxsXzZDNT91oGpZEHsS2G43Q/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9zLmNv/cm5lcnNob3BhcHAu/Y29tL3Byb2R1Y3Qt/aW1hZ2VzLzE1OTk2/MDcuanBnP3ZlcnNp/b25JZD10aDY1YnJ1/cmxweXlnY2htakVX/VWRISkUybEVBci5L/QQ">

                                </img>
                            </a>
                            <h1 className="caption">Teavana® Sparkling Unsweetened Peach Nectarine Green Tea
 </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122247/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/cKBTCq6b2cjpObUqMQoEUwSWB71_hdzn-UewivoF-SY/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNzQz/ZTY3ZTctOGNmOC00/YWU2LWJkMzktYTVj/YTNkN2Q4ODRhXzEu/Mzg4YmEwZDY1YzUy/MDc5NzRmNmFkNDJh/YjUxNGVhNTEuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY">

                                </img>
                            </a>
                            <h1 className="caption"> Teavana® Mango Black Tea </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Black Teas </header>
               </div>
               <Row>
                 <div className="box">
                            <a href="https://www.starbucks.com/menu/product/457/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/ZMHtyCha3Ixd4xr8lUzs0uSWL9-WC01tpJWtgShEkq0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG5p/bWcud2Vic3RhdXJh/bnRzdG9yZS5jb20v/aW1hZ2VzL3Byb2R1/Y3RzL3h4bC81NTEx/MDkvMjA3MzU1Ny5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption">Iced Black Tea </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/458/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/JqLvYgiQ0WLEovWGox8m2pg92VYeYuq0_MiwTUYI1cU/rs:fit:305:363:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMmJmZTE1/N2UwYWU3NDk0Yjg3/NWRmOTFkNGNmNGFk/YWMuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Black Tea Lemonade </h1>
                        </div>
                        </Row><Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/465/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/8TdoXmWBk8m8RnLjUI4RTd2q7ov2xZc1J1m6paRIJSo/rs:fit:680:680:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxLzYw/Lzk4L2UxNjA5ODg1/ZjcwYjIzYmI0YTYw/MGE5ODViYTJjZDMy/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Royal English Breakfast Tea Latte </h1>
                        </div>

               
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/477/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/wifhAhHFGVa7xl--Bnb8gzASXpt0lnuV4WD5TmygOkU/rs:fit:768:1152:1/g:ce/aHR0cHM6Ly93d3cu/c3dlZXRzdGVlcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDUvaWNlZC1s/b25kb24tZm9nLWxh/dHRlLWNvbGQtZm9h/bS1yZWNpcGUtMTYt/NzY4eDExNTIuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced London Fog Tea Latte </h1>
                        </div>
                        </Row>
                <div>
                  <header className='MiniSectionName'> Iced Chai Tea</header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/466/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/-wo4zs3EQBwcdky2X8TIzPWGmJMhPaI2bpHoCrbtd5k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMDZmYTI2/ZTQ4ZmMzNDUzOWJj/Y2FhZWFlMTlhMWY2/ZWIuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced Chai Tea Latte </h1>
                        </div>
                </Row>
                <div>
                  <header className='MiniSectionName'> Iced Green Tea</header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123077/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/_MkdA8eM8F6WP7dgFA6crTCTM1JVudg0gMc4rDekQF4/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dhdGhl/cmZvcmJyZWFkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NC8wNy9QZWFjaC1H/cmVlbi1JY2VkLVRl/YS1DYXJtZWwtTW9t/ZW50cy5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Peach Green Tea </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123074/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/22I2a_1baUyQVsRjSJ4elm4rtW5tXvRsxXQ7ogNl2y8/rs:fit:790:1185:1/g:ce/aHR0cHM6Ly90aGVn/aXJsb25ibG9vci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvU3RhcmJ1/Y2tzLUljZWQtUGVh/Y2gtR3JlZW4tVGVh/LUxlbW9uYWRlLTkt/NzkweDExODUuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Peach Green Tea Lemonade  </h1>
                        </div>
            </Row> <Row>
                        <div className="box">
                            <a href="Iced Matcha Tea Latte">
                                <img className="HCImage" src="https://imgs.search.brave.com/4ivnSAhObIear8BLC3cMgDcaFXWH_6go4spg5tu6mP0/rs:fit:700:980:1/g:ce/aHR0cHM6Ly9naW1t/ZWRlbGljaW91cy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDMvSWNlZC1N/YXRjaGEtTGF0dGUy/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Matcha Tea Latte </h1>
                        </div>


              
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/459/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Zhg3nmCrphXS4wYlgMB_PBRVJtkgiMPArUgb0l5uKzE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d29uZGVyd2FyZHJv/YmVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wNi9p/Y2VkLWdyZWVuLXRl/YS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Green Tea </h1>
                        </div>
                          </Row>
                <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/460/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Fev4VzMkzZX-Casz57rnp3NSrsGnn2MW3h17gQKkJhA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnNo/Z2Nkbi5jb20vZTNj/NzYyMDgtNTE2MS00/OWI4LTk4NjgtODQw/ZTQ5Njc4NDI3Ly0v/Zm9ybWF0L2F1dG8v/LS9wcmV2aWV3LzMw/MDB4MzAwMC8tL3F1/YWxpdHkvbGlnaHRl/ci8">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Green Tea Lemonade </h1>
                        </div>
                       
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122376/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/uv1Gbuwe1Wbd_4KRQXH6GcJAMw4yMZ05v476w8FoyFc/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjL2I5/L2UxLzNjYjllMTRk/ZTkzZTI4MWQ5NDUw/M2I4ODM2NWU4MGY5/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Matcha Lemonade </h1>
                        </div> 
                        </Row> <Row>
                </Row>
                <div> 
                  <header className='MiniSectionName'> Iced Herbal Teas</header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/461/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/8zgPRg-ti5pzxZRJjpZFhEMFmyK9cdcIo8f0kqoFxVw/rs:fit:1100:1200:1/g:ce/aHR0cHM6Ly90YW5n/bGVkd2l0aHRhc3Rl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8wOC9QYXNz/aW9uVGVhMi5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Passion Tango® Tea </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/462/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/My0_6cwnzrBdA-J_YkCCvTRXafmFCjjhOnJTohvRRvM/rs:fit:1200:1200:1/g:ce/aHR0cDovL215ZnJ1/Z2FsYWR2ZW50dXJl/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTIvMDYvSG9t/ZW1hZGUtU3RhcmJ1/Y2tzLVBhc3Npb24t/VGVhLUxlbW9uYWRl/LVJlY2lwZS1Db3B5/Y2F0LVN0YXJidWNr/cy1SZWNpcGVzLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Passion Tango® Tea Lemonade </h1>
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
