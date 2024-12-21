import { create } from "@/app/action";
import { axiosInstance } from "@/app/axios/axios";
import { tryCatchWrapper } from "@/app/lib/functionResolver";
import { redirect } from "next/dist/server/api-utils";
const signup=async({cred})=>{
    try {
        let response = await axiosInstance.post('/user/signup', cred, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    
        // await create(response?.data)
        // if(response?.status==201){
        //     router.push("/home?clientType=user")
        // }
        console.log(response);
        
        
        return response
    } catch (error) {
        console.log(error);
        throw error
        
    }
}
const updatePreference=async({cred,router})=>{
    try {
        let resp=await axiosInstance.post('/user/updatePreferences',cred,{
            headers: {
                "wedoraCredentials":""
            }
        })
        return resp
    } catch (error) {
        
    }
}
export {signup,updatePreference}