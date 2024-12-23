import Image from "next/image"
import ICO from "@/app/favicon.ico"
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { MdSaveAlt } from "react-icons/md";
const ImagePost = () =>{
    return(
        <>
        
        <div className="aspect-[4/3] border-2 border-gray-300 md:col-span-3 w-[100%] ">
            <div className="flex items-center justify-between gap-2  py-1 pl-2">
                <main className="flex items-center gap-2">
                <Image alt="pic" src={ICO} width={40} height={40}/>
                <span className="flex flex-col">
                    <span className="font-semibold">Username</span>
                    <span className="font-normal text-gray-600">Dubai (UAE)</span>
                </span>
                </main>
                <nav className="mr-3">
                    <BsThreeDots />
                </nav>
            </div>
            <div className="w-[100%] h-[100%] rounded-xl bg-red-200">
                Photo post
            </div>
            <div className="bg-white flex justify-between w-[100%] py-2">
                <div className="w-[30%] text-2xl justify-evenly flex items-center">
                    <FaRegHeart/>
                    <TbLocation/>
                    <MdSaveAlt/>
                </div>
                <div className="w-[30%] flex justify-center items-center">
                    <p className="text-[12px] mr-3 bg-[#FFECEC] px-3 font-semibold py-1 text-nowrap rounded-[25px]">2490 reviews</p>
                </div>
            </div>
        </div>
        </>
    )
}
const VideoPost =()=> {
    return(
        <>
         <div className="aspect-[9/16] border-2 border-gray-300 md:col-span-2 w-[100%] ">
            <div className="flex items-center justify-between gap-2  py-1 pl-2">
                <main className="flex items-center gap-2">
                <Image alt="pic" src={ICO} width={40} height={40}/>
                <span className="flex flex-col">
                    <span className="font-semibold">Username</span>
                    <span className="font-normal text-gray-600">Dubai (UAE)</span>
                </span>
                </main>
                <nav className="mr-3">
                    <BsThreeDots />
                </nav>
            </div>
            <div className="w-[100%] h-[100%] rounded-xl bg-red-200">
                Video post
            </div>
            <div className="bg-white flex justify-between w-[100%] py-2">
                <div className="w-[40%] text-2xl justify-evenly flex items-center">
                    <FaRegHeart/>
                    <TbLocation/>
                    <MdSaveAlt/>
                </div>
                <div className="w-[40%] flex justify-center items-center">
                    <p className="text-[12px] mr-3 bg-[#FFECEC] px-3 font-semibold py-1 text-nowrap rounded-[25px]">2490 reviews</p>
                </div>
            </div>
        </div>
        </>
    )
}
export {ImagePost,VideoPost}