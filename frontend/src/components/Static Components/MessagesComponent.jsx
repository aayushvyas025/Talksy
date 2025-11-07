import React from 'react'
import { useAuthStore, useChatStore } from '../../store';
import ProfilePictureComponent from './ProfilePictureComponent';
import UserMessageComponent from './UserMessageComponent';

function MessagesComponent({message}) {
    const {receiverId, senderId, text, image} = message; 
   const {authUser} = useAuthStore();
  const {selectedUser} = useChatStore()
   console.log(message)

  return (
    <div className={`chat ${senderId === authUser._id ? "chat-end" : "chat-start"}`}>
        {
         image &&
        <ProfilePictureComponent message={message} authUser={authUser} selectedUser={selectedUser} />
        }
        <UserMessageComponent message={message} />
    </div>
  )
}

export default MessagesComponent;