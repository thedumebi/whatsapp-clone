import React, { createContext, useContext, useState, useEffect } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("http://localhost:5000", {
      query: { id },
      "force new connection": true,
      reconnectionAttempts: "Infinity",
      timeout: 10000,
      transports: ["websocket", "polling", "flashsocket"],
    });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export { useSocket, SocketProvider };
