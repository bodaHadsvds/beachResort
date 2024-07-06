import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/services";
import FeaturedRooms from "../components/FeaturedRooms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import defaultBcg from "../images/defaultBcg.jpeg";
import { RoomConsumer } from "../context";
import StyledHomeHero from "../components/StyledHomeHero";
const Home = () => {
  const context = useContext(RoomConsumer);
  const { rooms  } = context;
  
  const [initialSlide, setInitialSlide] = useState(0)

  let settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    fade: true,
    initialSlide:initialSlide,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setInitialSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <>
      <div>
        <Slider {...settings}>
          {rooms.map((room) => {
            const imageUrl =
              room.images && room.images[0] ? room.images[0] : defaultBcg;
            return (
              <StyledHomeHero key={room.id} img={imageUrl} >
                <Banner
                  title={room.name}
                  subtitle="deluxe rooms starting  at $299"
                >
                  <Link to="/rooms" className="btn-primary">
                    our Rooms
                  </Link>
                </Banner>{" "}
              </StyledHomeHero>
            );
          })}
        </Slider>
      </div>

      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
