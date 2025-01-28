import { useState } from "react";
const SelectPostPage=()=>{
    let [postIndex,setIndex]=useState('post')
    return (
        <div className="w-[80%] mx-auto flex justify-center mt-6 ">
            <button onClick={()=>setIndex('post')} className={`px-7 font-semibold ${postIndex=='post'?'bg-[#e9ced68e] text-[#9A2143]':""} py-2 `}>Posts</button>
            <button onClick={()=>setIndex('reels')} className={`px-7 font-semibold ${postIndex=='reels'?'bg-[#e9ced68e] text-[#9A2143]':""} py-2`}>Reels</button>
        </div>
    )
}
export {SelectPostPage}