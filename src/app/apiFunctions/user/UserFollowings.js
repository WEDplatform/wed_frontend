'use client'
import { CoupleLiked, VendorLiked } from "@/app/Components/userComponent/UserLikedFollowed";
import { useState } from "react"
const UserFollowStat=({userData})=>{
    console.log(userData);
    
    const [userView,setView]=useState('likes')
    return(
        <>
        <div className="flex md:w-[80%]  w-[95%] mt-3 mx-auto justify-center">
                    <button onClick={()=>{setView("likes")}} className={`px-2 py-1 ${userView=="likes" ? "bg-gray-300":""}`}>Liked</button>
                    <button onClick={()=>{setView("follows")}} className={`px-2 py-1 ${userView=="follows" ? "bg-gray-300":""}`}>Folowed</button>
                    <button onClick={()=>{setView("saved")}} className={`px-2 py-1 ${userView=="saved" ? "bg-gray-300":""}`}>Saved</button>
                    <button onClick={()=>{setView("ideas")}} className={`px-2 py-1 ${userView=="ideas" ? "bg-gray-300":""}`}>Ideas</button>

        </div>
        {
            userView=="likes" && <div className="grid mt-3 md:w-[80%] w-[90%] pb-[13vh]  mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {
                    userData[0]?.items.map((item,pos)=>
                    <VendorLiked isFollowed={false} key={pos} dt={item}/>
                    )
                }
                {
                    userData[1]?.items.map((item,pos)=>
                    <CoupleLiked key={pos} dt={item}/>
                    )
                }
            </div>
        }
        {
            userView =="follows" && <div className="grid mt-3 md:w-[80%] w-[90%] pb-[12vh]  mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {
                    userData[2]?.items.map((item,pos)=>
                    <VendorLiked isFollowed={true} key={pos} dt={item}/>
                    )
                }
                
            </div>
        }
        </>
    )
}
export {UserFollowStat}