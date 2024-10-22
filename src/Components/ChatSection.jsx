import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatSection = ({ chats, onSelectChat }) => {
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartChat = () => {
    // Navigate to the Home component
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 flex items-center justify-center p-6">
      <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img
              src={profilePic || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-teal-500 shadow-lg"
            />
            <label htmlFor="profile-pic-upload" className="absolute bottom-2 right-2 bg-teal-500 rounded-full p-2 cursor-pointer hover:bg-teal-400 transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </label>
            <input
              id="profile-pic-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicUpload}
            />
          </div>
        </div>
        <button
          onClick={handleStartChat}
          className="w-full bg-teal-500 text-gray-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-teal-400 transition duration-300 ease-in-out shadow-md"
        >
          Start New Chat
        </button>
        {chats && chats.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-teal-100 mb-4">Recent Chats</h2>
            <div className="space-y-3">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onSelectChat(chat)}
                  className="w-full text-left p-4 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-colors text-teal-100 flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-gray-900 font-bold text-xl">
                    {chat.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{chat.name}</div>
                    <div className="text-sm text-teal-300">
                      {chat.type}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSection;
