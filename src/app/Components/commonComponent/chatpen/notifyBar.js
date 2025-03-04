import Image from "next/image"
import profpic from "../../../../../public/profPic.png"
const NotifyBar=()=>{
    return(
        <div>
            <Image src={profpic} width={40} height={40} alt="profilePicture"/>
        </div>
    )
}
export {NotifyBar}