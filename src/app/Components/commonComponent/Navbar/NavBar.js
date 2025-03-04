import Logo from "@/app/Components/logo"
import SelectPage from "./SelectPage";
import { FiBell } from "react-icons/fi";
import { TbNotification } from "react-icons/tb";
import Link from "next/link";
function NavBar() {
  return (
    <div className="flex justify-between p-2 py-4 items-center md:border-0">
        <nav className="flex md:ml-2 ml-2 justify-around items-center">
        <Logo/>
        <SelectPage/>
        </nav>
        <div className="text-[20px] font-bold flex ">
            <Link href="/chatpen/user?cs=0"><FiBell className="mr-2"/></Link>
            <Link href="/chatpen/user?cs=0"><TbNotification className="mr-4"/></Link>
        </div>
    </div>
  )
}
export { NavBar }