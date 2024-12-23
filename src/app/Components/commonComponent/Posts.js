import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost,VideoPost } from "./PostStructure"
function Posts() {
  //getVideoUrl("Wedding")
  return (
    <div className="md:w-[50vw] preferenceList grid md:gap-2 grid-cols-1 overflow-y-auto gap-1 md:grid-cols-4 grid-flow-row w-[100%] h-[80%] border-2 md:ml-4">
        <ImagePost/>
        {/* <ImagePost/>
        <ImagePost/>
        <VideoPost/>
        <VideoPost/>
        <ImagePost/> */}
    </div>
  )
}

export { Posts }