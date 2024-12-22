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
                className="relative bg-red-200 w-[60vw] ml-4"
                options={{
                    perPage: 6,
                }}
                hasTrack={false} aria-label="...">
                <SplideTrack className="w-[60vw] h-[22vh] md:mt-4 ">
                    {
                        new Array(10).fill(0).map((_, pos) =>
                            <SplideSlide className="mx-2" key={pos}>
                                <StoryCard/>
                            </SplideSlide>
                        )
                    }
                </SplideTrack>
                <div className="splide__arrows flex justify-between w-[100%] absolute top-[50%]">
                    <button className="splide__arrow splide__arrow--prev">{"<"}</button>
                    <button className="splide__arrow splide__arrow--next">{">"}</button>
                </div>
            </Splide>
        </>
    );
}

export { StorySection }
