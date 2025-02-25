import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost, VideoPost } from "./PostStructure"
import { StorySection } from "../stories/StorySection"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { ImageSWR } from "../desktop/ImagePostSWR"
import { PostSWR } from "../phone/PostSWR"
import { VideoSWR } from "../desktop/ReelPostSWR"
async function Posts({id_}) {
  return (
    <>
      <div className="md:w-[95%] md:pt-2 hidden md:block  w-[100%] h-[90%] md:h-[73vh] md:ml-4">
        <div className="w-[100%] h-[100%] flex justify-between">
          <ImageSWR />
          <VideoSWR/>
        </div>
      </div>
      {/* below code segment for mobile posts and reels */}
      <div id="MobilePost" className="w-[100%] md:hidden mt-2">
        <PostSWR id_={id_}/>
        
      </div>
    </>
  )
}
export { Posts }