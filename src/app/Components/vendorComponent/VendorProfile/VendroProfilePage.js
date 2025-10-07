

const VendorProfileP1 = () => {
    return(
        <div className="w-[100%] flex flex-col justify-evenly items-center">
            <div className="h-[20%] w-[80%] bg-red-200">
                Div1
            </div>
            <button className="w-[80%] py-2 bg-[#9A2143] rounded-md font-semibold text-white">Edit profile</button>
            <div className="h-[60%] w-[80%]">
            Calender
            </div>
        </div>
    )
}
const VendorProfileP2 = () => {
    return(
        <div className="w-[100%] bg-gray-400">
           Main COntent2

        </div>
    )
}
export { VendorProfileP1,VendorProfileP2 }