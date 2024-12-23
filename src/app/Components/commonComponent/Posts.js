import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost,VideoPost } from "./PostStructure"
function Posts() {
  //getVideoUrl("Wedding")
  return (
    <div className="md:w-[70vw] preferenceList grid md:gap-2 grid-cols-1 overflow-y-auto gap-1 auto-rows-min md:grid-cols-8 w-[100%] h-[70%] md:h-[80%] border-2 md:ml-4">
        <ImagePost/>
        {/* <ImagePost/>
        <ImagePost/>
        <VideoPost/>
        <VideoPost/>
        <ImagePost/> */}
        <VideoPost/>
        <VideoPost/>
        <ImagePost/>
        <ImagePost/>
        <VideoPost/>
        <ImagePost/>
        <VideoPost/>
        <ImagePost/>
    </div>
  )
}

export { Posts }