import Image from "next/image"
import profile from "../../../../public/profile.svg"
import { MdCameraswitch } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
function Profile() {
  return (
    <div className="w-[90%] md:overflow-y-auto h-[100vh]  md:h-[95%] flex flex-col items-center">
      <div className="w-[100%] flex justify-end text-xl">
          <MdNotificationsActive className="mr-2 hover:text-[#9d3b5a]"/>
          <RiMessage3Fill className="mr-2 hover:text-[#9d3b5a]"/>
      </div>
        <div className="w-[10vw] h-[10vw] bg-gray-200 relative rounded-full">
            <input type="file" className="hidden"/>
            <Image alt="profilePic" style={{objectFit:"cover"}} src={profile} />
            <MdCameraswitch className="absolute top-[75%] bg-white w-[1.6vw] rounded-full border-2 border-gray-600 h-[1.6vw] p-1 right-[5%]"/>
        </div>

    </div>
  )
}
export { Profile }