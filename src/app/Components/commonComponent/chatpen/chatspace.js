import { useRef,useEffect } from "react"
import { MessageBubble } from "./messageBubble";
const Chatspace=({message})=>{
    const chatRef = useRef(null);
    useEffect(() => {
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, [message]);
    return(
    <div ref={chatRef} className="w-[100%] preferenceList h-[80%] px-5 overflow-auto">
        {
            message.map((item,pos)=>
            <MessageBubble message={item.text} isSender={item.sender=='me'} key={pos}/>
            )
        }
    </div>
    )
}
export {Chatspace}