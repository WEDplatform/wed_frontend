const ImagePost = () =>{
    return(
        <>
        <div className="aspect-[4/3] md:col-span-2 w-[100%] bg-red-200">
            Photo post 
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