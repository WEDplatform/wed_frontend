'use client'
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { getImageUrl } from "@/app/apiFunctions/pexel"
import { ImagePost } from "../PostStructure"
const PostSWR = ({id_}) =>{
    const [index, setIndex] = useState(1);
    const [hasMoreTrack,setTrack]=useState(true);
    const [imageData,setData]=useState([]);
    const fetchImageData = async () => {
        if(imageData.length>=6) return
        console.log("called");
        
        try {
            let image_data=await getImageUrl("Wedding", index)
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
    return(
        <>
        {
            new Array(5).fill(0).map((_, pos) =>  <ImagePost key={pos} pageIndex={pos+1} />)
          }
        </>
    )

}
export { PostSWR }