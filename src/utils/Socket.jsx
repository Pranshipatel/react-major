import { io } from "socket.io-client";

// Initialize Socket.IO client with options
const socket = io("http://localhost:5000", {
  withCredentials: true, // If you're dealing with cookies/auth
  autoConnect: false,    // Avoid auto connection until explicitly called
  reconnection: true,    // Enable reconnection
  reconnectionAttempts: 5, // Limit reconnection attempts
  reconnectionDelay: 1000, // Time between reconnection attempts
});

// Explicitly connect the socket (to prevent auto-connect on import)
socket.connect();

export default socket;
