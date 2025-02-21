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
import { Review } from "./Review";
import { BiSolidLike } from "react-icons/bi";
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
            isPending && <div className="md:w-[80vw] w-[100%] h-[100vh] flex items-center justify-center">
                <LuLoaderCircle className="animate-spin text-[30px]" />
            </div>
        }
        {
            isError && <div>Error occured</div>
        }
        {
            isSuccess && <main id="vendorProfile" className="md:w-[80vw] w-[100%] h-[100vh] overflow-x-hidden overflow-y-auto">
            <div className="w-[80%] mx-auto mt-[4vh]  items-center flex md:flex-row flex-col justify-between">
                <div className="w-[100%] flex md:flex-row flex-col items-center ">
                    <div className="md:w-[10vw] md:h-[10vw] w-[30vw] h-[30vw]  relative  rounded-full">
                        <input type="file" className="hidden" />
                        <Image alt="profilePic" style={{ objectFit: "cover" }} src={profile} />
                        <MdCameraswitch className="absolute top-[75%] bg-white w-[1.6vw] rounded-full border-2 border-gray-600 h-[1.6vw] p-1 right-[5%]" />
                    </div>
                    <span className="font-semibold  mt-2 md:mt-0 flex flex-col ml-3">
                        <span>{data.name}</span>
                        <span className="font-normal text-gray-500">{data.address[0]}</span>
                        <span className="font-normal text-gray-500">{data.address[1]}</span>
                    </span>
                </div>
                <div className="flex mt-3 md:mt-0 w-[100%]  items-center">
                    <button className="border-2 border-[#9A2143] text-[#9A2143] w-[50%] px-3 text-sm py-2 rounded-lg">Message</button>
                    <button className="bg-[#9A2143] border-2 border-[#9A2143] w-[50%] text-white px-3 rounded-lg text-sm py-2 ml-2">Follow</button>
                </div>
            </div>
           
            <div className="flex md:w-[80%] w-[95%] justify-between mx-auto mt-3 py-2 rounded-md bg-gray-100">
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
            <main className="md:w-[80%] w-[95%] mx-auto bg-gray-100 flex justify-evenly mt-5 px-3 rounded-lg py-3">
                        <span className="flex items-center"> {data?.isLikedByUser?<BiSolidLike className="mr-2  text-[20px] text-[#9A2143]"/>:<AiOutlineLike className="mr-2  text-[20px]"/>}{data?.isLikedByUser?<span className="text-[#9A2143]">Liked</span>:<>Like</>} </span>
                        <button onClick={()=>{setModa(!shareModal)}} className="flex items-center"> <IoShareSocial className="mr-2  text-[20px]"/> Share</button>
                        <span className="flex items-center"> <HiOutlineSave className="mr-2  text-[20px]"/> Save</span>
            </main>
            <VendorShare showModal={shareModal} setModal={setModa} />
            {/* <div className="md:w-[80%] w-[95%] mt-3  mx-auto">
                <p className="text-sm font-medium text-gray-500">Available cities</p>
                <div className="flex flex-wrap gap-2 text-sm mt-1">
                    {
                        data.citiesActive.map((item,pos)=>
                            <span key={pos} className="text-[#9A2143] bg-[#ecdce1b2]  px-2 py-1 rounded-md">{item}</span> 
                        )
                    }
                </div>
            </div> */}
            <div className="md:w-[80%] w-[95%] mt-3  mx-auto">
                <p className="text-sm font-medium text-gray-500">Services offered</p>
                <div className="flex flex-wrap gap-2 text-sm mt-1">
                    {
                        data.tags.map((item,pos)=>
                            <span key={pos} className="text-[#9A2143] bg-[#ecdce1b2]  px-2 py-1 rounded-md">{item}</span> 
                        )
                    }
                </div>
            </div>
            <SelectPostPage dataSet={data?.images} vendorName={prm.get('vendorName')} id={'vendorProfile'}/>
            <p className="w-[80%] mt-3 text-gray-400 mx-auto mb-3">Reviews</p>
            <div className="w-[80%] mx-auto">
                {
                    data?.review?.map((item,pos)=>
                        <Review reviewData={item} key={pos}/>
                    )
                }
            </div>
        </main>
        }
        </>
    )
}
export { VendorProfile }