import { axiosInstance } from "@/app/axios/axios";
const fetchProfileData=async(vendorName)=>{
    try {
        const data= await axiosInstance.get(`/cmn/getVendorProfile?vendorName=${vendorName}`)
        console.log(data?.data?.data);
        return data?.data?.data
    } catch (error) {
        console.log(error);
    }
}
export {fetchProfileData}