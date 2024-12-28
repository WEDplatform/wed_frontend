import { createClient } from 'pexels';

const client = createClient('XrJqjzjCzNMW0hNCFnWZq0nq7RWsQK8b7YvfviDhG6F3xBHZvysPLEKw');
const query = 'Nature';
const create2DArray = (arr, n) => {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
};

const getVideoUrl=async(query,page)=>{
    //const res=await client.videos.search({query,per_page:1,orientation:'portrait',page:page})
    //console.log(res.videos[0]?.video_pictures[0]?.picture);
    return null
}
const getImageUrl=async(query,page)=>{
    const res=await client.photos.search({query,per_page:1,page:1,orientation:'landscape'})
    let result=create2DArray(res.photos,1)
    console.log(result);
    
    return result
    //console.log(res.photos);
}
export {getVideoUrl,getImageUrl}
