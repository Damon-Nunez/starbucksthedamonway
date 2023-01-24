import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GiftCard.css'
import BasicCard from "./BasicCard"
import { Row,Col,Container } from "react-bootstrap";
import { Link } from "react-router-dom";    
import FeaturedCarousel from "../CarouselSections/FeaturedCarousel";   
import LunarCarousel from "../CarouselSections/LunarCarousel";
import ValentineCarousel from "../CarouselSections/ValentineCarousel";
import BirthdayCarousel from "../CarouselSections/BirthdayCarousel";
import ThanksCarousel from "../CarouselSections/ThanksCarousel";
import CelebrationCarousel from "../CarouselSections/CelebrationCarousel";
import WinterCarousel from "../CarouselSections/WinterCarousel";
import AppreciationCarousel from "../CarouselSections/AppreciationCarousel";
import WorkplaceCarousel from "../CarouselSections/WorkplaceCarousel";
import EncouragmentCarousel from "../CarouselSections/Encouragment";
import AffectionCarousel from "../CarouselSections/AffectionCarousel";
import AnytimeCarousel from "../CarouselSections/AnytimeCarousel"
const GiftCard = () => {

  return (
<div>
    <Navbar/>
        <FeaturedCarousel/>
        <Container>
          <Row className="giftCard">
          <Col sm={6} md={6} lg={6}>
            <div className="giftCardDiv">
            <h1> Got a gift card?</h1></div>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <div className="SecondSection">
            <p> Earns 2★Stars per $1 </p>
            <button className="giftCardBtnOne"><Link to= "https://app.starbucks.com/account/cards"> Add or reload </Link></button>
            <button className="giftCardBtnTwo">Check Balance</button>
             <a className="LinkWordTerms" href="https://www.starbucks.com/terms/manage-gift-cards/"><h2> Card Terms & Conditions </h2></a>
              </div>
              </Col>
              </Row>
             </Container>
        <LunarCarousel/>
        <ValentineCarousel/>
        <BirthdayCarousel/>
        <ThanksCarousel/>  
        <CelebrationCarousel/>    
        <WinterCarousel/>
        <AppreciationCarousel/>
        <WorkplaceCarousel/>
        <EncouragmentCarousel/>
        <AffectionCarousel/>
        <AnytimeCarousel/>
        <Row className="GiftCardRow">
          <Col sm={12} md={12} lg={4}>
            <div className="BulkGiftCard">
              <img src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg"/>
            </div>
          </Col>
          <Col sm={12} md={12} lg={8}>
            <div className="BulkGiftCardText">
          <h2>Gift Cards in Bulk</h2>
              <p>There’s an easier way to buy Starbucks Cards in bulk! Give a Starbucks Card to gift, reward, incentivize, or show appreciation towards your customers, clients and team members.</p>
              <button>Shop Now</button>
              </div>
          </Col>
        </Row>
      <TopFooter/>
      </div>
  )
}

export default GiftCard