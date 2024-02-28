import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './HomeCarousel.css'


const HomeCarousel = () => {
  return (
    <>
    {/* <h1>Carousel</h1> */}
      <Carousel fade>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src='https://u.profitroom.pl/2020-hotel-slowik-pl/thumb/1920x810/uploads/kawiarnia1.jpg' alt="" className='image'/>
        <Carousel.Caption>
          <h3 className='heading'>Explore</h3>
          <p className='text'>Dive into a world of endless possibilities with Sapience's dynamic search and recommendation engine. Discover study partners, venues, and resources tailored to your interests and preferences, making every study session an adventure waiting to unfold.
</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src='https://u.profitroom.pl/2021-archehoteldworuphagena-pl/thumb/1920x810/uploads/Gdansk_23_1.jpg' alt="" className='image'/>
        <Carousel.Caption>
          <h3 className='heading'>Learn</h3>
          <p className='text'>Ignite your curiosity and fuel your passion for knowledge with Sapience's personalized suggestions. Connect with compatible study partners, access curated study materials, and engage in meaningful study sessions that empower you to master new subjects and skills.
</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src='https://u.profitroom.pl/2019-pieninygrand-pl/thumb/1920x810/uploads/PIENINYGRAND-RESTAURACJA1.jpg' alt="" className='image'/>
        <Carousel.Caption>
          <h3 className='heading text-lg'>Grow</h3>
          <p className='text'>
          Thrive and flourish with Sapience's supportive community and AI-enhanced chat room. Every interaction, discovery, and collaboration on the platform propels you forward on your path to academic and personal growth, empowering you to achieve your goals and realize your full potential.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default HomeCarousel;
