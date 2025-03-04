import { FiBell } from "react-icons/fi";
const SideWindow=()=>{
    return(
        <div className="md:w-[30%] w-[100%] flex flex-col items-center border-2 h-[100%]">
            <div className=" py-3 w-[90%] border-b-2 flex justify-between items-center">
                <span className="text-xl font-semibold">Chats</span>
                <span className="text-xl">
                    <FiBell/>
                </span>
            </div>

        </div>
    )
}
export {SideWindow}