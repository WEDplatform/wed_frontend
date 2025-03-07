'use client'
import Image from "next/image";
import { useSearchParams } from "next/navigation"
import { useEffect, useState,useRef } from "react";
import profpic from "../../../../../public/profPic.png"
import { IoReturnDownBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Chatspace } from "./chatspace";
import { useMutation } from "@tanstack/react-query";
import { getMessages } from "@/app/apiFunctions/getMessages";
const ChatSection=()=>{
    const searchParam=useSearchParams();
    const [message,setMessage]=useState("");
    const router=useRouter();
    useEffect(()=>{
        console.log(searchParam.get('cs'))
    },[searchParam])
    const modifyPayload=async(mess)=>{
        setMessage(mess)
    }
    const sendMessage=async()=>{
    }
    const [messages, setMessages] = useState([
       
      ]);
    const cleanupChat=()=>{
        //router back push and set messages to empty array
        setMessages([])
        router.back()
    }
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
        {
            searchParam.get('cs')=='0'?
            <p className=" text-center text-sm ">Your personal chat arena</p>:
            <div className="w-[100%] h-[100%]">
                <div className="flex items-center py-3 px-5 h-[10%] ">
                <IoReturnDownBack onClick={()=>{router.back()}} className="text-[#C94C73] mr-2 text-[25px] "/>
                <Image src={profpic} width={50} height={50} alt="profilePicture" className="rounded-full mr-2"/>
                <h1>wedora events</h1>   
                </div>
                <Chatspace s={searchParam.get('s')} r={searchParam.get('r')} messageList={messages} setMessages={setMessages} uid={searchParam.get('uid')}/>
            </div>
        }
        </div>
    )
}
export {ChatSection}