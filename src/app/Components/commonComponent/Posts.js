import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost, VideoPost } from "./PostStructure"
import { StorySection } from "./StorySection"
import { getImageUrl } from "@/app/apiFunctions/pexel"
function Posts() {
  let rnd = Math.floor((Math.random() * 10) + 1)
  console.log(rnd);
  //getVideoUrl("Wedding")
  //getImageUrl("Wedding")
  //getVideoUrl("Wedding")
  return (
    <>
      <div className="md:w-[95%] md:pt-2 hidden md:block  border-2 w-[100%] h-[90%] md:h-[73vh] md:ml-4">
        <div className="w-[100%] h-[100%] flex">
          <main className="w-[65%] preferenceList h-[100%] border-2 overflow-y-auto">
            <ImagePost />
            <ImagePost />
          </main>
          <main className="w-[35%] preferenceList h-[100%] border-2 overflow-y-auto">
            <VideoPost />
          </main>
        </div>



      </div>
      <div className="w-[100%] md:hidden mt-2">
        {
          new Array(5).fill(0).map((_, pos) => pos % rnd === 0 ? <ImagePost key={pos} pageIndex={pos} /> : <VideoPost key={pos} pageIndex={pos} />)
        }
      </div>
    </>
  )
}

export { Posts }