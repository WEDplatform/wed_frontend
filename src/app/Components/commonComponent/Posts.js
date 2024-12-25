import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost,VideoPost } from "./PostStructure"
import { StorySection } from "./StorySection"
import { getImageUrl } from "@/app/apiFunctions/pexel"
function Posts() { 
  let rnd=Math.floor((Math.random() * 10) + 1)
  console.log(rnd);
  //getVideoUrl("Wedding")
  //getImageUrl("Wedding")
  //getVideoUrl("Wedding")
  return (
    <>
      <div className="md:w-[97%] pt-2 preferenceList grid md:gap-2 grid-cols-1 overflow-y-auto gap-1 auto-rows-min md:grid-cols-6 w-[100%] h-[70%] md:h-[80%] md:ml-4">
        
        {
          new Array(5).fill(0).map((_,pos)=>pos%rnd===0?<ImagePost key={pos} pageIndex={pos}/>:<VideoPost key={pos} pageIndex={pos}/>)
        }
    </div>
    </>
  )
}

export { Posts }