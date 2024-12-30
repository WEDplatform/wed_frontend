import { cookies } from 'next/headers'

export const profie = async () =>{
    const cookieStore = await cookies()  
    
    try {
        await fetch(`${process.env.backend_api}/cmd/profile`,{})
    } catch (error) {
        
    }
}