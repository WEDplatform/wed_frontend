import { FiBell } from "react-icons/fi";
import profpic from "../../../../../public/profPic.png"
import { NotifyBar } from "./notifyBar";
const SideWindow = ({user}) => {
    const vendors=[
        {
            name:"Rajneesh phtography"
        },
        {
            name:"Altora pics"
        },
        {
            name:"The cuisines"
        },
        {
            name:"Wedora"
        }
    ]
    return (
        <div className="md:w-[30%] bg-[#f9efef] w-[100%] flex flex-col items-center border-2 h-[100%]">
            <div className=" py-3 w-[90%] border-b-2 flex justify-between items-center">
                <span className="text-xl font-semibold text-[#C94C73]">Chats</span>
                <span className="text-xl">
                    <FiBell />
                </span>
            </div>
            <div className="mt-2 w-[100%] overflow-auto">
                {
                    vendors.map((item,pos)=>
                    <NotifyBar orgName={item.name} user={user} key={pos}/>
                    )
                }
            </div>
        </div>
    )
}
export { SideWindow }