'use client'
const { IoMdArrowRoundBack } = require("react-icons/io")
import { useRouter } from "next/navigation"
const Back = () => {
    const router = useRouter();
    return (
        <button className="flex items-center py-2 text-[14px] font-semibold text-gray-400 justify-center" onClick={()=>{router.back()}}><IoMdArrowRoundBack/>{" "}<span className="ml-2">Back</span></button>
    )
}
export {Back}