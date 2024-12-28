'use client'
import React from 'react'
import { NavigatorList } from './sidebarcontent'
import Image from 'next/image'
import GoogleLogo from "../../../../../public/google-icon.svg"
import ICO from "@/app/favicon.ico"
import { logout } from '@/app/apiFunctions/logout'
import { LogoutButton } from '../logoutButton'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
function SideBarMain({tabParams}) {
  const router=useRouter()
  const srch=useSearchParams()
  const changeURLtab = (val) =>{
    const tabParam=new URLSearchParams(tabParams)
    tabParam.set("tab",val)
    window.history.replaceState(null,``,`?${tabParam.toString()}`)
    
    
  }
  console.log(srch.get("tab"));
  
  return (
    <div className='w-[100%] h-[75%] flex flex-col justify-between mt-[15vh]'>
        <div>
            {
               NavigatorList.map((item,pos)=>{
                return (
                  <div onClick={()=>{router.replace(`/home/user?tab=${item.tag.toLowerCase()}`)}} className={`ml-4 py-2 cursor-pointer flex items-center gap-2 ${item.tag.toLowerCase()==tabParams.tab?"text-[#9A2143] border-l-2 border-[#9A2143] pl-2":"text-gray-500 hover:text-[#C94C73]"}`} key={pos}>
                    <span className='text-[1.2rem]'>{item.icon}</span>
                    <p className='font-medium text-[1rem]'>{item.tag}</p>
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