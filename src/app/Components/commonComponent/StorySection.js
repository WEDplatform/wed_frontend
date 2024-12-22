'use client'
import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { StoryCard } from "./StoryCard";
// import '@splidejs/react-splide/css';
function StorySection() {

    return (
        <>
            <Splide
                className="relative flex items-center w-[100%] md:w-[60vw] md:ml-4"
                options={{
                    perPage: 6,
                    breakpoints:{
                        640:{
                            perPage:3
                        },
                        1024:{
                            perPage:4
                        }
                    }
                }}
                hasTrack={false} aria-label="...">
                <SplideTrack className="w-[100%] overflow-visible md:w-[60vw] h-[26vh] md:mt-4">
                    {
                        new Array(10).fill(0).map((_, pos) =>
                            <SplideSlide className="overflow-visible" key={pos}>
                                <StoryCard/>
                            </SplideSlide>
                        )
                    }
                </SplideTrack>
                <div className="splide__arrows  md:flex justify-between w-[100%] absolute top-[50%]">
                    <button className="splide__arrow hidden md:block splide__arrow--prev">{"<"}</button>
                    <button className="splide__arrow hidden md:block splide__arrow--next">{">"}</button>
                </div>
            </Splide>
        </>
    );
}

export { StorySection }
