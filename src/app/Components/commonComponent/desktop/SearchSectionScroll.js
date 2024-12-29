'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
function SearchSectionScroll({vals,title}) {
  return (
    <div className="w-[100%] mt-2">
        <p className='text-sm text-gray-500'>{title}</p>
        <Splide
        options={{
            perPage:3
        }}
        className="w-[100%] flex justify-center h-[18vh]" hasTrack={false}>
                    <SplideTrack className="w-[92%] overflow-hidden h-[100%]  rounded-xl">
                    {
                vals.map((item,pos)=>
                <SplideSlide key={pos} className="flex justify-center">
                    <div className='w-[95%] h-[18vh] rounded-xl bg-white border-2'>
                        <div className='w-[100%] h-[65%] bg-gray-200'></div>
                        <div className='w-[100%] h-[35%] text-sm text-gray-500 mt-1 ml-1'>{item}</div>

                    </div>
                </SplideSlide>
                )
            }
                    </SplideTrack>
                    {
                        vals.length> 3 && <div className="splide__arrows  md:flex justify-between w-[100%] px-0 absolute top-[50%] transform -translate-y-1/2">
                        <button className="splide__arrow  md:block splide__arrow--prev bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowLeft className="w-[100%] h-[100%] text-xl" /></button>
                        <button className="splide__arrow  md:block splide__arrow--next bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowRight className="w-[100%] h-[100%] text-xl" /></button>
                    </div>
                    }
                </Splide>
        <div >
            
        </div>
    </div>
  )
}

export { SearchSectionScroll }