import React from 'react'
import { NavigatorList } from './sidebarcontent'
import Image from 'next/image'
import GoogleLogo from "../../../../../public/google-icon.svg"
import ICO from "@/app/favicon.ico"
import { logout } from '@/app/apiFunctions/logout'
import { LogoutButton } from '../logoutButton'
function SideBarMain() {
  const logoutClient=async()=>{
    await logout()
  }
  return (
    <div className='w-[100%] h-[75%] flex flex-col justify-between mt-[15vh]'>
        <div>
            {
               NavigatorList.map((item,pos)=>{
                return (
                  <div className='ml-4 py-2 flex items-center gap-2 ' key={pos}>
                    <span className='text-[1.2rem]'>{item.icon}</span>
                    <p className='font-medium text-gray-500 text-[1rem]'>{item.tag}</p>
                  </div>
                )
               }) 
            } 
            <LogoutButton/>
        </div>
        <div className='flex items-center m-4'>
            <Image className='mr-2' alt='profile' src={ICO} width={30} height={30} />
            <p>Profile</p>
        </div>
    </div>
  )
}

export { SideBarMain }