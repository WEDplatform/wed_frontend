'use client'
import React from "react";
import { Splide, SplideSlide ,SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
// import '@splidejs/react-splide/css';
function StorySection() {
 
  return (
    <>
      <Splide
      options={{
        perPage: 3,
      }}
      hasTrack={false} aria-label="...">
  <SplideTrack className="w-[60vw] h-[20vh]">
  <SplideSlide>
    <div className="w-[100%] h-[100%] bg-red-200">Slide1</div>
  </SplideSlide>
  <SplideSlide>
    <div className="w-[100%] h-[100%] bg-red-300">Slide2</div>
  </SplideSlide>
  <SplideSlide>
    <div className="w-[100%] h-[100%] bg-red-200">Slide3</div>
  </SplideSlide>
  <SplideSlide>
    <div className="w-[100% h-[100%] bg-red-300">Slide4</div>
  </SplideSlide>
  </SplideTrack>
  <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev">Prev</button>
    <button className="splide__arrow splide__arrow--next">Next</button>
  </div>
</Splide>
    </>
  );
}

export { StorySection }
