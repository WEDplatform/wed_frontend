import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar";

export default async function HomePageLayout({ children ,params,searchParams}) {
    console.log(await params);
    //console.log(await searchParams);
    const navParams=await params
    return <>{children}
    <BottomNavBar/>
    </>
  }