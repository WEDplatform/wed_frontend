import profilePic from "../../../../../public/profile.svg"
import { MdCameraswitch } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import Image from "next/image"
import { LoginStat } from "@/app/Components/commonComponent/loginStats/LoginStat";
import { profileFetch } from "@/apiFunctions/profile";
import { BottomNavBar } from "@/app/Components/commonComponent/phone/BottomNavBar";
import { UserFollowStat } from "@/apiFunctions/user/UserFollowings";
import { UserProfile } from "@/app/Components/userComponent/profile/UserProfilePage";
async function page({ params }) {
    //console.log(prf.data); 
    let { clientType } = await params;
    const clientRole = clientType[0];
    console.log(clientRole);
    
    return (
        <>
        {
            clientRole == "user" ? <UserProfile/> : <>Vendor</>
        }
        </>
    )
}
export default page