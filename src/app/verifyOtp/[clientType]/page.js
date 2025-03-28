import { Back } from "@/app/Components/commonComponent/Back";
import { Otp } from "@/app/Components/commonComponent/Otp";

export default function page(){
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <div className="w-[25%] h-[50%] ">
            <Back/>
            <Otp/>
        </div>
        </div>
    )
}