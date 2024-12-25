export const metadata = {
  title: "Home",
}
import { SideBarMain } from "@/app/Components/commonComponent/desktop/SideBarMain"
import { NavBar } from "@/app/Components/commonComponent/NavBar"
import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar"
import { StorySection } from "@/app/Components/commonComponent/StorySection"
import { Posts } from "@/app/Components/commonComponent/Posts"
function page() {
  return (
    <>
      <div className='flex md:flex-row h-[85vh] md:h-[100vh] overflow-y-auto flex-col'>
        
        <div className='w-[20%] hidden md:block border-r-2 border-gray-300 h-screen'>
          <NavBar />
          <SideBarMain />
        </div>
        <div className="md:hidden w-[100vw] ">
          <NavBar />
          <div className="w-[100%] bg-red-200 block md:hidden">
            <div className="w-[100%]  flex justify-center"><StorySection /></div>
          </div>
        </div>
        <div className='md:w-[55%] flex flex-col items-center relative md:items-start h-[100%] w-[100vw]'>
          <div className="w-[100%] bg-red-200 hidden md:block">
            <div className="w-[100%]  flex justify-center"><StorySection /></div>
          </div>
          <Posts />
        </div>
      </div>
      <BottomNavBar />
    </>
  )
}

export default page