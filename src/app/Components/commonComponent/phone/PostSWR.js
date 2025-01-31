'use client'
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { ImagePost, VideoPost } from "../Posts/PostStructure"
import { TbLoader2 } from "react-icons/tb";
import { getVideoUrl } from "@/app/apiFunctions/pexel"
import { fetchVendorMediaPosts } from "../vendorProfile/fetchVendorPosts"
import { fetchPosts, fetchReels } from "@/app/apiFunctions/fetchPosts"
const PostSWR = ({ id_ }) => {
    const [index, setIndex] = useState(1);
    const [hasMoreTrack, setTrack] = useState(true);
    const [imageData, setData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    let [mobileMedia,setMedia]=useState({
        index:0,
        media:[]
    })
    const fetchImageData = async () => {
        if (imageData.length >= 6) return
        console.log("called");
        try {
            let video = await getVideoUrl("Wedding", 1)
            setVideoData(video)
            let image_data = await getImageUrl("indian wedding", index)
            setData((prev) => [...prev, ...image_data])
            setIndex((prev) => prev + 1);

        } catch (error) {
            console.log(error);
        }
    }
    let fetchVendorMedia=async()=>{
        function shuffleArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            }
            return arr;
          }
        let picResponse=await fetchPosts(mobileMedia.index,2);
        let reelResponse=await fetchReels(mobileMedia.index,1);
        let pseudoArray=[...picResponse?.pics,...reelResponse?.reels];
        //console.log(shuffleArray(pseudoArray));
        setMedia((prev)=>({
            index:prev.index+1,
            media:[...prev.media,...shuffleArray(pseudoArray)]
        }))
    }
    useEffect(()=>{
        console.log(mobileMedia);
        
    },[mobileMedia])
    useEffect(() => {
        fetchVendorMedia()
    }, []);
    return (
        <>
            <InfiniteScroll
                dataLength={mobileMedia?.media?.length}
                next={fetchVendorMedia}
                loader={<h1>Loading</h1>}
                scrollableTarget={id_}
                hasMore={hasMoreTrack}
                scrollThreshold={0.9}
                endMessage={
                    <div style={{ textAlign: 'center',
                       
                     }}>
                       Yay! you completed!!
                    </div>
                }
            >
                {/* {
                    imageData.map((item, pos) => <ImagePost key={pos} images={item} />)
                }
                {
                    videoData?.map((item, pos) =>
                        <VideoPost videoPostLength={videoData || null} key={pos} videoItem={item} />
                    )
                } */}
                {
                    mobileMedia?.media?.map((item,pos)=>
                    item.p_type=='reel' ? <VideoPost videoItem={item} key={pos}/> : <ImagePost key={pos} images={item}/>
                    )
                }
            </InfiniteScroll>
        </>
    )

}
export { PostSWR }