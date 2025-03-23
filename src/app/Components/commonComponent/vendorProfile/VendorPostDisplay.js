import { useEffect, useState } from "react";
import { VendorPostsGrid } from "./VendorPostsGrid";
import { fetchReels } from "@/app/apiFunctions/fetchPosts";
import { fetchPosts } from "@/app/apiFunctions/fetchPosts";
import { fetchVendorMediaPosts, fetchVendorMediaReels } from "./fetchVendorPosts";
import { VendorReelGrid } from "./VendorReelDisplay";
const SelectPostPage=({id,vendorName,dataSet})=>{
    let [postIndex,setIndex]=useState('post')
    let [vendorMediaData,setData]=useState({
        postsData:[...dataSet],
        reelData:[],
        postIndex:0,
        reelIndex:0,
        hasMorePost:true,
        hasMoreReel:true
    })
    const fetchVendorPosts=async()=>{
        let postsResponse=await fetchVendorMediaPosts(vendorMediaData.postIndex,6,vendorName)
        console.log(postsResponse);
        if(!postsResponse?.hasMore){
            setData((prev)=>({...prev,hasMorePost:false}));
            return
        }else{
            setData((prevState) => ({
                ...prevState,
                postsData: [...prevState.postsData, ...postsResponse?.pics], // Append new data to the existing array
                postIndex: prevState.postIndex + 1,           // Increment the pageIndex
            }));
        }
    }
    const fetchVendorReels=async()=>{
        // let postsResponse=await fetchVendorMediaReels(vendorMediaData.reelIndex,6,vendorName)
        // console.log(postsResponse);
        
        // if(!postsResponse?.hasMore){
        //     setData((prev)=>({...prev,hasMoreReel:false}));
        //     return
        // }else{
        //     setData((prevState) => ({
        //         ...prevState,
        //         reelData: [...prevState.reelData, ...postsResponse?.reels], // Append new data to the existing array
        //         reelIndex: prevState.reelIndex + 1,           // Increment the pageIndex
        //     }));
        // }
    }
    // useEffect(()=>{
    //     fetchVendorPosts()
    //     fetchVendorReels()
    // },[])
    return (
        <>
        <div className="md:w-[80%] w-[100%] mx-auto flex justify-center mt-6 ">
            <button onClick={()=>setIndex('post')} className={`px-7 font-semibold ${postIndex=='post'?'bg-[#e9ced68e] text-[#9A2143]':""} py-2 `}>Posts</button>
            <button onClick={()=>setIndex('reels')} className={`px-7 font-semibold ${postIndex=='reels'?'bg-[#e9ced68e] text-[#9A2143]':""} py-2`}>Reels</button>
        </div>
        {
            postIndex=='post' && <VendorPostsGrid id={id} vendorMediaData={vendorMediaData} fetchVendorPosts={fetchVendorPosts} setData={setData}/>
        }
        {
            postIndex=='reels' && <VendorReelGrid id={id} vendorMediaData={vendorMediaData} fetchVendorReels={fetchVendorReels} setData={setData} />
        }
        </>
    )
}
export {SelectPostPage}