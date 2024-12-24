import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost,VideoPost } from "./PostStructure"
import { StorySection } from "./StorySection"
import { getImageUrl } from "@/app/apiFunctions/pexel"
function Posts() {
  getImageUrl("Wedding")
  //getVideoUrl("Wedding")
  return (
    <>
      <div className="md:w-[70vw] pt-2 preferenceList grid md:gap-2 grid-cols-1 overflow-y-auto gap-1 auto-rows-min md:grid-cols-8 w-[100%] h-[70%] md:h-[80%] md:ml-4">
        
        {
          new Array(5).fill(0).map((_,pos)=><ImagePost pageIndex={pos+1}/>)
        }
    </div>
    </>
  )
}

export { Posts }