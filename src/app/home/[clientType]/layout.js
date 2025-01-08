import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar";
import { NavBar } from "@/app/Components/commonComponent/NavBar";
import { SideBarMain } from "@/app/Components/commonComponent/desktop/SideBarMain";
export default async function HomePageLayout({ children, params, searchParams }) {
  //console.log(await searchParams);
  //console.log(await searchParams);
  const navParams = await params
  return <>
    
    {children}
    <BottomNavBar />
  </>
}