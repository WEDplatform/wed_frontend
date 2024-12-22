import { createClient } from 'pexels';

const client = createClient('XrJqjzjCzNMW0hNCFnWZq0nq7RWsQK8b7YvfviDhG6F3xBHZvysPLEKw');
const query = 'Nature';


const getVideoUrl=async(query)=>{
    const res=await client.videos.search({query,per_page:1,orientation:'portrait'})
    console.log(res);
}
export {getVideoUrl}
