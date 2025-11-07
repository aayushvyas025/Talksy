import React from 'react'

function UserMessageComponent({message}) {
  return (
    <>
    <div className='chat-header mb-1'>
        <time className='text-xs opacity-50 ml-1'>
            {message.createdAt}
        </time>
    </div>
    <div className="chat-bubble flex">
        
    </div>
    </>
  )
}

export default UserMessageComponent