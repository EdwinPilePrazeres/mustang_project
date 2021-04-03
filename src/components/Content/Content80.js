import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Dec80 } from "../Datas/80";
import "./Content.scss";
import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
// import 'swiper-bundle.css';
import { Link } from "react-router-dom";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import './Swiper80.css'
SwiperCore.use([Navigation, Pagination]);

const Content70 = () => {


  return (
    <>
      
      <Swiper
        className="container_a"
        spaceBetween={100}
        slidesPerView={1}
        tag="ul"
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {Dec80.map((item) => {
          return (
            <SwiperSlide
              tag="li"
              style={{ listStyle: "none" }}
              key={item.year}
              navigation
              pagination
            >
              <div className="content">
                <div className="textBox">
                  <h2>{item.modelo}</h2>
                  <p>{item.description}</p>
                  <Link style={{ color: "#880000", background:"#fff" }} to="/mustang_project">Learn More</Link>
                </div>
                <div className="imgBox">
                  <img src={item.image} alt={item.alt} className="" />
                </div>
                {/* <MenuBottom /> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Content70;
