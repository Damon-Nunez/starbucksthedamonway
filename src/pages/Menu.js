import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import "./Menu.css"
import { Row, Col, Container } from 'react-bootstrap';
// This file is meant to render all the prop values through the reciever names(Line 13-20 names)
// and getting the values in the prop value bank(contents.whatever)
const Menu = () => {
    return (
        <div>
            <Navbar/>
            <div className="BigContainer">
            <Container>
                <Row>
                    <Col md ="3">
               <ul className="SideMenu">
                <h1 className="MenuSection"> Drinks</h1>
                <li className="item"> Hot Coffees</li>
                <li className="item"> Hot Teas</li>
                <li className="item"> Hot Drinks</li>
                <li className="item"> Frappuccinos</li>
                <li className="item"> Cold Coffees</li>
                <li className="item"> Iced Teas</li>
                <li className="item"> Cold Drinks</li>
                <h1 className="MenuSection"> Foods</h1>
                <li className="item"> Hot Breakfast</li>
                <li className="item"> Bakery</li>
                <li className="item"> Lunch</li>
                <li className="item"> Snacks and Sweets</li>
                <li className="item"> Oatmeal and Yogurt</li>
                <h1 className="MenuSection"> At Home Coffee</h1>
                <li className="item"> Whole Bean</li>
                <li className="item"> Ground</li>
                <li className="item"> VIA Instant</li>
                <h1 className="MenuSection"> Merchandise</h1>
                <li className="item"> Cold Cups</li>
                <li className="item"> Tumblers</li>
                <li className="item">Mugs</li>
                <li className="item">Water Bottles</li>
                <li className="item"> Other </li>
               </ul>
               </Col>
               <Col md = "9">
            <h1 className="MiniSectionName"> Hot Coffee</h1>
                <Row>
                    <div className="box">
                   <a href="https://www.starbucks.com/menu/product/406/hot"> <img className = "HCImage"src="https://imgs.search.brave.com/47HauWOrvMJQ6Pbclr5XATZn7CMzJ85rzSF-5O2LxXw/rs:fit:720:810:1/g:ce/aHR0cHM6Ly9zMy5z/Y29vcHdob29wLmNv/bS9hbmovc3cvM2U2/MmM1MGYtNWNlZC00/NDM1LWE1YjMtMzk3/M2NlYzQyOTI2Lmpw/Zw">
                    </img></a>
                    <h1 className="caption"> Black Coffee</h1>
                    </div>
                    <div className="box">
                    <a href="https://www.starbucks.com/menu/product/873068625/hot"><img className="HCImage" src="https://imgs.search.brave.com/-FRXQqa5I-iRrv_KWNq1XJpxfy5PnkQTPbDN43vkxng/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/NzQvMzI0Ny8wNjEz/L3Byb2R1Y3RzL1N0/YXJidWNrc19WZXJh/bmRhX0JsXzAyMjA4/MV80MDM5XzBfcmVz/LmpwZz92PTE1OTUw/MjIxNzA"></img>
                    </a>
                    <h1 className="caption"> Veranda Blend </h1>
                    </div>
                    <div className="box">
                        <a href="https://www.starbucks.com/menu/product/478/hot">
                            <img className="HCImage" src="https://imgs.search.brave.com/dLCn1sEWKF7L4t9LMHZCOSOAjnm0QuggCxdyi_cXA6E/rs:fit:600:614:1/g:ce/aHR0cHM6Ly93d3cu/YXdlc29tZWludmVu/dGlvbnMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzA1/L2NhZmUtbWlzdG8u/anBn">
                            </img>
                        </a>
                        <h1 className="caption"> Caffe Misto </h1>
                    </div>
                    <div className="box">
                        <a href="https://www.starbucks.com/menu/product/479/hot">
                            <img className="HCImage" src="https://imgs.search.brave.com/iiqBHHbrGPa_Lr9Ju88gg5udrsK_Cije6Kt4VY4Y4zo/rs:fit:305:363:1/g:ce/aHR0cDovL2dsb2Jh/bGFzc2V0cy5zdGFy/YnVja3MuY29tL2Fz/c2V0cy82ZWQyOGQx/NjA1YTI0NGU4OWU2/N2Q0ODkyMDkxZmI4/Ny5qcGc">

                            </img>
                        </a>
                        <h1 className="caption">Dark Roast Coffee </h1>
                    </div>
                    </Row>
                    
                    <Row>
                    <div className="box">
                        <a href="https://www.starbucks.com/menu/product/480/hot">
                            <img className="HCImage" src="https://imgs.search.brave.com/cMZho7NNjKC5ufkxzCGgjoxDhKoAcjCTZkhlvNRb78c/rs:fit:600:600:1/g:ce/aHR0cHM6Ly93d3cu/Z3JvY2VyeS5jb20v/c3RvcmUvaW1hZ2Uv/Y2FjaGUvY2F0YWxv/Zy9zdGFyYnVja3Mv/c3RhcmJ1Y2tzLXZp/YS1pbnN0YW50LXBp/a2UtcGxhY2Utcm9h/c3QtbWVkaXVtLXJv/YXMtMS02MDB4NjAw/LmpwZw">

                            </img>
                        </a>
                        <h1 className="caption"> Pike Place Roast Coffee</h1>
                    </div>
                    <div className="box">
                        <a href="https://www.starbucks.com/menu/product/481/hot">
                            <img className="HCImage" src="https://imgs.search.brave.com/AaKyZYUrSz2qJ-2iowSZEocHHamLCdROUqiW1dyJAWE/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvMzc2ZTgz/ODE0MzQwNDk3OTg2/MzVkMzcwYmVlMGQ3/ZjAuanBn">

                            </img>
                        </a>
                        <h1 className="caption">Decaf Pike Place Roast </h1>
                    </div>
                    </Row>
                    <div>
                        <header className="MiniSectionName"> Cappucino</header>
                    </div>
                    <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/409/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/2aW0NJJP45JJ_Oj9vrraanNCzlYZTpt-jxmrolJPcOo/rs:fit:340:340:1/g:ce/aHR0cHM6Ly9nbG9i/YWxhc3NldHMuc3Rh/cmJ1Y2tzLmNvbS9h/c3NldHMvNTkyMzgw/OGRiYWZjNDE1MDk1/YmUxZWYzYjcyMDY2/YTEuanBn" alt="Cappucino Image">
                                    </img>
                            </a>
                            <h1 className="caption"> Cappucino</h1>
                        </div>
                    </Row>
                    <div>
                    <header className="MiniSectionName"> Espresso Shots</header>
                    </div>
                    <Row>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/410/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/20Ov8kydfKknuNPmr71mc5nBF52bbm7IJf59ZsxjKmc/rs:fit:620:634:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXlzdGFyYnVj/a3MuY29tLmF1L2lt/YWdlY2FjaGUvYmVz/dGZpdC82MjB4NjM0/L19maWxlcy9CZXZl/cmFnZXMvZXNwcmVz/c29fc2hvdC5qcGc">
                                
                                </img>
                            </a>
                            <h1 className="caption"> Espresso</h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/411/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/pOZDbdoyXzz1XfumeOUKHtBpexrwArjGfgZ43Vir8FY/rs:fit:800:1000:1/g:ce/aHR0cHM6Ly93d3cu/YWNvdXBsZWNvb2tz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9Fc3By/ZXNzby1Db24tUGFu/bmEtMDA1LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption">Espresso Con Panna </h1>
                        </div>
                    </Row>
                    <div>
                        <header className="MiniSectionName">Flat Whites</header>
                    </div>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/565/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/s7KdHmsPCNi8qROR7kw1BWunPhG6RMcXIwanpnu5LzA/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vMTU4OS8y/NjQ1NzcwOTg4NV9k/YjY3NjNjNWYxX2Iu/anBn">

                                </img>
                            </a>
                            <h1 className="caption"> Flat White</h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123158/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/2dib7NMgjQw0K8Bnil7xZi4zuZY6dxF8KkBqFQHehk8/rs:fit:821:743:1/g:ce/aHR0cHM6Ly93d3cu/ZmFzdGZvb2Rwb3N0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9TdGFy/YnVja3MtbmV3LUFs/bW9uZG1pbGstSG9u/ZXktRmxhdC1XaGl0/ZS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Honey Almond Milk Flat White </h1>
                        </div>
                    </Row>
                    <div>
                        <header className="MiniSectionName"> Lattes</header>
                    </div>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123404/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/0g8EM1wLGgfWplwTHmM4gWZVCRx_rjjJT7tW3VOXIwg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mb29k/LmZuci5zbmRpbWcu/Y29tL2NvbnRlbnQv/ZGFtL2ltYWdlcy9m/b29kL2Z1bGxzZXQv/MjAyMS8wMS8wNC9Q/aXN0YWNoaW8tTGF0/dGVfcmVzaXplZC5q/cGcucmVuZC5oZ3R2/Y29tLjEyODAuMTI4/MC5zdWZmaXgvMTYw/OTgwMDY2NTY4Mi5q/cGVn">

                                </img>
                            </a>
                            <h1 className="caption"> Pistachio Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/517/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/B6huarT8p5fNrMB_4zcJxS-Rrpwpt_QKqn2_9CUlPd0/rs:fit:1000:1000:1/g:ce/aHR0cDovL2NydXpl/aXJvLmNsL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA2L2Nh/cmFtZWwtYnJ1bGVl/LWNvZmZlZS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Caramel Brulee Latte</h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/873068661/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/IV6KMOSI4yDL8P_qqJReHY_bSfsxBfWUmNwxszu-11A/rs:fit:305:305:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNDc0/eC80ZS8wMS9mYi80/ZTAxZmI5NTkzYWMz/ZDFkNjhkOTNhZGVi/YjQ5OTZhMS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Chestnut Praline Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2123591/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/6ppUff7Z3Adzf2Sn9SqEhMn_mUl3n8mmgYxlauDHkCQ/rs:fit:683:1024:1/g:ce/aHR0cHM6Ly9saWZl/c3R5bGVvZmFmb29k/aWUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzExL1N0/YXJidWNrcy1zdWdh/ci1jb29raWUtYWxt/b25kLW1pbGstbGF0/dGUtOC1vZi0xMi02/ODN4MTAyNC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Sugar Cookie Almondmilk Latte </h1>
                        </div>
                    </Row>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/407/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/40ase4rGIX6cndg83ftrWlpqxQY7D94Ex3BNjblp8Kk/rs:fit:626:640:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mb3RvLWdyYXR1/aXRvL2NhZmZlLWxh/dHRlXzc0MTkwLTc4/MjEuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Caffe Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/414/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/U4AxI3XD45I-L5K85TCPbF9WSZWVfVtt_ZbySWyFtzE/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/MzMvOTE0OC84MDg5/L2FydGljbGVzL1Vu/dGl0bGVkX2Rlc2ln/bl82My5wbmc_dj0x/NTk4NjM1OTc4">

                                </img>
                            </a>
                            <h1 className="caption">Cinnamon Dolce Latte </h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122614/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/7MolrTMfCAyPdPnLAwJkXFtKTbUtry0zoq-3W4UBXH8/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9zdGFy/Ym1hZy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDcv/V2hhdC1pcy1TdGFy/YnVja3MtUmVzZXJ2/ZS1MYXR0ZS01MDB4/NTAwLnBuZw">

                                </img>
                            </a>
                            <h1 className="caption"> Starbucks Reserve Latte</h1>
                        </div>
                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122617/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/wp2bxOHfJ64SRFr4HJQ4WMRPZgQuZrecC40Mrsa2MOE/rs:fit:931:1000:1/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTQuZmwueWVs/cGNkbi5jb20vYnBo/b3RvLzlhWWZ0MnJz/cE9UanhNQVBYNjZi/MHcvby5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Hazelnut Bianco Latte </h1>
                        </div>
                    </Row>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122164/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/sY2cCA4rVGMGXZ38oSXwkESMiu0Fq2CHh0TyUfUxv3U/rs:fit:768:634:1/g:ce/aHR0cHM6Ly9zdG9y/aWVzLnN0YXJidWNr/cy5jb20vdXBsb2Fk/cy9zaXRlcy8xNy8y/MDIxLzAyL1N0YXJi/dWNrcy1TcHJpbmct/bWVudS1TdGFyYnVj/a3MtQmxvbmRlJUMy/JUFFLVZhbmlsbGEt/TGF0dGUtNzY4eDYz/NC5qcGc">

                                </img>
                            </a>
                            <h1 className="caption">Blonde Vanilla Latte </h1>
                        </div>
                    </Row>
                    <div>
                        <header className="MiniSectionName"> Macchiatos</header>
                    </div>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/413/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/5fcm_LMPvJTOfV8xXPlcW_jqE0ucw8HyjpY2zHm_L4s/rs:fit:1000:999:1/g:ce/aHR0cHM6Ly9zMy51/cy1lYXN0LTIuYW1h/em9uYXdzLmNvbS9q/bXMtczMtbWt0LWNv/ZmZlZS1wLXBtYzYv/dG1wL2ltYWdlLXRo/dW1ibmFpbHMvYWEt/cmVjaXBlLWltYWdl/cy9pbWFnZS10aHVt/Yl9fMTlfX2F1dG9f/ZGUxMWRjYmI0NDE5/YTIxOTFlNjgyYzg1/ZDI2MWE2MDcvY2Fy/YW1lbC1tYWNjaGlh/dG8ucG5n">

                                </img>
                            </a>
                            <h1 className="caption"> Caramel Macchiato </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/412/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/_XzzpBJuQvsV4CceL6kLwow44rz6mGIvL-cHN-NVjnE/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly9hYm92/ZWF2ZXJhZ2Vjb2Zm/ZWUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA1L0Vz/cHJlc3NvLU1hY2No/aWF0by1XaGF0LWl0/LWlzLWhvdy10by1t/YWtlLWl0LWhvdy1p/dC10YXN0ZXMuanBn">

                                </img>
                            </a>
                            <h1 className="caption"> Espresso Macchiato </h1>
                        </div>
                    </Row>
                    <div>
                        <header className="MiniSectionName"> Mochas </header>
                    </div>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/496/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/T8p6_Di4sibOaoFj9kZa6EYbWYOdurwyO01DOShh-u0/rs:fit:1200:1200:1/g:ce/aHR0cDovL2plbm5p/ZmVyY29va3MuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzExL2Jlc3QtcGVw/cGVybWludC1tb2No/YS1hZmZvZ2F0by1y/ZWNpcGUuanBn">

                                </img>
                            </a>
                            <h1 className="caption">Peppermint Mocha </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/497/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/cioOA8tVa83xybIQVX8GL_7mu91pKfSLtF5tzQh8uCY/rs:fit:564:564:1/g:ce/aHR0cHM6Ly93d3cu/cGF1bGFkZWVubWFn/YXppbmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzAx/L1BlcHBlcm1pbnQt/V2hpdGUtQ2hvY29s/YXRlLU1vY2hhLmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption"> Peppermint White Chocolate Mocha </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122482/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/ALcx0kIZiAqERwvaDyXlLkYb5S6osgtsWBShLT3uEC4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9pbWdp/eC5idXN0bGUuY29t/L3VwbG9hZHMvaW1h/Z2UvMjAxNy8xMS85/L2RhYTk0MDlmLTBm/NjMtNDhhNS1hOTVl/LWM4MmE2Nzg1ZjQ5/My10b2FzdGVkLXdo/aXRlLWNob2NvbGF0/ZS1tb2NoYS5qcGc_/dz04MDAmYXV0bz1m/b3JtYXQlMkNjb21w/cmVzcyZjcz1zcmdi/JnE9NzAmZml0PWNy/b3AmY3JvcD1mYWNl/cw">

                                </img>
                            </a>
                            <h1 className="caption"> Toasted White Chocolate Mocha</h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/408/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/6lAiSktf0NneryIkUno8Q6uS8zLO0FTcosVoq95Y8Lk/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9jYW5k/bGVzYW5kY29mZmVl/aG91c2UuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0lNR18xMjQ3Lmpw/Zw">

                                </img>
                            </a>
                            <h1 className="caption">Caffe Mocha </h1>
                        </div>
                    </Row>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122615/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/foqPB9yWTF1iPM8PEw5seaTEAlPX2TyiyOF1QqnrZM0/rs:fit:640:960:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tSTlUN29jSXVH/WUEvV09Wd1lvRHgy/UEkvQUFBQUFBQUFU/UVEvWHhvS3hkdlhM/UmdNM0VUZmNONFJJ/czZSYTBqWFhrYmRn/Q0xjQi9zMTYwMC9m/cm96ZW4tZGFyay1j/aG9jb2xhdGUtbW9j/aGEtOC0yLmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> Dark Chocolate Mocha </h1>
                        </div>

                        <div className="box">
                            <a href="https://www.starbucks.com/menu/product/420/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/UKXUs4_ZH-_cOCNrqFjL4nJOf_mnrE1rtB4ExdRgltg/rs:fit:750:750:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzJl/L2ZmLzczMmVmZjlh/OTZhYjczNzhmZmY1/NTIwMTFiN2VlNDhi/LmpwZw">

                                </img>
                            </a>
                            <h1 className="caption"> White Chocolate Mocha </h1>
                        </div>
                    </Row>
                    <div>
                        <header className="MiniSectionName"> Clover® Brewed Coffees </header>
                    </div>
                    <Row>
                    <div className="box">
                            <a href="https://www.starbucks.com/menu/product/2122090/hot">
                                <img className="HCImage" src="https://imgs.search.brave.com/RS0SZ_2rcWXKwIf1IlP4iV0gXRjD8qbC_uuqAc5Vfug/rs:fit:469:281:1/g:ce/aHR0cHM6Ly9zdG9y/aWVzLnN0YXJidWNr/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDEvRjRQ/WnJkdkUtNTg4LTMz/MS5qcGc">

                                </img>
                            </a>
                            <h1 className="caption"> Ethiopia Yirgacheffe Chelelektu Clover®</h1>
                        </div>
                    </Row>
                    
                    
                    
                    
                    <div>
                    <header className="SectionName"> Foods</header>
               </div>
               <div>
                <header className="SectionName"> At Home Coffees</header>
               </div>
               <div>
                <header className="SectionName"> Merchandise</header>
               </div>
                </Col>
               </Row>
               </Container>
               </div>
            <TopFooter/>
        
        </div>
    )
}

export default Menu