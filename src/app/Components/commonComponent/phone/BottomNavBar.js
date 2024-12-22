import { RiHome5Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { GoPerson } from "react-icons/go";
function BottomNavBar() {
  return (
    <div className="w-[100%] md:hidden block border-t-[1px] border-gray-300 fixed bottom-0">
        <div className="w-[100%] flex justify-between  h-[100%] bg-white py-4">
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
        </div>
    </div>
  )
}

export { BottomNavBar }