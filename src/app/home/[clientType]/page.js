export const metadata = {
  title: "Home",
}
import { SideBarMain } from "@/app/Components/commonComponent/desktop/SideBarMain"
import { NavBar } from "@/app/Components/commonComponent/Navbar/NavBar"
import { StorySection } from "@/app/Components/commonComponent/stories/StorySection"
import { Posts } from "@/app/Components/commonComponent/Posts/Posts"
import { Search } from "@/app/Components/commonComponent/desktop/Search"
import { profileFetch } from "@/app/apiFunctions/profile"
import { VendorProfile } from "@/app/Components/commonComponent/vendorProfile/Vendorprofile"
import { CoupleProfile } from "@/app/Components/commonComponent/CoupleProfile/CoupleProfile"
async function page({ params, searchParams }) {
  const clientParam = await params;
  const searchprm = await searchParams
  console.log(clientParam);
  let rsp = await profileFetch()
  return (
    <>
      <div id="mainPost" className='flex md:flex-row w-[100%]  h-[85vh] md:h-[100vh] overflow-y-auto flex-col'>
        {/* <div className='w-[20%] hidden md:block border-r-2 border-gray-300 h-screen'>
          <NavBar />
          <SideBarMain client={clientParam} tabParams={searchprm} />
        </div> */}
        <div className="md:hidden w-[100vw] ">
          <NavBar user={clientParam.clientType} />
          <div className="w-[100%] block md:hidden">
            <div className="w-[100%]  flex justify-center"><StorySection /></div>
          </div>
        </div>
        {
          searchprm?.tab == "home" || searchprm?.tab == "search" ? <div className="w-[100%] flex">
            <div className='md:w-[68%]  flex flex-col items-center relative md:items-start h-[100%] w-[100vw]'>
              <div className="w-[100%] hidden md:block">
                <div className="w-[100%]  flex justify-center"><StorySection /></div>
              </div>
              <Posts id_={"mainPost"} />
            </div>
            {
              searchprm?.tab == "search" && <div className="w-[32%]"><Search/></div>
            }
          </div> :
            <div className='md:w-[68%]  flex flex-col items-center relative md:items-start h-[100%] w-[100vw]'>
            </div>
        }
        {
          searchprm?.tab == 'profile' && <div className="w-[100%]">
            <VendorProfile />
          </div>
        }
        {/* <div className="hidden md:block w-[32%] h-[100%] border-2">
            <div className="w-[100%] h-[100%] flex items-center justify-center">
            </div>
        </div> */}
       
        {
          searchprm?.tab == 'coupleProfile' && <div className="w-[100%] flex justify-center items-center">
            <CoupleProfile />
          </div>
        }
      </div>
    </>
  )
}
export default page