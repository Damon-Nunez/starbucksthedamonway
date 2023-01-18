import React from 'react'
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ColdDrinks = () => {
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
                    <header className="MiniSectionName"> Cold Drinks</header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122756/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/rQ3lrTBhACKGUvKJAFKID8Xu-uhLsQy0Wtr7E7xMbQU/rs:fit:597:598:1/g:ce/aHR0cHM6Ly93d3cu/ZmFzdGZvb2RtZW51/cHJpY2VzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8x/MS9zdGFyYnVja3Mt/ZHJhZ29uZnJ1aXQt/cmVmcmVzaGVyLnBu/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Dragon Drink® Starbucks Refreshers® Beverage </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122725/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/75rQkY80Pk4YDa_GvoaXuRTAteDup-WJVzThClpqX-E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dXNtYWdhemluZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDYvTWFuZ28t/RHJhZ29uZnJ1aXQt/U3RhcmJ1Y2tzLVJl/ZnJlc2hlcnMtQmV2/ZXJhZ2UuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Mango Dragonfruit Starbucks Refreshers® Beverage </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122726/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/qFRDjGFjMP6y3KSZZtGQpETWEpVivSH_KZlKA-j4bfs/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvYzUzM2Uz/OWNiN2Q5NGE5YTky/NzVjNTFiOGUwMjk0/YmEuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123674/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/Zb2W9W9Ngj6OOLZtKP0_jDjqcAhHKlyOoXqEyJcwyso/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9zdG9y/aWVzLnN0YXJidWNr/cy5jb20vdXBsb2Fk/cy9zaXRlcy85LzIw/MjIvMDYvUGluZWFw/cGxlLVBhc3Npb25m/cnVpdC1TdGFyYnVj/a3MtUmVmcmVzaGVy/cy1TdGFyYnVja3Mt/UGFyYWRpc2UtRHJp/bmswMjR4MTAyNC0x/LTEwMjR4MTAyNC5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Paradise Drink Starbucks Refreshers® Beverage </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122677/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/8VMYN5njGTzEnXxkYKA4jVia-LsiYIOw8vpdtt5VxsQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5LzI2/LzI4LzE5MjYyODMw/OTBlMmRiMzI4Y2Fh/NGFiMGJmZjc0Zjlj/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Strawberry Açaí Lemonade Starbucks Refreshers® Beverage </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123675/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/xfXMIwieyDMnQMjYyoHRTyqsLef9zntu16Bq8nFhvPw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jb2Zm/ZWVhdHRocmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvc3Rh/cmJ1Y2tzLXBpbmVh/cHBsZS1wYXNzaW9u/ZnJ1aXQtcmVmcmVz/aGVycy5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Pineapple Passionfruit Starbucks Refreshers® Beverage</h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123676/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/8dbdyuE7zYUMCRB0HOy0RZgExyMFfRaxhVfaF4j1cdI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZGFpbHloaXZl/LmNvbS8yMDIyMDYy/MDEyMzIxOC9QaW5l/YXBwbGUtUGFzc2lv/bmZydWl0LVN0YXJi/dWNrcy1SZWZyZXNo/ZXJzLUJldmVyYWdl/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Pineapple Passionfruit Lemonade Starbucks Refreshers® Beverage </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122275/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/u09Zj-owUsB_RBLzZLm3Qn2ugKzO8Fh27iqqwNb1R5g/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9kMmd0/cGp4dnZkNzIwYi5j/bG91ZGZyb250Lm5l/dC9zeXN0ZW0vbmV3/c2xldHRlcl9zdWJz/ZWN0aW9uL2ltYWdl/LzE3ODcvcmV0aW5h/X3N0YXJidWNrcy1w/aW5rLWRyaW5rLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Pink Drink Starbucks Refreshers® Beverage </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121342/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/KD0iMyp_kA_SDJHXoSiPCgc7gv0ddSi4fRr18YhlViw/rs:fit:683:1024:1/g:ce/aHR0cHM6Ly93d3cu/c3dlZXRzdGVlcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDQvYmVzdC1y/ZWZyZXNoZXJzLWF0/LXN0YXJidWNrcy02/ODN4MTAyNC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Strawberry Açaí Starbucks Refreshers® Beverage </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Juice </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123631/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/1Z9WOwID1oF_m8GqD0RZtvlwldwYRfPhz3lLWpnENds/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pNS5w/ZWFwb2QuY29tL2Mv/NlAvNlAyVDEucG5n">

                                </img>
                            </a>
                            <h1 className="caption">Starbucks BAYA™ Energy Mango Guava </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123185/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/W6YJZH1V2ywL41dPRcIH2HP4pbG0TYHnjRJHabNO-Qc/rs:fit:470:470:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWxiZXJ0c29u/cy1tZWRpYS5jb20v/aXMvaW1hZ2UvQUJT/Lzk2MDU1MzQ0Mz8k/ZWNvbS1wZHAtZGVz/a3RvcCQmZGVmYXVs/dEltYWdlPU5vdF9B/dmFpbGFibGUmZGVm/YXVsdEltYWdlPU5v/dF9BdmFpbGFibGU">

                                </img>
                            </a>
                            <h1 className="caption"> Evolution Fresh® Organic Vital Berry </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122702/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/bA7QIfxDSQvywagtYS5l1GJQ7cqybDcgDXm5ZEfUreQ/rs:fit:564:564:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWxiZXJ0c29u/cy1tZWRpYS5jb20v/aXMvaW1hZ2UvQUJT/Lzk2MDE0NTk1MD8k/bmctZWNvbS1wZHAt/ZGVza3RvcCQmZGVm/YXVsdEltYWdlPU5v/dF9BdmFpbGFibGU">

                                </img>
                            </a>
                            <h1 className="caption">  Evolution Fresh® Organic Defense Up® </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122701/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/sdGkrzrf7ZbiUGoeTBJKoC_Je57ab6Wgvn_avFvVBjk/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9kMmQ4/d3d3a21oZmN2YS5j/bG91ZGZyb250Lm5l/dC84MDB4L2QybG5y/NW1oYTdieWNqLmNs/b3VkZnJvbnQubmV0/L3Byb2R1Y3QtaW1h/Z2UvZmlsZS9sYXJn/ZV8yODMyMDBiMi1m/MmMwLTQ3OTEtYTkx/ZS03N2Q3YzI0OGE3/NWYuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Evolution Fresh® Orange </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122699/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/va0xJPz4AM08z-NmmOY2JPDjMnVHEsZyAQedAtNfMPE/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNzJiOWQw/MDQ3ZDllNDFjZTg5/OTVjYzMwNDhmNzA5/MjkuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Evolution Fresh® Organic Super Fruit Greens </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122704/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/8tXEExdhYZfYnIHXMoA7TQmMF3Y25ZNJxQn_shqv7iA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvODI5/YTAzYjEtNDJmMy00/NmQ2LWIwNWEtNTk3/NTFmNGRkZjBjXzEu/YjMwNWQ1MmJkNTk1/YTIxMmI0ZDU0MzE1/NzVmZDhjNjMuanBl/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Evolution Fresh® Mighty Watermelon </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068637/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/wFhfzagEGVm7oC2YYisWisoVkur23PQTPgkJFUh1fGY/rs:fit:750:750:1/g:ce/aHR0cHM6Ly93d3cu/dHJlZXRvcC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDcvdHJlZS10b3At/anVpY2Utb3JnYW5p/Yy04b3otYm94LnBu/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Tree Top Apple Juice Box </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123633/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/HByNIsAgGwO2O7mGMiZXM1Karl445wD9Qw0zuSnEv4c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMDY4/ZTI5YjItZTNiZS00/NTU3LTkzOWYtNzAx/NzRjN2UwYjY4LjVh/MDNkYjhjYWNjODE1/NTZjNDhkY2Y2YjUz/ODA5Nzk4LmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks™ Baya Energy Raspberry Lime </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068639/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/gsUaVJlvUZz-9vQ3jq4NK9aS6tzmGaj66bUMlvBYlHU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbmljb2xl/c3Rhc3RpbmdzcG9v/bi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDUvZnVs/bHNpemVvdXRwdXRf/YmM4Zi5qcGc_Zml0/PTI4MzclMkMzNzgy/JnNzbD0x">

                                </img>
                            </a>
                            <h1 className="caption"> Lemonade </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068641/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/2LxeWon5kSDmx1yvbdwOYcgCaqp0lUuOh99BGsmRWHA/rs:fit:1024:683:1/g:ce/aHR0cHM6Ly93d3cu/cHVtcGtpbm5zcGlj/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDQvZnJv/emVuLXN0cmF3YmVy/cnktbGVtb25hZGUt/NS0xMDI0eDY4My5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Blended Strawberry Lemonade </h1>
                        </div>
               </Row>
                <div>
                  <header className='MiniSectionName'> Milk</header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121286/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/ulpYXfTLzuZaNUGoG7D9ZyDO3CYBL-_wLhYAuhQfTwU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9iODg5/OTllMThjODllODA0/MzFhNC1hYmMwOWM4/NmViNGRkN2I3OGMw/YjM0NzAzYjQ5YTJj/Zi5zc2wuY2YyLnJh/Y2tjZG4uY29tLzA3/NDIzNjUyMDg4NTBf/QTFBM19JdGVtTWFz/dGVyX3R5cGVfbGFy/Z2UuanBlZw">

                                </img>
                            </a>
                            <h1 className="caption"> Horizon® Chocolate Organic Milk  </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121281/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/5Viq6js_h6sW6UDUeWzHjieh6PlE0PJxYfLE33e5nwo/rs:fit:512:400:1/g:ce/aHR0cHM6Ly9kMmxu/MGN2bjRwdjV3Mi5j/bG91ZGZyb250Lm5l/dC91bnNhZmUvZml0/LWluLzUxMng0MDAv/ZmlsdGVyczpxdWFs/aXR5KDEwMCk6bWF4/X2J5dGVzKDIwMDAw/MCk6ZmlsbCh3aGl0/ZSkvZGNtemZrNzhz/NHJlaC5jbG91ZGZy/b250Lm5ldC8xNDgy/NzA3NTc1NTE2Lmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption">Horizon® Organic Lowfat Milk Box </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/490/iced">
                                <img className="HCImage" src="https://imgs.search.brave.com/XAiANx-niUU--5kerPft82krDfc_U53KMmkX6JpBdcw/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LmZp/bmRob21lcmVtZWR5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMi8wOC9JY2Ut/Y29sZC1taWxrLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Cold Milk </h1>
                        </div>
                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122581/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/6KOCp61QiujoOgJoEu2vaWehkC6zM7fNxhviWL87RBQ/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kMTkw/NmE4Yzg3M2I1ZDYz/OGYxMS02NmZkMTM5/ZTY3MzcxNjg3NDUw/OTA5MDQ4NzY4OTQ0/Yi5zc2wuY2YyLnJh/Y2tjZG4uY29tLzA3/NDIzNjUyMDg0NTBf/Q1JfZGVmYXVsdF9k/ZWZhdWx0X2xhcmdl/LmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption"> Horizon® Organic Vanilla Milk Box </h1>
                        </div>
                </Row>
                <div>
                  <header className='MiniSectionName'> Sparkling Water </header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122832/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/LOUgxE8UdVwfG8dzx01mp5oorYvBwo7xAcvVV4DdKLA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvZnVsbC85/MjI3X3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Galvanina Sparkling Water </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122640/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/7bgTyxpCx2Aqgrm25iryBdVgDIkejydEqL0MJAFCJPc/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNmI2/YjAyMDktNjI0ZC00/MTJkLWI5ODAtOGQ3/ZTUzY2Y1ZjMzLjcz/N2NkNGVlNmQzM2Mw/YTA4ZDgwNjc5YmMw/ODA3NzcyLmpwZWc_/b2RuV2lkdGg9MTAw/MCZvZG5IZWlnaHQ9/MTAwMCZvZG5CZz1m/ZmZmZmY">

                                </img>
                            </a>
                            <h1 className="caption"> Spindrift® Grapefruit Sparkling Water </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122638/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/vLY4qkjW1Kvrs48dVyaiRz8NWauDVaeStTZZLMkFtO0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE5/NjIvNTE3My9wcm9k/dWN0cy9TcGluZHJp/ZnRfU2hvcGlmeV9S/YXNwYmVycnlMaW1l/LmpwZz92PTE1NjUz/Njg1NjA">

                                </img>
                            </a>
                            <h1 className="caption"> Spindrift® Raspberry Lime Sparkling Water
 </h1>
                        </div>

                </Row>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122833/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/1_aaI6DB9RhDDK3zzWJJ_0Lk2rw7rC78R8LnnaUwDpQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvMTI0Mngx/MjQyLzkyMjZfcy5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Galvanina Sparkling Water - Lime </h1>
                        </div>
                </Row>
                <div>
                  <header className='MiniSectionName'> Water</header>
                </div>
                <Row>
                <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123597/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/V8Tqw66qfHwSKXIIhF3UvJrJITNo751EJYZosRPPnF4/rs:fit:474:468:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/NTYvNTA1Mi80Mzgz/L3Byb2R1Y3RzL2Rh/c2FuaS14eHR2LWRh/c2EyMC10aHVtYl9q/cGcucG5nP3Y9MTY3/MzUwODAwOCZ3aWR0/aD0xNDQ1">

                                </img>
                            </a>
                            <h1 className="caption"> DASANI Bottled Water </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068636/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/29z8gD7qTLb5CaogDxwtzGmZKZ_IZLuDlehEOso9VXA/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly93d3cu/c3RhcmJ1Y2tzLnR0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA1L2V0aG9zLWJv/dHRsZWQtd2F0ZXIt/MTAyNHgxMDI0Lmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption">Ethos® Bottled Water </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123023/packaged">
                                <img className="HCImage" src="https://imgs.search.brave.com/qaZXI3C-jL1SUsGujq7bnHFCn9x8gDwMG46pTCWLdn8/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvN2Nj/ZjkzMWEtOGVhOS00/ZmM2LThlOTItZDQ0/YzM5ODBiZTQxXzEu/NjljYjA5ZDc0Nzhk/NTk4MGUxNjdlOTkx/NjNjODIwOWMuanBl/Zz9vZG5XaWR0aD0x/MDAwJm9kbkhlaWdo/dD0xMDAwJm9kbkJn/PWZmZmZmZg">

                                </img>
                            </a>
                            <h1 className="caption"> Hawai'i Volcanic Water </h1>
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
