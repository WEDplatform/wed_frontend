import { TbNotification } from "react-icons/tb";

const SideWindow=()=>{
    return(
        <div className="md:w-[30%] w-[100%] border-2 h-[100%]">
            <div className="px-1 py-2 flex justify-between">
                <span>Chats</span>
                <span>
                    <TbNotification/>
                </span>
            </div>
        </div>
    )
}
export {SideWindow}