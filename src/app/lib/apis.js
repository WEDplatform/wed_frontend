let fetchCity=async(cityName)=>{
   
    if(cityName!=""){
        let resp=await fetch(`https://api.api-ninjas.com/v1/city?name=${cityName}&limit=30`,{
            method: 'GET',
            headers: {
                'X-Api-Key': '3Wlk1z/7EUfZob9p9l06Kg==014ARTIKUfZ9q2Jn',
            },
        })
        let data=await resp.json()
        return data
    }     
}
export {fetchCity}