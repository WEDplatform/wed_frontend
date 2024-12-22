export const metadata = {
  title: "Home",
}
import { SideBarMain } from "@/app/Components/commonComponent/desktop/SideBarMain"
import { NavBar } from "@/app/Components/commonComponent/NavBar"
import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar"
import { StorySection } from "@/app/Components/commonComponent/StorySection"

function page() {
  return (
    <div className='flex md:flex-row h-[100vh] flex-col'>
      <div className="md:hidden w-[100vw] ">
        <NavBar/>
      </div>
      <div className='w-[20%] hidden md:block border-r-2 border-gray-300 h-screen'>
       <NavBar/>
       <SideBarMain/>
      </div>
      <div className='md:w-[80%] flex flex-col items-center relative bg-red-200 md:items-start h-[100%] w-[100vw]'>
        <StorySection/>
        <BottomNavBar/>
      </div>
    </div>
  )
}

export default page