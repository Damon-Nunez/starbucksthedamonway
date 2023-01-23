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


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  }

const GiftCard = () => {

    const slider = React.useRef(null);

    const settings = {
      dots: true,
      infinite: false,
      arrows: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
  
      // customPaging: function (i) {
      //   return <p>{i + 1}</p>;
      // },
  
      responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
  
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
  
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   
    };
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className="CarouselName"> Featured </h1>
      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>

      <div className="Button">
        <button className="ButtonPrev"onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button className="ButtonNext"
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>
    </div>
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
         <div>
                <h1 className="CarouselName"> Lunar New Year </h1>
                <Slider ref={slider} {...settings}>
             {LunarNewYear?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>
        </div> 
          
            <TopFooter/>
            
        </div>
    )
}
const LunarNewYear = [
  {
    id: 1,
      image: "https://globalassets.starbucks.com/assets/09867b98e0814ce798f653f095889b1f.jpg",
      link: "https://www.starbucks.com/gift/873070673",
  }
];

const products = [
    {
      id: 1,
      image: "https://globalassets.starbucks.com/assets/09867b98e0814ce798f653f095889b1f.jpg",
      link: "https://www.starbucks.com/gift/873070673",
    },
    {
      id: 2,
      image: "https://globalassets.starbucks.com/assets/2a702a452ecb4ae7abe5a42ad506c2b7.jpg",
      link: "https://www.starbucks.com/gift/873070651"
    },
    {
      id: 3,
      image: "https://globalassets.starbucks.com/assets/5e1d6bdf7e3c42459c8723204098f411.jpg",
      link: "https://www.starbucks.com/gift/873070652"
    },
    {
      id: 4,
      image: "https://globalassets.starbucks.com/assets/a25a06a77e9f4942b65c4a3cda129112.jpg",
      link: "https://www.starbucks.com/gift/873070669"
    },
    {
      id:5,
      image:"https://globalassets.starbucks.com/assets/496a8765f41145299c1952a8b707ea8b.jpg",
      link: "https://www.starbucks.com/gift/873070670"
    },
    {
      id:6,
      image:"https://globalassets.starbucks.com/assets/e59a52bdd19448be9096d788b85a5d2f.jpg",
      link:"https://www.starbucks.com/gift/873070676",
    },
    {
      id:7,
      image:"https://globalassets.starbucks.com/assets/8c34f576af314654956200e08429e9bd.jpg",
      link:"https://www.starbucks.com/gift/873070502",
    },
    {
      id:8,
      image:"https://globalassets.starbucks.com/assets/7ad856a8cbdd4fbeb0119695a8d5b843.jpg",
      link:"https://www.starbucks.com/gift/873070574",
    },
    {
      id:9,
      image:"https://globalassets.starbucks.com/assets/025674328bc54e35a4ba0988875e6e5b.jpg",
      link:"https://www.starbucks.com/gift/873070503",
    },
    {
      id:10,
      image:"https://globalassets.starbucks.com/assets/b3c8d0d8a3bc48b18d570b382af46c20.jpg",
      link:"https://www.starbucks.com/gift/873070599",
    },
    {
      id:11,
      image:"https://globalassets.starbucks.com/assets/1c47ac4f6e914144b8d6a2e3489f316e.jpg",
      link:"https://www.starbucks.com/gift/873070293",
    },
    {
      id:12,
      image:"https://globalassets.starbucks.com/assets/6e34062e14484b66a5604c57340103ba.jpg",
      link:"https://www.starbucks.com/gift/873070674",
    },
    {
    id:13,
    image: "https://globalassets.starbucks.com/assets/97be32ff56b54da5aa361cd9a6d24977.jpg",
    link:"https://www.starbucks.com/gift/873070675",
    },
    {
      id:14,
      image:"https://globalassets.starbucks.com/assets/36387ff112534ff7b5fb1f663ec2324e.jpg",
      link:"https://www.starbucks.com/gift/873070611",
    },
    {
      id:15,
      image:"https://globalassets.starbucks.com/assets/92a2acfde0d74350bae518afe9928fea.jpg",
      link:"https://www.starbucks.com/gift/873070677",
    },
  ];

export default GiftCard