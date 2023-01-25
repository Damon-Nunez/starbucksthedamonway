import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HotDrinks = () => {
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
                <header className='SectionName'> Hot Drinks</header>
                <div>
                    <header className="MiniSectionName"> Hot Chocolates</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/521/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/cwM3F1d4v5fyl2UTnAxpl9Jr_QFT07QnLXDSjct99cU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWFs/cGxhbm5lcnByby5j/b20vaW1hZ2VzL3Jl/Y2lwZXMvNC8yMTg4/ODE2LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Peppermint Hot Chocolate </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068730/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/IxT3CGRGtImRr-UNPoYFG_yoipY5WoRCGzbs9LBnUno/rs:fit:800:800:1/g:ce/aHR0cDovL3d3dy5i/aWpvdXhhbmRiaXRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8xMS9taW50/LXdoaXRlLWhvdC1j/aG9jb2xhdGUtMDUu/anBn">

                                </img>
                            </a>
                            <h1 className="caption">Peppermint White Chocolate </h1>
                        </div>
 </Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122483/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/WvuNTfW87H80CgeTfVzuTRqJs9NhuPxm8e_NSKO_KNw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvN2EzMjZm/ZTg0NjM5NDk2Zjg3/MzI2ZDYwZmI2ZWYz/NDIuanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV8xMjQy">

                                </img>
                            </a>
                            <h1 className="caption">Toasted White Hot Chocolate  </h1>
                        </div>

              
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/471/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/2YhJdTAZwerbJwhp2DzV8X2HKe3jW7dvCCsbi0znQhA/rs:fit:616:462:1/g:ce/aHR0cDovL2Zvb2Qu/Zm5yLnNuZGltZy5j/b20vY29udGVudC9k/YW0vaW1hZ2VzL2Zv/b2QvZnVsbHNldC8y/MDE1LzExLzE4LzIv/Rk5NXzEyMDExNS1D/bGFzc2ljLUhvdC1D/aG9jb2xhdGUtUmVj/aXBlX3M0eDMuanBn/LnJlbmQuaGd0dmNv/bS42MTYuNDYyLnN1/ZmZpeC8xNDQ4MzE0/OTA1NTcyLmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption">Hot Chocolate  </h1>
                        </div>
</Row><Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/472/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/0JJ-t-Sn4KR9bS0c_8NaOQQTayyt5GVWeuX0qTdPFvs/rs:fit:750:750:1/g:ce/aHR0cHM6Ly9iYWtp/bmdtaXNjaGllZi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMTEvd2hpdGUt/aG90LWNob2NvbGF0/ZS1pbWFnZS1zcXVh/cmUuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> White Hot Chocolate </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Juice</header>
               </div>
                  <Row>
                  <div className="box">
                            <a href="https://www.starbucks.com/menu/product/475/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/vfMClUe43gfy5aM76r-_mukNaDnN7_5jGNUXu_1Qqnw/rs:fit:560:840:1/g:ce/aHR0cDovL3d3dy5p/bmthdHJpbmFza2l0/Y2hlbi5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTMvMDkv/Q2FyYW1lbC1BcHBs/ZS1TcGljZS1Jbi1L/YXRyaW5hcy1LaXRj/aGVuLTEtNTYwLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Caramel Apple Spice</h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/489/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/jG0EqTaG7GKHa94XKYCbDiCp1aI1sI-C5d9Ndc8Ziqw/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMDU2YWQ0/OGQ0ODQ0NGNjNTg4/ZDcyMWI3ZTJhODJm/OGMuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Steamed Apple Juice </h1>
                        </div>

                  </Row>
                  <div>
                    <header className='MiniSectionName'> Steamers</header>
                  </div>
                  <Row>
                  <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123366/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/NW7A9SDaBPuzQi-27zRlcMzMFcU436YDTmhmssGCdAQ/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvY2VjNjNi/YmJlN2QyNDI2NGEx/MWQwM2Y3YjAxZDFk/ODQuanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV90b3Bjcm9wXzYz/MA">

                                </img>
                            </a>
                            <h1 className="caption"> Pistachio Creme </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068719/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/CrzGtWHxw9H9wojlaEw0p9xjmt6YAzUvB9gNwYgsJ0s/rs:fit:736:736:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8xMS9hMi8yNS8x/MWEyMjViNzNhNTRj/YzkzZjBmMDM5OGRj/MTAxYTMyMS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Caramel Brulee Creme </h1>
                        </div>
</Row>
                  <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123304/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/M2ghdAlLmMjC6f7px_759SYg9kjxysxC74XK7kBjuDA/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvZWMxMTJi/ZGZhODM2NDFhYzhk/NmI1OTYwOGE1YTgy/MjAuanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV90b3Bjcm9wXzYz/MA">

                                </img>
                            </a>
                            <h1 className="caption">Chestnut Praline Creme </h1>
                        </div>


                  
                  <div className="box">
                            <a href="https://www.starbucks.com/menu/product/747/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/l6DchT7QcBM0nm8Ybix2fY7o_yUd0oPIuFevYRrLMOo/rs:fit:600:623:1/g:ce/aHR0cHM6Ly90aGVj/b3NtaWNncmluZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDMvc3RlYW1l/ZC1taWxrLXRoZS1j/b3NtaWMtZ3JpbmQu/anBn">

                                </img>
                            </a>
                            <h1 className="caption">Steamed Milk </h1>
                        </div>
                        </Row><Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068652/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/NwNSmHJZDz8UNXNXb6sPqrHR9yY2Cf4N9c-uAe-nJq0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvZnVsbC85/MTYwX3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Vanilla Creme </h1>
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

export default HotDrinks