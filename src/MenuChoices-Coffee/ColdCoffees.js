import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ColdCoffees = () => {
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
                    <header className="SectionName"> Cold Coffee </header>
                </div>
                <div>
                  <header className='MiniSectionName'> Cold Brews</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123702/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/28MQS3FF8-yYBdEkWtfxjHKGbtHU_fiKcDIFH72K9O8/rs:fit:590:389:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLm1pbnV0ZW1l/ZGlhY2RuLmNvbS9p/bWFnZS9mZXRjaC9j/X2ZpbGwsZ19hdXRv/LGZfYXV0byxoXzM4/OSx3XzU5MC9odHRw/czolMkYlMkZmb29k/c2lkZWQuY29tJTJG/ZmlsZXMlMkYyMDIz/JTJGMDElMkZQaXN0/YWNoaW8tQ3JlYW0t/Q29sZC1CcmV3LWlu/LVBpc3RhY2hpb3Mt/ODUweDU2MC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Pistachio Cream Cold Brew </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123644/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/NcLz1RInr04jQYIeexUr9cnKVYIWC3CyLkRSruVtzmw/rs:fit:800:800:1/g:ce/aHR0cHM6Ly93d3cu/bG9mYmVyZ3MuZmkv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvY29sZC1icmV3/LWNob2NvbGF0ZS1j/cmVhbS1oaWVra2Fy/YW50YS04MDB4ODAw/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Chocolate Cream Cold Brew </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122795/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/c7w_88SsuLVDPJdrvp1NeBLWdNtKfy3Z5i8NmTZnlZY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/c3RheXJvYXN0ZWQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA4L3NhbHRl/ZC1jYXJhbWVsLWNy/ZWFtLWNvbGQtYnJl/dy0yLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Salted Caramel Cream Cold Brew  </h1>
                        </div>

               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123139/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/jYBsgTdvX7X9SQjg4BV0WsaxyUDcL-CgsGeNsZXlEe4/rs:fit:887:739:1/g:ce/aHR0cHM6Ly93d3cu/ZmFzdGZvb2Rwb3N0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8xMi9TdGFy/YnVja3MtTmV3LUly/aXNoLUNyZWFtLUNv/bGQtQnJldy1oZXJv/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Irish Cream Cold Brew </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121255/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/U3fRMQDnmq13trQfUQKX0eEdGKii6zW7ReH7R7p9KXM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvZjQ5NDY0/OGYwMzQxNDY3YWFh/YWMxNGQ2MjE2ZjQ5/MzQuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks® Cold Brew Coffee
 </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121859/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/4J83ZLGOLWBV9kFAU7m3JtkHRn0046Yi4DJKuU9R2MI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly95b3Vy/ZHJlYW1jb2ZmZWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA0L3Zhbmls/bGEtc3dlZXQtY3Jl/YW0tY29sZC1icmV3/LTE1MzZ4MjA0OC5q/cGVn">

                                </img>
                            </a>
                            <h1 className="caption"> Vanilla Sweet Cream Cold Brew </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121343/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/z3LW6U_mbEGjxXJ5VyikUxtxoRT92bw_Q5AYDV-O6Bo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvOTZmN2Zk/Mjk1N2UzNGMxYjhm/MmE2ZWM4NWY1NDc5/YmMuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks® Cold Brew Coffee with Milk </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Nitro Cold Brews</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121912/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/i-Jgx44vA9mGNSYTC39Ww31ihSwr9JyiEb5ezL7OzxI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvN2Fi/MDM1NDQtMjhlMC00/MjczLWExOWUtZjQy/OTUxM2VhMWU2LmMz/YTEyMzA2ZWMzYWVi/NDZhYzgzOTY2MjM4/ODAyOWNkLmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption"> Nitro Cold Brew  </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122237/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Kr1pN5rrCcQEseCnsAcZMG8z0CRgB5l41RIZ607tJ90/rs:fit:316:316:1/g:ce/aHR0cHM6Ly9wYW5h/bWEubGF0aW5vc21h/cmtldGluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvVmFuaWxsYVN3/ZWV0Q3JlYW1OaXRy/b0NvbGRCcmV3LW9u/UmVkX0NvcmVMaWJf/c1JHQi0yLnBuZw">

                                </img>
                            </a>
                            <h1 className="caption"> Vanilla Sweet Cream Nitro Cold Brew </h1>
                        </div>

               </Row>
               <div>
                <header className='MiniSectionName'> Iced Americano </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/406/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/bYzVUWDScRjWWAUzc9rsh6lYm2fWOtlDjYNNSrXzQxQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy83MWQyZGMx/ZGY3MGM0MWNhOTFl/OGFhZTBiM2ZkM2Uz/Ni5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Caffè Americano </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Coffees</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/422/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/6nBZYTkzyckIay3_W1RW0vRh9zz0tGEJ9nW3Sw1lxds/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMmM2MjYy/MjVhNDgwNGU1YWJk/OGU5M2U3ZmQ1OWEw/YTIuanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV8xMjQy">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Coffee </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/482/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/vLVbmxhs8xtKwBDrQE1FLmNkTsOQ9DBGjtP9-NELpZg/rs:fit:305:363:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy80OWNlOGNm/ZmEzZWY0MTU1ODNj/ZDEyZGZkOTg3N2Y2/ZS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Coffee with Milk </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/410/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/ioYH-5oLFrjkk3NK0rJRPu3eo2xS9MxuT-uBjD60nk8/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9wLWNk/bjZjb2ZmZWUuam1z/aW5mLmNvbS90bXAv/aW1hZ2UtdGh1bWJu/YWlscy9hYS1yZWNp/cGUtaW1hZ2VzL2lt/YWdlLXRodW1iX18x/MTQyX19hdXRvX2Rl/MTFkY2JiNDQxOWEy/MTkxZTY4MmM4NWQy/NjFhNjA3L2JyZXdl/ZC1lc3ByZXNzby1p/Y2VkLWNvZmZlZS02/ODExXzEwNTUzXzE4/MzQucG5n">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Espresso </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Shaken Espresso </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123632/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/SnlfkOdtPOCi0wG02L6pY9fnY70pGi0on9MG9YNn09s/rs:fit:640:373:1/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tL2JmZWJjNmE3/ZTRmOTMwYTMwOWUy/OTEzZDllZGY0YTIy/LzZlMDk2MTg3Y2Ey/OThiOTAtZjQvczY0/MHg5NjAvZTBlMDdi/MDZlMTA3NWY3NWNm/M2RhZWJhZjM2Y2E0/ZGE3ZGIwZTJlMC5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption">Iced Toasted Vanilla Oatmilk Shaken Espresso </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123431/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/2wGA4WFuD1Qp9bZJSAlV-vHNJ4s-AnitPfUT9iQCbOc/rs:fit:682:1024:1/g:ce/aHR0cHM6Ly9kZXNz/ZXJ0c2FuZGRyaW5r/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDgvSWNl/ZC1Ccm93bi1TdWdh/ci1PYXRtaWxrLVNo/YWtlbi1Fc3ByZXNz/by1Db2xsYWdlLTMt/NjgyeDEwMjQuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Brown Sugar Oatmilk Shaken Espresso </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123430/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/dcb1PKZBqVxD2xrLpRrkCqTC5uFS8-jD3WB6e3b8Khk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ibG9n/Z2Vycy5zb2NpZXR5/MTkuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzExL2Nv/Y29udXQtbWlsay1t/YWNjaWF0by5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Chocolate Almondmilk Shaken Espresso </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123425/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/vVoHlfY15smYDQ3g3QTwWGs9U-2MyW5TEcfNXQRokvI/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jYWtl/YmFraW5nLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/My9pY2VkLXNoYWtl/bi1lc3ByZXNzby1y/ZWNpcGUtOTY1Nzkz/LTEwMjR4MTAyNC5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Shaken Espresso </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Flat Whites</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/565/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/YGil6_id5ohYO-6StJkIojRlS7mJ1p12XpmV9xX6LTg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWJzb2x1dGRy/aW5rcy5jb20vZHJp/bmstaW1hZ2VzL1Jh/dy9LYWhsdWEvZjZm/NWRjNDEtMDI2NS00/YzllLWE1NWEtY2Y3/OWFmYTRjNjE1Lmpw/Zz9pbXdpZHRoPTEy/ODAmaW1kZW5zaXR5/PTI">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Flat White </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123158/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/lQpoW8ncZGciWWlK21AcgzEMQwvLrQmyPF_ovq1e1_A/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly90aGVo/ZWFsdGhmdWxpZGVh/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDYvSWNl/ZC1Ib25leS1BbG1v/bmRtaWxrLUZsYXQt/V2hpdGUtU1FVQVJF/LTEwMjR4MTAyNC5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption">Iced Honey Almondmilk Flat White </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Lattes</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123404/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/1M5WLWPpCIp111cX-byllJKbWXNn5nVshVfDotAnaSQ/rs:fit:768:1152:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFhL2Y4/LzlkLzFhZjg5ZGRk/ZTRmM2I1YmM3ZmRh/ZjFhODM5ZDJkNTQx/LnBuZw">

                                </img>
                            </a>
                            <h1 className="caption">Iced Pistachio Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/517/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/-Dz2UtN8Ibuu1dAbJnKXfn9tijMEjA-fhVY8trdaULk/rs:fit:783:1024:1/g:ce/aHR0cHM6Ly90aGVo/b25leWJlZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvQ2FyYW1lbC1C/cnVsZWUtTGF0dGUt/NS03ODN4MTAyNC5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Caramel Brulée Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068661/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Xdsc-Qgd3lHcedIY-7fIXpEHt3djg8xt-stYOu59tg0/rs:fit:305:305:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy8xY2EyMzg3/M2FjMzY0NGNmYTI1/MTc4NjYzNWZiZmFj/YS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Iced Chestnut Praline Latte </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123591/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/ehOpc6fwERCNMqV5WJp02H1q-4n-1Kw-1v9klY2XQTQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93ZWFy/ZW5vdG1hcnRoYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzL0lj/ZWQtU3VnYXItQ29v/a2llLUFsbW9uZC1N/aWxrLUxhdHRlLUZl/YXR1cmVkLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Sugar Cookie Almondmilk Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122614/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/4yofkJ_v2IHLjewH8YkQtrh20yV5PP8CWrXEIzvn4T0/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly93d3cu/c3RhcmJ1Y2tzLmNv/LnRoL3N0Yi1tZWRp/YS8yMDIwLzA5LzEy/MS5MYXR0ZV9JY2Vk/X1Jlc2VydmVfQmxh/Y2tFRzEwODAucG5n">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks Reserve® Iced Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122617/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/9iiDfg4ccjBWtrbrCZXZCVuGdOU07mB89kR_QHAoeLQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvMTI0Mngx/MjQyLzkxNDFfcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks Reserve® Iced Hazelnut Bianco Latte </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/407/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/FbCDWMseIv0N6ibdSNQLkqlmWbLUiix7tc3Vxsp-aoM/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy8xMTNlZWNk/ZThiZTk0NWMwYWFh/M2FkYzQwNDEwZThi/MS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Caffè Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/414/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/o78tHckjEtSRRT2kERLZptvm3z2a8fGy06wVh6W37pc/rs:fit:1140:1200:1/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIzODY1MDQ5L3Iv/aWwvNTg1MTA2LzMw/NDkwODg5MDcvaWxf/MTE0MHhOLjMwNDkw/ODg5MDdfY2twcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption">  Iced Cinnamon Dolce Latte</h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122164/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/zXhgO7ncia-7ghkZwD-Y1rWtEs4I4xyL9zXn2U8Cobk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RmLzcw/LzBkL2RmNzAwZDkw/Y2QxZWJmZTFjMDhl/ZmUwMTIzYzE3MmY2/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Starbucks® Blonde Vanilla Latte </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Macchiatos</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/413/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/VwFMMt84RlUBpD9Trd0btOZTaTX6J9bJggH5t09nDBc/rs:fit:750:750:1/g:ce/aHR0cHM6Ly9iYWtp/bmdtaXNjaGllZi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDUvaWNlZC1j/YXJhbWVsLW1hY2No/aWF0by1pbWFnZS1z/cXVhcmUuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced Caramel Macchiato </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Mochas </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/496/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/qUJxllN90K6mdqURZnPDZCbiduoTGO031bNdbgZ95kE/rs:fit:640:880:1/g:ce/aHR0cDovL3d3dy5h/dHRhZ2lybHNheXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzEyL2ljZWQt/cGVwcGVybWludC1t/b2NoYS1yZWNpcGUt/NC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Iced Peppermint Mocha
 </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/420/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/oexg2Q1sQqSs5Z2rMCnar79slO4-BVmqbd3F5z8Vtg0/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9jb2Zm/ZWVhZmZlY3Rpb24u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA0L2ljZWQt/d2hpdGUtY2hvY29s/YXRlLW1vY2hhLTUw/MHg1MDAuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced White Chocolate Mocha </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/497/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/_Z4PA60RwXAP53oCDcbQDM0wSAMbdbircr9lZaqwtGE/rs:fit:500:500:1/g:ce/aHR0cHM6Ly93d3cu/cGF1bGFkZWVubWFn/YXppbmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzAx/L1BlcHBlcm1pbnQt/V2hpdGUtQ2hvY29s/YXRlLU1vY2hhLTUw/MHg1MDAuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Peppermint White Chocolate Mocha </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122482/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/r1Amp3CYoAbGf2tKsYYhvzDO8Tb_m6MaDUT87wXTzz4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YTEucG9wc3VnYXIt/YXNzZXRzLmNvbS9m/aWxlcy90aHVtYm9y/L3RyYV80VEtKVWJu/eWNKN1IxcEpSdFdW/Nm8xcy9maXQtaW4v/MjA0OHhvcmlnL2Zp/bHRlcnM6Zm9ybWF0/X2F1dG8tISEtOnN0/cmlwX2ljYy0hIS0v/MjAxNy8xMS8wOC8w/Nzgvbi8xOTIyMTk1/L3RtcF85SjRVRnFf/MmFhNTg3MGRkM2Yx/YzU0Y19Ub2FzdGVk/X1doaXRlX0Nob2Nv/bGF0ZV9Nb2NoYV9J/Y2VkLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Toasted White Chocolate Mocha </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/408/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/nUBi6nyu3cT7vD3fh-faIZde5wO_TW2MDT-GOnzerNQ/rs:fit:301:303:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8zNy9lNS9iOC8z/N2U1YjhlNmFiZjI3/NTQzMmI0YzllZWY1/NGM1Mzk5Ny0tbW9j/aGEuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced Caffè Mocha </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122615/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/0Uu_Z9HXwBjTT9vOnkKgK_fyXc3lq-sZt0KInDXYLw0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvMTI0Mngx/MjQyLzkyNTFfcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption">Starbucks Reserve® Iced Dark Chocolate Mocha </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Iced Clover Brewed Coffees</header>
               </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123277/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/6kH4pI5hadN_I-MYfDfAFTEHfk9okwfeDBl88tpzHGw/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI1LzBj/L2MyLzI1MGNjMjAx/YTI5N2YzMmQ5NDhj/ZWIyNzE4YzAzYzAy/LnBuZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Clover® Starbucks Reserve® Costa Rica Naranjo </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123709/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Ep9Lvihy7qnjO3JPIwtCqVctNtiPpcAVcynftqUU0VQ/rs:fit:700:1079:1/g:ce/aHR0cDovL3N0YXRp/YzEuc3F1YXJlc3Bh/Y2UuY29tL3N0YXRp/Yy81NmRhNWYwY2Q1/MWNkNDIyNGUzZmI0/NTgvNTZkYTVmZTlj/MmVhNTFlYWRhYjc2/OTNhLzYxZTA2N2M3/OTVkMjc1MmExOWRi/M2UzYS8xNjQyMDk3/NDA5OTQ4L2Zyb250/K29mK2dhbGFwYWdv/cy5qcGc_Zm9ybWF0/PTE1MDB3">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Galápagos La Tortuga Clover® Starbucks Reserve®
 </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123701/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/utlBzWmZRSl6zZThYl8XHxTzqZPiKNU4fC_vMQ0Zxe8/rs:fit:225:225:1/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tLzAw/L3MvTmpRd1dEWTBN/QT09L3ovSlRvQUFP/U3dQMlZmSXlzRC8k/XzYyLkpQRz9zZXRf/aWQ9ODgwMDAwNTAw/Nw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Guatemala Lake Atitlán Clover® Starbucks Reserve® </h1>
                        </div>
                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122090/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/RS0SZ_2rcWXKwIf1IlP4iV0gXRjD8qbC_uuqAc5Vfug/rs:fit:469:281:1/g:ce/aHR0cHM6Ly9zdG9y/aWVzLnN0YXJidWNr/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDEvRjRQ/WnJkdkUtNTg4LTMz/MS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Ethiopia Yirgacheffe® Chelelektu Clover® Starbucks Reserve® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121636/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/5lKbLN2l4-806T6aQtX6a6-jXy2PgxeP1L--PrbRJAk/rs:fit:900:900:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEwLzU5/LzQxLzEwNTk0MWVk/ZWNiNjRlNTUyYmYz/ZjlkZDMzOWExM2Qx/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Iced Caffé Verona® Clover® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121632/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/B4OXPFm4Z79R_7IzWcKN9UVS0VVmBjPr2liI5LZYkO4/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvOTM0MWNm/ZDU2Y2QyNDNkNGJj/NTI0ZjQwYjRmOTJh/MGIuanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV90b3Bjcm9wXzYz/MA">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Clover Brewed® Decaf Espresso Roast</h1>
                        </div>
                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121748/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/FVuQgJcxKZlKgYKSVxUj24gsYuG3J3vml1_8-NAgUoI/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5h/Y2VkZXBvdC5jb20v/cmVzb3VyY2VzL2Fj/ZWRlcG90L3Byb2R1/Y3QvbGFyZ2UvYjAw/Nnl5c3EyMF83MzY3/ODUuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced Clover Brewed® Decaf Pike Place® Roast </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121582/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/uKa2qW603DpozlPXXaTNd1xb5hBLfk8Rvx8J_30SJbk/rs:fit:630:630:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvYWZkYjhi/OWFjZjc4NDY3OWE2/ZGI5ZjIxMGE4Zjgz/YmMuanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV90b3Bjcm9wXzYz/MA">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Espresso Roast Clover® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121587/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/nWM6KUnlgSxu9HbUkjto3GRq-WTis_3iNqJQkA8Xsj0/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvYzNkMTli/ZDhiMzM3NGZkNWJl/NzBmNDU5MmY3M2I1/MmMuanBnP2ltcG9s/aWN5PTFieTFfd2lk/ZV82NDA">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Clover Brewed® Italian Roast </h1>
                        </div>
                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122377/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/UGTmOcv8Us7pw3ld-b-hQ0cmUdTzK0X6jmsg0l_bWSI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMTBlNzZh/MjczMjM3NDUwNTk0/NzYyYjNiODhkODBi/NjQuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Komodo Dragon Clover® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121629/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/DbCWePhZOeQJAeETjcuiTT2Skd2a3fVOYmGmbrL0TvY/rs:fit:900:900:1/g:ce/aHR0cDovL2NvbnRl/bnQuZXRpbGl6ZS5j/b20vaW1hZ2VzLzkw/MC8xMDIzNTU2Mjg1/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Pike Place® Roast Clover® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121635/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/tX-5uJJEM6dPfRYKjGBwsTbb_llAXLVPk2DZnNx0cps/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9jcmF6/eWNvZmZlZWNyYXZl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMi9DQUhf/R2xvYmFsX1ZlcmFu/ZGFCbGVuZF9Hcm91/bmRfQmFnX0Zyb250/XzAtMzAweDMwMC5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Iced Veranda Blend® Clover® </h1>
                        </div>
                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121631/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/pnCZggrwvtEalUBcPScPLnOLqI8QfQQHsrHsfKxFbnk/rs:fit:270:270:1/g:ce/aHR0cHM6Ly93d3cu/bG9uZG9uZHJ1Z3Mu/Y29tL2R3L2ltYWdl/L3YyL0FBSklfUFJE/L29uL2RlbWFuZHdh/cmUuc3RhdGljLy0v/U2l0ZXMtbG9uZG9u/ZHJ1Z3MtbWFzdGVy/L2RlZmF1bHQvZHdl/YjdlNzBiNC9wcm9k/dWN0cy9MMDI0MzUz/Mi9sYXJnZS9MMDI0/MzUzMi5KUEc_c3c9/MjcwJnNoPTMzMCZz/bT1maXQ">

                                </img>
                            </a>
                            <h1 className="caption">Iced Organic Yukon Blend® Clover® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121633/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/mu7fYOg7rLXzMjiN28swq1DJ-bZnVDoAxfSxoZgcUwI/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly93d3cu/c3RhcmJ1Y2tzLnR0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA1L2RlY2FmX3N1/bWF0cmFfd2JfZnkx/NF91c19nci0xMDI0/eDEwMjQuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced Decaf Sumatra Clover® </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121630/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/2JDRBIJOWh4nM4Usw2T1BSS33F5191wSCozVHASCunU/rs:fit:305:363:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvYmZlZThm/MjVjMDJiNGMxNTk1/YzIxODY3MmI1ZGU4/YjcuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Iced Sumatra Clover® </h1>
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
