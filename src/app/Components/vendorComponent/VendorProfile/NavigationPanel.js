'use client'

import { MdEventNote } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAppSettingsAlt } from "react-icons/md";
import Link from 'next/link';
import { IoPersonRemove } from "react-icons/io5";
const NavigationPanel = () => {
    const navigators = [{
        icon : "",
        info : "Profile",
        node : 1
    },{
        icon : "",
        info : "Dashboard",
        node : 2
    },{
        icon : "",
        info : "Settings",
        node : 3
    },{
        icon : "",
        info : "Logout",
        node : 4
    }]
    return (
        <div className="flex ">
        </div>
    )
}
export { NavigationPanel }