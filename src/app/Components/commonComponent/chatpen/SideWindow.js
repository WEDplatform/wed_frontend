'use client'
import { FiBell } from "react-icons/fi";
import profpic from "../../../../../public/profPic.png"
import { NotifyBar } from "./notifyBar";
import { useMutation } from "@tanstack/react-query";
import { getSbscribers } from "@/app/apiFunctions/getSbscribers";
import { useEffect,useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";
const SideWindow = ({ user }) => {
   
    const vendors = [
        {
            name: "Rajneesh phtography"
        },
        {
            name: "Altora pics"
        },
        {
            name: "The cuisines"
        },
        {
            name: "Wedora"
        }
    ]
    const { mutate: getSubMutate, data: getSubData, isPending: getSubPending, isError: getSubError } = useMutation({
        mutationFn: getSbscribers
    })
    useEffect(() => {
        getSubMutate(user)
    }, [user])
    return (
        <div className="md:w-[30%] bg-[#f9efef] w-[100%] flex flex-col items-center border-2 h-[100%]">
            <div className=" py-3 w-[90%] border-b-2 flex justify-between items-center">
                <span className="text-xl font-semibold text-[#C94C73]">Chats</span>
                <span className="text-xl">
                    <FiBell />
                </span>
            </div>
            {
                getSubPending && <div className="md:w-[100%] w-[100%] py-4 flex items-center justify-center">
                    <LuLoaderCircle className="animate-spin text-[30px]" />
                </div>
            }
              {
                user == 'user' && getSubData ? <div className="mt-2 w-[100%] overflow-auto">
                    {
                        getSubData?.data?.map((item, pos) =>
                            <NotifyBar orgName={item.roomName} uid={item.subscriber.uuid} user={user} key={pos} />
                        )
                    }
                </div> : <></>
            }
          
        </div>
    )
}
export { SideWindow }