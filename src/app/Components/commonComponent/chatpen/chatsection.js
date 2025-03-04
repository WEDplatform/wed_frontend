'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";
const ChatSection=()=>{
    const searchParam=useSearchParams();
    useEffect(()=>{
        console.log(searchParam.get('cs'))
    },[searchParam])
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
        {
            searchParam.get('cs')=='0'?
            <p className=" text-center text-sm ">Your personal chat arena</p>:
            <div>main chat section</div>
        }
        </div>
    )
}
export {ChatSection}