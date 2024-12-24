'use server'
import { cookies } from 'next/headers'
export async function create(data) {
  const cookieStore = await cookies()  
  if(cookieStore.has('refreshToken')){
    cookieStore.delete('refreshToken')
  } 
  if(cookieStore.has('accessToken')){
    cookieStore.delete('accessToken')
  }
 cookieStore.set({
    name:"refreshToken",
    value:data?.data?.refreshToken,
    httpOnly:true,
    secure:true,
    sameSite:"none",
    maxAge:60*60
 })
}
export const getCookies = async () => {
  const cookieStore = await cookies()
  const refreshToken = cookieStore.get('refreshToken')?.value
  return refreshToken
}
// export async function deleteCookie() {
  
//    const cookieStore = await cookies()
//    cookieStore.delete('refreshToken')
//    cookieStore.delete('accessToken')
// }

// const generateToken=async(refreshToken)=>{
    
//     try{
//         let resp = await axiosInstance.post("/user/generateToken", {
//             refreshToken: refreshToken
//         })
//        return resp
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// async function checkAuth() {
//     'use server'
//     const cookieStore = await cookies()
//     const refreshToken = cookieStore.get('refreshToken')?.value;
//     const accessToken = cookieStore.get('accessToken')?.value;
//     if(!accessToken){
//         let res=await generateToken(refreshToken)
//         cookieStore.set({
//          name:"accessToken",
//          value:accessResponse?.data?.accessToken,
//          httpOnly:true,
//          secure:true,
//          sameSite:"none",
//          maxAge:60*60
//      })
//         console.log(res);
        
//     }
//     let accessResponse=await generateToken(refreshToken)
    
//     console.log(accessResponse);
    

// }

// export {checkAuth}