'use client';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './shared/components/Carousel/Carousel';
import { staringView, cellphone, notebook } from './assets';
import { useSwiper } from 'swiper/react';
import Detailtext from './shared/components/Texts/Detailtext';
import Home from './views/Home/Home';

function App() {
  const carouselItems = [
    <div className="w-full">
      {' '}
      <img alt="" className="w-full grayscale-[80%]" src={staringView} />
    </div>,
    <img alt="" className="w-full grayscale-[80%]" src={cellphone} />,
  ];

  return (
    <Home />
  );
}

export default App;
