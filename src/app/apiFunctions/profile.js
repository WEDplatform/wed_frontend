import { cookies } from 'next/headers'

export const profie = async () =>{
    const cookieStore = await cookies()  

    try {
        let profileResponse=await fetch(`${process.env.backend_api}/cmd/profile`,{
            method:'GET',
            headers:{
                "wedoraCredentials":cookieStore?.get("refreshToken")?.value
            }
        })
        profileResponse=await profileResponse.json()
        
        return profileResponse
    } catch (error) {
        
    }
}  