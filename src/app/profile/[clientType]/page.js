import profilePic from "../../../../public/profile.svg"
import { MdCameraswitch } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import Image from "next/image"
import { LoginStat } from "@/app/Components/commonComponent/loginStats/LoginStat";
import { profileFetch } from "@/app/apiFunctions/profile";
import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar";
async function page({ params }) {
    const prf=await profileFetch()
    //console.log(prf?.data?.loginCounts);
    let { clientType } = await params

    return (
        <>
        <div className="md:w-[80%] h-[100vh] md:h-[100vh] w-[90%] mt-5 flex md:flex-row flex-col md:justify-between mx-auto">
            <div className="md:w-[20%] md:shadow-xl  h-[30vw] md:h-[31vh] items-center md:shadow-gray-200 flex justify-center aspect-square ">
                <div className="md:w-[10vw] md:h-[10vw] w-[30vw] h-[30vw]  relative rounded-full">
                    <input type="file" className="hidden" />
                    <Image alt="profilePic" style={{ objectFit: "cover" }} src={profilePic} />
                    <MdCameraswitch className="absolute top-[75%] bg-white md:w-[1.6vw] w-[7vw] h-[7vw] rounded-full border-2 border-gray-600 md:h-[1.6vw] p-1 right-[5%]" />
                </div>
            </div>
            <div className="md:w-[79%] w-[100%] mt-4 md:mt-0">
                <div className="md:h-[40vh] h-[30vh] rounded-md shadow-xl shadow-gray-200">
                    
                    <p className="mt-2 ml-2 text-sm font-semibold text-gray-500">Your analytics</p>
                    <main className="w-[100%] h-[80%] md:h-[80%] mt-4 pr-4 flex justify-center items-center">
                        <LoginStat lgs={prf?.data?.loginCounts}/>
                    </main>
                </div>
                <div className="min-h-[30vh] mt-6 shadow-xl shadow-gray-200">
                    <div>
                        <p className="mt-6 ml-2 text-sm font-semibold text-gray-500">Events hosted</p>
                        <main className="w-[100%] h-[20vh] flex justify-center items-center">
                            Nothing to display
                        </main>
                    </div>
                </div>
            </div>
        </div>
        <BottomNavBar/>
        </>
    )
}

export default page