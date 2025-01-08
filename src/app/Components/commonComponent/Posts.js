import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { ImagePost, VideoPost } from "./PostStructure"
import { StorySection } from "./StorySection"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { ImageSWR } from "./desktop/ImagePostSWR"
import { PostSWR } from "./phone/PostSWR"
async function Posts({id_}) {
  let rnd = Math.floor((Math.random() * 10) + 1)
  const imageResponse=await getImageUrl("Wedding",1)
  //console.log(imageResponse);
  const videoData=await getVideoUrl()
  return (
    <>
      <div className="md:w-[95%] md:pt-2 hidden md:block  w-[100%] h-[90%] md:h-[73vh] md:ml-4">
        <div className="w-[100%] h-[100%] flex justify-between">
          {/* <main id="ImagePost" className="w-[64%] preferenceList h-[100%] overflow-y-auto">
          {
              new Array(2).fill(0).map((_, pos) =><ImagePost key={pos} pageIndex={pos+1} />)
            }
          </main> */}
          <ImageSWR />
          {/* <VideoPost/> */}
          <main id="VideoPost" className="w-[45%] preferenceList h-[100%] overflow-y-auto">
            {
              videoData?.map((item,pos)=>
              <VideoPost videoPostLength={videoData || null} key={pos} videoItem={item}/>
              )
            }

          </main>
        </div>
      </div>
      <div id="MobilePost" className="w-[100%] md:hidden mt-2">
        <PostSWR id_={id_}/>
        {/* {
          new Array(5).fill(0).map((_, pos) => pos % rnd === 0 ? <ImagePost key={pos} pageIndex={pos+1} /> : <VideoPost key={pos} pageIndex={pos} />)
        } */}
      </div>
    </>
  )
}

export { Posts }