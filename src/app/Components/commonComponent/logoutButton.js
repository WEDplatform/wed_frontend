"use client"
import { logout } from "@/app/apiFunctions/logout"
import { TbLogout2 } from "react-icons/tb"
function LogoutButton() {
  return (
     <button onClick={logout} className='flex ml-4 bg-[#C94C73] text-white py-2 px-4 rounded-lg mt-4 items-center'><TbLogout2 className='mr-2'/>Logout</button>
    
  )
}

export { LogoutButton }