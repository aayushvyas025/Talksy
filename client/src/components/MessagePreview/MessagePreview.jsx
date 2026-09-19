import { previewMessages } from '@/constant/appAssets'
import React from 'react'
import MessageInputPreview from '../MessageInputPreview/MessageInputPreview'

function MessagePreview() {
  return (
    <div className='p-4 space-y-4 max-h-[200px] overflow-y-auto bg-base-100'>
        {previewMessages.map((message) => <div key={message.id} className={`flex ${message.isSent ? "justify-end": "justify-start"}`}>
            <div className={`max-w-[80%] rounded-xl p-3 shadow-sm ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}`}> 
                <p className='text-sm'>{message.content}</p>
                <p className={`text-[10px] mt-1.5 ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}`}>12:00 pm</p>
            </div>
        </div>)}
        <MessageInputPreview />
    </div>
  )
}

export default MessagePreview