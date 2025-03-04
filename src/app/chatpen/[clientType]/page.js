import { ChatSection } from "@/app/Components/commonComponent/chatpen/chatsection"
import { SideWindow } from "@/app/Components/commonComponent/chatpen/SideWindow"

async function page(props) {
    const params=await props.params
    return(
        <main className="w-[100%] flex h-[100vh]">
            <SideWindow user={params.clientType}/>
            <ChatSection/>
        </main>
    )
}
export const metadata={
    title:"Chatpen",
    description:"chats"
}
export default page