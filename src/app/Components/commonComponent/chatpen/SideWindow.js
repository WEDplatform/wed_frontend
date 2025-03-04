import { TbNotification } from "react-icons/tb";
import { FiBell } from "react-icons/fi";

const SideWindow=()=>{
    return(
        <div className="md:w-[30%] w-[100%] border-2 h-[100%]">
            <div className="px-4 py-3 flex justify-between">
                <span>Chats</span>
                <span>
                    <FiBell/>
                </span>
            </div>
        </div>
    )
}
export {SideWindow}