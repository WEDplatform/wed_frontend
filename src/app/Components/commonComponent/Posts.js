import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost } from "./PostStructure"
function Posts() {
  //getVideoUrl("Wedding")
  return (
    <div className="md:w-[50vw] preferenceList grid md:gap-2 grid-cols-1 overflow-y-auto md:grid-cols-2 grid-flow-row w-[100%] h-[90%] border-2 md:ml-4">
        <ImagePost/>
        <ImagePost/>
    </div>
  )
}

export { Posts }