"use server"
import checkAuth from "./checkAuth"
import Link from "next/link"
import { LoadingPage } from "../Components/commonComponent/loadingPage"
async function page({searchParams}) {
 // console.log(await searchParams);

  return (
    <div>
      Home page
    </div>
  )
}

export default page