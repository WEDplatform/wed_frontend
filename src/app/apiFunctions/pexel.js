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

const getVideoUrl=async(query,page=1)=>{
    const videoResponse=await fetch(`https://pixabay.com/api/videos/?key=48012297-063120112f8bc477731969d55&q=${query}&per_page=2&page=${page}`)
    videoResponse=await videoResponse.json()
    console.log(videoResponse);
    
}

const getImageUrl=async(query="wedding",page)=>{
    const res=await client.photos.search({query,per_page:12,page:page,orientation:'landscape'})
    let result=create2DArray(res.photos,4)
    console.log(result);
    
    return result
    //console.log(res.photos);
}
export {getVideoUrl,getImageUrl}
