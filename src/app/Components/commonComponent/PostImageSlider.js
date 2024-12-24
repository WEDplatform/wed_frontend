"use client"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
function PostImageSlider() {
    return (
        <Splide aria-label="" hasTrack={false}>
            <SplideTrack className="w-[100%] h-[100%] rounded-xl">
                <SplideSlide className='md:w-[35vw] h-[74vw] md:h-[26vw] bg-red-300'>
                    <Image priority fill={true} src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt='pics' objectFit='cover'/>
                </SplideSlide>
                <SplideSlide className='md:w-[35vw] h-[74vw] md:h-[26vw] bg-red-200'>Slide 1</SplideSlide>
                <SplideSlide className='md:w-[35vw] h-[74vw] md:h-[26vw] bg-red-400'>Slide 3</SplideSlide>

            </SplideTrack>
            <div className="splide__arrows  md:flex justify-between w-[100%] px-0 absolute top-[50%] transform -translate-y-1/2">
                <button className="splide__arrow hidden md:block splide__arrow--prev bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowLeft className="w-[100%] h-[100%] text-xl" /></button>
                <button className="splide__arrow hidden md:block splide__arrow--next bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowRight className="w-[100%] h-[100%] text-xl" /></button>
            </div>
        </Splide>
    )
}

export { PostImageSlider }