import { RiHome5Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { FaRegPlayCircle } from "react-icons/fa";
function BottomNavBar() {
  return (
    <div className="w-[100%] md:hidden block border-t-[1px] border-gray-300 fixed bottom-0">
        <div className="w-[100%] flex relative justify-between  h-[100%] bg-white py-4">
        <main className="w-[45%] flex justify-evenly ">
            <div className="flex flex-col items-center">
            <RiHome5Fill className="text-3xl" />
            <span className="text-[0.8rem]">Home</span>
            </div>
            <div className="flex flex-col items-center">
            <RiSearch2Line className="text-3xl" />
            <span className="text-[0.8rem]">Search</span>
            </div>
        </main>
        <main className="w-[45%] flex justify-evenly ">
            <div className="flex flex-col items-center">
            <GoClock className="text-3xl" />
            <span className="text-[0.8rem]">Clock</span>
            </div>
            <div className="flex flex-col items-center">
            <GoPerson className="text-3xl" />
            <span className="text-[0.8rem]">Profile</span>
            </div>
        </main>
        <div className="absolute top-[-60%] left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <FaRegPlayCircle className="text-6xl bg-[#9A2143] text-white rounded-full p-4" />
        </div>
        </div>
    </div>
  )
}

export { BottomNavBar }