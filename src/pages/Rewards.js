import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Rewards.css"

let pattern = /^[A-Z]+$/;
function validate() {
let input = document.getElementById("myInput").value
if(!input.match(pattern)) {
    alert("Wrong")
    
} else {
   alert("Correct")
}
}

const Rewards = () => {
    return (
        <div>
            <Navbar/>
            <header className="RewardsHeader"> Starbucks Rewards</header>
            <Row className="RewardRow">
                        <Col sm={12} md={12} lg={4} className="FreeCoffeeSection" >
                            <div className="LightBlueSection">
                        <h2 className="CoffeeHeader">
                                FREE COFFEE IS A TAP AWAY
                            </h2>
                            <p  className="CoffeeJoin">
                                Join now to start earning rewards 
                            </p>
                            <button className="JoinButton"> Join now</button>
                            <p className="CoffeeHeaderP"> Or join in the app for the best experience </p>
                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={8} className="FreeCoffeeSection">
                            <img className="Logo" src="https://imgs.search.brave.com/1Zjt6mHu0bF_L33scLWZJTnpX56FY1O-4a9rVjkzioA/rs:fit:689:690:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy8zNjYtMzY2NDQw/Nl82ODgteC03MDAt/My1zdGFyYnVja3Mt/bG9nby1wbmctdHJh/bnNwYXJlbnQucG5n"/>
                        </Col>
                  </Row>  
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div className="SecondSectionHeader">
                        <h1>Getting Started is easy </h1>
                        <p> Earn Stars and get rewarded in a few easy steps. </p>
                        </div>
                    </Col>
                    
                    <Col sm={12} md={12} lg={4}>
                        <div className="InfoCard">
                        <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"/>
                        <h1> Create an account</h1>
                        <p> To get started, <a className ="LinkWords"href="https://www.starbucks.com/account/create" >join now.</a> You can also <a className = "LinkWords" href="https://starbucks.app.link/VLa2I3inh9">join in the app </a>to get access to the full range of Starbucks® Rewards benefits.</p>
                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                        <div className="InfoCard">
                            <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"/>
                            <h1> Order and pay how you’d like </h1>
                            <p> Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a className = "LinkWords"href ="https://www.starbucks.com/rewards#waystopay">Learn how</a></p>
                    
                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                        <div className="InfoCard">
                            <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"/>
                            <h1>Earn Stars, get Rewards </h1>
                            <p> As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars! </p>
                        </div>
                        </Col>
                    </Row>
                    
                    <Row className="RewardRowThree">
                        <Col sm={12} md={12} lg={12}>
                            <div className="ThirdSectionHeader">
                                <h1> Endless Extras </h1>
                                <p> Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                            </div>
                        </Col>
                            <Col sm={12} md={12} lg={4}>
                                <div className="InfoCardTwo">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"/>
                                    <h1>Fun freebies</h1>
                                    <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                                    <Link to = ""><h2> Learn more</h2></Link>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <div className="InfoCardTwo">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"/>
                                    <h1>Order & pay ahead</h1>
                                    <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores</p>
                                    <Link to = ""><h2> Learn more</h2></Link>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                            <div className="InfoCardTwo">
                                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"/>
                                <h1>Get to free faster</h1>
                                <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                                <Link to = ""><h2> Learn more</h2></Link>
                            </div>
                            </Col>
                    </Row>
                    <div className="PurpleZone">
                    <Row className="RewardRowFour">
                        <Col sm={12} md={12} lg={4}>
                            <div className="FourthSectionHeader">
                            <h1>Cash or card, you earn Stars</h1>
                            <p> No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards. </p>
                            </div>
                        </Col>
                        </Row>
                        <Row className="RewardRowFive">
                        <Col sm ={12} md={12} lg={4}>
                            <div className="SideInfo">
                                <h1> 1★Star per dollar </h1>
                                <h2> Pay as you go </h2>
                                </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <div className="scanAndPay">
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"/>
                            <h1>Scan and Pay Seperately </h1>
                            <h2>Use cash or credit/debit card at the register.</h2>
                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <div className="savePayment">
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"/>
                            <h1> Save payment in the app</h1>
                            <h2>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</h2>
                        </div>
                        </Col>
                    </Row>
                    <Row className="RewardFifthRow">
                        <Col sm={12} md={12} lg={4}>
                        <div className="SideInfo">
                            <h1> 2★Stars per dollar </h1>
                            <h2> Add funds in the app </h2>
                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <div className="Preload">
                                <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"/>
                                <h1> Preload </h1>
                                <p> To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                                
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <div className="register">
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"/>
                            <h1>Register your gift card</h1>
                            <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                            </div>
                        </Col>
                    </Row>
                    </div>
                    <Row className="RewardSixthRow">
                        <Col sm={12} md={12} lg={12}>
                            <div className="StarCodeField">
                        <h1>Star Codes 🌟</h1>
                        <input type="text" placeholder="Enter your Star Code!" id="myInput"></input>
                        <button onClick={validate}> Submit </button>
                        </div>
                        </Col>
                    </Row>
               
            <TopFooter/>
        </div>
    )
}

export default Rewards;