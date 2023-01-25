import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Frappuccinos = () => {
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
                    <header className="SectionName"> Frappuccinos</header>
                </div>
                <div>
                  <header className='MiniSectionName'> Coffee Frappuccino</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123364/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/c2AABHeKhVsv111MbO1T2Yt1XIn7cMg2FFVzKEbH97Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9saWZl/c3R5bGVvZmFmb29k/aWUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA0L1N0/YXJidWNrcy1QaXN0/YWNoaW8tRnJhcHB1/Y2Npbm8tY29weWNh/dC1yZWNpcGUtNC1v/Zi0xMS0xNDA3eDIw/NDguanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Pistachio Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="Peppermint Mocha Frappuccino® Blended Beverage">
                                <img className="HCImage" src="https://imgs.search.brave.com/St5zwVliGDLN24CzrxuFT_Bh1e-sBQSe_rxukVKVfQA/rs:fit:670:670:1/g:ce/aHR0cHM6Ly93d3cu/dGhlY29mZmVlYXJv/dW5kLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNy9J/Y2VkLVBlcHBlcm1p/bnQtTW9jaGEtNjcw/eDY3MC5wbmc">

                                </img>
                            </a>
                            <h1 className="caption"> Peppermint Mocha Frappuccino® Blended Beverage </h1>
                        </div>
                        </Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/522/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/f9oRhNul6d6jl3hqRwIZUncw_MLSOub_OhxN7dHuyh0/rs:fit:305:363:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy9jZjQ3N2E5/YzNlZDY0MDE1YjU4/OTk4ODBjZTVhYjVk/YS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Peppermint White Chocolate Mocha Frappuccino® Blended Beverage </h1>
                        </div>
               
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/518/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Rm1d-SImM63sht6VczeWAfh3l6okNjP8wW5xBh6ZHUA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMyL2M1/LzkzLzMyYzU5M2Rm/OTI1YzIwZGZmN2M2/ODBjNzMzMzk0NTZm/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Caramel Brulée Frappuccino® Blended Beverage </h1>
                        </div>
                        </Row><Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068662/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/5N3wjQaabMXwlDruNZLirw1jUfFZzHHwCF43fEejlpA/rs:fit:640:480:1/g:ce/aHR0cHM6Ly8yLmJw/LmJsb2dzcG90LmNv/bS8tc0tLQmhFVG1o/aGsvVkdhRlFjTVJo/M0kvQUFBQUFBQUFp/QzAvdm1Dczg5c1JJ/TUkvczE2MDAvc3Rh/cmJ1Y2tzLWNoZXN0/bnV0LXByYWxpbmUt/ZnJhcHB1Y2Npbm8t/MDEuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Chestnut Praline Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/956/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/bTxrV_ugHoPFVjfRoAw1LsDSe0J3-4-MOkoyGVnPALM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMDZlMjk3/OTZlNzQ0NGFhNTg1/ZTJjMTgzODQwNDFk/ZGMuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Mocha Cookie Crumble Frappuccino® </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123594/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Pu1eqxaEHoqoF9eIPF8fD8Eddq4-Cx0BhLIB5cMP3Pw/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMzhiMWVh/MjRhYTNkNDEzMGEw/MWI5YjJjMTAxZTU3/MzguanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV90b3Bjcm9wXzYz/MA">

                                </img>
                            </a>
                            <h1 className="caption">Sugar Cookie Almondmilk Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122484/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/INPpFMzEZpZ3VCDKqHWkLHCHAbPiFqPnbs__ipXjriw/rs:fit:680:680:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC84My8wOS9jMy84/MzA5YzMyZDUwNTcz/YWI0NzA3MjFiYWNm/N2NiMDUwMy5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Toasted White Chocolate Mocha Frappuccino® Blended Beverage </h1>
                        </div>
                         </Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1044/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/OW2zYlTO1qsdisaAsqLSYgJEJevBPJtb-gggiGnHXk4/rs:fit:843:843:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1wU2RiNDhzSE0y/US9VMU50bG9LX0xz/SS9BQUFBQUFBQU1p/TS81ZFlKcUNGVHp6/NC9zMTYwMC9hcHIr/MjgrMjAxNCs4ODM3/NzJfMTAxNTMyODUw/OTU3NDI5MjVfMTEx/OTM1MTUwMjExMTY4/Mzk5OV9vLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Caramel Ribbon Crunch Frappuccino® Blended Beverage </h1>
                        </div>
              
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/500/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/IweFEetAFg7yaBu8bzL_XypgLZbF626xwGtrrjABAfM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvZDJjMGE2/NjBhOGU0NDM4ZmFj/OWNmYTFjNTM1ZTg0/NDAuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Espresso Frappuccino® Blended Beverage </h1>
                        </div>
                        </Row><Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/423/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/VCQGCdl78iNiw3TjUf0l5f3UBOtlHLYJA7vK6K5GEeQ/rs:fit:305:363:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy9kYzA2MzNj/NDU0MzE0YTUxOGIw/MzFkMWU0YTlmMjI2/Yy5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Caffè Vanilla Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/424/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/-Fu142g56j2OCS-b5mmRESYw5nzkAg5laOLdx-DrZgY/rs:fit:305:363:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMzQ3ZGIw/OTRlOWEyNGYzZWFl/NDQ5ZWFjNTg5NmI3/ZGYuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Caramel Frappuccino® Blended Beverage </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/483/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/xUtI1wI7nxPEAXVNGOg8t2QGdluxKbB-UlSYJYOjoeE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNjk0Yjcx/ZGQ1ZGQ0NDQ2OTgw/OTIxNTY5YjQ5NzI0/OTguanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Coffee Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/426/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/WjPoiZN_c7hKzfpGbAVMSc6kNcENSDia0TBdR08yQLE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMTc5Yjcw/MzEzMWZkNDJmYjg4/NzliM2NiMTk5Yzk5/OGYuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Mocha Frappuccino® Blended Beverage </h1>
                        </div> </Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/425/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/5wjxNXJH65l-ccn6pMDQRwFVdN-DwfpaKnFlG3b0vcI/rs:fit:474:474:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvODY5YjI0/NmViNDU1NDZlMTkz/YWQ2NDg0OGNhMDcw/ZjIuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Java Chip Frappuccino® Blended Beverage </h1>
                        </div>
              
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/428/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/jLRxXui3nI5_52M2JjBR0gH95ucvyKemV_jdwUAsMQY/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9tZWRp/YTEucG9wc3VnYXIt/YXNzZXRzLmNvbS9m/aWxlcy90aHVtYm9y/L3VwU3FLQmF1MldB/SWZKTEFVQ2tJZTUx/ZG80US9maXQtaW4v/MTAyNHgxMDI0L2Zp/bHRlcnM6Zm9ybWF0/X2F1dG8tISEtOnN0/cmlwX2ljYy0hIS0v/MjAxOS8xMC8yMy82/OTgvbi8xOTIyMTk1/L2VhODUwMDA1ZjI5/NTgyZjFfNDA2MTRk/OTFiNjE2NGI3Njg2/MWVlZjNlMTI5ZmY0/MGUvaS9TdGFyYnVj/a3MtV2hpdGUtQ2hv/Y29sYXRlLU1vY2hh/LUZyYXBwdWNjaW5v/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">White Chocolate Mocha Frappuccino® Blended Beverage </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Creme Frappuccino</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123365/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/c2AABHeKhVsv111MbO1T2Yt1XIn7cMg2FFVzKEbH97Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9saWZl/c3R5bGVvZmFmb29k/aWUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA0L1N0/YXJidWNrcy1QaXN0/YWNoaW8tRnJhcHB1/Y2Npbm8tY29weWNh/dC1yZWNpcGUtNC1v/Zi0xMS0xNDA3eDIw/NDguanBn">

                                </img>
                            </a>
                            <h1 className="caption">Pistachio Crème Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122089/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/1QZRwnCPjydAusYWJ1Wg2qR0TFKDyBfdMqR-99zJ2bc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNTdjNzk3/YTFmY2Q5NGFjYmI3/ZTJhODVkNzdjOGRh/MTAuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Peppermint Mocha Crème Frappuccino® Blended Beverage </h1>
                        </div>
                        </Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123305/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/eDLD6tw2K6aulbFfx323L7yKKP0T8St5XLg4TkJ1dfg/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvYmJhMWQ3/OTM3MjM4NGQzOWFh/MTY2MmY0ODE1ODQ2/MTAuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Peppermint White Chocolate Crème Frappuccino® Blended Beverage</h1>
                        </div>
               
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/520/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/LAaFLFgWjuUHRQB-gnjhYBsOdTvW2-809HOakvVoWHw/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU3LzZi/LzJlLzU3NmIyZWU2/YTU2Mzk0MDQ3Y2E2/MWY2NmNkZTg3YjNj/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Caramel Brulée Crème Frappuccino® Blended Beverage </h1>
                        </div>
                        </Row> <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068663/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/UvvsMd3Lr0oqBvozpdSFEOGAYMOyN-q4zYBdmr4kVj0/rs:fit:305:363:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkLzg1/LzU3L2ZkODU1Nzlj/MWQxOTBiOGM2N2Ux/NzJhYzlkYzkzNDNm/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Chestnut Praline Crème Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123595/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Pu1eqxaEHoqoF9eIPF8fD8Eddq4-Cx0BhLIB5cMP3Pw/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMzhiMWVh/MjRhYTNkNDEzMGEw/MWI5YjJjMTAxZTU3/MzguanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV90b3Bjcm9wXzYz/MA">

                                </img>
                            </a>
                            <h1 className="caption"> Sugar Cookie Almondmilk Crème Frappuccino® Blended Beverage </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122486/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/hQ3hJIsezfht4JqMIqvV1gYNPb-1q0cd_FB-twCnoBc/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MxLzhm/LzNhL2MxOGYzYTBj/N2E3NTQ4YTg3Yjhk/OTAzNDg2MjNhYTU0/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Toasted White Chocolate Crème Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/957/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/OJ8Sx5KmP4Aqj3OXLpS4DVlk5K09DxSeX8-qwHOkAko/rs:fit:305:363:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNzZmYTQ0/YTc1MjdiNDdiYmIx/ZjlhMDMyZWFhMzU4/ZjYuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Chocolate Cookie Crumble Crème Frappuccino®</h1>
                        </div>
                        </Row> <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1062/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/5uCYlfsLAmh2cz4AxJTaxG9wvXq-lh_309NQyNnpNhw/rs:fit:305:363:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy9iZWM5YjNm/OTUyZDU0NTU1ODE5/NWFiMWI0NzU3MmUy/My5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage </h1>
                        </div>
               
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122724/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/mN1hJpNhkdefI2K4DQaNScOjIcV3IU9QIfvKmVPgQyo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMjFmODMx/NTZlZGUzNDM2Zjlj/OThhYWQyODMwMjRl/YjYuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Strawberry Crème Frappuccino® Blended Beverage</h1>
                        </div></Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/438/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/L2usjTl-Xf2xuJsmUGRFi9Vs8wOF359HMx4Zk7sncA8/rs:fit:620:634:1/g:ce/aHR0cDovL2Fzc2V0/cy5teXN0YXJidWNr/cy5jb20uYXUvaW1h/Z2VjYWNoZS9iZXN0/Zml0LzYyMHg2MzQv/X2ZpbGVzL0JldmVy/YWdlcy9wcm9jZXNz/ZWQtMjAxMy9jaGFp/ZnJhcHAuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Chai Crème Frappuccino® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/435/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/4utZq0ejstSV6XIFnWQ_I2ffIA2GoPcUY6dhS4I99ZI/rs:fit:305:363:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy8xMmU5OGQy/ZDg3OGQ0MTNjOWI3/N2QzOTEwZGE2MjUy/YS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Double Chocolaty Chip Crème Frappuccino® Blended Beverage </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/439/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/VwhK3wvj4HLqQWUlqHDUkbtRmWHoMPEjDL4w2dLnvFA/rs:fit:1102:1102:1/g:ce/aHR0cHM6Ly93d3cu/bG93Y2FyYmluZ2Fz/aWFuLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wOC9L/ZXRvLVN0YXJidWNr/cy1Db3B5Y2F0LU1h/dGNoYS1DcmVtZS1G/cmFwcHVjY2luby1Q/aWMtMi0xLTEzMjB4/MTMyMC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Matcha Crème Frappuccino® Blended Beverage </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/440/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/2hywwZeQ7-V6fVRV6KKCme0F5Wttf8eKSQay7TBCdr8/rs:fit:1008:1200:1/g:ce/aHR0cHM6Ly91c2Vy/Y29udGVudDIuaHVi/c3RhdGljLmNvbS82/NjAxOTE1X2Y1MjAu/anBn">

                                </img>
                            </a>
                            <h1 className="caption"> Vanilla Bean Crème Frappuccino® Blended Crème </h1>
                        </div>
                        </Row> <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/441/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/UWzn1cak3T-qaBC53funEy5RLfn-LC231tD2mN4RdqM/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvNDAweDQw/MC85MjcwX3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> White Chocolate Crème Frappuccino® Blended Beverage </h1>
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

export default Frappuccinos