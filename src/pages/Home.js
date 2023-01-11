import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import video from "../assets/giphy.gif"
import "./Home.css"
const Home = () => {
    return (
        <div>
            <Navbar/>
                <div>
        <main>
            <div class="main-container">
                <section class="announcements">
                    <span>
                        Facial coverings are now optional in our stores for our fully vaccinated customers, following CDC guidance, except where local regulations require it by law.
                        <a href="#">Learn more</a>
                    </span>
                </section>
                <section class="rewards left-right-section" id="promo1-text">
                    <div class="text" id="promo1">
                        <h1>ORDER COFFEE WIN PRIZES</h1>
                        <h3>Your qualifying purchases have been earning you plays. Play the Summer Game for a chance to win cool prizes.*</h3>
                        <div class="cta" id="promo1-btn">
                            Play now
                        </div>
                    </div>
                    <div class="image" id="promo1-img">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72796.jpg" />
                    </div>
                </section>
                <section class="rewards left-right-section">
                    <div class="text">
                        <h1>FREE COFFEE IS A TAP AWAY</h1>
                        <h3>Join now to start earning Rewards.*</h3>
                        <div class="cta">
                            Join now
                        </div>
                    </div>
                    <div class="image">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png" />
                    </div>
                </section>
                <section class="chill left-right-section">
                    <div class="image">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72801.jpg" />
                    </div>
                    <div class="text" id="poster1">
                        <h2>100% of U.S. stores now donate food</h2>
                        <h3>We’re proud to announce that all of our U.S. company-owned stores now donate nourishing food to local food banks through our FoodShare program.</h3>
                        <div class="cta">
                            Learn more
                        </div>
                    </div>
                </section>
                <section class="chill left-right-section">
                    <div class="image">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72037.jpg" />
                    </div>
                    <div class="text">
                        <h1>DELIGHTFULLY CHILL</h1>
                        <h3>Refresh your day with the bright, tropical flavors of our Star Drink and Kiwi Starfruit Starbucks Refreshers® beverage.</h3>
                        <div class="cta">
                            Order iced beverage
                        </div>
                    </div>
                </section>
                <section>
                    <div class="top-bottom-section">
                        <div class="section-container">
                            <div class="image">
                                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg" />
                            </div>
                            <div class="text">
                                <h1>Order and pick up. Easy as that.</h1>
                                <h3>Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you.</h3>
                                <div class="cta-container">
                                    <div class="cta">
                                        See pickup options
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top-bottom-section">
                        <div class="section-container">
                            <div class="image">
                                <img className="Uber" src="https://imgs.search.brave.com/9VY4xZXBaI0uzgzSeKGSSaEXv5BzywfFQMP8yuGDoHc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA1L3ViZXItZWF0/cy1sb2dvLTAucG5n" />
                            </div>
                            <div class="text">
                                <h1>Floating into summer like…</h1>
                                <h3>Keep the laid-back vibes going. Order Starbucks drinks on Uber Eats.**</h3>
                                <div class="cta-container">
                                    <div class="cta">
                                        Order now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="chill left-right-section">
                    <div class="text">
                        <h2>Back to school? You’ve got this!</h2>
                        <h3>Good luck to our partners (employees) going back to school through the Starbucks College Achievement Plan, with 100% tuition coverage at ASU Online.</h3>
                     
                    </div>
                    <div class="image">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72800.jpg" />
                    </div>
                </section>
                <section class="des">
                    <div class="small-des">
                    </div>
                </section>
            </div>
        </main>
        
            </div>
            
            <TopFooter/>
        </div>
    )
}
export default Home;