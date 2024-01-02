/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { times } from "lodash";
import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";


export default function Gallery({ data, id }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const handleThumbSlideChange = () => {
    if (mainSwiper && thumbsSwiper) {
      const activeThumbSlideIndex = thumbsSwiper.realIndex;
      mainSwiper.slideTo(activeThumbSlideIndex, 500);
    }
  };

  return (
    <div className="relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        onSwiper={setMainSwiper}
        loop={true}
        spaceBetween={20}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs, EffectFade]}
        effect="fade"
        className="mySwiper2 h-[500px] cursor-grab"
      >
        {data.map(
          (ele, ind) => {
            return (
              <SwiperSlide key={ind}>
                <img
                  src={ele}
                  className="h-full w-full object-cover"
                  key={Math.random()}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        autoplay={{
          delay: Math.floor(Math.random() * (3500 - 2500 + 1)) + 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        watchSlidesProgress={true}
        onSlideChange={handleThumbSlideChange}
        modules={[FreeMode, Thumbs, Autoplay]}
        centeredSlides={true}
        className="mySwiper  h-[100px] mt-2   w-[100%]"
      >
        {data.map(
          (ele, ind) => {
            return (
              <SwiperSlide key={ind}>
                <img
                  src={ele}
                  className="h-full w-full object-cover"
                  key={Math.random()}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>

  
    </div>
  );
}
