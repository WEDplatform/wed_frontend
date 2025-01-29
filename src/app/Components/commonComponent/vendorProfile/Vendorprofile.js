'use client'
import profile from "../../../../../public/profile.svg"
import Image from "next/image"
import { MdCameraswitch } from "react-icons/md";
import { vendorSocialHandle } from "@/app/lib/constants";
import { LuDot } from "react-icons/lu";
import { HiOutlineSave } from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { SelectPostPage } from "./VendorPostDisplay";
import { fetchProfileData } from "@/app/apiFunctions/vendor/fetchProfile";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LuLoaderCircle } from "react-icons/lu";
import { VendorShare } from "./VendorShare";
const VendorProfile = ({vendorName}) => {
    let prm=useSearchParams();
    let {mutate,data,error,isError,isPending,isSuccess} = useMutation({
        mutationFn:fetchProfileData
    })
    let [shareModal,setModa]=useState(false);
    useEffect(()=>{
        mutate(prm.get('vendorName'))
    },[])
    return (
        <>
        {
            isPending && <div className="w-[80vw] h-[100vh] flex items-center justify-center">
                <LuLoaderCircle className="animate-spin text-[30px]" />
            </div>
        }
        {
            isError && <div>Error occured</div>
        }
        {
            isSuccess && <main id="vendorProfile" className="w-[80vw] h-[100vh] overflow-x-hidden overflow-y-auto">
            <div className="w-[80%] mx-auto mt-[4vh]  items-center flex justify-between">
                <div className="w-[100%] flex items-center ">
                    <div className="w-[10vw] h-[10vw]  relative  rounded-full">
                        <input type="file" className="hidden" />
                        <Image alt="profilePic" style={{ objectFit: "cover" }} src={profile} />
                        <MdCameraswitch className="absolute top-[75%] bg-white w-[1.6vw] rounded-full border-2 border-gray-600 h-[1.6vw] p-1 right-[5%]" />
                    </div>
                    <span className="font-semibold flex flex-col ml-3">
                        <span>{data.businessName}</span>
                        <span className="font-normal text-gray-500">{data.businessEmail}</span>
                        <span className="font-normal text-gray-500">{data.address}</span>
                    </span>
                </div>
                <div className="flex items-center">
                    <button className="border-2 border-[#9A2143] text-[#9A2143] px-3 text-sm py-2 rounded-lg">Message</button>
                    <button className="bg-[#9A2143] border-2 border-[#9A2143] text-white px-3 rounded-lg text-sm py-2 ml-2">Follow</button>
                </div>
            </div>
           
            <div className="flex w-[80%] justify-between mx-auto mt-3 py-2 rounded-md bg-gray-100">
                <div className="w-[50%] border-r-2 border-[#9A2143] text-center py-1 font-light text-gray-500">
                    <span className="font-semibold text-gray-700">200 </span>Following
                </div>
                <div className="w-[50%] text-center py-1 font-light text-gray-500">
                    <span className="font-semibold text-gray-700">250 </span>Followers
                </div>
            </div>
            <p className="flex justify-center mt-6 ">
                      {
                        vendorSocialHandle.map((item,pos)=>
                        <span className="text-[20px] text-gray-500 flex" key={pos}>{item.icon}
                        {
                          pos<2 && <LuDot className="text-[#9A2143]"/>
                        }
                        </span>
                        )
                      }
            </p>
            <main className="w-[80%] mx-auto bg-gray-100 flex justify-evenly mt-5 px-3 rounded-lg py-3">
                        <span className="flex items-center"> <AiOutlineLike className="mr-2  text-[20px]"/> Like</span>
                        <button onClick={()=>{setModa(!shareModal)}} className="flex items-center"> <IoShareSocial className="mr-2  text-[20px]"/> Share</button>
                        <span className="flex items-center"> <HiOutlineSave className="mr-2  text-[20px]"/> Save</span>
            </main>
            <VendorShare showModal={shareModal} setModal={setModa} />
            <div className="w-[80%] mt-3  mx-auto">
                <p className="text-sm font-medium text-gray-500">Available cities</p>
                <div className="flex flex-wrap gap-2 text-sm mt-1">
                    {
                        data.citiesActive.map((item,pos)=>
                            <span key={pos} className="text-[#9A2143] bg-[#ecdce1b2]  px-2 py-1 rounded-md">{item}</span> 
                        )
                    }
                </div>
            </div>
            <div className="w-[80%] mt-3  mx-auto">
                <p className="text-sm font-medium text-gray-500">Services offered</p>
                <div className="flex flex-wrap gap-2 text-sm mt-1">
                    {
                        data.servicesProvided.map((item,pos)=>
                            <span key={pos} className="text-[#9A2143] bg-[#ecdce1b2]  px-2 py-1 rounded-md">{item}</span> 
                        )
                    }
                </div>
            </div>
            <SelectPostPage vendorName={prm.get('vendorName')} id={'vendorProfile'}/>
        </main>
        }
        </>
    )
}
export { VendorProfile }