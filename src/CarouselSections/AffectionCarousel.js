import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";
   
const affection = [
    {
        id:1,
        image:"https://globalassets.starbucks.com/assets/0b3987211aa342b9aa1e6029570bcac3.jpg",
        link:"https://www.starbucks.com/gift/873070338",
    },
    {
        id:2,
        image:"https://globalassets.starbucks.com/assets/ef9fd7cc60c8426199db6c60e27d5d06.jpg",
        link:"https://www.starbucks.com/gift/873070049",
    },
    {
        id:3,
        image:"https://globalassets.starbucks.com/assets/e6160161a69a472199628d3ea6096efe.jpg",
        link:"https://www.starbucks.com/gift/873070539",
    },
    {
        id:5,
        image:"https://globalassets.starbucks.com/assets/4d7c2ed113214af79dc5024f2073259a.jpg",
        link:"https://www.starbucks.com/gift/873070149",
    },
    {
        id:6,
        image:"https://globalassets.starbucks.com/assets/76aada8fd9fd4a9d9adae18d10829062.jpg",
        link:"https://www.starbucks.com/gift/873070056",
    },
]

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
  
  const AffectionCarousel = () => {
  
    const slider = React.useRef(null);
  
    const settings = {
      dots: true,
      infinite: true,
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
            <div className="CarouselOne">
                <h1 className="CarouselName"> Affection </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {affection?.map((item, index) => {
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
  
        </div>
    )
  }
  
  export default AffectionCarousel