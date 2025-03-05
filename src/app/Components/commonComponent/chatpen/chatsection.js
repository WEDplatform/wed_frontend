'use client'
import Image from "next/image";
import { useSearchParams } from "next/navigation"
import { useEffect, useState,useRef } from "react";
import profpic from "../../../../../public/profPic.png"
import { MdSend } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Chatspace } from "./chatspace";
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
        setMessages((prevMessages) => [...prevMessages, { text: message, time: "10:01 AM", sender: "me" }]);

    }
    const [messages, setMessages] = useState([
        { text: "Hey there!", time: "10:01 AM", sender: "user" },
        { text: "Hello! How are you?", time: "10:02 AM", sender: "me" },
        { text: "I'm good. What about you?", time: "10:03 AM", sender: "user" },
      ]);
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
                <Chatspace message={messages}/>
                <div className="w-[100%] flex justify-center items-center h-[10%]">
                    <div className="w-[70%] relative flex items-center justify-center border-b-2 border-[#C94C73] ">
                        <input value={message} onChange={(e)=>{modifyPayload(e.target.value)}} autoFocus type="text" placeholder="type here..." className="w-[100%] text-md px-4 py-3 tracking-wider text-md outline-none border-none "/>
                    {
                        message && <MdSend onClick={sendMessage} className=" absolute text-[#C94C73] right-2 top-3 text-[25px]"/>

                    }
                    </div>
                </div>
            </div>
        }
        </div>
    )
}
export {ChatSection}