import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dec90 } from "../Datas/90";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import './Swiper90.css'
import "./Content.scss";
import "swiper/swiper.scss";
SwiperCore.use([Navigation, Pagination]);

const Content90 = () => {


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
        {Dec90.map((item) => {
          return (
            <SwiperSlide
              tag="li"
              style={{ listStyle: "none" }}
              key={item.year}
              navigation
              pagination
            >
              <div className="content" >
                <div className="textBox" style={{flexDirection:"row-reverse"}}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <Link to="/mustang_project">Learn More</Link>
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

export default Content90;
