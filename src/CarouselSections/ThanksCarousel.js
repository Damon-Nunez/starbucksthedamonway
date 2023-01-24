import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";

const thanks = [
    {
        id:1,
        image:"https://globalassets.starbucks.com/assets/3196fef83fbe49a58ea7c19bb685cc5c.jpg",
        link:"https://www.starbucks.com/gift/873070215",
    },
    {
        id:2,
        image:"https://globalassets.starbucks.com/assets/a8fa33a190374fe69bf1de429a03053a.jpg",
        link:"https://www.starbucks.com/gift/873070334",
    },
    {
        id:3,
        image:"https://globalassets.starbucks.com/assets/f8167a08eaab4d2197729d2967caedad.jpg",
        link:"https://www.starbucks.com/gift/873070088",
    },
    {
        id:4,
        image:"https://globalassets.starbucks.com/assets/8c34f576af314654956200e08429e9bd.jpg",
        link:"https://www.starbucks.com/gift/873070502",
    },
    {
        id:5,
        image:"https://globalassets.starbucks.com/assets/6e34062e14484b66a5604c57340103ba.jpg",
        link:"https://www.starbucks.com/gift/873070674",
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
  
  const ThanksCarousel = () => {
  
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
                <h1 className="CarouselName"> Thank You! </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {thanks?.map((item, index) => {
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
  
  export default ThanksCarousel;