import { SideBarMain } from "@/app/Components/commonComponent/desktop/SideBarMain"
import { NavBar } from "@/app/Components/commonComponent/NavBar"

function page() {
  return (
    <div className='flex md:flex-row flex-col'>
      <div className="md:hidden w-[100vw] ">
        <NavBar/>
      </div>
      <div className='w-[20%] hidden md:block border-r-2 border-gray-300 h-screen'>
       <NavBar/>
       <SideBarMain/>
      </div>
      <div className='md:w-[80%] w-[100vw]'>Main content</div>
    </div>
  )
}

export default page