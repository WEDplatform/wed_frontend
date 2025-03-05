import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:8888/chatpen";

export const socket = io(SERVER_URL, {
    transports: ["websocket"],
    autoConnect: false,  // Prevent auto-connecting before useEffect
    withCredentials: true,
});
