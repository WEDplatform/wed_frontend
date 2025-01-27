import { axiosInstance } from "../axios/axios";

export const fetchPosts=async()=>{
    try {
        let resp=await axiosInstance.get('/cmn/getPosts?searchIndex=0')
        
        return resp
    } catch (error) {
        console.log(error);
        
    }
}