import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/GiftCard.css'
import BasicCard from "../pages/BasicCard";
   
const anytime = [
    {
        id:1,
        image:"https://globalassets.starbucks.com/assets/a224b9727cb44ea4822b459d3faa0ced.jpg",
        link:"https://www.starbucks.com/gift/873070621",
    },
    {
        id:2,
        image:"https://globalassets.starbucks.com/assets/d2346fc58ecb4ce39534452c5c527c11.jpg",
        link:"https://www.starbucks.com/gift/873070351",
    },
    {
        id:3,
        image:"https://globalassets.starbucks.com/assets/bb5003220b16472c8efd7c1968edb836.jpg",
        link:"https://www.starbucks.com/gift/873070057",
    },
    {
        id:4,
        image:"https://globalassets.starbucks.com/assets/36387ff112534ff7b5fb1f663ec2324e.jpg",
        link:"https://www.starbucks.com/gift/873070611",
    },
    {
        id:5,
        image:"https://globalassets.starbucks.com/assets/92a2acfde0d74350bae518afe9928fea.jpg",
        link:"https://www.starbucks.com/gift/873070677",
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
  
  const AnytimeCarousel = () => {
  
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
                <h1 className="CarouselName"> Anytime </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
        {anytime?.map((item, index) => {
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
  
  export default AnytimeCarousel;