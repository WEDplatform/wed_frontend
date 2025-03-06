import { axiosInstance } from "@/app/axios/axios";
import { getCookies } from "@/app/action";
const message=async(vendorData)=>{
    const refreshToken= getCookies()
    try {
        const response=axiosInstance.post(`/user/handleUserMessage`,vendorData,{headers:{'wedoraCredentials':refreshToken}})
        console.log(response.data);
        
        return response?.data
    } catch (error) {
        console.log(error);
        
    }
}
export {message}