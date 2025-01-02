'use client'
import React from 'react'
import Image from 'next/image'
import ICO from "@/app/favicon.ico"
function VendorDetails() {
    return (
        <>
            <main className="flex items-center cursor-pointer gap-2">
                <Image alt="pic" src={ICO} width={40} height={40} />
                <span className="flex flex-col">
                    <span className="font-semibold">Username</span>
                    <span className="font-normal text-[12px] text-gray-600">Dubai (UAE)</span>
                </span>
            </main>
        </>
    )
}

export default VendorDetails