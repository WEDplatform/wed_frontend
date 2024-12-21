import Logo from "@/app/Components/logo"
import SelectPage from "./SelectPage";
import { FiBell } from "react-icons/fi";
import { TbNotification } from "react-icons/tb";
function NavBar() {
  return (
    <div className=" flex justify-between p-2 items-center border-b-2 border-gray-300 md:border-0">
        <nav className="flex justify-around items-center">
        <Logo/>
        <SelectPage/>
        </nav>
        <div className="text-[20px] font-bold flex md:hidden">
            <FiBell className="mr-2"/>
            <TbNotification className="mr-2"/>
        </div>
    </div>
  )
}

export { NavBar }