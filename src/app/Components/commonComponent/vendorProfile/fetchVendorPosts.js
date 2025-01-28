import { axiosInstance } from "@/app/axios/axios";
export const fetchVendorMediaPosts=async(index,per_page,vendorName)=>{
    try {
        let resp=await axiosInstance.get(`/cmn/getVendorPosts?searchIndex=${index}&per_page=${per_page}&vendorName=${vendorName}`)
        //resp?.data?.data?.pics.map((i,p)=>i.p_type='post')
        console.log(resp?.data?.data);
        
        return resp?.data?.data
    } catch (error) {
        console.log(error);
        
    }
}
export const fetchVendorMediaReels=async(index,per_page,vendorName)=>{
    try {
        let resp=await axiosInstance.get(`/cmn/getVendorReels?searchIndex=${index}&per_page=${per_page}&vendorName=${vendorName}`)
        //resp?.data?.data?.reels.map((i,p)=>i.p_type='reel')
        console.log(resp?.data?.data);
        return resp?.data?.data
    } catch (error) {
        
    }
}