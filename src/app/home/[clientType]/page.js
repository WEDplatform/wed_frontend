export const metadata = {
  title: "Home",
}
import { SideBarMain } from "@/app/Components/commonComponent/desktop/SideBarMain"
import { NavBar } from "@/app/Components/commonComponent/NavBar"
import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar"
import { StorySection } from "@/app/Components/commonComponent/StorySection"
import { Posts } from "@/app/Components/commonComponent/Posts"
async function page({params,searchParams}) {
  const clientParam=await params;
  const searchprm=await searchParams
  // console.log(await params);
  
  
  return (
    <>
      <div id="mainPost" className='flex md:flex-row h-[85vh] md:h-[100vh] overflow-y-auto flex-col'>
        <div className='w-[20%] hidden md:block border-r-2 border-gray-300 h-screen'>
          <NavBar />
          <SideBarMain tabParams={searchprm} />
        </div>
        <div className="md:hidden w-[100vw] ">
          <NavBar />
          <div className="w-[100%] block md:hidden">
            <div className="w-[100%]  flex justify-center"><StorySection /></div>
          </div>
        </div>
        <div className='md:w-[55%] flex flex-col items-center relative md:items-start h-[100%] w-[100vw]'>
          <div className="w-[100%] hidden md:block">
            <div className="w-[100%]  flex justify-center"><StorySection /></div>
          </div>
          <Posts id_={"mainPost"}/>
        </div>
        <div className="hidden md:block w-[25%] h-[100%] border-2">
            <div className="w-[100%] h-[100%]">
            {
              searchprm.tab
            }
            </div>
        </div>
      </div>
      <BottomNavBar tabParams={searchprm} />
    </>
  )
}
export default page