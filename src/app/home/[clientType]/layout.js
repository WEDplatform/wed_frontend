import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar";

export default function HomePageLayout({ children }) {
    return <>{children}
    <BottomNavBar/>
    </>
  }