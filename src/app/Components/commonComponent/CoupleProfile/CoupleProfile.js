'use client'
import { useSearchParams } from "next/navigation"
const CoupleProfile=()=>{
    const searchParam=useSearchParams()
    return(
        <>
        {
            searchParam.get('coupleName')
        }
        </>
    )
}
export {CoupleProfile}