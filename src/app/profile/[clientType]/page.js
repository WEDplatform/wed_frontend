import profilePic from "../../../../public/profile.svg"
import { MdCameraswitch } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import Image from "next/image"

async function page({ params }) {
    let { clientType } = await params
    console.log(clientType);

    return (
        <div className="md:w-[80%] w-[90%] mt-5 flex md:flex-row flex-col justify-between mx-auto">
            <div className="md:w-[20%] md:shadow-xl h-[30vw] md:h-[31vh] items-center md:shadow-gray-200 flex justify-center aspect-square ">
                <div className="md:w-[10vw] md:h-[10vw] w-[30vw] h-[30vw] relative rounded-full">
                    <input type="file" className="hidden" />
                    <Image alt="profilePic" style={{ objectFit: "cover" }} src={profilePic} />
                    <MdCameraswitch className="absolute top-[75%] bg-white md:w-[1.6vw] w-[7vw] h-[7vw] rounded-full border-2 border-gray-600 md:h-[1.6vw] p-1 right-[5%]" />
                </div>
            </div>
            <div className="md:w-[79%] w-[100%] mt-4 md:mt-0 ">
                <div className="h-[30vh] rounded-md shadow-xl shadow-gray-200">
                    {/* <div className="bg-red-300 flex flex-col justify-center pl-3">
                <p>Username</p>
                <h1>Ujjwal</h1>
            </div> */}
                    <p className="mt-2 ml-2 text-sm font-semibold text-gray-500">Your analytics</p>
                    <main className="w-[100%] h-[80%] flex justify-center items-center">
                        Nothing to display
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
    )
}

export default page