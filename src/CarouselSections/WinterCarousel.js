import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";
   
const winter =[{
    id:1,
    image:"https://globalassets.starbucks.com/assets/2a702a452ecb4ae7abe5a42ad506c2b7.jpg",
    link:"https://www.starbucks.com/gift/873070651",

},
{
    id:2,
    image:"https://globalassets.starbucks.com/assets/5e1d6bdf7e3c42459c8723204098f411.jpg",
    link:"https://www.starbucks.com/gift/873070652",
    
},
{
    id:3,
    image:"https://globalassets.starbucks.com/assets/25109295cdf0416caade2802a096b850.jpg",
    link:"https://www.starbucks.com/gift/873070653",
    
},
{
    id:4,
    image:"https://globalassets.starbucks.com/assets/bc499d8fd8e1433c8a93d1472867511b.jpg",
    link:"https://www.starbucks.com/gift/873070654",
    
},

];
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
  
  const WinterCarousel = () => {
  
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
                <h1 className="CarouselName"> Winter </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {winter?.map((item, index) => {
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
  
  export default WinterCarousel