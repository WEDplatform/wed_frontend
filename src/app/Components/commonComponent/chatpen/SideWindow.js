import { FiBell } from "react-icons/fi";
import profpic from "../../../../../public/profPic.png"
import { NotifyBar } from "./notifyBar";
const SideWindow = ({user}) => {
    return (
        <div className="md:w-[30%] w-[100%] flex flex-col items-center border-2 h-[100%]">
            <div className=" py-3 w-[90%] border-b-2 flex justify-between items-center">
                <span className="text-xl font-semibold">Chats</span>
                <span className="text-xl">
                    <FiBell />
                </span>
            </div>
            <div className="mt-2 w-[100%] overflow-auto">
                {
                    new Array(4).fill(0).map((item,pos)=>
                    <NotifyBar user={user} key={pos}/>
                    )
                }
            </div>
        </div>
    )
}
export { SideWindow }