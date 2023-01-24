import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";    


 export function SampleNextArrow(props) {
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
  
  const ValentineCarousel = () => {
  
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
            <div className="CarouselOne">
                <h1 className="CarouselName"> Valentine's Day </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {Valentine?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>
        </div>
        <div className="Button">
      <button className="ButtonPrev"onClick={() => slider?.current?.slickPrev()}>Prev</button>
      <button className="ButtonNext"
        onClick={() => slider?.current?.slickNext()}
      >
        Next
      </button>
    </div>
        </div>
    )
  }
  const Valentine = [{
    id:1,
    image:"https://globalassets.starbucks.com/assets/01343ce806024e1d8e9cad4a8aa6a193.jpg",
    link:"https://www.starbucks.com/gift/873070500",
},
{
    id:2,
    image:"https://globalassets.starbucks.com/assets/a25a06a77e9f4942b65c4a3cda129112.jpg",
    link:"https://www.starbucks.com/gift/873070669",
},
{
    id:3,
    image:"https://globalassets.starbucks.com/assets/76aada8fd9fd4a9d9adae18d10829062.jpg",
    link:"https://www.starbucks.com/gift/873070056",
},
{
    id:4,
    image:"https://globalassets.starbucks.com/assets/496a8765f41145299c1952a8b707ea8b.jpg",
    link:"https://www.starbucks.com/gift/873070670"
}
]
  export default ValentineCarousel;