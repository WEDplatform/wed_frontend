'use client'
import { ImagePost } from "../Posts/PostStructure"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { fetchPosts } from "@/app/apiFunctions/fetchPosts"

const ImageSWR = ({ data }) => {
    const [hasMoreTrack,setTrack]=useState(true);
    const [VideoData, setVideoData] = useState([]);
    const [postsTracker,setTracker]=useState({
        postData:[],
        pageIndex:0
    })
    const fetchVendorPosts=async()=>{
        let postsResponse=await fetchPosts(postsTracker.pageIndex,3)
        console.log(postsResponse);
        
        if(!postsResponse?.hasMore){
            setTrack(false);
            return
        }else{
            setTracker((prevState) => ({
                ...prevState,
                postData: [...prevState.postData, ...postsResponse?.pics], // Append new data to the existing array
                pageIndex: prevState.pageIndex + 1,           // Increment the pageIndex
            }));
        }
    }
    useEffect(() => {
        fetchVendorPosts()
        // fetchImageData();
      }, []);
    return (<>
        <main id="ImagePost" className="w-[54%] preferenceList max-h-[100%] overflow-y-auto">
            <InfiniteScroll
                dataLength={postsTracker?.postData?.length}
                next={fetchVendorPosts}
                loader={<h1 style={{ textAlign: 'center'}}>Loading</h1>}
                scrollableTarget="ImagePost"
                hasMore={hasMoreTrack}
                scrollThreshold={0.9}
                endMessage={
                    <p style={{ textAlign: 'center',width:"100%" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
            >
                {
                    postsTracker?.postData?.map((item, pos) => <ImagePost key={pos} images={item}  />)
                }
            </InfiniteScroll>
        </main>
    </>)
}
export { ImageSWR }