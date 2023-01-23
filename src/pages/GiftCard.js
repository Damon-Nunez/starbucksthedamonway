import React from "react";
import Navbar from "../components/Navbar";
import TopFooter from "../components/TopFooter";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GiftCard.css'
import BasicCard from "./BasicCard"

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
            <Navbar/>
            <div className="CarouselOne">
                <h1 className="CarouselName"> Featured </h1>
      <Slider className="Carousel"ref={slider} {...settings}>
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
  ;
            <TopFooter/>
            
        </div>
    )
}

const products = [
    {
      id: 1,
      image: "https://globalassets.starbucks.com/assets/09867b98e0814ce798f653f095889b1f.jpg",
    },
    {
      id: 2,
      image: "https://globalassets.starbucks.com/assets/2a702a452ecb4ae7abe5a42ad506c2b7.jpg",
    },
    {
      id: 3,
      image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
    },
    {
      id: 4,
      image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
    },
  ];

export default GiftCard