'use client'
import Image from "next/image"
import ICO from "@/app/favicon.ico"
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { MdSaveAlt } from "react-icons/md";
import { PostImageSlider } from "./PostImageSlider";
import { getImageUrl,getVideoUrl } from "@/app/apiFunctions/pexel";
import { VendorDetails } from "../vendorComponent/VendorDetails";
import { useState } from "react";
import { VideoModal } from "./VideoModal.js/VideoModal";
import { useRouter } from "next/navigation";
const ImagePost =  ({ images }) => {

     const imageResponse=null
    return (
        <>
            <div className="aspect-[4/3] my-1 border-2  rounded-xl w-[100%] ">
                <div className="flex items-center justify-between gap-2 py-1 pl-2">
                    <main className="flex items-center gap-2">
                        <Image alt="pic" src={ICO} width={40} height={40} />
                        <span className="flex flex-col ">
                            <h1 className="font-semibold ">{ "Username"}</h1>
                            <span className="font-normal text-[12px] text-gray-600">Dubai (UAE)</span>
                        </span>
                    </main>
                    <nav className="mr-3">
                        <BsThreeDots />
                    </nav>
                </div>
                <div className="w-[100%] h-[100%] rounded-xl ">
                    {
                        images?.length>0?<PostImageSlider imageResponse={images} />:"Unable to preview image"
                    }
                </div>
                <div className="bg-white flex justify-between w-[100%] py-2">
                    <div className="w-[30%]  text-2xl justify-evenly flex items-center">
                        <FaRegHeart />
                        <TbLocation />
                        <MdSaveAlt />
                    </div>
                    <div className="w-[30%] flex justify-end items-center mr-4">
                        <p className="text-[12px] bg-[#FFECEC] px-3 font-semibold py-1 text-nowrap rounded-[25px]">2490 reviews</p>
                    </div>
                </div>
            </div>
        </>
    )
}
const VideoPost = ({videoPostLength,videoItem}) => {
    const router=useRouter()
    const [open,setOpen]=useState(false)
    return (
        <>
            <div className="md:aspect-[3/4] my-1 aspect-[3/4] row-span-3 border-2 rounded-xl md:col-span-2 w-[100%] ">
                <div className="flex items-center justify-between gap-2  py-1 pl-2">
                    
                    <VendorDetails user={videoItem?.user} vid={videoItem?.id}/>
                    <nav className="mr-3 ml-2">
                        <BsThreeDots />
                    </nav>
                </div>
                <div className="w-[100%] relative h-[100%] rounded-xl bg-gray-200">
                  {
                    videoItem?.id ?<Image onClick={()=>{setOpen(true)} } style={{objectFit:"cover"}} priority layout="fill" src={videoItem?.userImageURL} alt="Image"/>:"Unable to preview video"
                  }
                  <VideoModal videoPostLength={videoPostLength} VideoModalOpen={open} setVideoModal={setOpen}/>
                </div>
                <div className="bg-white flex justify-between w-[100%] py-2">
                    <div className="w-[40%] text-2xl justify-evenly flex items-center">
                        <FaRegHeart />
                        <TbLocation />
                        <MdSaveAlt />
                    </div>
                    <div className="w-[40%] flex justify-end md:mr-0 mr-1 items-center">
                        <p className="text-[12px] mr-3 bg-[#FFECEC] px-3 font-semibold py-1 text-nowrap rounded-[25px]">2490 reviews</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export { ImagePost, VideoPost }