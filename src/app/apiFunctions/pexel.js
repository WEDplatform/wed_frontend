import { createClient } from 'pexels';

const client = createClient('XrJqjzjCzNMW0hNCFnWZq0nq7RWsQK8b7YvfviDhG6F3xBHZvysPLEKw');
const query = 'Nature';


const getVideoUrl=async(query)=>{
    const res=await client.videos.search({query,per_page:1,orientation:'portrait'})
    console.log(res);
}
const getImageUrl=async(query,page)=>{
    const res=await client.photos.search({query,per_page:3,page:page,orientation:'landscape'})
    return res
    console.log(res.photos);
}
export {getVideoUrl,getImageUrl}
