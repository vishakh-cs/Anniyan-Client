import React, { useState } from 'react';

function ChatList({ chat, sendMessage }) {
  const user = localStorage.getItem('Anniyan-username');
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageSend = () => {
    if (inputMessage.trim() === '') return;
    sendMessage({ message: inputMessage, username: user, timestamp: new Date() });
    setInputMessage('');
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSkip = () => {
    setInputMessage('');
  
  };

  const SenderChat = ({ message, username, timestamp }) => (
    <div className="flex justify-end mb-4">
      <div className="bg-blue-500 text-white py-1 px-6 rounded-xl max-w-xs break-words">
        <p className="text-sm font-bold">{username}</p>
        <p className="text-sm">{message}</p>
        <p className="text-xs">{formatTime(timestamp)}</p>
      </div>
    </div>
  );

  const ReceiverChat = ({ message, username, timestamp }) => (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-300 text-black py-1 px-6 rounded-lg max-w-xs break-words">
        <p className="text-sm font-bold">{username}</p>
        <p className="text-sm">{message}</p>
        <p className="text-xs">{formatTime(timestamp)}</p>
      </div>
    </div>
  );

  return (
    <div className="flex-1">
      <div className="max-w-full mx-auto py-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-[550px] overflow-y-auto px-4 py-6">
          {chat.map((msg, index) =>
              msg.username === user ? (
                <SenderChat key={index} {...msg} />
              ) : (
                <ReceiverChat key={index} {...msg} />
              )
            )}
          </div>
          <div className="flex items-center border-t border-gray-200 px-4 py-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 appearance-none rounded-full py-2 px-4 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
            />
            <button
              onClick={handleMessageSend}
              className="ml-2 py-2 px-4 rounded-full bg-blue-900 text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Send
            </button>
            <button
              onClick={handleSkip}
              className="ml-2 py-2 px-4 rounded-full bg-gray-500 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-500"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
