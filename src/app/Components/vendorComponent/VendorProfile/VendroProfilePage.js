import { FaStar } from "react-icons/fa6";

const VendorProfileP1 = () => {
    const vendorStat = [{
        type: "Following",
        data: "98"
    }, {
        type: "Impressions",
        data: "60"
    }]
    return (
        <div className="w-[100%] flex flex-col justify-evenly items-center">
            <div className="h-[20%] w-[80%] flex ">
                {
                    vendorStat.map((item, pos) => {
                        return <span key={pos} className="w-[33%] border-r-2 justify-center items-center flex flex-col">
                            <span>{item.data}</span>
                            <span className="text-[20px]">{item.type}</span>
                        </span>
                    })
                }
                <span className="w-[33%] border-r-2 justify-center items-center flex flex-col">
                    <span>4.8</span>
                    <span className="text-[20px]"><FaStar/></span>
                </span>
            </div>
            <button className="w-[80%] py-2 bg-[#9A2143] rounded-lg font-medium text-white">Edit profile</button>
            <div className="h-[70%] w-[80%]">
                Calender
            </div>
        </div>
    )
}
const VendorProfileP2 = () => {
    return (
        <div className="w-[100%] bg-gray-400">
            Main COntent2

        </div>
    )
}
export { VendorProfileP1, VendorProfileP2 }