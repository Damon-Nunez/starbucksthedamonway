import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";
   

const birthday = [
    {
        id:1,
        image:"https://globalassets.starbucks.com/assets/086f127933b1492c9b6311e77d32f6ba.jpg",
        link: "https://www.starbucks.com/gift/873070598",
    },
    {
        id:2,
        image:"https://globalassets.starbucks.com/assets/45f1c4ed8dac426ea31d09bc4296771c.jpg",
        link: "https://www.starbucks.com/gift/873070331",
    },
    {
        id:3,
        image:"https://globalassets.starbucks.com/assets/196581be9eda4e4cb0c3b33ac3241ea7.jpg",
        link: "https://www.starbucks.com/gift/873070446",
    },
    {
        id:4,
        image:"https://globalassets.starbucks.com/assets/025674328bc54e35a4ba0988875e6e5b.jpg",
        link: "https://www.starbucks.com/gift/873070503",
    },
    {
        id:5,
        image:"https://globalassets.starbucks.com/assets/b3c8d0d8a3bc48b18d570b382af46c20.jpg",
        link: "https://www.starbucks.com/gift/873070599",
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
  
  const BirthdayCarousel = () => {
  
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
                <h1 className="CarouselName"> Birthday </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {birthday?.map((item, index) => {
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
  
  export default BirthdayCarousel;