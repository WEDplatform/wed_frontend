import React from 'react'
import Cat from "../../../../public/cat.jpg"
import Image from 'next/image'
function StoryCard() {
    return (
        <>
            <div className='border-2  relative border-gray-300  rounded-md mx-2 md:mx-4 h-[18vh] md:h-[24vh]'>
                <div className='relative w-[100%] h-[100%]'>
                    <Image src={Cat} objectFit='cover' className='bg-red-200 h-[100%]' alt="cat" fill={true} />
                </div>
                <span className='absolute top-[100%] text-center flex justify-center items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-auto rounded-full w-[1.9rem] h-[1.9rem] md:w-[1.7rem] md:h-[1.7rem] text-white text-[1rem]'>
                    <Image src={Cat} objectFit='cover' className='bg-red-200 h-[100%] rounded-full' alt="cat" fill={true} />
                </span>


            </div>
            <h1 className='text-center mt-2 mb-2 font-medium'>elysa</h1>
        </>
    )
}

export { StoryCard }