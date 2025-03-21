"use server"
import checkAuth from "./checkAuth"
import Link from "next/link"
async function page({searchParams}) {
  return (
    <div>
      Home page
    </div>
  )
}
export default page