'use client'
const { IoMdArrowRoundBack } = require("react-icons/io")
import { useRouter } from "next/navigation"
const Back = () => {
    const router = useRouter();
    return (
        <button className="flex items-center py-2 bg-red-200 justify-center" onClick={()=>{router.back()}}><IoMdArrowRoundBack/>{" "}<span className="ml-2">Back</span></button>
    )
}
export {Back}