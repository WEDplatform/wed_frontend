import Image from "next/image"
import ICO from "@/app/favicon.ico"
const ImagePost = () =>{
    return(
        <>
        
        <div className="aspect-[4/3] border-2 border-gray-300 md:col-span-2 w-[100%] ">
            <p className="flex items-center gap-2  py-1 pl-2">
                <Image src={ICO} width={30} height={30}/>
                <span>Username<span>Dubai</span></span>
            </p>
            <div className="w-[100%] h-[100%] rounded-xl bg-red-200">
                Photo post
            </div>
            <div className="bg-white">Likes</div>
        </div>
        </>
    )
}
const VideoPost =()=>{
    return(
        <>
        <div className="aspect-[9/16] md:col-span-1 w-[100%] bg-red-400">
            Video post 
        </div>
        </>
    )
}
export {ImagePost,VideoPost}