import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";

const encouragment = [
    {
        id:1,
        image:"https://globalassets.starbucks.com/assets/27ade48b639f44a59ed702914a194454.jpg",
        link:"https://www.starbucks.com/gift/873070504",
    },
    {
        id:2,
        image:"https://globalassets.starbucks.com/assets/0f7b291e505e45d29fde0c4d7b732140.jpg",
        link:"https://www.starbucks.com/gift/873070507",
    },
    {
        id:3,
        image:"https://globalassets.starbucks.com/assets/c58f11e8197f4b608a1d7a751779fca3.jpg",
        link:"https://www.starbucks.com/gift/873070390",
    },
    {
        id:4,
        image:"https://globalassets.starbucks.com/assets/ff23ba2daa464e579e528cbd04749e24.jpg",
        link:"https://www.starbucks.com/gift/873070277",
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
  
  const EncouragmentCarousel = () => {
  
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
                <h1 className="CarouselName"> Encouragment </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {encouragment?.map((item, index) => {
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
  
  export default EncouragmentCarousel