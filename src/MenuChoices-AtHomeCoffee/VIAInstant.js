import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const VIAInstant = () => {
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
                    <header className="SectionName"> VIAInstant</header>
                </div>
                <div>
                  <header className='MiniSectionName'> Seasonal </header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/293/via">
                                <img className="HCImage" src="https://imgs.search.brave.com/J-paanmwAWjWCZ-3QT9vIw3MRHUz2dWO1i5J7AFXFLQ/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9sYW1z/YXJpc3RvcmUuYi1j/ZG4ubmV0LzcyODMt/bGFyZ2VfZGVmYXVs/dC9zdGFyYnVja3Mt/dmlhLWluc3RhbnQt/Y2hyaXN0bWFzLWJs/ZW5kLXZpbnRhZ2Ut/MjAxOC1yYWdlLWFn/ZWQtc3VtYXRyYS1z/cGljeS1zd2VldC1j/b2ZmZWUuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks VIA® Instant Christmas Blend </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Flavored </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/810/via">
                                <img className="HCImage" src="https://imgs.search.brave.com/tHxeBAeM9-I7i7svdD-8-K6cvfvJDdp63eznXtsxfbo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y4LzVi/L2IwL2Y4NWJiMDE5/YjgxNDQ2MWE3NmI5/ZjRiMzA2OTM2Nzk0/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> VIA® Sweetened Iced Coffee </h1>
                        </div>
               </Row>

               <div>
                <header className='MiniSectionName'>Blonde Roast</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/860/via ">
                                <img className="HCImage" src="https://imgs.search.brave.com/lYw5yX2LHfF4HnZfJAxvgYnB3mpvCKDr53AvDNIoKTA/rs:fit:450:450:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvODhk/NmNiNzMtNjEyYi00/NWJlLWIzMGQtYTI5/ZTExMGJmYzg1XzEu/ZGNhMzE0ZmZiYjk3/ODk2ZmFhM2QzMjMw/ODg4ZjE0YzguanBl/Zz9vZG5IZWlnaHQ9/NDUwJm9kbldpZHRo/PTQ1MCZvZG5CZz1G/RkZGRkY">

                                </img>
                            </a>
                            <h1 className="caption">VIA Veranda Blend </h1>
                        </div>
               </Row>

               <div>
                <header className='MiniSectionName'> Medium Roast </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/24/via">
                                <img className="HCImage" src="https://imgs.search.brave.com/gWdHT7Y91H2gFlRUHZ3H94LIw6kVQKsAx4NYELawp58/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5L2I3/LzczLzI5Yjc3MzY4/MzNhNTQ0ZTRlNWE0/OTc4OGYxNDZlZGE2/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks VIA® Instant Pike Place® Roast </h1>
                        </div>
               </Row>

               <div>
                <header className='MiniSectionName'> Dark Roast </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/23/via">
                                <img className="HCImage" src="https://imgs.search.brave.com/gHmnoNf5tU4UTboRIHBZzELPeyR2I2CRqem0FvotREA/rs:fit:488:488:1/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/NGQ5OGQ1NmQtODUw/Yy00MWUzLWI1ZmUt/YTU3NzYwYzNiM2Yz/P3dpZD00ODgmaGVp/PTQ4OCZmbXQ9cGpw/ZWc">

                                </img>
                            </a>
                            <h1 className="caption"> VIA Italian Roast </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/868/via">
                                <img className="HCImage" src="https://imgs.search.brave.com/HYwdaO4uPH2F-MmIafvJsF09pEbP7OScupcffVpVFNg/rs:fit:900:900:1/g:ce/aHR0cHM6Ly9kc29t/LWltYWdlci1wcm9k/LnNoaXB0LmNvbS83/NDJiNDMyYS1iYzAw/LTMzNGItOTRiNS02/OTEyNmQ1MDRiOGQv/MC0zY2E5YjVkNjlj/MzU5YmYyNTE5NDZm/NGQ1OWUzZThmMi5q/cGVn">

                                </img>
                            </a>
                            <h1 className="caption"> VIA Decaf Italian Roast</h1>
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

export default VIAInstant