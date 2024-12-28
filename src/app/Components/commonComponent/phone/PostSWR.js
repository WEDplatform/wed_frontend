'use client'
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { ImagePost, VideoPost } from "../PostStructure"
import { TbLoader2 } from "react-icons/tb";
const PostSWR = ({ id_ }) => {
    const [index, setIndex] = useState(1);
    const [hasMoreTrack, setTrack] = useState(true);
    const [imageData, setData] = useState([]);
    const fetchImageData = async () => {
        if (imageData.length >= 6) return
        console.log("called");

        try {
            let image_data = await getImageUrl("Wedding", index)
            setData((prev) => [...prev, ...image_data])
            setIndex((prev) => prev + 1);
            //console.log(image_data);

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        console.log(imageData);

        if (imageData.length >= 6) {
            setTrack(false)
        }

    }, [imageData])
    useEffect(() => {
        fetchImageData();
    }, []);
    return (
        <>
            <InfiniteScroll
                dataLength={imageData.length}
                next={fetchImageData}
                loader={<h1>Loading</h1>}
                scrollableTarget={id_}
                hasMore={hasMoreTrack}
                scrollThreshold={0.6}
                endMessage={
                    <div style={{ textAlign: 'center',
                       
                     }}>
                       Yay! you completed!!
                    </div>
                }
            >
                {
                    imageData.map((item, pos) => <ImagePost key={pos} images={item} />)
                }
                {/* <VideoPost/> */}
            </InfiniteScroll>
        </>
    )

}
export { PostSWR }