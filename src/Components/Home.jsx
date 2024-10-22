import React, { useState, useRef, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import socket from '../utils/Socket';

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleRecieve = useCallback((message)=>{
    setMessages((prevMessages)=>[...prevMessages,{...message,sender:'Other'}]);
  },[])

  useEffect(()=>{
    socket.on('receive',handleRecieve);

    return ()=>{
      socket.off('receive',handleRecieve)
    }
  },[handleRecieve])
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
    const newMessages = ( { text: inputMessage, sender: 'You', timestamp: new Date() });
    setMessages((prevMessages) => [...prevMessages, newMessages]);
    socket.emit('send-message',newMessages)
    
      setInputMessage('');
      // TODO: Send message via socket
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 flex items-center justify-center p-6">
      <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl shadow-xl p-6 w-full max-w-4xl flex flex-col" style={{height: 'calc(100vh - 4rem)'}}>
        <h1 className="text-3xl font-bold text-teal-100 mb-6">Chat🫡</h1>
        <div className="flex-grow overflow-y-auto mb-4 pr-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'You' 
                  ? 'bg-teal-600 bg-opacity-70 text-white' 
                  : 'bg-gray-800 bg-opacity-50 text-teal-100'
              }`}>
                <p className="break-words">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {format(message.timestamp, 'HH:mm')}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="mt-4">
          <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-full p-1">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow px-4 py-2 bg-transparent text-teal-100 placeholder-teal-300 placeholder-opacity-70 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 px-6 py-2 bg-teal-500 text-gray-900 rounded-full hover:bg-teal-400 focus:outline-none transition duration-150 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
