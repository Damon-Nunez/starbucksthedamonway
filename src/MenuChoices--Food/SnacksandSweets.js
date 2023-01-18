import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SnacksandSweets = () => {
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
            <header className="SectionName"> Snacks and Sweets</header>
            <header className='MiniSectionName'> Biscotti & Cookies</header>
        </div>
       <Row>
       <div className="box">
                    <a href="https://www.starbucks.com/menu/product/2121959/single">
                        <img className="HCImage" src="https://imgs.search.brave.com/lj49w8ArLe8cANLUHj4DhGg9dU2aFm2UjgqREQpR3zg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxaW1kcXgtUVZM/Ll9TTDE0MDRfLmpw/Zw">

                        </img>
                    </a>
                    <h1 className="caption"> Dipped Madeleines </h1>
                </div>

                <div className="box">
                    <a href="https://www.starbucks.com/menu/product/2122511/single">
                        <img className="HCImage" src="https://imgs.search.brave.com/0JK0fv3ukXhdkANaerZegi3GCBWemjlGMl1h4CeLMfw/rs:fit:650:862:1/g:ce/aHR0cHM6Ly93d3cu/Z29sZGVuYmFycmVs/LmNvbS93b3JkcHJl/c3Mvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDkvYmlzY290/dGk1LWUxNDQxMzY4/ODMyNjM3LmpwZw">

                        </img>
                    </a>
                    <h1 className="caption"> Gingerbread Biscotti </h1>
                </div>

                <div className="box">
                    <a href="https://www.starbucks.com/menu/product/2121740/single">
                        <img className="HCImage" src="https://imgs.search.brave.com/vBr02VcPQ0zPTtz_0Wh5zzpYVFyfubCOyD6PSULaAl0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdWdh/cnNwdW5ydW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA4L01hZGVsZWlu/ZXMtUmVjaXBlLTEt/b2YtMS5qcGc">

                        </img>
                    </a>
                    <h1 className="caption"> Madeleines </h1>
                </div>
       </Row>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121411/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/hOsmbWdgKVOwM8BnACFdJIHGntd68ePKbQH2gdDI7Yc/rs:fit:682:1024:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC83Yi82Yy8yNi83/YjZjMjYwOTdhMjQx/NDU5YjQ5ODdmM2Vj/ODA0N2NkZC0tYmlz/Y290dGktcmVjaXBl/LXNpbXBsZS1yZWNp/cGVzLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Vanilla Biscotti with Almonds </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121410/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/buT_IjLIaI_OjdJc1JPtbhaZKA5-Ur3E2R4Kzg-99Lo/rs:fit:305:363:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvN2VlYzFm/NGQ1MTUyNGI2M2Ez/MWQyZTA4Nzg3OTM1/YjUuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Shortbread Cookies </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121812/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/3ErXTxv7XCn324jvBJjKPEx-Ji98zmY6lQCl-ifeVUs/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA0/MTEvMTcxMi8yNzE2/L3Byb2R1Y3RzL2Rh/cmtjaG9jb2xhdGVj/b3ZlcmVkZ3JhaGFt/c3dpdGhzZWFzYWx0/MTgxMi0yXzEyMDB4/MTIwMC5qcGc_dj0x/NTkzNzEzMjky">

                                </img>
                            </a>
                            <h1 className="caption"> Dark Chocolate Graham </h1>
                        </div>
       </Row>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121699/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/v9kmCQVjSrJNO3Q13PWkfnW6fhTYaiIRFGv-5bwOJmo/rs:fit:1024:814:1/g:ce/aHR0cHM6Ly9kM3Ax/YWJ6YjV1OGhoNC5j/bG91ZGZyb250Lm5l/dC9vcmlnaW4vNTQ0/ODY3L2xzLWhvbmV5/LW9hdHMtdG9wLXBh/bmVsLTEtZGVza3Rv/cF8xNjExMjI3ODEz/OTA5LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Rip Van Wafels -Honey and Oats </h1>
                        </div>

       </Row>
       <div>
        <header className='MiniSectionName'> Chocolates & Candy</header>
       </div>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123144/single ">
                                <img className="HCImage" src="https://imgs.search.brave.com/c-6uqkkxRUkLPvRYIavSI12YYFDYVgjNOZdMLPJPky4/rs:fit:700:1050:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y1LzU3/LzBhL2Y1NTcwYTlh/N2QwZGJiNWYzOGJj/NmI4ZDYyNGIyYzdi/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Salted Peppermint Bark </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123303/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/oODfyiihB1uPlEe4iPmUnlz3TBxDt0lhFBj_BGof3tY/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvYjdi/OGU5ZDUtNzdhMi00/MjI5LWE2ZjEtMTIx/NDgyMDNlNzJjXzEu/YmZkYjNkMDliZWQx/MmE0YWUwOGVmNWE0/ZDA2N2U2NDkuanBl/Zz9vZG5XaWR0aD0x/MDAwJm9kbkhlaWdo/dD0xMDAwJm9kbkJn/PWZmZmZmZg">

                                </img>
                            </a>
                            <h1 className="caption">Dark Chocolate Sea Salt Caramels  </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122093/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/VYiImcwgZgXfm5I3Ljjxk-mSN4ka4asKbQ4h9joC3EM/rs:fit:620:886:1/g:ce/aHR0cDovL3d3dy5t/YWtpbmd0aHltZWZv/cmhlYWx0aC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MDgvU2FsdGVkLUFs/bW9uZC1EYXJrLUNo/b2NvbGF0ZS1Db2Nv/bnV0LUJpdGVzLV9f/dGh1bWIxLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Salted Almond Chocolate Bites </h1>
                        </div>
       </Row>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122119/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/7i7VGv5MtpMeBb89X5A_o0feY8dtzKT6xxw-x8Z63so/rs:fit:900:900:1/g:ce/aHR0cHM6Ly93d3cu/Z291cm1ldGZvb2R3/b3JsZC5jb20vaW1h/Z2VzL1Byb2R1Y3Qv/bGFyZ2UvZGFyay1j/aG9jb2xhdGUtY292/ZXJlZC1lc3ByZXNz/by1iZWFucy0xUy05/MTQuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Dark Chocolate Covered Espresso Beans </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121686/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/PeM1ybh4upBfEFQ8z7yRkzqRTiElLBsUs6CLpIoXXkg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9idWxr/cHJpY2VkZm9vZHNo/b3BwZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDIv/cHJvZHVjdF82XzRf/NjQwMTE1LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Dark Chocolate Peanut Butter Cups </h1>
                        </div>
       </Row>
       <div>
        <header className='MiniSectionName'> Fruits and Nuts</header>
       </div>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/food/snacks-sweets">
                                <img className="HCImage" src="https://imgs.search.brave.com/wdXZxFK-fuXWZGI8tofffXJzizjv4JIN30wZMUI_8D4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvMTI0Mngx/MjQyLzkxOTZfcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Squirrel Brand Fruit and Nuts</h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121691/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/doWL97a0upNU8RPdCYa3PNzSWqRk3cTUQQLzgvkkvx4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW52ZW50b3J5/c291cmNlLmNvbS9p/bWFnZXMvaGcvSEcw/NTY0OTIyLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Peter Rabbit™ Organics Apple & Grape </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121692/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/gUtXEZG-7SQ1PaW2FYSkMUv6xVMd-w1njOrrNMH6R-c/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvZmNj/ZTMwZjItMzdmNy00/ZWIwLTkyMmUtYzIw/MGVkZmEzZmE0XzEu/MzBiZTQ0ZWQ5ZTBl/MWViOGYyMmZjNzcy/ZmEwZThkMzEuanBl/Zz9vZG5XaWR0aD0x/MDAwJm9kbkhlaWdo/dD0xMDAwJm9kbkJn/PWZmZmZmZg">

                                </img>
                            </a>
                            <h1 className="caption"> Peter Rabbit™ Organics Strawberry Banana </h1>
                        </div>
       </Row>
       <div>
        <header className='MiniSectionName'> Gum & Mints</header>
       </div>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123299/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/NlFxDrhUKWEbvV30sEHpxPWoJfEl3QZljcX000KQUPQ/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNmJlZTU0/NGYwYjc2NGQxNmI5/NTNlMGE1Y2Q1ZWNl/MTkuanBnP2ltcG9s/aWN5PTFieTFfbWVk/aXVtXzYzMA">

                                </img>
                            </a>
                            <h1 className="caption"> Spearmint Gum </h1>
                        </div>
       </Row>
       <div>
        <header className='MiniSectionName'> Popcorn & Chips</header>
       </div>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121689/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/o8DwQI63p0TDzOQQyTVU6UL1KnklybioBDsTBfbiR6s/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kMmxu/cjVtaGE3Ynljai5j/bG91ZGZyb250Lm5l/dC9wcm9kdWN0LWlt/YWdlL2ZpbGUvbGFy/Z2VfZmM3NmE0Yzct/ZjM3Mi00NDdhLWE5/ODUtYzJmY2EzOGU2/ZjNlLnBuZw">

                                </img>
                            </a>
                            <h1 className="caption">Starbucks Butter Popcorn  </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122536/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Pg9vTAX7eC1khF0Zgq1xFpx4LPwwOzcoJdS0L4hKcB8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvZnVsbC85/MjA1X3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Salt & Vinegar Kettle Potato Chips  </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121813/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/O7vC_P-i8_Sq3G3Ok99Q2N_Jpg4JxMl3ZDDuRsi7uak/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvZjJkY2Rm/NzFiOWQ1NGU0Y2Ew/NWZmNWM0OTM2YThm/Y2MuanBnP2ltcG9s/aWN5PTFieTFfbWVk/aXVtXzYzMA">

                                </img>
                            </a>
                            <h1 className="caption"> Perfectly Salted Chips </h1>
                        </div>
       </Row>
       <div>
        <header className='MiniSectionName'> Meat & Cheese </header>
       </div>

       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122004/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/1GTwoRfgLPwbjx_Txvtl6-fKpxPfaVvgLitYAE6TWxg/rs:fit:1200:1200:1/g:ce/aHR0cDovL2lpLndv/cmxkbWFya2V0LmNv/bS9mY2dpLWJpbi9p/aXBzcnYuZmNnaT9G/SUY9L2ltYWdlcy93/b3JsZG1hcmtldC9z/b3VyY2UvNTk1NTFf/WFhYX3YxLnRpZiZ3/aWQ9MjAwMCZjdnQ9/anBlZw">

                                </img>
                            </a>
                            <h1 className="caption">Country Archer - Hickory Smoked Turkey Jerkey </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122003/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/i2Js8i0Anchin6zZSvfn4_brtHksVGCBQs-aZOUUGzM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/dGhyaXZlbWFya2V0/LmNvbS9zdG9yZS9m/dWxsLzgvNS84NTMw/MTYwMDIyNTAtMV8x/XzIuanBnP3c9MTIw/MA">

                                </img>
                            </a>
                            <h1 className="caption"> Country Archer Original Beef Jerky </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122033/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/8DbIOxg1jiflJCmrnv-CYJcVKLo9otjC6IVBoQH2tlQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvZnVsbC85/MjE0X3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> String Cheese   </h1>
                        </div>
       </Row>
       <div>
        <header className='MiniSectionName'> Snack Bars </header>
       </div>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122867/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Y7BEViEoGaxcSU7FOTW7j0MgwciiXjESiV3L37CtFGM/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9zN2Q1/LnNjZW5lNy5jb20v/aXMvaW1hZ2UvQ2Vu/dHJhbE1hcmtldC8w/MDIyMDUzODctMT8k/bGFyZ2UkJmhlaT00/MTYmd2lkPTQxNg">

                                </img>
                            </a>
                            <h1 className="caption"> Perfect Bar® - Dark Chocolate Chip Peanut Butter </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122631/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/n_y-vLCKEo7w1nJIyM9MUwRnARWh9J9EDA5-majDoMw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMjFk/YWJlNjAtMTU2OS00/MjMzLTljNzktMzNi/OGQ1NTFlOTFmXzEu/OWVmNTU0YmNjNWVk/NDMxY2VkZTRhYjg3/MjM1NTgzMGEuanBl/Zw">

                                </img>
                            </a>
                            <h1 className="caption">Perfect Bar® Peanut Butter  </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121814/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/nRn0yF39Pu1QKuEIQ87x7xM3lmlkgtyLr6YYbXjIAMc/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvNDAweDQw/MC8xNDMxNC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">KIND - Almond Coconut Cashew Chai </h1>
                        </div>

       </Row>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121698/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/kXF6jKeBltheLCXku8HeWU39CsydJeOTdSJlgcCMsLM/rs:fit:450:450:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOTBk/MDA3MTEtMTU2Yi00/NGU2LTk5MzQtZWFh/OThhNzA4ZTc5XzEu/OTQ3ZDhiN2JlZTVi/MzJkMDFmNGYzOWEw/ZjgzZWM3ZTIuanBl/Zz9vZG5IZWlnaHQ9/NDUwJm9kbldpZHRo/PTQ1MCZvZG5CZz1m/ZmZmZmY">

                                </img>
                            </a>
                            <h1 className="caption"> KIND® Blueberry Vanilla & Cashew Bar </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121697/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Ut8cUEvkgvHJ-LFVYh8z11-HSEwwsW7IAgPHB8mlV_I/rs:fit:640:640:1/g:ce/aHR0cHM6Ly93d3cu/b2NhZG8uY29tL3By/b2R1Y3RJbWFnZXMv/MzgzLzM4MzYzNzAx/MV8wXzY0MHg2NDAu/anBnP2lkZW50aWZp/ZXI9Y2I5MGVmYmMw/YjExNzA2OTViMjFl/MjcxNTdkMmMwMDA">

                                </img>
                            </a>
                            <h1 className="caption">KIND Peanut Butter Dark Chocolate Bar </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121815/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/ocmpMkRR5zpSTJ-F4dSBQvb2PGMke0FGxzqiIPBz6s4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHNuYWNrcy5j/b20vZHcvaW1hZ2Uv/djIvQkNMU19QUkQv/b24vZGVtYW5kd2Fy/ZS5zdGF0aWMvLS9T/aXRlcy1raW5kLXNu/YWNrcy1tYXN0ZXIv/ZGVmYXVsdC9kdzRk/NzRlYmQ1L2ltYWdl/cy8xODQyMS1tYWlu/LWtpbmQtbnV0LWJh/cnMtc2FsdGVkLWNh/cmFtZWwtZGFyay1j/aG9jb2xhdGUtbnV0/LnBuZw">

                                </img>
                            </a>
                            <h1 className="caption">KIND® Salted Caramel & Dark Chocolate Nut Bar </h1>
                        </div>
       </Row>
       <Row>
       <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121694/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/6UJrnuSvEvDKxhYwz73L7bZjHOUFf3eIPChlX2Sgncs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bmF0dXJhbWFya2V0/LmNhL2NhdGFsb2cv/cHJvZHVjdC9jYWNo/ZS9kNGI5MTZhZjA0/ODY5NjY4NDEwNTY4/NDY0MTViZjVhOC90/L2gvdGhhdF9zX2l0/X2ZydWl0X2Jhcl9h/cHBsZV9ibHVlYmVy/cnktMS1taW4uanBn">

                                </img>
                            </a>
                            <h1 className="caption">That's It® - Apple + Blueberry Bar </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121693/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/4fjOU6xHAo05sTbHOYRVHFtrHmFIiICpsU32IETM9jQ/rs:fit:800:800:1/g:ce/aHR0cHM6Ly93d3cu/YXN0YWR1a2EuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA0LzgxeGdtNmM2/eEJMLl9TTDE1MDBf/LTgwMHg4MDAuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> That's It® - Apple + Mango Bar </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121987/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/leYajaR_s3FTd_vl-eiLeQRUAlldTyTplUQUOkF_-xg/rs:fit:400:400:1/g:ce/aHR0cHM6Ly93d3cu/cXVpbGwuY29tL2lz/L2ltYWdlL1F1aWxs/L3NwNDA5NjY3NzNf/czc_JGltZzQwMCQ">

                                </img>
                            </a>
                            <h1 className="caption"> This Bar Saves Lives™ – Dark Chocolate Cherry & Sea Salt Bar </h1>
                        </div>
       </Row>
          <Row>
          <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121989/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/_6yZ71mC_fR6Iq_3VykNYVX8ZI34kxneydYMw5ElotU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kMmxu/cjVtaGE3Ynljai5j/bG91ZGZyb250Lm5l/dC9wcm9kdWN0LWlt/YWdlL2ZpbGUvbGFy/Z2VfMjhjYjc4NmQt/OWQxMC00NjFkLWI2/YTctMGVkNDRiMzFh/YTk1LnBuZw">

                                </img>
                            </a>
                            <h1 className="caption">This Bar Saves Lives™ - Dark Chocolate Peanut Butter </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121986/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/7GvWF3QJ84xuppn-t7UYFdVbiq_noBhIq1S47k7nvFM/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9kMmFh/bTA0bm1ocGRmOC5j/bG91ZGZyb250Lm5l/dC9pbWFnZXMvaW1h/Z2VzLzAwMC8wMzIv/MDk0L3hsYXJnZS92/YW5pbGxhLWFsbW9u/ZC5qcGc_MTU3MjQ4/OTE5NQ">

                                </img>
                            </a>
                            <h1 className="caption">This Bar Saves Lives™ Madagascar Vanilla Almond & Honey Bar  </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121988/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/solsroXjc_ytU1NJvK6ntN-NlPbzQM2gBqU7Jiug9xE/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/bndjb2ZmZWVzdXBw/bHkuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzExL1Ro/aXMtQmFyLVNhdmVz/LUxpdmVzLVdpbGQt/Qmx1ZWJlcnJ5LVBp/c3RhY2hpby5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> This Bar Saves Lives™ - Wild Blueberry Pistachio Bar </h1>
                        </div>
          </Row>
          <div>
            <header className='MiniSectionName'> Spreads </header>
          </div>
          <Row>
          <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122257/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/hN4zkCxSQQmtsbJcFJujxQ67bDE7jUkIyZ8ANXaNq28/rs:fit:1200:1200:1/g:ce/aHR0cDovL3MyLnIy/OXN0YXRpYy5jb20v/YmluL2VudHJ5LzFm/Ni94LzE3NjUxMTkv/aW1hZ2UucG5n">

                                </img>
                            </a>
                            <h1 className="caption"> Avocado Spread </h1>
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

export default SnacksandSweets