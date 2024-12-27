'use client'
import { useInView } from "react-intersection-observer"
import { ImagePost } from "../PostStructure"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
const ImageSWR = ({ data }) => {
    const [index, setIndex] = useState(1);
    const [hasMoreTrack,setTrack]=useState(false);
    const [imageData,setData]=useState([]);
    const fetchImageData = async () => {
        console.log("called");
        
        try {
            await getImageUrl("Wedding", index)
        } catch (error) {
            console.log(error);

        }
    }

    return (<>
        <main id="ImagePost" className="w-[64%] preferenceList h-[100%] overflow-y-auto">

            <InfiniteScroll
                dataLength={2}
                next={fetchImageData}
                loader={<h1>Loading</h1>}
                scrollableTarget="ImagePost"
                hasMore={true}
                scrollThreshold={1}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
            >
                {
                    new Array(2).fill(0).map((_, pos) => <ImagePost key={pos} pageIndex={pos + 1} />)
                }
            </InfiniteScroll>
        </main>
    </>)
}
export { ImageSWR }