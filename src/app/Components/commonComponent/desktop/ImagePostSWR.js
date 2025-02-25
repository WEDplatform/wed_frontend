'use client'
import { CouplePost, ImagePost } from "../Posts/PostStructure"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { fetchPosts } from "@/app/apiFunctions/fetchPosts"
import { fetchCouple } from "@/app/apiFunctions/couple/fetchCouples"
import { useSearchParams } from "next/navigation"
const ImageSWR = ({ data }) => {
    const searchParam=useSearchParams();
    const [filters, setFilters] = useState([]);   
    const [hasMoreTrack,setTrack]=useState(true); // for posts only
    const [hasMoreCouple,setMoreCouple]=useState(true);
    const [VideoData, setVideoData] = useState([]);
    const [postsTracker,setTracker]=useState({
        postData:[],
        pageIndex:0,
        coupleData:[],
        coupleIndex:0
    })
    const fetchVendorPosts=async()=>{
        function shuffleArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            }
            return arr;
          }
        let pseudoData=[]
        let postsResponse=await fetchPosts(postsTracker.pageIndex,3,filters)
        console.log(postsResponse);
        
        let coupleDataResponse=await fetchCouple(postsTracker.coupleIndex,3)
        pseudoData=shuffleArray([...postsResponse?.pics,...coupleDataResponse?.cposts])
        
        if(!postsResponse?.hasMore || !coupleDataResponse.hasMore){
            setTrack(false);
            return
        }else{
            setTracker((prevState) => ({
                ...prevState,
                postData: filters?.length==0 ? [...prevState.postData,...pseudoData]: [...postsResponse?.pics], // Append new data to the existing array
                pageIndex: prevState.pageIndex + 1,
                coupleIndex:prevState.coupleIndex+1           // Increment the pageIndex
            }));
        }
    }
    useEffect(() => {
        fetchVendorPosts()
        // fetchImageData();
      }, [filters]);
      useEffect(()=>{
console.log(postsTracker.postData);
      },[postsTracker])
      useEffect(()=>{
        const filterValues = searchParam.getAll("filter");
        if(filterValues){
            setFilters(filterValues)
        } // Gets all filter query params as an array
       console.log(filterValues);
       
        // fetchVendorPosts(filterValues)
      },[searchParam])
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
                    postsTracker?.postData?.map((item, pos) =>
                        item.p_type == "couple" ? 
                            <CouplePost key={pos} images={item} />
                         : 
                            <ImagePost key={pos} images={item} />
                      )
                      
                }
            </InfiniteScroll>
        </main>
    </>)
}
export { ImageSWR }