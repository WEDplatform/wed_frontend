'use client'
import { useInView } from "react-intersection-observer"
import { ImagePost } from "../PostStructure"
import { getImageUrl } from "@/app/apiFunctions/pexel"
const ImageSWR = ({data}) =>{
    const fetchImageData = async () => {
        try {
            await getImageUrl("Wedding",1)
        } catch (error) {
            
        }
    }
    const {} = useInView()
    return (<>
    <main id="ImagePost" className="w-[64%] preferenceList h-[100%] overflow-y-auto">
          {
              new Array(2).fill(0).map((_, pos) =><ImagePost key={pos} pageIndex={pos+1} />)
            }
          </main>
    </>)
}
export { ImageSWR }