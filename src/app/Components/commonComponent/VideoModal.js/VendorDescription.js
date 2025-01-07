import Image from "next/image"
import ICO from "@/app/favicon.ico"
function VendorDescription() {
  return (
    <div>
        <main>
        <div>
            <h1 className="flex">
                <Image alt="vendorPostpic" src={ICO} width={40} height={40} className="rounded-full" />
                <span>VendorSEve</span>
            </h1>
            <p className="flex flex-col">
                <span>Varanasi</span>
                <span>IIT BHU near Hyderabd gate</span>
            </p>
        </div>
        <span></span>
        </main>
    </div>
  )
}

export { VendorDescription }