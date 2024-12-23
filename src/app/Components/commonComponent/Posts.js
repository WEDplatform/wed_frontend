import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost,VideoPost } from "./PostStructure"
function Posts() {
  //getVideoUrl("Wedding")
  return (
    <div className="md:w-[50vw] preferenceList grid md:gap-2 grid-cols-1 overflow-y-auto md:grid-cols-4 grid-flow-row w-[100%] h-[90%] border-2 md:ml-4">
        <ImagePost/>
        <ImagePost/>
        <ImagePost/>
        {/* <VideoPost/> */}
    </div>
  )
}

export { Posts }