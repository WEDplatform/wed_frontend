import { axiosInstance } from "../axios/axios";

export const fetchPosts=async(index)=>{
    try {
        let resp=await axiosInstance.get(`/cmn/getPosts?searchIndex=${index}`)
        resp?.data?.data?.pics.map((i,p)=>i.p_type='post')
        return resp?.data?.data
    } catch (error) {
        console.log(error);
        
    }
}
export const fetchReels=async(index)=>{
    try {
        let resp=await axiosInstance.get(`/cmn/getReels?searchIndex=${index}`)
        resp?.data?.data?.reels.map((i,p)=>i.p_type='reel')
        //console.log(resp?.data?.data);
        return resp?.data?.data
    } catch (error) {
        
    }
}