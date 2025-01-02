
'use client'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
function FollowButton() {
  return (
    <button className="bg-[#9A2143] text-white px-3 rounded-lg text-sm py-1">Follow</button>
  )
}
function BackButton(){
    const router = useRouter();
    return (
        <IoMdArrowRoundBack onClick={()=>{router.back()}}/>
    )
}
export { FollowButton,BackButton}