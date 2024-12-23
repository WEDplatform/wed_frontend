import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost } from "./PostStructure"
function Posts() {
  //getVideoUrl("Wedding")
  return (
    <div className="md:w-[50vw] w-[100%] h-[90%] border-2 md:ml-4">
        <ImagePost/>
    </div>
  )
}

export { Posts }