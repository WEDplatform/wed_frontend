import profilePic from "../../../../public/profile.svg"
import { MdCameraswitch } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import Image from "next/image"

async function page({ params }) {
    let { clientType } = await params
    console.log(clientType);

    return (
        <div className="w-[80%] mt-5 flex justify-between mx-auto">
            <div className="w-[20%] shadow-xl h-[30vh] items-center shadow-gray-200 flex justify-center aspect-square bg-white">
                <div className="w-[10vw] h-[10vw] bg-gray-200 relative rounded-full">
                    <input type="file" className="hidden" />
                    <Image alt="profilePic" style={{ objectFit: "cover" }} src={profilePic} />
                    <MdCameraswitch className="absolute top-[75%] bg-white w-[1.6vw] rounded-full border-2 border-gray-600 h-[1.6vw] p-1 right-[5%]" />
                </div>
            </div>
            <div className="w-[79%] ">
                <div className="h-[30vh] grid rounded-md grid-cols-2 grid-rows-3 shadow-xl shadow-gray-200">
                    {/* <div className="bg-red-300 flex flex-col justify-center pl-3">
                <p>Username</p>
                <h1>Ujjwal</h1>
            </div> */}
                    <p className="mt-2 ml-2 text-sm font-semibold text-gray-500">Your analytics</p>
                </div>
                <div className="min-h-[30vh] bg-gray-300 mt-4">

                </div>
            </div>
        </div>
    )
}

export default page