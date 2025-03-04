'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";
const ChatSection=()=>{
    const searchParam=useSearchParams();
    useEffect(()=>{
        console.log(searchParam.get('cs'))
    },[searchParam])
    return(
        <div className="w-[100%] h-[100vh] bg-gray-300">
        <p className="w-[100%] text-center my-auto bg-red-200">Your personal chat arena</p>
        </div>
    )
}
export {ChatSection}