'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";
const ChatSection=()=>{
    const searchParam=useSearchParams();
    useEffect(()=>{
        console.log(searchParam.get('cs'))
    },[searchParam])
    return(
        <div className="w-[100%] h-[100vh]">
        texts
        </div>
    )
}
export {ChatSection}