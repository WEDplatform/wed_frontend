import { getCookies } from "@/app/action";
import { axiosInstance } from "@/app/axios/axios";
const followVendor=async(data)=>{
    try {
        const refreshToken=await getCookies()
        let response;
        if(refreshToken){
             response=await axiosInstance.post('/user/followVendor',data,{
                headers: {
                    "wedoraCredentials":refreshToken
                }
            })
        }
        console.log(response?.data?.data);
        return response
    } catch (error) {
        console.log(error);
    }
}
export {followVendor}