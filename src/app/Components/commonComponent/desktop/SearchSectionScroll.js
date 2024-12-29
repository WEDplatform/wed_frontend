'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
function SearchSectionScroll() {
  return (
    <div className="w-[100%] ">
        <p>Title</p>
        <Splide
        options={{
            perPage:3
        }}
        className="w-[100%]  flex justify-center h-[15vh]" aria-label="" hasTrack={false}>
                    <SplideTrack className="w-[92%] overflow-hidden h-100%]  rounded-xl">
                    {
                new Array(10).fill(0).map((item,pos)=>
                <SplideSlide key={pos} className="flex justify-center">
                    <div className='w-[95%] h-[15vh] bg-white border-2'>
                        h
                    </div>
                </SplideSlide>
                )
            }
                    </SplideTrack>
                    <div className="splide__arrows  md:flex justify-between w-[100%] px-0 absolute top-[50%] transform -translate-y-1/2">
                        <button className="splide__arrow  md:block splide__arrow--prev bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowLeft className="w-[100%] h-[100%] text-xl" /></button>
                        <button className="splide__arrow  md:block splide__arrow--next bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowRight className="w-[100%] h-[100%] text-xl" /></button>
                    </div>
                </Splide>
        <div >
            
        </div>
    </div>
  )
}

export { SearchSectionScroll }