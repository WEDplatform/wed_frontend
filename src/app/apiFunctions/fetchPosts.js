import { axiosInstance } from "../axios/axios";

export const fetchPosts=async(index)=>{
    try {
        let resp=await axiosInstance.get(`/cmn/getPosts?searchIndex=${index}`)
        console.log(resp?.data?.data);
        
        return resp?.data?.data
    } catch (error) {
        console.log(error);
        
    }
}