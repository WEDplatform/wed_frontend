import { createClient } from 'pexels';

const client = createClient('XrJqjzjCzNMW0hNCFnWZq0nq7RWsQK8b7YvfviDhG6F3xBHZvysPLEKw');
const query = 'Nature';


const getVideoUrl=async(query,page)=>{
    //const res=await client.videos.search({query,per_page:1,orientation:'portrait',page:page})
    //console.log(res.videos[0]?.video_pictures[0]?.picture);
    return null
}
const getImageUrl=async(query,page)=>{
    const res=await client.photos.search({query,per_page:3,page:page,orientation:'landscape'})
    return res.photos
    console.log(res.photos);
}
export {getVideoUrl,getImageUrl}
