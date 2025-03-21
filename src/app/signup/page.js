import Logo from "@/app/Components/logo"
import SignUp from "../Components/commonComponent/SignUp"
import { Suspense } from "react"
async function page(props) {
  const {usertype,compIndex}=await props.searchParams
  //console.log(compIndex);
  return (
    <div className="w-[100%] flex flex-col items-center">
    <div className="mt-4">
    <Logo/>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
    <SignUp usertype={usertype} compIndex={compIndex || ""}/>
    </Suspense>
    </div>
  )
}
export const metadata={
    title:"Signup",
    description:"Signup"
}
export default page