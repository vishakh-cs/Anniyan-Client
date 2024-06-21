import React, { useEffect, useState } from 'react';
import ShowAds from './ShowAds';
import socketIOClient from "socket.io-client";
import ChatList from './ChatList';
import UserLogin from '../UserLogin';

function Navbar() {
  return (
    <div className="bg-gray-800 text-white py-4 px-6">
      <h1 className="text-2xl font-bold text-right">A<span className='text-green-300'>nn</span><span className='text-red-500'>iy</span><span className='text-yellow-100'>an.</span></h1>
    </div>
  );
}

function ChatContainer() {
  const [user, setUser] = useState(localStorage.getItem('Anniyan-username'));
  const [chats, setChats] = useState([]);
  const socketio = socketIOClient("http://localhost:3000");

  useEffect(() => {
    socketio.on("chat", (message) => {
      setChats((prevChats) => [...prevChats, message]);
    });

    socketio.on('message', (msg) => {
      setChats((prevChats) => [...prevChats, msg]);
    });

    return () => {
      socketio.off('chat');
      socketio.off('message');
    };
  }, []);

  const sendMessage = (newMessage) => {
    socketio.emit('chat', newMessage);
  };

  return (
    <div>
      {user ? (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1 bg-gray-100">
            <div className="w-1/4 bg-gray-300 p-4">
              <ShowAds />
            </div>
            <ChatList chat={chats} sendMessage={sendMessage} />
          </div>
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
}

export default ChatContainer;
