'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Vendorsignup from "@/app/Components/vendorComponent/signup"
import Usersignup from "@/app/Components/userComponent/signup"
import { vendorDetails as vnd } from '@/app/lib/vendorDetails'
function SignUp({usertype,compIndex}) {
  const searchParams = useSearchParams()
  const [vendorDetails,setvendorDetails]=useState(vnd)
  return (
    <>
    {
        usertype=="user"?<Usersignup queryParams={searchParams.toString()} index={compIndex}/>:<Vendorsignup vendorDetails={vendorDetails} setvendorDetails={setvendorDetails}/>
    }
    </>
  )
}
export default SignUp