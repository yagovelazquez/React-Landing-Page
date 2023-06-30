import React, { ReactNode, useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';

import { Autoplay, Pagination, Navigation } from 'swiper';
import {useSwiper} from 'swiper/react'

interface Carousel {
  carouselItems: ReactNode[];
}

export default function Carousel({ carouselItems }: Carousel) {


  return (
    <>
      <Swiper
        style={{
          //@ts-ignore
          '--swiper-navigation-color': '#000',
          '--swiper-navigation-size': '20px',
          '--swiper-navigation-sides-offset': '110px',
        }}

    
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full flex justify-center items-center"
      >
        {carouselItems.map((item, i) => (
          <SwiperSlide key={i}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
