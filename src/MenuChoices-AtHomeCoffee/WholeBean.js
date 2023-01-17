import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const WholeBean = () => {
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
                    <header className="SectionName"> Whole Bean</header>
                </div>
                <div>
                  <header className='MiniSectionName'> Starbucks Reserve</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123717/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/utlBzWmZRSl6zZThYl8XHxTzqZPiKNU4fC_vMQ0Zxe8/rs:fit:225:225:1/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tLzAw/L3MvTmpRd1dEWTBN/QT09L3ovSlRvQUFP/U3dQMlZmSXlzRC8k/XzYyLkpQRz9zZXRf/aWQ9ODgwMDAwNTAw/Nw">

                                </img>
                            </a>
                            <h1 className="caption"> Guatemala Lake Atitlán Starbucks Reserve® </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123403/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/or9fqEFFD110ruaXnonij1SoYORfsoMeiX9frhwHNPs/rs:fit:720:720:1/g:ce/aHR0cHM6Ly9pLmRh/eWouY29tL2ltYWdl/LzcyMC9mb29kLzE4/OTc4MDUvZXRoaW9w/aWEteWlyZ2FjaGVm/ZmUtY2hlbGVsZWt0/dS1jbG92ZXItc3Rh/cmJ1Y2tzLXJlc2Vy/dmUtdmVudGkucG5n">

                                </img>
                            </a>
                            <h1 className="caption"> Ethiopia Yirgacheffe® Chelelektu Starbucks Reserve® </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123711/whole-bean">
                                <img className="HCImage" src="
                                https://imgs.search.brave.com/Ep9Lvihy7qnjO3JPIwtCqVctNtiPpcAVcynftqUU0VQ/rs:fit:700:1079:1/g:ce/aHR0cDovL3N0YXRp/YzEuc3F1YXJlc3Bh/Y2UuY29tL3N0YXRp/Yy81NmRhNWYwY2Q1/MWNkNDIyNGUzZmI0/NTgvNTZkYTVmZTlj/MmVhNTFlYWRhYjc2/OTNhLzYxZTA2N2M3/OTVkMjc1MmExOWRi/M2UzYS8xNjQyMDk3/NDA5OTQ4L2Zyb250/K29mK2dhbGFwYWdv/cy5qcGc_Zm9ybWF0/PTE1MDB3">

                                </img>
                            </a>
                            <h1 className="caption">Galápagos La Tortuga Starbucks Reserve® </h1>
                        </div>
                </Row>
                <div>
                 <header className='MiniSectionName'> Blonde Roast</header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/860/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/xuejsR7O-w0AMig-5ZVunTBtIHOdGVQfVAOwBGUqpxs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvYmZl/NDA4YWYtYzY5NC00/YWM4LWEzMTktZTMz/NGViNWFmMTJlLjhl/OWIzZjFlNTg4N2Rm/MDI5NTgzMDQ1MDIx/YzBkMzY3LmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption"> Veranda Blend® Whole Bean Coffee </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122186/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/tjtoZI7ITqs63ktFVJj-ae4Wy3LrJe-oGTKavCc9UMU/rs:fit:751:675:1/g:ce/aHR0cHM6Ly93d3cu/bWF4aWNvZmZlZS5j/b20vaW1hZ2VzL3By/b2R1Y3RzL2xhcmdl/L3N0YXJidWNrc19i/bG9uZGVfZXNwcmVz/c29fcm9hc3RfMjUw/Z19ncmFpbi0xLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks® Blonde Espresso Roast </h1>
                        </div>
                </Row>
                <div>
                  <header className='MiniSectionName'> Medium Roast </header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/792/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/jYCi0ZHrRTctcx6FXcCXAxp7QsrqL6q9iFOF3mjG8T4/rs:fit:750:750:1/g:ce/aHR0cHM6Ly9wdWJs/aXNoLnB1cmV3b3cu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy8yLzIwMjIv/MTIvc3RhcmJ1Y2tz/LXdpbnRlci0yMDIz/LW1lbnVfdHJpYnV0/ZS1ibGVuZC5qcGc_/Zml0PTc1MCUyQzc1/MA">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks Tribute Blend® 2023 </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/295/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/skUXTmMYoxovMjhby5aRmVIQMERcU5hicnI6LRWMDTA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvZTIx/YTFiYTktMzY4Ni00/ZDU0LWI1NDktZmNl/MmI2MmY1NmVkXzEu/NzcyZGRkMTExNzlk/NTc3Y2IxZjZiNWM3/M2U0NDZhZDMuanBl/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks® Holiday Blend </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123124/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/7ERTKsHqhcyNIJ8YD2m6XZgU5Pru6AaXTlmqndysYro/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9zdG9y/aWVzLnN0YXJidWNr/cy5jb20vdXBsb2Fk/cy8yMDE5LzA5L1NC/WDIwMTkwNjI0XzM4/NDMyLVdob2xlQmVh/blNpcmVuJUUyJTgw/JTk5c0JsZW5kLW9u/R3JlZW5fQ29yZUxp/Yl8xOTA3MTFfc1JH/Qi0xMDI0eDEwMjQu/anBn">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks Siren’s Blend™ </h1>
                        </div>


                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/3/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/mzWZPEx8ltBZ0S50j3rtrDcfJAiuybTXRP0RT9wqNfo/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1ZSQUFB/T1N3UFVOZmFSRG8v/cy1sMzAwLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Guatemala Antigua Whole Bean Coffee </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/24/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/QfsyRPLVb-PbNQ2gMuIOB3ZdYKCOuH_tNgEK0hMW1T4/rs:fit:500:500:1/g:ce/aHR0cHM6Ly93d3cu/ZGVsaWNvLnNlL21l/ZGlhL2NhdGFsb2cv/cHJvZHVjdC9jYWNo/ZS8xL2ltYWdlLzUw/MHgvOWRmNzhlYWIz/MzUyNWQwOGQ2ZTVm/YjhkMjcxMzZlOTUv/cy90L3N0YXJidWNr/c19waWtlX3BsYWNl/XzI1MGdfMjAxNDEy/LnBuZw">

                                </img>
                            </a>
                            <h1 className="caption">Pike Place® Roast </h1>
                        </div>

                        <div className="box">
                            <a href=" https://www.starbucks.com/menu/product/290/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/wdFeig90BVvpP0WdmgoyVVEvKfOqV6GAkPD3w1YQR7M/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9kMmQ4/d3d3a21oZmN2YS5j/bG91ZGZyb250Lm5l/dC80MDB4L2QybG5y/NW1oYTdieWNqLmNs/b3VkZnJvbnQubmV0/L3Byb2R1Y3QtaW1h/Z2UvZmlsZS9sYXJn/ZV8yNDdkMjExNC0z/MjgwLTRiYTYtOWE5/NS05NWM2MjU3NjFj/MjIuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Organic Yukon Blend® Whole Bean Coffee  </h1>
                        </div>
                </Row>
                <div>
                  <header className='MiniSectionName'> Dark Roast</header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/292/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/Jy28IosPsnvdSb4XsHy6CVcLzucpj_t4dDnK6IWw7Hs/rs:fit:800:1200:1/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGJldi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTQv/MTEvVGhhbmtzZ2l2/aW5nX0JsZW5kXzIw/MTRfMS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks® Thanksgiving Blend </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/293/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/9Mye1FZdNnZnpkvPLw2LppBSu4CykeSe1woBMhKxITU/rs:fit:300:300:1/g:ce/aHR0cDovL2VjeC5p/bWFnZXMtYW1hem9u/LmNvbS9pbWFnZXMv/SS80MWJadUx2M0Zo/TC5fU1kzMDBfLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Christmas Blend </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/294/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/cY92OL6SqVGclU-pC3Fte6owosgHtEXE89FCwFA0nRY/rs:fit:480:640:1/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1VRVUFB/T1N3Q29WZX4wT0sv/cy1sNjQwLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Decaf Christmas Blend </h1>
                        </div>


                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/581/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/mu7fYOg7rLXzMjiN28swq1DJ-bZnVDoAxfSxoZgcUwI/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly93d3cu/c3RhcmJ1Y2tzLnR0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA1L2RlY2FmX3N1/bWF0cmFfd2JfZnkx/NF91c19nci0xMDI0/eDEwMjQuanBn">

                                </img>
                            </a>
                            <h1 className="caption">
Decaf Sumatra </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/15/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/IhAt95hmYaHJv3_6bKJTNBForWhB2Ic4yDoAB8-YQCU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/NzQvMzI0Ny8wNjEz/L3Byb2R1Y3RzL1N0/YXJidWNrc19DYWZm/X1Zlcm9uXzAyMTY4/Ml83NjQ3XzBfcmVz/LmpwZz92PTE1OTUw/MjE5ODk">

                                </img>
                            </a>
                            <h1 className="caption"> Caffè Verona® </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/20/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/vtHqQ2YlWEMKJtpUy9eI2TdZLDoj1dDmxmuLn5ne1dE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGViLmNvbS9p/cy9pbWFnZS9IRUJH/cm9jZXJ5LzAwMDI4/MDE5Mg">

                                </img>
                            </a>
                            <h1 className="caption">Espresso Roast </h1>
                        </div>


                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/23/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/NolTUYWH8qtKm6-SqC5uE17tEG0d1i0yMlBY97aGYyc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOTA5/YWUwNGUtYzJhZi00/MDMyLTk4YTItYWVj/MzMzMWFlODcwLjRh/NzBlYTAyYzQwYWNl/ZGQwNmQxOTY5NzA3/ZTljY2U3LmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption"> Italian Roast </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/10/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/ozPm6cI-7srp5J8x5IennP3-s6_8QzRhjgP26jObdps/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9mYTc0/ZDYxZDg0OGEyMGI3/MjliYi0wMjUxYjM2/YjcxMzA2MGFiM2Uw/ZTgzMjE5NDBlMDFm/Zi5zc2wuY2YyLnJh/Y2tjZG4uY29tLzA3/NjIxMTE5NjI3ODBf/Q0ZfU3luZGlnb19k/ZWZhdWx0X2xhcmdl/LnBuZw">

                                </img>
                            </a>
                            <h1 className="caption"> Komodo Dragon Blend®</h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/8/whole-bean">
                                <img className="HCImage" src="https://imgs.search.brave.com/AjynXjjuI2Z3VBh_6U3gLSzChwZ4nzyf0pVu5GOt4N4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGViLmNvbS9p/cy9pbWFnZS9IRUJH/cm9jZXJ5LzAwMDY2/Nzg0Mg">

                                </img>
                            </a>
                            <h1 className="caption"> Sumatra </h1>
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

export default WholeBean