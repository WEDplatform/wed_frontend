"use server"
import checkAuth from "./checkAuth"
async function page({searchParams}) {
  return (
    <div>
      Home page
    </div>
  )
}
export default page