import React from 'react'
import "../pages/Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
const Bakery = () => {
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
                    <header className='SectionName'> Bakery </header>
                </div>
                <div>
                    <header className='MiniSectionName'> Bagels </header>
                </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/321/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/DZVmhjCohl_t023_8p4Ahs_QJJa2SuIZbii78g6VZlM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbXMu/cXouY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA5L2Jh/Z2VsLXBsYWluLWFs/dF9jb2xvcmNvcnJl/Y3RlZC5qcGVnP3F1/YWxpdHk9NzUmc3Ry/aXA9YWxsJnc9MjIw/MCZoPTE2NTY">

                                </img>
                            </a>
                            <h1 className="caption"> Plain Bagel </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/324/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/VyDz1qTotKUHOeTH21OmBqGDfzM_8i8ZhAJG66-Jk_Q/rs:fit:769:769:1/g:ce/aHR0cDovL3d3dy5j/aGF0ZWxhaW5lLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wOC9ldmVyeXRo/aW5nLWJhZ2VsLXRv/cHBpbmctLnBuZw">

                                </img>
                            </a>
                            <h1 className="caption"> Everything Bagel </h1>
                        </div>
                    </Row><Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122257/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/hN4zkCxSQQmtsbJcFJujxQ67bDE7jUkIyZ8ANXaNq28/rs:fit:1200:1200:1/g:ce/aHR0cDovL3MyLnIy/OXN0YXRpYy5jb20v/YmluL2VudHJ5LzFm/Ni94LzE3NjUxMTkv/aW1hZ2UucG5n">

                                </img>
                            </a>
                            <h1 className="caption">  Avocado Spread </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Cake Pops </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123657/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/lrMYtbpcMbHpL-sjMEnVztHaqlbTIsq2ejkueD8SYFI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vc3dlZXRm/cmVlZG9tYmFrZXNo/b3AuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzExL0Nv/b2tpZXMtbi1DcmVh/bS1DYWtlcG9wLmpw/Zz9maXQ9MTIwMCUy/QzE2MDAmc3NsPTE">

                                </img>
                            </a>
                            <h1 className="caption"> Cookies & Cream Cake Pop </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123588/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/75Bcp-X5TR8QYfcgoIm1CHjyKiVamkDy-TuMXluXXMc/rs:fit:700:700:1/g:ce/aHR0cDovL3Jiay5o/LWNkbi5jby9hc3Nl/dHMvMTYvNDEvMTQ3/NjIxMTQ4Ny1yZWlu/ZGVlci1jYWtlLXBv/cHMuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Reindeer Cake Pop </h1>
                        </div>
            </Row><Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/784/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/G0VlBImNtcLzDSajakYn9sla-bHxq-Xgd8k6wy-wVgE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBhLzFl/Lzk5LzBhMWU5OWU4/ZTU2NzUxNGRkMmEw/MGVmMzk4NTMwNTlk/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Birthday Cake Pop </h1>
                        </div>
               
               <div className="box">
                            <a href=" https://www.starbucks.com/menu/product/1015/single ">
                                <img className="HCImage" src=" https://imgs.search.brave.com/Q4_ogbVb9K2OTwv5M8VKup82Iomjg6vlYOOY5QTj8Qc/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZXUtMDEua2Mt/dXNlcmNvbnRlbnQu/Y29tLzU1OWJiN2Qz/LTg4YTQtMDFjMS03/OWEzLWRkNGQ1YjJk/MmJiMC81YzhhMTlm/ZC01ODUxLTQyY2Et/ODRhMS1jM2M5YjQ3/NTc2YzgvMS1DaG9j/b2xhdGUtY2FrZS1w/b3BzLVdFQi5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Chocolate Cake Pop </h1>
                        </div></Row>
               <div>
                <header className='MiniSectionName'> Cookies,Brownies, and Bars </header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123376/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/jpcTjeYY22oFQQ8EKuCdhSQG8T6ZYqVccdNgnstr8r8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bnlkYWlseW5ld3Mu/Y29tL3Jlc2l6ZXIv/MVphcVZuM2N4ZU11/N0pLR1ZmaUtVU2Nk/a2ZRPS8xNDQweDAv/ZmlsdGVyczpmb3Jt/YXQoanBnKTpxdWFs/aXR5KDcwKS9jbG91/ZGZyb250LXVzLWVh/c3QtMS5pbWFnZXMu/YXJjcHVibGlzaGlu/Zy5jb20vdHJvbmMv/Wk9RSzdRWURDQkg2/RkpDUElXWkxLQkhJ/TVUuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Lime-Frosted Coconut Bar  </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123645/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/HaQBp7PvPcW1jli4l-QhyiGIA5zpjwmDsXOCa5YhDdQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvbm93aXNk/cGllNmgyMS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Bullseye Cookie </h1>
                        </div>
</Row> <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/506/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/6MSa4-beWDCE6XTNSDjAP0bhvYy5sluKopZjLUHc_vI/rs:fit:1140:1200:1/g:ce/aHR0cDovL3d3dy50/aGUtZ2lybC13aG8t/YXRlLWV2ZXJ5dGhp/bmcuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDExLzEyL2Ny/YW5iZXJyeS1ibGlz/cy1iYXJzLTEuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Cranberry Bliss® Bar </h1>
                        </div>
               
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2121590/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/cXrLKJhj_UucyX_tno3RUe1g7m48Js3KBrs801mfkmk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYyLzNi/LzAwLzYyM2IwMGY5/MTE5ZDRjNDFhY2Nj/OTQ0ZTA0MTFiNDM5/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Cranberry Bliss® Bar Tray </h1>
                        </div>
</Row>
               <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1130/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Tnp6CSxomWhRQESH_4RlDJN8dzRif5PYAoFIS-GZOhw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cmV0cm9yZWNpcGVi/b3guY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA0L2Rv/dWJsZS1jaG9jb2xh/dGUtYnJvd25pZXMt/NC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Double Chocolate Brownie </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122532/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/BGEbEC94zzBun7HvLyWA6meWKTUxkrprdd07_oedFIs/rs:fit:1000:1000:1/g:ce/aHR0cDovL3d3dy53/aWx0b24uY29tL2R3/L2ltYWdlL3YyL0FB/V0FfUFJEL29uL2Rl/bWFuZHdhcmUuc3Rh/dGljLy0vU2l0ZXMt/d2lsdG9uLXByb2pl/Y3QtbWFzdGVyL2Rl/ZmF1bHQvZHc2N2Y4/YmNjMC9pbWFnZXMv/cHJvamVjdC9XTFBS/T0otNDMzNS90cmFk/aXRpb25hbC1zbm93/bWFuLWNvb2tpZS5q/cGc_c3c9MTAwMCZz/aD0xMDAwJnNtPWZp/dA">

                                </img>
                            </a>
                            <h1 className="caption"> Snowman Cookie </h1>
                        </div>
               </Row>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122714/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/GEZFcEh7ouhKyrmTs6uLHb1JSDUVOWrP40uRFClc_js/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy50/aGVjdXJ2eWNhcnJv/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTEvMDUvSU1H/XzU5MTkuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Chocolate Chip Cookie </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/309/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Vc7LEEefMvifB4TNgzEx2l_PT5LFiUAt-rTUj3Uyc04/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE2/NTQvOTU0My9wcm9k/dWN0cy9DbGFzc2lj/X0RyZWFtX0Jhcl8t/XzNfNjAweC5qcGc_/dj0xNTIwMzkzNjgx">

                                </img>
                            </a>
                            <h1 className="caption">Marshmallow Dream Bar </h1>
                        </div>
               </Row>
               <div>
                <header className='MiniSectionName'> Croissants</header>
               </div>
               <Row>
               <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122132/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/zGPRnzgYR-ZHWhoq3xEK4YrgM6SB01qE4AxR3t4ouxM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5i/ZWF1dHlhbmR0aGVi/ZWFuLm5ldC91cGxv/YWRzLzUvNy8xLzQv/NTcxNDkwNzkvczU3/MjU1OTg3ODIyMDEx/ODU3MV9wMjQ1X2kx/X3cxOTIwLmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption"> Ham & Swiss Croissant </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1033/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/jNHvr-DhDqg8JdkhIJBlAAktD0neA1qClId1hwjC2q0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxSUxhbCUyQmRJ/MUwuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Butter Croissant </h1>
                        </div>
    </Row> <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1028/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/QXlfSQhxiYggh06oBMWZAv3FI0dwIvNEylaw8Zw1RLU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d2VpcmRicm90aGVy/cy5jb20vdXBsb2Fk/cy8xLzMvMS80LzEz/MTQyOTE2L3M5NjA5/NjE5MTMxMjM1Njk5/NjBfcDcxX2kxX3cx/OTIwLmpwZWc">

                                </img>
                            </a>
                            <h1 className="caption"> Chocolate Croissant </h1>
                        </div>
                        </Row>
                        <div>
                            <header className='MiniSectionName'> Loaves,Cakes, and Buns</header>
                        </div>
                        <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122933/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/NN7JRy_yj5VG94ICZZSeN_sgGpnZ8jaxx4QJJvY5Gr8/rs:fit:800:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmNl/cnRpZmllZHBhc3Ry/eWFmaWNpb25hZG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzAxL1JlZC1W/ZWx2ZXQtTG9hZl9J/TUdfMzE0MS5qcGc_/Zml0PTgwMCUyQzEy/MDA">

                                </img>
                            </a>
                            <h1 className="caption"> Red Velvet Loaf </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123687/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/0vUbBu4AiMXZ6EIDa5KuJTubfloZCZQ9hkaZo2UHd5A/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jb250/ZW50LXByb2QtbGl2/ZS5jZXJ0LnN0YXJi/dWNrcy5jb20vYmlu/YXJ5L3YyL2Fzc2V0/LzEzNy04MTI4NS5q/cGc">

                                </img>
                            </a>
                            <h1 className="caption"> Chocolate Pistachio Swirl </h1>
                        </div>
</Row> <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1021/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/DXUJyiPfCHL7ntYR_-_Lc7ucGq4ioQ4n63hdfuKqGZE/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly93d3cu/c3RhcmJ1Y2tzLnR0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA1L2NsYXNzaWMt/Y29mZmVlLWNha2Ut/MTAyNHgxMDI0Lmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Cinnamon Coffee Cake </h1>
                        </div>
                        
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1254/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/QY_aRu6PaBQn7ASpd3UA6rz_FyS0yrxSfzKnSLLyeZA/rs:fit:474:355:1/g:ce/aHR0cHM6Ly93d3cu/Z3JhY2VsaWtlcmFp/bmJsb2cuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAz/L3N0YXJidWNrcy1s/ZW1vbi1sb2FmLTgu/anBlZw">

                                </img>
                            </a>
                            <h1 className="caption">Iced Lemon Loaf </h1>
                        </div>
</Row>
                        <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1255/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/WlcxiLlen6C28g55z9UvjI6V1GmVq-tzMSRARjteudE/rs:fit:1066:1200:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tem1XWW9Pb1kx/MmsvVzQxbkNueGRy/TEkvQUFBQUFBQUFo/cGsvMXluNDZMdXhF/U3M3dWdJVno4dE01/OXZlTlAwUVdqYTl3/Q0xjQkdBcy9zMTYw/MC9QdW1wa2luJTJC/TG9hZiUyQjglMkIl/MjUyODElMkJvZiUy/QjElMjUyOS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Pumpkin & Pepita Loaf </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1256/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/4LNYT3ox5D7LyawcJcnqB6jsDmaBjcCDKir3wjbeVEs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wZXNj/ZXRhcmlhbi5raXRj/aGVuL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE0LzA4L2JhbmFu/YS13YWxudXQtbG9h/Zi5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Banana Walnut & Pecan Loaf </h1>
                        </div>
                        </Row>
                        <div>
                            <header className='MiniSectionName'>Danishes and Doughnuts</header>
                        </div>
                        <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1040/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/zCSZZ4aaJoi3HvWMqAafCITQe4k9jzF--g9lfYPINuU/rs:fit:600:350:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ0LzI5/LzllLzQ0Mjk5ZTQ5/ZjllN2M3MTBmMzQy/NjU1M2VlNGZkNjY0/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Cheese Danish </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/311/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/qCInyuKx0SUW4LGnrNytHdF0-INgAprl0vo7gulcsk4/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTIuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL2xFRF95bzIz/b01pU0FkT1pHcTRs/MkEvby5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Glazed Doughnut </h1>
                        </div>
</Row> <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122869/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/T81lY5iy9Zis15Dp1kh8xo6dLQt4itHRgc5u8bThJYQ/rs:fit:474:474:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvY2QwY2U0/YjQ4N2VlNGFlNmE0/YTY3N2UzYzEzZjgw/MzEuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Sugar Plum Cheese Danish  </h1>
                        </div>


                        </Row>
                        <div>
                            <header className='MiniSectionName'> Muffins and Scones </header>
                        </div>
                        <Row>
                            
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068622/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/JiWM4QdtvxGUOV9d5360LPVUGu5-vQAJKJJDxExl5Qs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZG51dHJpdGlv/bi5vcmcvaXRlbS1w/aG90b3MvZnVsbC85/Mjk1X3MuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Pumpkin Cream Cheese Muffin </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1041/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/22qE57ahePRPmfKxPoS2PUQjwY3061mx-3OD_fxKSo0/rs:fit:305:325:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNzY2MzVl/MzY1ZWZmNDA3ZTk1/N2I3ZmQwMjlhZjkz/YzMuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Blueberry Scone </h1>
                        </div>
</Row>
                        <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/317/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/mPrHbZ1xLndp_5k-zqeTcpFVCHriB0rxgguLX4DDuBs/rs:fit:1200:1200:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1lZmp5LWZNc21X/Zy9VWW5lMkhmWThf/SS9BQUFBQUFBQUZz/RS9TWkQxTlBwdTlG/ay9zMTYwMC8wMjYu/SlBH">

                                </img>
                            </a>
                            <h1 className="caption">Petite Vanilla Bean Scone </h1>
                        </div>


                        
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/1036/single">
                                <img className="HCImage" src="https://imgs.search.brave.com/Do8SgR0dDoKeOoTSHlFgR4lIv_S1AKsgv5-ktMbnI1M/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAxL1dpbGQt/Qmx1ZWJlcnJ5LU11/ZmZpbnNfRVhQU19G/VFRNWjE5Xzc4N19C/MDNfMDVfN2Jfcm1z/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Blueberry Muffin </h1>
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

export default Bakery