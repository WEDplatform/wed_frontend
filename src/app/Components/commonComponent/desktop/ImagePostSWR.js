'use client'
import { useInView } from "react-intersection-observer"
import { ImagePost } from "../Posts/PostStructure"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { fetchPosts } from "@/app/apiFunctions/fetchPosts"

const ImageSWR = ({ data }) => {

    const [index, setIndex] = useState(1);
    const [hasMoreTrack,setTrack]=useState(true);
    const [imageData,setData]=useState([]);
    const [VideoData, setVideoData] = useState([]);
    const [postsTracker,setTracker]=useState({
        postData:[],
        pageIndex:1
    })
    const fetchVendorPosts=async()=>{
        let postsResponse=await fetchPosts(postsTracker.pageIndex)
        console.log(postsResponse);
        
        if(postsResponse?.length==64){
            setTrack(false);
            return
        }else{
            setTracker((prevState) => ({
                ...prevState,
                postData: postsResponse, // Append new data to the existing array
                pageIndex: prevState.pageIndex + 1,           // Increment the pageIndex
            }));
        }
    }
    const fetchImageData = async () => {
        if(imageData.length>=6) return
       // console.log("called");
        
        try {
            let video=await getVideoUrl("Wedding",1)
            setVideoData(video)
            let image_data=await getImageUrl("indian wedding",1)
            setData((prev)=>[...prev,...image_data])
            setIndex((prev)=>prev+1);
            //console.log(image_data);
            
        } catch (error) {
           // console.log(error);

        }
    }
    // useEffect(()=>{
    //     console.log(imageData);
        
    //     if(imageData.length>=6){
    //         setTrack(false)
    //     }

    // },[imageData])
    useEffect(()=>{
        console.log(postsTracker);
        
    },[postsTracker])
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
                scrollThreshold={0.6}
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