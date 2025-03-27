import { getCookies } from "@/app/action";
import { axiosInstance } from "@/app/axios/axios";
const fetchProfileData=async({vendorName,type})=>{
    try {
        const data= await axiosInstance.get(`/cmn/getVendorProfile?vendorName=${vendorName}&type=${type}`,{
            headers:{
                'wedoraCredentials':await getCookies()
            }
        })
        console.log(data?.data?.data);
        return data?.data?.data
    } catch (error) {
        console.log(error);
    }
}
export {fetchProfileData}