import { ChatSection } from "@/app/Components/commonComponent/chat-pen/chatsection"
import { SideWindow } from "@/app/Components/commonComponent/chat-pen/SideWindow"
async function page(props,searchParam) {
    const src=await searchParam
    const params=await props.params
    return(
        <main className="w-[100%] flex h-[100vh]">
            <SideWindow user={params.clientType}/>
            <ChatSection user={params.clientType}/>
        </main>
    )
}
export const metadata={
    title:"Chatpen",
    description:"chats"
}
export default page