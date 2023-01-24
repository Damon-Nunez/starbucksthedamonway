import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GiftCard.css'
import BasicCard from "./BasicCard"
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";    
import FeaturedCarousel from "../CarouselSections/FeaturedCarousel";   
import LunarCarousel from "../CarouselSections/LunarCarousel";
import ValentineCarousel from "../CarouselSections/ValentineCarousel";
import BirthdayCarousel from "../CarouselSections/BirthdayCarousel";
import ThanksCarousel from "../CarouselSections/ThanksCarousel";
import CelebrationCarousel from "../CarouselSections/CelebrationCarousel";
import WinterCarousel from "../CarouselSections/WinterCarousel";
import AppreciationCarousel from "../CarouselSections/AppreciationCarousel";
const GiftCard = () => {

  return (
<div>
    <Navbar/>
        <FeaturedCarousel/>
          
          <Row className="giftCard">
          <Col sm={12} md={12} lg={12}>
            <div className="giftCardDiv">
            <h1> Got a gift card?</h1>
            <p> Earns 2★Stars per $1 </p>
            <button className="giftCardBtnOne"><Link to= "https://app.starbucks.com/account/cards"> Add or reload </Link></button>
            <button className="giftCardBtnTwo">Check Balance</button>
            <a className="LinkWordTerms" href="https://www.starbucks.com/terms/manage-gift-cards/"><h2> Card Terms & Conditions </h2></a>
            </div>
          </Col>
        </Row> 
        <LunarCarousel/>
        <ValentineCarousel/>
        <BirthdayCarousel/>
        <ThanksCarousel/>  
        <CelebrationCarousel/>    
        <WinterCarousel/>
        <AppreciationCarousel/>

      <TopFooter/>
      </div>
  )
}

export default GiftCard