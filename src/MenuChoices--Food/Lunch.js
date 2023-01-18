import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Lunch = () => {
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
                    <header className='SectionName'> Lunch</header>
                </div>
                <div>
                    <header className="MiniSectionName">Warm Sandwiches  </header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123039/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/mwAfT1-iuiNW2gVkvjkRk72trZugOAfZI2VcSLxa-0A/rs:fit:400:320:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I4L2Qw/LzEyL2I4ZDAxMmZl/NDdkYTlhODJiYmI2/N2RhZGIzZmU0YmI4/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Crispy Grilled Cheese on Sourdough </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/574/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/EQqn31q9akynBw1CT6uv-idlNJrjtCT4hb-c8zqlilQ/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE1/OTYvMDk2NS9wcm9k/dWN0cy9MMTE1MDUy/N180ODEwODg0Ny02/NTVkLTRjYmMtYWQz/My1iNTg4MDNlZGYz/ZDFfMTAyNHgxMDI0/LmpwZz92PTE1ODcx/OTQ1ODU">

                                </img>
                            </a>
                            <h1 className="caption">Ham & Swiss on Baguette </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121962/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/r71DQFDXsd9lBe2DrkHUL1iOEBVQXZlA2nNjZTA-TaI/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMjlhNzgx/OTAyODNjNDBmMGE3/OTc4YmFhN2Y2Mzdl/MDUuanBnP2ltcG9s/aWN5PTFieTFfbWVk/aXVtXzYzMA">

                                </img>
                            </a>
                            <h1 className="caption">Turkey, Provolone & Pesto on Ciabatta  </h1>
                        </div>

               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/573/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/LUGkVcBdqz4g43SPgkzydw_0FRYMbQDXDP6rBrrKdL0/rs:fit:1200:1067:1/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5cmVjaXBl/cy5jb20vdGhtYi9k/NHpNeXNPSTdtRVp0/dWt6d0hIRkRmMXBV/Unc9LzE2MDB4MTA2/Ny9maWx0ZXJzOmZp/bGwoYXV0bywxKS9f/X29wdF9fYWJvdXRj/b21fX2NvZXVzX19y/ZXNvdXJjZXNfX2Nv/bnRlbnRfbWlncmF0/aW9uX19zaW1wbHlf/cmVjaXBlc19fdXBs/b2Fkc19fMjAwNl9f/MDZfX2FydWd1bGEt/bW96emFyZWxsYS10/b21hdG8tZm9jYWNj/aWEtaG9yaXotYS0x/NjAwLWU1ZGIxMzNk/NWU0YTQ4YzI5YTZi/MTdiYjliNjcyNjYx/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Tomato & Mozzarella on Focaccia </h1>
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
                <header className='MiniSectionName'> Protein Boxes</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123221/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/1F1MN4sKfPh6-j9jLpE5vXAlIMPbMYzhJSyzp0S-fH8/rs:fit:400:400:1/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/NWU0NjhhNzAtNGJm/Mi00MjExLWI1MDAt/ZTAxNzIwZGIwYjBi">

                                </img>
                            </a>
                            <h1 className="caption"> Eggs & Gouda Protein Box  </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123222/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/fdrs_MkKypEfrd1mro_kHmVVD4dz2nq2I5R6UZBDgY8/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9mcmVz/aGNvZmZlZWhvdXNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMy9DaGVl/c2UtVHJpby1Qcm90/ZWluLUJveC5wbmc">

                                </img>
                            </a>
                            <h1 className="caption"> Cheese Trio Protein Box </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123223/single">
                                <img className="HCImage" src=" https://imgs.search.brave.com/Zgoy64pH0nTA4t64JOhgaxvUlM-MSgm1__Ex4riyyug/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9mcmVz/aGNvZmZlZWhvdXNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMy9DaGVk/ZGFyLVVuY3VyZWQt/U2FsYW1pLVByb3Rl/aW4tQm94LnBuZw">

                                </img>
                            </a>
                            <h1 className="caption"> Cheddar & Uncured Salami Protein Box </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123428/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/65QMLxe80FU6dtD9MtH4NC4qoRX4Uq8G5V7tY9olgOI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly92ZWdv/dXRtYWcuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA2/L0NoaWNrcGVhLUJp/dGVzLUF2b2NhZG8t/UHJvdGVpbi1Cb3gu/anBn">

                                </img>
                            </a>
                            <h1 className="caption"> Chickpea Bites & Avocado Protein Box </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122248/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/JfcXuIYaNjfP1mz2Uw3zxyr2tIvvbjW8BWerb2PPXJQ/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9mcmVz/aGNvZmZlZWhvdXNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMy9FZ2dz/LUNoZWRkYXItUHJv/dGVpbi1Cb3gucG5n">

                                </img>
                            </a>
                            <h1 className="caption"> Eggs & Cheddar Protein Box </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122250/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/-S_haOQxWsvGqNKLwQkphrxrkAQCkOoC6R6rVbi1nDQ/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNjNiNTc0/Yjc4OWFhNDQ2Yzg3/OTdjNmI3NzRkZjgz/YmUuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> PB&J Protein Box </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122249/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/TV3fToI556YSkfPfie9sRnJJ7pAJCv5gGDEcv8crcXE/rs:fit:680:680:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMxLzE2/LzRkLzMxMTY0ZDll/MTQ3ODRiOGUwODUw/MzM4NzVkNjYxNGUy/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Cheese & Fruit Protein Box </h1>
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

export default Lunch