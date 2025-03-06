'use client'
import Image from "next/image"
import profpic from "../../../../../public/profPic.png"
import { useRouter } from "next/navigation"
const NotifyBar=({user,orgName,uid})=>{
    const router=useRouter()
    return(
        <div onClick={()=>{router.push(`/chatpen/${user}?cs=1&uid=${encodeURIComponent(uid)}`)}} className="flex cursor-pointer items-center px-4 py-2 hover:bg-[#fce3e3]">
            <Image src={profpic} width={50} height={50} alt="profilePicture" className="rounded-full mr-2"/>
            <div>
                <h1 className="text-md font-medium">{orgName}</h1>
                <span className="text-sm text-gray-500">last updated messag</span>
            </div>
        </div>
    )
}
export {NotifyBar}