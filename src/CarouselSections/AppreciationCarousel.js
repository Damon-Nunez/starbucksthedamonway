import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";

    const appreciation =[
        {
            id:1,
            image:"https://globalassets.starbucks.com/assets/3d9173ceb399494483d37c5c7d88958d.jpg",
            link:"https://www.starbucks.com/gift/873070505",
        },
        {
            id:2,
            image:"https://globalassets.starbucks.com/assets/9e106226562b40a2b2a149db572cca58.jpg",
            link:"https://www.starbucks.com/gift/873070280",
        },
        {
            id:3,
            image:"https://globalassets.starbucks.com/assets/53049a69a22d4d51ba75abd47ee5bbb4.jpg",
            link:"https://www.starbucks.com/gift/873070323",
        },
        {
            id:4,
            image:"https://globalassets.starbucks.com/assets/97be32ff56b54da5aa361cd9a6d24977.jpg",
            link:"https://www.starbucks.com/gift/873070675",
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
  
  const AppreciationCarousel = () => {
  
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
                <h1 className="CarouselName"> Appreciation </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {appreciation?.map((item, index) => {
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
  
  export default AppreciationCarousel;