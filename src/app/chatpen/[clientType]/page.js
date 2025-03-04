import { SideWindow } from "@/app/Components/commonComponent/chatpen/SideWindow"

async function page(props) {
    const params=await props.params
    return(
        <main className="w-[100%] flex h-[100vh]">
            <SideWindow/>
        </main>
    )
}
export default page