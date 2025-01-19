import { cookies } from "next/headers";
import { NextResponse } from 'next/server';
export async function middleware(request) {
  //console.log(request.nextUrl.pathname);
  const cookieStore = await cookies()
  const hasCookie = cookieStore.has('refreshToken')
  const loginUrl = new URL('/authPage/user', process.env.NEXT_PUBLIC_FRNT);
  if(!hasCookie){
    return NextResponse.redirect(loginUrl)
  }
  try {
    let rftResp=await fetch(`${process.env.backend_api}/cmn/checkClientAuth`,{
      cache:"no-cache",
      headers:{
        "wedoraCredentials":cookieStore?.get("refreshToken")?.value
      }
    })
    rftResp=await rftResp.json()
    if(request.nextUrl.pathname=="/"){
      const home = new URL(`/home/${encodeURIComponent(rftResp?.data?.typeClient)}?tab=home`, process.env.NEXT_PUBLIC_FRNT);
    if(!(home.pathname.includes(rftResp?.data?.typeClient))){
      return NextResponse.redirect(home); 
    }
    if (request.nextUrl.pathname !== home.pathname) {
      return NextResponse.redirect(home);
    }
    }
 
    
  } catch (error) {
    cookieStore.delete('refreshToken')
    console.log(error);
    if(error){
      return NextResponse.redirect(loginUrl)
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pages except static files and API r   ou/((?!_next/static|_next/image|favicon.ico|api).*)',\\
   "/","/home/:path","/profile/:path"
  ],
};
