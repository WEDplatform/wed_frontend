'use client'

import { MdEventNote } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAppSettingsAlt } from "react-icons/md";
import Link from 'next/link';
import { IoPersonRemove } from "react-icons/io5";
const NavigationPanel = () => {
    const navigators = [{
        icon : <IoPersonRemove/>,
        info : "Posts",
        node : 1
    },{
        icon : <LuLayoutDashboard/>,
        info : "Reels",
        node : 2
    },{
        icon : <MdAppSettingsAlt/>,
        info : "Stories",
        node : 3
    },{
        icon : <MdEventNote/>,
        info : "Add event",
        node : 4
    }
]
    return (
        <div className="flex w-[80%] justify-around">
            {
                navigators.map((item,pos)=>{
                    return <button key={pos} className={`flex items-center py-2 justify-center w-[24%]`}>
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.info}</span>
                    </button>
                })
            }
        </div>
    )
}
export { NavigationPanel }