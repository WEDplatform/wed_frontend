'use client'
import { useInView } from "react-intersection-observer"
import { ImagePost } from "../PostStructure"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
const ImageSWR = ({ data }) => {
    const [index, setIndex] = useState(1);
    const [hasMoreTrack,setTrack]=useState(true);
    const [imageData,setData]=useState([]);
    const fetchImageData = async () => {
        if(imageData.length>=6) return
        console.log("called");
        
        try {
            let image_data=await getImageUrl("Wedding",1)
            setData((prev)=>[...prev,...image_data])
            setIndex((prev)=>prev+1);
            //console.log(image_data);
            
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(()=>{
        console.log(imageData);
        
        if(imageData.length>=6){
            setTrack(false)
        }

    },[imageData])
    useEffect(() => {
        fetchImageData();
      }, []);
    return (<>
        <main id="ImagePost" className="w-[54%] border-2 preferenceList max-h-[100%] overflow-y-auto">

            <InfiniteScroll
                dataLength={imageData.length}
                next={fetchImageData}
                loader={<h1>Loading</h1>}
                scrollableTarget="ImagePost"
                hasMore={hasMoreTrack}
                scrollThreshold={0.6}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
            >
                {
                    imageData.map((item, pos) => <ImagePost key={pos} images={item}  />)
                }
            </InfiniteScroll>
        </main>
    </>)
}
export { ImageSWR }