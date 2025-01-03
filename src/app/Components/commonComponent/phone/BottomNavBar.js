'use client'
import { RiHome5Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { FaRegPlayCircle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
function BottomNavBar() {
  const searchParams = useSearchParams()
  const path=usePathname()
  const router=useRouter()
  const tab=searchParams.get("tab")
  console.log(path);
const user = path.split('/').pop(); // Extracts 'user'
console.log(user); // Output: user

  return (
    <div className="w-[100%] md:hidden block border-t-[1px] border-gray-300 fixed bottom-0">
        <div className="w-[100%] flex relative justify-between  h-[100%] bg-white py-4">
        <main className="w-[45%] flex justify-evenly ">
            <div onClick={()=>{router.push(`/home/user?tab=home`)}} className={`flex w-[40%] flex-col ${tab=="home" || path.includes("home")?"text-[#9A2143] bg-[#e3638860] rounded-lg":""} items-center`}>
            <RiHome5Fill className="text-3xl" />
            <span className="text-[0.8rem]">Home</span>
            </div>
            <div className={`flex w-[40%] flex-col ${path.includes("search")?"text-[#9A2143]  bg-[#e3638860] rounded-lg":""} items-center`}>
            <RiSearch2Line className="text-3xl" />
            <span className="text-[0.8rem]">Search</span>
            </div>
        </main>
        <main className="w-[45%] flex justify-evenly ">
            <div className={`flex w-[40%] flex-col ${tab=="booking"?"text-[#9A2143]  bg-[#e3638860] rounded-lg":""} items-center`}>
            <GoClock className="text-3xl" />
            <span className="text-[0.8rem]">Bookings</span>
            </div>
            <div onClick={()=>{router.push(`/profile/${user}`)}} className={`flex w-[40%] flex-col ${tab=="profile" || path.includes("profile")?"text-[#9A2143]  bg-[#e3638860] rounded-lg":""} items-center`}>
            <GoPerson className="text-3xl" />
            <span className="text-[0.8rem]">Profile</span>
            </div>
        </main>
        <div className="absolute top-[-60%] left-1/2 transform border-2 border-white rounded-full -translate-x-1/2 translate-y-1/2">
          <FaRegPlayCircle className="text-6xl bg-[#9A2143] text-white rounded-full p-4" />
        </div>
        </div>
    </div>
  )
}

export { BottomNavBar }