import React from 'react'
import { useAuthStore, useChatStore } from '../../store'
import imagePlaceHolder from "/avatar.png"
import Button from '../Pages Helper Component/Button';
import { X } from 'lucide-react';

function ChatHeader() {
const {selectedUser, setSelectedUser} = useChatStore(); 
const {onlineUsers} = useAuthStore()

  return (
    <div className='p-2.5 border-b border-base-300'>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="size-10 rounded-full relative">
                        <img src={selectedUser?.profilePic || imagePlaceHolder} alt={selectedUser.fullName} />
                    </div>
                </div>
                   <div>
                <h3 className="font-medium">
                    {selectedUser.fullName}
                </h3>
                <p className='text-sm text-base-content/70'>
                 {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
                </p>
            </div>
            </div>
         
            <Button onClickHandler={() => setSelectedUser(null)}> 
                <X/>
            </Button>
        </div>
    </div>
  )
}

export default ChatHeader 

