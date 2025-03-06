import { useRef, useEffect, useState } from "react"
import { MessageBubble } from "./messageBubble";
import { io } from "socket.io-client"
import { MdSend } from "react-icons/md";
import { socket } from "./socket";
import { useMutation } from "@tanstack/react-query";
import { getMessages } from "@/app/apiFunctions/getMessages";
const Chatspace = ({uid,messageList,setMessages,s,r}) => {
    //console.log(messageList);
    
    const chatRef = useRef(null);
    const [isSocketCon, setCon] = useState(false);
    const [pid,setPid]=useState('')
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [message]);

    useEffect(() => {
        console.log("🔹 Initial socket connection status:", socket.connected); // ✅ Check before connecting
    
        if (!socket.connected) {
            socket.connect();
            console.log("✅ Attempting to connect socket...");
        }
    
        const handleConnect = () => {
            console.log("✅ Connected with ID:", socket.id);
            socket.emit("join_room", uid);
            setPid(socket.id);
            setCon(true);
        };
    
        const handleDisconnect = () => {
            console.log("❌ Disconnected:", socket.id);
            setPid('');
            setCon(false);
        };
    
        const handleMessageReceive = (payload) => {
            console.log("📩 Received message:", payload);
            setMessages((prevMessages) => [...prevMessages, payload]);
        };
    
        socket.on("connect", handleConnect);
        socket.on("disconnect", handleDisconnect);
        socket.on("recieveMessage", handleMessageReceive);
    
        return () => {
            console.log("🔻 Cleaning up socket connection...");
            socket.off("connect", handleConnect);
            socket.off("disconnect", handleDisconnect);
            socket.off("recieveMessage", handleMessageReceive);
            socket.disconnect(); // ✅ Proper cleanup
        };
    }, [uid]);
    
    
    // const [messages, setMessages] = useState([
    //     { text: "Hey there!", time: "10:01 AM", sender: "user" },
    //     { text: "Hello! How are you?", time: "10:02 AM", sender: "me" },
    //     { text: "I'm good. What about you?", time: "10:03 AM", sender: "user" },
    //   ]);
    const modifyPayload = async (mess) => {
        setMessage(mess)
    }
    const sendMessage = async () => {
        console.log(socket.connected);
       
        let pseudoPayload={text:message,sender:s,receiver:r}
        let packet={
            roomID:uid,
            payload:pseudoPayload
        }
        socket.emit("sendMessage", packet);
        setMessage('')
    }
    const {mutate:getMessagesMutate,data:getMessagesData,isPending:getMessagesPending,isError:getMessagesError,isSuccess:getMessagesSuccess}=useMutation({
        mutationFn:getMessages
    })
    useEffect(()=>{
        getMessagesMutate(uid)
    },[uid])
    
    return (
       <>
        <div ref={chatRef} className="w-[100%] preferenceList h-[80%] px-5 overflow-auto">
            {
                !isSocketCon ? <p>connecting</p> :
                <>
                {
                    getMessagesData?.flatMap((messages, index) => 
                        messages?.messages?.map((message, pos) => 
                            <MessageBubble 
                                message={message.text} 
                                isSender={message.sender === s} 
                                key={`${index}-${pos}`} 
                            />
                        )
                    )
                }{
                    messageList?.map((message, index) => 
                        <MessageBubble 
                            message={message.text} 
                            isSender={message.sender === s} 
                            key={`${index}`} 
                        />
                    )
                }
                </>
               
                

            }
        </div>
        <div className="w-[100%] flex justify-center items-center h-[10%]">
                    <div className="w-[70%] relative flex items-center justify-center border-b-2 border-[#C94C73] ">
                        <input value={message} onChange={(e)=>{modifyPayload(e.target.value)}} autoFocus type="text" placeholder="type here..." className="w-[100%] text-md px-4 py-3 tracking-wider text-md outline-none border-none "/>
                    {
                        message && <MdSend onClick={sendMessage} className=" absolute text-[#C94C73] right-2 top-3 text-[25px]"/>

                    }
                    </div>
                </div>
       </>
    )
}
export { Chatspace }